// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
//
// import Meta from "./meta"
//
// const normalizePageMeta = wp => {
//   const { acf } = wp
//
//   const lang = acf.lang || undefined
//   const title = acf.title || wp.title || wp.name || undefined
//   const titleOverridePattern = acf.titleOverridePattern || undefined
//   const description =
//     acf.description || wp.content || wp.description || undefined
//   const socialImage =
//     (acf.socialImage && acf.socialImage.localFile
//       ? acf.socialImage.localFile.url
//       : undefined) ||
//     (wp.featured_media && wp.featured_media.localFile
//       ? wp.featured_media.localFile.url
//       : undefined) ||
//     undefined
//
//   const robotsNoIndex = acf.robotsNoIndex || undefined
//   const robotsNoFollow = acf.robotsNoFollow || undefined
//
//   const ogType = acf.ogType || undefined
//   const ogTitle = acf.ogTitle || title || undefined
//   const ogDescription = acf.ogDescription || description || undefined
//   const ogImage =
//     acf.ogImage && acf.ogImage.localFile
//       ? acf.ogImage.localFile.url
//       : socialImage
//
//   const twitterTitle = acf.twitterTitle || title || undefined
//   const twitterDescription = acf.twitterDescription || description || undefined
//   const twitterCreator = acf.twitterCreator || undefined
//   const twitterImage =
//     acf.twitterImage && acf.twitterImage.localFile
//       ? acf.twitterImage.localFile.url
//       : socialImage
//
//   return {
//     lang,
//     title,
//     titleOverridePattern,
//     description,
//     socialImage,
//     robotsNoIndex,
//     robotsNoFollow,
//     ogType,
//     ogTitle,
//     ogDescription,
//     ogImage,
//     twitterTitle,
//     twitterDescription,
//     twitterImage,
//     twitterCreator,
//   }
// }
//
// const MetaWp = ({ wp, ...props }) => {
//   let globalMeta = useStaticQuery(graphql`
//     query {
//       wordpressAcfOptions {
//         options {
//           lang: global_meta_lang
//           name: global_meta_name
//           title: global_meta_title
//           titlePattern: global_meta_title_pattern
//           description: global_meta_description
//           robotsNoIndex: global_meta_robots_noindex
//           robotsNoFollow: global_meta_robots_nofollow
//           socialImage: global_meta_social_image {
//             localFile {
//               url
//             }
//           }
//
//           fbAppId: global_meta_fb_app_id
//           ogType: global_meta_og_type
//           ogTitle: global_meta_og_title
//           ogDescription: global_meta_og_description
//           ogImage: global_meta_og_image {
//             localFile {
//               url
//             }
//           }
//
//           twitterTitle: global_meta_twitter_title
//           twitterDescription: global_meta_twitter_description
//           twitterSite: global_meta_twitter_site
//           twitterCreator: global_meta_twitter_creator
//           twitterImage: global_meta_twitter_image {
//             localFile {
//               url
//             }
//           }
//         }
//       }
//     }
//   `)
//
//   globalMeta = { ...globalMeta.wordpressAcfOptions.options } // deep-copy
//
//   globalMeta.socialImage =
//     globalMeta.socialImage && globalMeta.socialImage.localFile
//       ? globalMeta.socialImage.localFile.url
//       : undefined
//
//   globalMeta.ogImage =
//     globalMeta.ogImage && globalMeta.ogImage.localFile
//       ? globalMeta.ogImage.localFile.url
//       : undefined
//
//   globalMeta.twitterImage =
//     globalMeta.twitterImage && globalMeta.twitterImage.localFile
//       ? globalMeta.twitterImage.localFile.url
//       : undefined
//
//   const pageMeta = wp ? normalizePageMeta(wp) : {}
//
//   Object.keys(pageMeta).forEach(
//     key => pageMeta[key] === undefined && delete pageMeta[key]
//   )
//
//   return <Meta {...globalMeta} {...pageMeta} {...props} />
// }
//
// MetaWp.propTypes = {
//   wp: PropTypes.object,
// }
//
// export default MetaWp
