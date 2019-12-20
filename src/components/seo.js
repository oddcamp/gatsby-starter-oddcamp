import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import truncate from "lodash/truncate"

const SEO = ({
  lang,
  title,
  titleOverridePattern,
  description,
  socialImage,
  robotsNoIndex,
  robotsNoFollow,

  ogType,
  ogTitle,
  ogDescription,
  ogImage,

  twitterTitle,
  twitterDescription,
  twitterImage,
  twitterCreator,

  meta,
  link,
}) => {
  const data = useStaticQuery(graphql`
    query {
      # wordpressAcfOptions {
      #   options {
      #     global_meta_lang
      #     global_meta_name
      #     global_meta_title
      #     global_meta_title_pattern
      #     global_meta_description
      #     global_meta_robots_nofollow
      #     global_meta_robots_noindex
      #     global_meta_social_image {
      #       localFile {
      #         url
      #       }
      #     }
      #
      #     global_meta_facebook_handle
      #     global_meta_fb_app_id
      #     global_meta_og_description
      #     global_meta_og_title
      #     global_meta_og_type
      #     global_meta_og_image {
      #       localFile {
      #         url
      #       }
      #     }
      #
      #     global_meta_twitter_title
      #     global_meta_twitter_description
      #     global_meta_twitter_site
      #     global_meta_twitter_creator
      #     global_meta_twitter_image {
      #       localFile {
      #         url
      #       }
      #     }
      #   }
      # }

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
  `)

  const gatsby = data.site.siteMetadata
  const wp = data.wordpressAcfOptions ? data.wordpressAcfOptions.options : {}

  // general

  const metaLang = lang || wp.lang || gatsby.lang || undefined

  const metaName = wp.global_meta_name || gatsby.name || undefined

  const metaTitle = title || wp.global_meta_title || gatsby.title || undefined

  let metaDescription =
    description || wp.global_meta_description || gatsby.description || undefined

  if (metaDescription) {
    metaDescription = truncate(metaDescription.replace(/<[^>]*>/g, ``), {
      length: 240,
    })
      .replace(/\n/g, ``)
      .replace(/\s+/g, ` `)
  }

  const metaRobotsNoIndex =
    robotsNoIndex ||
    wp.global_meta_robots_noindex ||
    gatsby.robotsNoIndex ||
    undefined

  const metaRobotsNoFollow =
    robotsNoFollow ||
    wp.global_meta_robots_nofollow ||
    gatsby.robotsNofollow ||
    undefined

  const metaImage =
    socialImage ||
    (wp.global_meta_social_image &&
      wp.global_meta_social_image.localFile.url) ||
    gatsby.socialImage ||
    undefined

  // fb/og

  const metaFbAppId = wp.global_meta_fb_app_id || gatsby.fbAppId || undefined

  const metaOgTitle =
    ogTitle || wp.global_meta_og_title || metaTitle || undefined

  const metaOgDescription =
    ogDescription ||
    wp.global_meta_og_description ||
    metaDescription ||
    undefined

  const metaOgType = ogType || wp.global_meta_og_type || undefined

  const metaOgImage =
    ogImage ||
    (wp.global_meta_og_image && wp.global_meta_og_image.localFile.url) ||
    metaImage ||
    undefined

  // twitter

  const metaTwitterTitle =
    twitterTitle || wp.global_meta_twitter_title || metaTitle || undefined

  const metaTwitterDescription =
    twitterDescription ||
    wp.global_meta_twitter_description ||
    metaDescription ||
    undefined

  const metaTwitterImage =
    twitterImage ||
    (wp.global_meta_twitter_image &&
      wp.global_meta_twitter_image.localFile.url) ||
    metaImage ||
    undefined

  const metaTwitterSite =
    wp.global_meta_twitter_site || gatsby.twitterHandle || undefined

  const metaTwitterCreator =
    twitterCreator ||
    wp.global_meta_twitter_creator ||
    gatsby.twitterHandle ||
    undefined

  // icons

  const metaIcon = gatsby.icon || undefined

  const metaIconBgColor = gatsby.iconBgColor || undefined

  const metaFavIcon = gatsby.favIcon || undefined

  const metaMaskIcon = gatsby.maskIcon || undefined

  const metaMaskIconColor = gatsby.maskIconColor || undefined

  // full title

  let metaFullTitle = ``
  if (titleOverridePattern) {
    metaFullTitle = metaTitle
  } else {
    metaFullTitle = (
      wp.global_meta_title_pattern || gatsby.titlePattern
    ).replace(`[PAGE_TITLE]`, metaTitle)
  }
  metaFullTitle = metaFullTitle.replace(`[SITE_NAME]`, metaName)

  // robots

  const metaRobotsIndex = metaRobotsNoIndex ? `noindex` : `index`
  const metaRobotsFollow = metaRobotsNoFollow ? `nofollow` : `follow`

  return (
    <Helmet
      htmlAttributes={{ lang: metaLang }}
      title={metaFullTitle}
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
          name: `og:image`,
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

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  titleOverridePattern: PropTypes.bool,
  description: PropTypes.string,
  socialImage: PropTypes.string,
  robotsNoIndex: PropTypes.bool,
  robotsNoFollow: PropTypes.bool,

  ogType: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,

  twitterTitle: PropTypes.string,
  twitterDescription: PropTypes.string,
  twitterImage: PropTypes.string,
  twitterCreator: PropTypes.string,

  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
