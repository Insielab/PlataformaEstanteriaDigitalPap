import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '471'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e6c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'dfb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '6a0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'aad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7f0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd93'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '407'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '16f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1b6'),
    exact: true
  },
  {
    path: '/blog/aviso-de-privacidad',
    component: ComponentCreator('/blog/aviso-de-privacidad', '9b5'),
    exact: true
  },
  {
    path: '/blog/codigo-de-conducta',
    component: ComponentCreator('/blog/codigo-de-conducta', 'd42'),
    exact: true
  },
  {
    path: '/blog/consejo-de-contenido',
    component: ComponentCreator('/blog/consejo-de-contenido', '62b'),
    exact: true
  },
  {
    path: '/blog/declaracion-estanteria',
    component: ComponentCreator('/blog/declaracion-estanteria', '68f'),
    exact: true
  },
  {
    path: '/blog/documentación',
    component: ComponentCreator('/blog/documentación', 'b82'),
    exact: true
  },
  {
    path: '/blog/estatutos',
    component: ComponentCreator('/blog/estatutos', 'ee1'),
    exact: true
  },
  {
    path: '/blog/mesa-de-administracion',
    component: ComponentCreator('/blog/mesa-de-administracion', 'd66'),
    exact: true
  },
  {
    path: '/blog/preguntas',
    component: ComponentCreator('/blog/preguntas', '924'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f9e'),
    exact: true
  },
  {
    path: '/blog/tags/actualizacion',
    component: ComponentCreator('/blog/tags/actualizacion', '7db'),
    exact: true
  },
  {
    path: '/blog/tags/declaracion',
    component: ComponentCreator('/blog/tags/declaracion', '65c'),
    exact: true
  },
  {
    path: '/blog/tags/declaracion-de-funcionamiento',
    component: ComponentCreator('/blog/tags/declaracion-de-funcionamiento', '9b2'),
    exact: true
  },
  {
    path: '/blog/tags/documentacion',
    component: ComponentCreator('/blog/tags/documentacion', 'e9c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '098'),
    exact: true
  },
  {
    path: '/blog/tags/estatutos',
    component: ComponentCreator('/blog/tags/estatutos', '0f1'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'c29'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b9c'),
    exact: true
  },
  {
    path: '/blog/tags/interno',
    component: ComponentCreator('/blog/tags/interno', '556'),
    exact: true
  },
  {
    path: '/blog/tags/messa-de-administracion',
    component: ComponentCreator('/blog/tags/messa-de-administracion', '072'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '440'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '453'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/archivos-musicales.mdx/carnaval-papalotla',
        component: ComponentCreator('/archivos-musicales.mdx/carnaval-papalotla', '296'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/acta-cabildo',
        component: ComponentCreator('/documentos-publicos/acta-cabildo', 'f04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/asignación-programas',
        component: ComponentCreator('/documentos-publicos/asignación-programas', '050'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/fortamun',
        component: ComponentCreator('/documentos-publicos/fortamun', '722'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/presupuesto-egresos-17',
        component: ComponentCreator('/documentos-publicos/presupuesto-egresos-17', '6d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/servidores-publicos17',
        component: ComponentCreator('/documentos-publicos/servidores-publicos17', 'e9c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/agua-puebla',
        component: ComponentCreator('/historias-constumbres.mdx/agua-puebla', '44b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/arqueologia-malinche',
        component: ComponentCreator('/historias-constumbres.mdx/arqueologia-malinche', '185'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/impacto-volkswagen',
        component: ComponentCreator('/historias-constumbres.mdx/impacto-volkswagen', 'cb7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/judios-papalotla',
        component: ComponentCreator('/historias-constumbres.mdx/judios-papalotla', 'd97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/la-muneca-letra',
        component: ComponentCreator('/historias-constumbres.mdx/la-muneca-letra', '1b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/organizacion-carnaval/afanes-carnaval',
        component: ComponentCreator('/historias-constumbres.mdx/organizacion-carnaval/afanes-carnaval', 'b69'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/organizacion-carnaval/digitalizado-afanes-jeraquias',
        component: ComponentCreator('/historias-constumbres.mdx/organizacion-carnaval/digitalizado-afanes-jeraquias', '672'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historias-constumbres.mdx/senor_del_monte',
        component: ComponentCreator('/historias-constumbres.mdx/senor_del_monte', 'e4e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/leyes-estatales-municipales/regalamento-transito',
        component: ComponentCreator('/leyes-estatales-municipales/regalamento-transito', '7b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/leyes-estatales-municipales/reglamento-aguas',
        component: ComponentCreator('/leyes-estatales-municipales/reglamento-aguas', 'e57'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/leyes-estatales-municipales/reglamento-panteones',
        component: ComponentCreator('/leyes-estatales-municipales/reglamento-panteones', '5e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/leyes-estatales-municipales/reglamento-proteccion-perros',
        component: ComponentCreator('/leyes-estatales-municipales/reglamento-proteccion-perros', '79f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/planes-de-desarrollo/desarrollo-artesanias',
        component: ComponentCreator('/planes-de-desarrollo/desarrollo-artesanias', '616'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/planes-de-desarrollo/plan-desarrollo-2017-2021',
        component: ComponentCreator('/planes-de-desarrollo/plan-desarrollo-2017-2021', 'c9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/planes-de-desarrollo/plan-desarrollo-2021-2024',
        component: ComponentCreator('/planes-de-desarrollo/plan-desarrollo-2021-2024', '69a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/polemicas-resoluciones/elecciones-san-buenaventura',
        component: ComponentCreator('/polemicas-resoluciones/elecciones-san-buenaventura', 'bbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/polemicas-resoluciones/fallecimiento-influenza',
        component: ComponentCreator('/polemicas-resoluciones/fallecimiento-influenza', '1b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/polemicas-resoluciones/papalotla-xicohtzinco-lavaderos',
        component: ComponentCreator('/polemicas-resoluciones/papalotla-xicohtzinco-lavaderos', '0b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/polemicas-resoluciones/relacion-papalotla-panzacola',
        component: ComponentCreator('/polemicas-resoluciones/relacion-papalotla-panzacola', 'ccd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/proteccion-civil/atlas-riesgos',
        component: ComponentCreator('/proteccion-civil/atlas-riesgos', 'bbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/caracteristicas-economicas',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/caracteristicas-economicas', '75a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/caracteristicas-viviendas',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/caracteristicas-viviendas', '5a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/educacion',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/educacion', '926'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/fecundidad-migracion',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/fecundidad-migracion', '0c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/lenguas-indigenass',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/lenguas-indigenass', '784'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/poblacion',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/poblacion', '8ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/poblacion-capacidad-diferentes',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/poblacion-capacidad-diferentes', '5d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/religion-situacion-conyugal',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/religion-situacion-conyugal', 'e33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/resumen',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/resumen', 'eea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-estadisticos/censo-poblacion/servicion-de-salud',
        component: ComponentCreator('/recursos-estadisticos/censo-poblacion/servicion-de-salud', '9fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-graficos/altura',
        component: ComponentCreator('/recursos-graficos/altura', '62e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-graficos/escudo-e-identidades',
        component: ComponentCreator('/recursos-graficos/escudo-e-identidades', '913'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-graficos/mancha-urbana',
        component: ComponentCreator('/recursos-graficos/mancha-urbana', '8ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/recursos-graficos/mapa',
        component: ComponentCreator('/recursos-graficos/mapa', '4fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/salud-publica/pandemia-datos/positivo-presidente',
        component: ComponentCreator('/salud-publica/pandemia-datos/positivo-presidente', 'be3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/salud-publica/pandemia-datos/relevantes-datos',
        component: ComponentCreator('/salud-publica/pandemia-datos/relevantes-datos', 'b02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/salud-publica/pandemia-datos/vacunacion',
        component: ComponentCreator('/salud-publica/pandemia-datos/vacunacion', 'dcb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/congratultions',
        component: ComponentCreator('/tutorial-basics/congratultions', '62b'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
