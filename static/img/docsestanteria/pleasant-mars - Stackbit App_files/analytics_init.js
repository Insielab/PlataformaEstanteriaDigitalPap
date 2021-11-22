(function () {
    const queue = (window.AnalyticsInit && window.AnalyticsInit.queue) || [];
    const originalUrl = (window.AnalyticsInit && window.AnalyticsInit.originalUrl) || '';
    const originalSearch = (originalUrl || '').split('?')[1] || null;

    // Imported from: https://github.com/uuidjs/uuid
    const uuidv4 = (() => {
        const rng = (() => {
            let getRandomValues;

            const rnds8 = new Uint8Array(16);

            return function () {
                // lazy load so that environments that need to polyfill have a chance to do so
                if (!getRandomValues) {
                    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
                    // find the complete implementation of crypto (msCrypto) on IE11.
                    getRandomValues =
                        (typeof crypto !== 'undefined' &&
                         crypto.getRandomValues &&
                         crypto.getRandomValues.bind(crypto)) ||
                        (typeof msCrypto !== 'undefined' &&
                         typeof msCrypto.getRandomValues === 'function' &&
                         msCrypto.getRandomValues.bind(msCrypto));
                    if (!getRandomValues) {
                        throw new Error(
                            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
                        );
                    }
                }

                return getRandomValues(rnds8);
            };
        })();

        const stringify = (() => {
            const byteToHex = [];

            for (let i = 0; i < 256; ++i) {
                byteToHex.push((i + 0x100).toString(16).substr(1));
            }

            return function (arr, offset = 0) {
                // Note: Be careful editing this code!  It's been tuned for performance
                // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
                const uuid = (
                    byteToHex[arr[offset + 0]] +
                        byteToHex[arr[offset + 1]] +
                        byteToHex[arr[offset + 2]] +
                        byteToHex[arr[offset + 3]] +
                        '-' +
                        byteToHex[arr[offset + 4]] +
                        byteToHex[arr[offset + 5]] +
                        '-' +
                        byteToHex[arr[offset + 6]] +
                        byteToHex[arr[offset + 7]] +
                        '-' +
                        byteToHex[arr[offset + 8]] +
                        byteToHex[arr[offset + 9]] +
                        '-' +
                        byteToHex[arr[offset + 10]] +
                        byteToHex[arr[offset + 11]] +
                        byteToHex[arr[offset + 12]] +
                        byteToHex[arr[offset + 13]] +
                        byteToHex[arr[offset + 14]] +
                        byteToHex[arr[offset + 15]]
                ).toLowerCase();

                // Consistency check for valid UUID.  If this throws, it's likely due to one
                // of the following:
                // - One or more input array values don't map to a hex octet (leading to
                // "undefined" in the uuid)
                // - Invalid input values for the RFC `version` or `variant` fields
                if (typeof uuid !== 'string' || !/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(uuid)) {
                    throw TypeError('Stringified UUID is invalid');
                }

                return uuid;
            };
        })();

        return function (options, buf, offset) {
            options = options || {};

            const rnds = options.random || (options.rng || rng)();

            // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
            rnds[6] = (rnds[6] & 0x0f) | 0x40;
            rnds[8] = (rnds[8] & 0x3f) | 0x80;

            // Copy bytes to buffer, if provided
            if (buf) {
                offset = offset || 0;

                for (let i = 0; i < 16; ++i) {
                    buf[offset + i] = rnds[i];
                }

                return buf;
            }

            return stringify(rnds);
        };
    })();

    window.AnalyticsInit = {
        ready(f) { // public
            f();
        },

        init() { // public
            return Promise.all([
                this.setTemporaryReferrer(),
                this.setSessionReferrer()
            ]);
        },

        async setTemporaryReferrer() {
            if (!this.getCookie('_sba_temp_ref')) {
                const temporaryReferrer = document.referrer || 'unknown';
                const temporaryReferrerLanding = document.location.href;
                const temporaryTrafficSource = this.calculateTrafficSource();

                this.setCookie('_sba_temp_ref', encodeURIComponent(temporaryReferrer), true);
                this.setCookie('_sba_temp_refl', encodeURIComponent(temporaryReferrerLanding), true);
                this.setCookie('_sba_temp_ts', encodeURIComponent(temporaryTrafficSource), true);

                if (window.analytics && window.analytics.user) { // adblocker defensive coding
                    const analyticsUser = window.analytics.user();
                    if (!analyticsUser.traits().temporary_referrer) {
                        return new Promise(resolve => {
                            window.analytics.identify({
                                temporary_referrer: temporaryReferrer,
                                temporary_referrer_landing: temporaryReferrerLanding,
                                temporary_traffic_source: temporaryTrafficSource
                            }, null, null, resolve);
                        });
                    }
                }
            }
        },

        extendSession() { // public
            if (this.getCookie('_sba_sess') === 'open') {
                // Just extending an existing session, not opening a new one
                this.setCookie('_sba_sess', 'open', false);
            }
        },

        async setSessionReferrer() {
            // Read last session expiry, and set new session expiry.
            const previousSessionExpiry = this.getCookie('_sba_sess');
            const sessionDataExists = this.getCookie('_sba_sess_ref');
            this.setCookie('_sba_sess', 'open', false);

            // Check if there isn't an open session.
            if (previousSessionExpiry !== 'open' || !sessionDataExists) {
                // Set session referrer properties.
                this.setCookie('_sba_sess_ref', encodeURIComponent(document.referrer || 'unknown'), true);
                this.setCookie('_sba_sess_refl', encodeURIComponent(document.location.href), true);
                this.setCookie('_sba_sess_ts', encodeURIComponent(this.calculateTrafficSource()), true);
                this.setCookie('_sba_sess_id', encodeURIComponent(uuidv4()), true);
            }

            // Set session referrer traits in Segment.
            // We do this on every pageview on purpose.
            const sessionReferrer = this.getCookie('_sba_sess_ref');
            const sessionReferrerLanding = this.getCookie('_sba_sess_refl');
            const sessionTrafficSource = this.getCookie('_sba_sess_ts');
            const sessionId = this.getCookie('_sba_sess_id');
            if (!sessionReferrer || !sessionReferrerLanding || !sessionTrafficSource) {
                // Most likely means a browser without cookies enabled.
                return;
            }
            if (window.analytics && window.analytics.identify) { // adblocker defensive coding
                return new Promise(resolve => {
                    window.analytics.identify({
                        session_referrer: decodeURIComponent(sessionReferrer),
                        session_referrer_landing: decodeURIComponent(sessionReferrerLanding),
                        session_traffic_source: decodeURIComponent(sessionTrafficSource),
                        session_id: sessionId ? decodeURIComponent(sessionId) : null
                    }, null, null, resolve);
                });
            }
        },

        /*
          Inspiration:
          - https://support.google.com/analytics/answer/6205762?hl=en
          - https://support.google.com/analytics/answer/2795821?hl=en
          - https://experienceleague.adobe.com/docs/analytics/components/dimensions/referrer-type.html
          - view-source:https://www.google.com/supported_domains
        */
        calculateTrafficSource() {
            try {
                const utmSource = this.parseUrlParam('utm_source');
                const utmCampaign = this.parseUrlParam('utm_campaign');
                if (utmSource) {
                    if (utmCampaign) {
                        return `Campaign: ${utmCampaign}, Source: ${utmSource}`;
                    } else {
                        return `Source: ${utmSource}`;
                    }
                }

                const gclid = this.parseUrlParam('gclid');
                const gclsrc = this.parseUrlParam('gclsrc');
                if (gclid || gclsrc) {
                    return 'Google AdWords (unknown campaign)';
                }

                const referrer = document.referrer;
                if (referrer) {
                    const referrerHost = /^https?\:\/\/(?:www\.)?([^\/]+)/i.exec(document.referrer)[1];

                    if (/^google\.[a-z]{2,3}(?:\.[a-z]{2})?$/i.test(referrerHost)) {
                        return 'Referral: Google';
                    }

                    // Only include sites with multiple domains
                    const groupSites = {
                        'Facebook': 'facebook.com',
                        'Facebook': 'm.facebook.com',
                        'LinkedIn': 'linkedin.com',
                        'LinkedIn': 'lnkd.in',
                        'Reddit': 'old.reddit.com',
                        'Reddit': 'reddit.com',
                        'Twitter': 't.co',
                        'Twitter': 'twitter.com',
                        'Yandex': 'yandex.com',
                        'Yandex': 'yandex.ru'
                    };
                    for (const site in groupSites) {
                        if (groupSites.hasOwnProperty(site)) {
                            if (groupSites[site] === referrerHost) {
                                return `Referral: ${site}`;
                            }
                        }
                    }

                    return `Referral: ${referrerHost}`;
                }

                return 'Unknown';
            } catch (e) {
                return 'Error';
            }
        },

        parseUrlParam(name) {
            const match = new RegExp(`(?:^|[?&])${name}=((?:(?!$|&).)+)`, 'i').exec(originalSearch || location.search);
            if (match) {
                return match[1];
            }
        },

        getCookie(name) {
            const match = new RegExp(`(?:^|;)\\s*${name}\\s*=\\s*([^;]+)`).exec(document.cookie);
            if (match) {
                return match[1];
            }
        },

        setCookie(name, value, persist) {
            const cookieLifeTime = persist
                ? 1000 * 60 * 60 * 24 * 7 // One week in the future.
                : 1000 * 60 * 30; // Thirty minutes in the future.
            const expires = new Date(new Date().valueOf() + cookieLifeTime).toUTCString();
            document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.stackbit.com`;
        }
    };

    queue.forEach(f => f());
})();
