// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pear by Holepunch',
  tagline: 'Peer-to-peer, local-first applications.',
  favicon: 'img/pear-vector.svg',

  future: { v4: true },

  // Update these when you deploy (ok to keep placeholders locally)
  url: 'https://pear-docs.example.com',
  baseUrl: '/',

  // Optional: set to your Git info (remove if not using GH Pages)
  organizationName: 'holepunch',
  projectName: 'pear-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs',
        },
        blog: false, // keep blog disabled
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },

    navbar: {
      title: 'Pear by Holepunch',
      logo: {
        alt: 'Pear Logo',
        src: 'img/pear-vector.svg',
      },
      items: [
        // Open Documentation on Understanding Pear
        {
          to: '/whats-new',
          position: 'left',
          label: "What's New",
        },
        {
          type: 'doc',
          docId: 'pear-intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/common-faqs',
          position: 'left',
          label: 'FAQs',
        },
        
        {
          to: '/blog',
          position: 'left',
          label: 'Blogs',
        },

        // GitHub
        {
          href: 'https://github.com/holepunchto',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started-with-pear/install' },
            { label: 'Pear Runtime', to: '/docs/pear-runtime/api' },
            { label: "What's New", to: '/docs/whats-new' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/holepunchto' },
          ],
        },
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Holepunch. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
