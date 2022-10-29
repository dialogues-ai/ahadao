import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ahadao/markdown-page',
    component: ComponentCreator('/ahadao/markdown-page', 'a83'),
    exact: true
  },
  {
    path: '/ahadao/docs',
    component: ComponentCreator('/ahadao/docs', 'a90'),
    routes: [
      {
        path: '/ahadao/docs/get_started/join_aha_dao',
        component: ComponentCreator('/ahadao/docs/get_started/join_aha_dao', 'b68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ahadao/docs/welcome',
        component: ComponentCreator('/ahadao/docs/welcome', '017'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ahadao/',
    component: ComponentCreator('/ahadao/', '6d1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
