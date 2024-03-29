// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { join } = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kinetic",
  tagline: "Next generation API and SDK for Solana",
  url: "https://kinetic.kin.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kin-labs", // Usually your GitHub org/user name.
  projectName: "kinetic-io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/kin-labs/kinetic-docs/tree/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/kin-labs/kinetic-io/tree/main/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Kinetic",
        logo: {
          alt: "Kinetic Logo",
          src: "img/kin-logo-small-purple.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/kin-labs/kinetic",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Kinetic Dart SDK",
                to: "/docs/sdk/dart",
              },
              {
                label: "Kinetic TypeScript SDK",
                to: "/docs/sdk/typescript",
              },
              {
                label: "Kinetic Unity SDK",
                to: "/docs/sdk/unity",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                label: "Developer Discord",
                href: "https://discord.gg/kdRyUNmHDn",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/kin_ecosystem",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Homepage",
                href: "https://kin.org",
              },
              {
                label: "GitHub",
                href: "https://github.com/kin-labs/kinetic-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kin Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "dart"],
      },
    }),
  plugins: [join(__dirname, "/plugins/build")],
};

module.exports = config;
