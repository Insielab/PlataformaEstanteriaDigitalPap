const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Estantería Digital de Papalotla',
  tagline: 'Dinosaurs are cool',
  url: 'https://estanteria.impossiblebox.me',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Estantería Digital de Papalotla',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentos',
          },
          {to: '/blog', label: 'Actualizaciones', position: 'left'},
          {
            href: 'https://github.com/ImpossibleBoxMX/EstanteriaDigitalDePapalotla',
            label: 'Repositorio de GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Administración de la Estantería Digital',
            items: [
              {
                label: 'Mesa de Administración',
                to: '/blog/estatutos-uno',
              },

              {
                label: 'Consejo de Contenido',
                to: '/blog/consejo',
              },

              {
                label: 'Estatutos de finaciación',
                to: '/blog/estatutos',
              },

              {
                label: ' ',
                to: ' ',
              },


            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/EstanteriaDigital',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Sobre la la Estantería',
            items: [
              {
                label: 'Preguntas frecuentes',
                to: '/blog/estatutos-uno',
              },
              {
                label: 'Aviso de privacidad',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Estantería Digital de Papalotla/Impossible Box de México.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
