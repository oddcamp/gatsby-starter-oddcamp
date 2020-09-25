const siteUrl = `https://gatsby-starter-kollegorna.netlify.app` // most not have a trailing slash
const baseUrl = process.env.NODE_ENV === `development` ? `` : siteUrl
const lang = `en`
const name = `Gatsby Starter Kollegorna`
const shortName = name // change this if `name` is longer than 12 characters
const title = `With love by Kollegorna`
const titlePattern = `[PAGE_TITLE] — [SITE_NAME]`
const description = `WordPress-ready GatsbyJS starter`
const socialImage = `/meta-images/social.jpg` // 1600x840
const robotsNoFollow = false
const robotsNoIndex = false
const fbAppId = ``
const twitterHandle = `@kollegorna`

// meta icons and colors
const colorBrand = `#663399`
const colorBackground = `#fff`
const iconBgTransparent = `/meta-images/icon-bg-transparent.png` // 512x512; no padding around, transparent background
const iconBgColored = `/meta-images/icon-bg-colored.png` // 512x512; with minor padding, color background

// favicon
const favIcon = iconBgTransparent

// manifest
const manifestIcon = iconBgTransparent
const manifestThemeColor = colorBrand
const manifestBgColor = colorBackground

// apple
const appleTouchIcon = iconBgColored
const appleStatusBarStyle = `#222` // how to: https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab
const appleMaskIcon = `/meta-images/mask-icon.svg` // how to: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html
const appleMaskIconColor = colorBrand
const appleWebAppCapable = `yes`

// microsoft
const msTileIcon = iconBgTransparent
const msTileColor = colorBackground // background color of the tile

module.exports = {
  siteMetadata: {
    siteUrl,
    baseUrl,
    lang,
    name,
    title,
    titlePattern,
    description,
    robotsNoFollow,
    robotsNoIndex,
    socialImage,
    fbAppId,
    twitterHandle,
    favIcon,
    appleTouchIcon,
    appleStatusBarStyle,
    appleWebAppCapable,
    appleMaskIcon,
    appleMaskIconColor,
    msTileIcon,
    msTileColor,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: lang,
        name: name,
        short_name: shortName,
        description: description,
        theme_color: manifestThemeColor,
        background_color: manifestBgColor,
        icon: `static${manifestIcon}`,
        start_url: `/`,
        display: `standalone`,
        cache_busting_mode: `none`,
        include_favicon: false, // carried out via Meta component instead
        legacy: false, // carried out via Meta component instead
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `WORDPRESS_URL`,
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
    //     normalizer: ({ entities }) => {
    //       entities = wpSlugNormalizer(entities)
    //       return entities
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        prettier: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            { removeDimensions: true },
            { cleanupIDs: true },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`node_modules`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
          },
          production: {
            policy: [{ userAgent: `*`, allow: `/` }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-eslint`,
  ],
}
