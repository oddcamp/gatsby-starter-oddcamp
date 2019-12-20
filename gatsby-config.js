const lang = `en`
const name = `GatsbyJS Boilerplate`
const shortName = `Gatsby BP`
const title = `Made by Kollegorna`
const titlePattern = `[PAGE_TITLE] — [SITE_NAME]`
const description = `The application does cool things and makes your life better`
const colorMain = `#000`
const colorBg = `#fff`
const socialImage = `/meta-images/social.jpg`
const icon = `/meta-images/icon-transparent.png` // favicon, ms tile
const iconBgColor = colorBg
const iconWithBg = `/meta-images/icon-with-bg.png` // apple touch, webmanifest
const favIcon = icon
const maskIcon = `/meta-images/mask-icon.svg` // https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html
const maskIconColor = colorMain
const fbAppId = ``
const twitterHandle = `@kollegorna`

module.exports = {
  siteMetadata: {
    lang,
    name,
    title,
    titlePattern,
    description,
    socialImage,
    fbAppId,
    twitterHandle,
    icon,
    iconBgColor,
    favIcon,
    maskIcon,
    maskIconColor,
    robotsNoFollow: false,
    robotsNoIndex: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: lang,
        name: name,
        short_name: shortName,
        description: description,
        theme_color: colorMain,
        background_color: colorBg,
        icon: `static${iconWithBg}`,
        include_favicon: false, // carried out via `components/SEO`
        start_url: `/`,
        display: `minimal-ui`,
        cache_busting_mode: `name`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`node_modules`],
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        prettier: true,
        svgo: true, // configured in .svgo.yml file
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-eslint`,
    // `gatsby-plugin-stylelint`,
  ],
}
