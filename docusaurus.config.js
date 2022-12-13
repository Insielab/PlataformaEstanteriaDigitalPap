const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Estantería Digital de Papalotla',
  tagline: 'Repositorio histórico y cultural',
  url: 'https://estanteria.impossiblebox.me',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'ImpossibleBoxMX', // Usually your GitHub org/user name.
  projectName: 'estanteriadigital', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl: 'https://github.com/ImpossibleBoxMX/estanteriadigital/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ImpossibleBoxMX/estanteriadigital/edit/main/website/blog/',
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
            href: 'https://gitlab.com/ImpossibleBoxMX/estanteria-digital-de-papalotla-pd2',
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
                to: '/blog/mesa-de-administracion',
              },

              {
                label: 'Consejo de Contenido',
                to: '/blog/consejo-de-contenido',
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
                label: 'Código de conducta',
                href: '/blog/codigo-de-conducta',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/EstanteriaDigital',
              },
            ],
          },
          {
            title: 'Sobre la la Estantería',
            items: [
              {
                label: 'Preguntas frecuentes',
                to: '/blog/preguntas',
              },
              {
                label: 'Aviso de privacidad',
                href: '/blog/aviso-de-privacidad',
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
