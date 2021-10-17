
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','7f7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/aviso-de-privacidad',
    component: ComponentCreator('/blog/aviso-de-privacidad','9ce'),
    exact: true
  },
  {
    path: '/blog/estatutos-uno',
    component: ComponentCreator('/blog/estatutos-uno','0de'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','887'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','5ae'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags','d7a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','241'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','96c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/acta-cabildo',
        component: ComponentCreator('/documentos-publicos/acta-cabildo','f04'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/asignación-programas',
        component: ComponentCreator('/documentos-publicos/asignación-programas','050'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/fortamun',
        component: ComponentCreator('/documentos-publicos/fortamun','722'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/presupuesto-egresos-17',
        component: ComponentCreator('/documentos-publicos/presupuesto-egresos-17','6d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/documentos-publicos/servidores-publicos17',
        component: ComponentCreator('/documentos-publicos/servidores-publicos17','e9c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/historias-constumbres/agua-puebla',
        component: ComponentCreator('/historias-constumbres/agua-puebla','f34'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/historias-constumbres/arqueologia-malinche',
        component: ComponentCreator('/historias-constumbres/arqueologia-malinche','aab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/historias-constumbres/impacto-volkswagen',
        component: ComponentCreator('/historias-constumbres/impacto-volkswagen','a2c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/historias-constumbres/la-muneca-letra',
        component: ComponentCreator('/historias-constumbres/la-muneca-letra','168'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/historias-constumbres/organizacion-carnaval',
        component: ComponentCreator('/historias-constumbres/organizacion-carnaval','721'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/historias-constumbres/senor_del_monte',
        component: ComponentCreator('/historias-constumbres/senor_del_monte','f1c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/salud-publica/pandemia-datos/relevantes-datos',
        component: ComponentCreator('/salud-publica/pandemia-datos/relevantes-datos','b02'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/salud-publica/pandemia-datos/vacunacion',
        component: ComponentCreator('/salud-publica/pandemia-datos/vacunacion','dcb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/congratultions',
        component: ComponentCreator('/tutorial-basics/congratultions','62b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
