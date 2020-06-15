import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import he from "he"

import { normalizeWpSiteMeta, normalizeWpPageMeta } from "./utils"

const Meta = ({
  metaSite,
  metaWpSite,
  metaWpPage,
  data,
}) => {

  // return (
  //   <Helmet
  //     htmlAttributes={{ lang: metaLang }}
  //     title={he.unescape(metaFullTitle)}
  //     meta={[
  //       // general
  //       {
  //         name: `description`,
  //         content: metaDescription,
  //       },
  //       {
  //         name: `robots`,
  //         content: `${metaRobotsIndex}, ${metaRobotsFollow}`,
  //       },
  //       // fb/og
  //       {
  //         property: `fb_app_id`,
  //         content: metaFbAppId,
  //       },
  //       {
  //         property: `og:site_name`,
  //         content: metaName,
  //       },
  //       {
  //         property: `og:title`,
  //         content: metaOgTitle,
  //       },
  //       {
  //         property: `og:description`,
  //         content: metaOgDescription,
  //       },
  //       {
  //         property: `og:type`,
  //         content: metaOgType,
  //       },
  //       {
  //         property: `og:image`,
  //         content: metaOgImage,
  //       },
  //       // twitter
  //       {
  //         name: `twitter:card`,
  //         content: `summary`,
  //       },
  //       {
  //         name: `twitter:title`,
  //         content: metaTwitterTitle,
  //       },
  //       {
  //         name: `twitter:description`,
  //         content: metaTwitterDescription,
  //       },
  //       {
  //         name: `twitter:site`,
  //         content: metaTwitterSite,
  //       },
  //       {
  //         name: `twitter:creator`,
  //         content: metaTwitterCreator,
  //       },
  //       {
  //         name: `twitter:image:src`,
  //         content: metaTwitterImage,
  //       },
  //       // google+, schema.org, other
  //       {
  //         itemprop: `name`,
  //         content: metaFullTitle,
  //       },
  //       {
  //         itemprop: `description`,
  //         content: metaDescription,
  //       },
  //       {
  //         itemprop: `image`,
  //         content: metaImage,
  //       },
  //       // ie
  //       {
  //         name: `application-name`,
  //         content: metaName,
  //       },
  //       {
  //         name: `msapplication-tooltip`,
  //         content: metaName,
  //       },
  //       {
  //         name: `msapplication-TileImage`,
  //         content: metaIcon,
  //       },
  //       {
  //         name: `msapplication-TileColor`,
  //         content: metaIconBgColor,
  //       },
  //       // ios
  //       {
  //         name: `apple-mobile-web-app-title`,
  //         content: metaName,
  //       },
  //       {
  //         name: `apple-mobile-web-app-capable`,
  //         content: `yes`,
  //       },
  //       {
  //         name: `apple-mobile-web-app-status-bar-style`,
  //         content: metaIconBgColor,
  //       },
  //     ].concat(meta || [])}
  //     link={[
  //       {
  //         rel: `image_src`,
  //         href: metaImage,
  //       },
  //       {
  //         rel: `icon`,
  //         href: metaFavIcon,
  //       },
  //       {
  //         rel: `mask-icon`,
  //         href: metaMaskIcon,
  //         color: metaMaskIconColor,
  //       },
  //     ].concat(link || [])}
  //   />
  // )
}

Meta.propTypes = {
  lang: PropTypes.string,
}

export default Meta
