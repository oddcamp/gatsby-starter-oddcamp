const lang = `en`
const name = `GatsbyJS Starter`
const shortName = `GatsbyJS`
const title = `With love by Kollegorna`
const titlePattern = `[PAGE_TITLE] — [SITE_NAME]`
const description = `GatsbyJS starter that implements Styled Components + SASS and is Wordpress-ready`
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
const twitterHandle = `` // @twitterHandle
const robotsNoFollow = false
const robotsNoIndex = false
const siteUrl = `https://kollegorna-gatsbyjs-starter.netlify.com` // most not have trailing slash

// TODO: Write explainaton about this
// const wpSlugNormalizer = entities => {
//   return entities.map(e => {
//     if (e.slug) {
//       e.slug = decodeURIComponent(e.slug).replace(/[^0-9a-z_-]/gi, ``)
//     }
//     return e
//   })
// }

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
    siteUrl,
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
    //     normalizer: ({ entities }) => {
    //       entities = wpSlugNormalizer(entities)
    //       return entities
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        // make sure to (un)comment cookie names in src/components/cookies-consent.js accordingly
        googleTagManager: {
          trackingId: `GOOGLE_TAGMANAGER_ID`,
        },
        environments: [`production`],
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
    `gatsby-plugin-layout`,
    `gatsby-plugin-eslint`,
  ],
}
