import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import truncateHtml from "truncate-html"
import he from "he"

const Meta = ({
  lang,
  name,
  title,
  titlePattern,
  titleOverridePattern,
  description,
  socialImage,
  robotsNoIndex,
  robotsNoFollow,

  fbAppId,
  ogType,
  ogTitle,
  ogDescription,
  ogImage,

  twitterTitle,
  twitterDescription,
  twitterSite,
  twitterCreator,
  twitterImage,

  meta,
  link,
}) => {
  const defaults = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lang
          name
          title
          titlePattern
          description
          socialImage
          twitterHandle
          fbAppId
          icon
          iconBgColor
          favIcon
          maskIcon
          maskIconColor
        }
      }
    }
  `).site.siteMetadata

  // general

  const metaLang = lang || defaults.lang || undefined

  const metaName = name || defaults.name || undefined

  const metaTitle = title || defaults.title || undefined

  let metaDescription = description || defaults.description || undefined

  if (metaDescription) {
    metaDescription = truncateHtml(metaDescription, {
      length: 240,
      stripTags: true,
    })
  }

  const metaRobotsNoIndex = robotsNoIndex || defaults.robotsNoIndex || undefined

  const metaRobotsNoFollow =
    robotsNoFollow || defaults.robotsNofollow || undefined

  const metaImage = socialImage || defaults.socialImage || undefined

  // fb/og

  const metaFbAppId = fbAppId || defaults.fbAppId || undefined

  const metaOgTitle = ogTitle || metaTitle || undefined

  let metaOgDescription = ogDescription || metaDescription || undefined

  if (metaOgDescription) {
    metaOgDescription = truncateHtml(metaOgDescription, {
      length: 240,
      stripTags: true,
    })
  }

  const metaOgType = ogType || undefined

  const metaOgImage = ogImage || metaImage || undefined

  // twitter

  const metaTwitterTitle = twitterTitle || metaTitle || undefined

  let metaTwitterDescription =
    twitterDescription || metaDescription || undefined

  if (metaTwitterDescription) {
    metaTwitterDescription = truncateHtml(metaTwitterDescription, {
      length: 240,
      stripTags: true,
    })
  }

  const metaTwitterImage = twitterImage || metaImage || undefined

  const metaTwitterSite = twitterSite || defaults.twitterHandle || undefined

  const metaTwitterCreator =
    twitterCreator || defaults.twitterHandle || undefined

  // icons

  const metaIcon = defaults.icon || undefined

  const metaIconBgColor = defaults.iconBgColor || undefined

  const metaFavIcon = defaults.favIcon || undefined

  const metaMaskIcon = defaults.maskIcon || undefined

  const metaMaskIconColor = defaults.maskIconColor || undefined

  // full title

  let metaFullTitle = ``
  if (titleOverridePattern) {
    metaFullTitle = metaTitle
  } else {
    metaFullTitle = (titlePattern || defaults.titlePattern).replace(
      `[PAGE_TITLE]`,
      metaTitle
    )
  }
  metaFullTitle = metaFullTitle.replace(`[SITE_NAME]`, metaName)

  // robots

  const metaRobotsIndex = metaRobotsNoIndex ? `noindex` : `index`
  const metaRobotsFollow = metaRobotsNoFollow ? `nofollow` : `follow`

  return (
    <Helmet
      htmlAttributes={{ lang: metaLang }}
      title={he.unescape(metaFullTitle)}
      meta={[
        // general
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `robots`,
          content: `${metaRobotsIndex}, ${metaRobotsFollow}`,
        },
        // fb/og
        {
          property: `fb_app_id`,
          content: metaFbAppId,
        },
        {
          property: `og:site_name`,
          content: metaName,
        },
        {
          property: `og:title`,
          content: metaOgTitle,
        },
        {
          property: `og:description`,
          content: metaOgDescription,
        },
        {
          property: `og:type`,
          content: metaOgType,
        },
        {
          property: `og:image`,
          content: metaOgImage,
        },
        // twitter
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTwitterTitle,
        },
        {
          name: `twitter:description`,
          content: metaTwitterDescription,
        },
        {
          name: `twitter:site`,
          content: metaTwitterSite,
        },
        {
          name: `twitter:creator`,
          content: metaTwitterCreator,
        },
        {
          name: `twitter:image:src`,
          content: metaTwitterImage,
        },
        // google+, schema.org, other
        {
          itemprop: `name`,
          content: metaFullTitle,
        },
        {
          itemprop: `description`,
          content: metaDescription,
        },
        {
          itemprop: `image`,
          content: metaImage,
        },
        // ie
        {
          name: `application-name`,
          content: metaName,
        },
        {
          name: `msapplication-tooltip`,
          content: metaName,
        },
        {
          name: `msapplication-TileImage`,
          content: metaIcon,
        },
        {
          name: `msapplication-TileColor`,
          content: metaIconBgColor,
        },
        // ios
        {
          name: `apple-mobile-web-app-title`,
          content: metaName,
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: `yes`,
        },
        {
          name: `apple-mobile-web-app-status-bar-style`,
          content: metaIconBgColor,
        },
      ].concat(meta || [])}
      link={[
        {
          rel: `image_src`,
          href: metaImage,
        },
        {
          rel: `icon`,
          href: metaFavIcon,
        },
        {
          rel: `mask-icon`,
          href: metaMaskIcon,
          color: metaMaskIconColor,
        },
      ].concat(link || [])}
    />
  )
}

Meta.propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  titlePattern: PropTypes.string,
  titleOverridePattern: PropTypes.bool,
  description: PropTypes.string,
  socialImage: PropTypes.string,
  robotsNoIndex: PropTypes.bool,
  robotsNoFollow: PropTypes.bool,

  fbAppId: PropTypes.string,
  ogType: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,

  twitterTitle: PropTypes.string,
  twitterDescription: PropTypes.string,
  twitterSite: PropTypes.string,
  twitterCreator: PropTypes.string,
  twitterImage: PropTypes.string,

  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
}

export default Meta
