import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import truncateHtml from "truncate-html"
import he from "he"

import { normalizeWpSiteMeta, normalizeWpPageMeta } from "./utils"

const Meta = ({ metaWpSite = {}, metaWpPage = {}, data = {} }) => {
  const {
    site: { siteMetadata: metaSite },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lang
          name
          title
          titlePattern
          description
          robotsNoFollow
          robotsNoIndex
          socialImage
          fbAppId
          twitterHandle
          favIcon
          appleTouchIcon
          appleStatusBarStyle
          appleWebAppCapable
          appleMaskIcon
          appleMaskIconColor
          msTileIcon
          msTileColor
        }
      }
    }
  `)

  metaWpSite = normalizeWpSiteMeta(metaWpSite)
  metaWpPage = normalizeWpPageMeta(metaWpPage)

  const meta = {
    ...metaSite,
    ...metaWpSite,
    ...metaWpPage,
    ...data,
  }

  let fullTitle = meta.title
  if (!meta.titleOverridePattern && meta.titlePattern) {
    fullTitle = meta.titlePattern
      .replace(`[PAGE_TITLE]`, meta.title)
      .replace(`[SITE_NAME]`, meta.name)
  }

  if (meta.description) {
    meta.description = truncateHtml(meta.description, {
      length: 240,
      stripTags: true,
    })
  }

  meta.ogTitle = meta.ogTitle || meta.title
  meta.ogDescription = meta.ogDescription || meta.description
  meta.ogImage = meta.ogImage || meta.socialImage

  meta.twitterTitle = meta.twitterTitle || meta.title
  meta.twitterDescription = meta.twitterDescription || meta.description
  meta.twitterImage = meta.twitterImage || meta.socialImage
  meta.twitterSite = meta.twitterSite || meta.twitterHandle
  meta.twitterCreator = meta.twitterCreator || meta.twitterSite

  meta.robotsNoIndex = meta.robotsNoIndex ? `noindex` : `index`
  meta.robotsNoFollow = meta.robotsNoFollow ? `nofollow` : `follow`

  return (
    <Helmet
      htmlAttributes={{ lang: meta.lang }}
      title={he.unescape(fullTitle)}
      meta={[
        // general
        {
          name: `description`,
          content: meta.description,
        },
        {
          name: `robots`,
          content: `${meta.robotsNoIndex}, ${meta.robotsNoFollow}`,
        },
        // fb/og
        {
          property: `fb_app_id`,
          content: meta.fbAppId,
        },
        {
          property: `og:site_name`,
          content: meta.name,
        },
        {
          property: `og:title`,
          content: meta.ogTitle,
        },
        {
          property: `og:description`,
          content: meta.ogDescription,
        },
        {
          property: `og:type`,
          content: meta.ogType,
        },
        {
          property: `og:image`,
          content: meta.ogImage,
        },
        // twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: meta.twitterTitle,
        },
        {
          name: `twitter:description`,
          content: meta.twitterDescription,
        },
        {
          name: `twitter:site`,
          content: meta.twitterSite,
        },
        {
          name: `twitter:creator`,
          content: meta.twitterCreator,
        },
        {
          name: `twitter:image:src`,
          content: meta.twitterImage,
        },
        // google+, schema.org, other
        {
          itemprop: `name`,
          content: fullTitle,
        },
        {
          itemprop: `description`,
          content: meta.description,
        },
        {
          itemprop: `image`,
          content: meta.socialImage,
        },
        // ie
        {
          name: `application-name`,
          content: meta.name,
        },
        {
          name: `msapplication-tooltip`,
          content: meta.name,
        },
        {
          name: `msapplication-TileImage`,
          content: meta.msTileIcon,
        },
        {
          name: `msapplication-TileColor`,
          content: meta.msTileColor,
        },
        // ios
        {
          name: `apple-touch-icon`,
          content: meta.appleTouchIcon,
        },
        {
          name: `apple-mobile-web-app-title`,
          content: meta.name,
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: meta.appleWebAppCapable,
        },
        {
          name: `apple-mobile-web-app-status-bar-style`,
          content: meta.appleStatusBarStyle,
        },
      ]}
      link={[
        {
          rel: `image_src`,
          href: meta.socialImage,
        },
        {
          rel: `icon`,
          href: meta.favIcon,
        },
        {
          rel: `mask-icon`,
          href: meta.appleMaskIcon,
          color: meta.appleMaskIconColor,
        },
      ]}
    />
  )
}

Meta.propTypes = {
  metaSite: PropTypes.object,
  metaWpSite: PropTypes.object,
  metaWpPage: PropTypes.object,
  data: PropTypes.object,
}

export default Meta
