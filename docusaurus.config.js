/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'For Your Mind',
  tagline: 'Reprogram Your Neurons',
  url: 'https://fymind.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'foryouhealth', // Usually your GitHub org/user name.
  projectName: 'splashSite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'FYM',
      logo: {
        alt: 'FYM Logo',
        src: 'img/logo.svg',
      },
      items: [
        /**{
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },**/
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://fymind.com/login',
          label: 'Login',
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
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/fymind',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/4ur_mind',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/fymind',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} For Your Health, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
