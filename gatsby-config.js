const lang = `en`
const name = `GatsbyJS Boilerplate`
const shortName = `GatsbyJS BP`
const title = `With love by Kollegorna`
const titlePattern = `[PAGE_TITLE] — [SITE_NAME]`
const description = `GatsbyJS boilerplate that implements Styled Components + SASS and is Wordpress-ready`
const colorMain = `#7f522c`
const colorBg = `#fffcf3`
const socialImage = `/meta-images/social.jpg`
const icon = `/meta-images/icon-transparent.png` // favicon, ms tile
const iconBgColor = colorBg
const iconWithBg = `/meta-images/icon-with-bg.png` // apple touch, webmanifest
const favIcon = icon
const maskIcon = `/meta-images/mask-icon.svg` // https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html
const maskIconColor = colorMain
const fbAppId = ``
const twitterHandle = `@kollegorna`
const robotsNoFollow = false
const robotsNoIndex = false

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
    robotsNoFollow,
    robotsNoIndex,
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
        include_favicon: false, // carried out via `components/meta` instead
        start_url: `/`,
        display: `minimal-ui`,
        cache_busting_mode: `name`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `NAME.kinsta.cloud/`,
    //     protocol: `https`,
    //     hostingWPCOM: false,
    //     useACF: true,
    //     acfOptionPageIds: [`options`],
    //     includedRoutes: [
    //       `**/categories`,
    //       `**/posts`,
    //       `**/pages`,
    //       `**/media`,
    //       `**/tags`,
    //       `**/taxonomies`,
    //     ],
    //   },
    // },
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
