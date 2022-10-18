import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ahadao/__docusaurus/debug',
    component: ComponentCreator('/ahadao/__docusaurus/debug', '737'),
    exact: true
  },
  {
    path: '/ahadao/__docusaurus/debug/config',
    component: ComponentCreator('/ahadao/__docusaurus/debug/config', '376'),
    exact: true
  },
  {
    path: '/ahadao/__docusaurus/debug/content',
    component: ComponentCreator('/ahadao/__docusaurus/debug/content', '196'),
    exact: true
  },
  {
    path: '/ahadao/__docusaurus/debug/globalData',
    component: ComponentCreator('/ahadao/__docusaurus/debug/globalData', 'dce'),
    exact: true
  },
  {
    path: '/ahadao/__docusaurus/debug/metadata',
    component: ComponentCreator('/ahadao/__docusaurus/debug/metadata', '344'),
    exact: true
  },
  {
    path: '/ahadao/__docusaurus/debug/registry',
    component: ComponentCreator('/ahadao/__docusaurus/debug/registry', '97f'),
    exact: true
  },
  {
    path: '/ahadao/__docusaurus/debug/routes',
    component: ComponentCreator('/ahadao/__docusaurus/debug/routes', '33e'),
    exact: true
  },
  {
    path: '/ahadao/markdown-page',
    component: ComponentCreator('/ahadao/markdown-page', 'a83'),
    exact: true
  },
  {
    path: '/ahadao/docs',
    component: ComponentCreator('/ahadao/docs', '033'),
    routes: [
      {
        path: '/ahadao/docs/actions/create_group',
        component: ComponentCreator('/ahadao/docs/actions/create_group', 'ad9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ahadao/docs/get_started/join_aha_dao',
        component: ComponentCreator('/ahadao/docs/get_started/join_aha_dao', 'b68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ahadao/docs/learning repos/DAOs',
        component: ComponentCreator('/ahadao/docs/learning repos/DAOs', 'cca'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ahadao/docs/learning repos/Web3 Onboarding copy',
        component: ComponentCreator('/ahadao/docs/learning repos/Web3 Onboarding copy', 'ddc'),
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
