import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({
  lang,
  title,
  title_override_pattern,
  description,
  social_image,
  robots_noindex,
  robots_nofollow,
  og_title,
  og_description,
  og_image,
  og_type,
  og_site_name,
  fb_app_id,
  twitter_title,
  twitter_description,
  twitter_image,
  twitter_creator,
  twitter_site,
  meta,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        // General
        const titleTemplate =
          title_override_pattern === true
            ? `%s`
            : `%s | ${data.site.siteMetadata.title}`
        const metaDescription =
          description || data.site.siteMetadata.description
        const language = lang || data.site.siteMetadata.lang
        const socialImage = social_image || `${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.social_image}`
        const robotsNoindex =
          robots_noindex || data.site.siteMetadata.robots_noindex
        const robotsNofollow =
          robots_nofollow || data.site.siteMetadata.robots_nofollow

        // Facebook
        const ogTitle = og_title || title || data.site.siteMetadata.title
        const ogDescription =
          og_description ||
          description ||
          data.site.siteMetadata.description
        const ogImage = og_image || socialImage
        const fbAppId = fb_app_id || data.site.siteMetadata.fb_app_id
        const ogSiteName = og_site_name || title || data.site.siteMetadata.title
        const ogType = og_type || data.site.siteMetadata.og_type

        // Twitter
        const twitterTitle =
          twitter_title || title || data.site.siteMetadata.title
        const twitterDescription =
          twitter_description ||
          description ||
          data.site.siteMetadata.description
        const twitterImage = twitter_image || socialImage
        const twitterCreator =
          twitter_creator || data.site.siteMetadata.twitter_creator
        const twitterSite = twitter_site || data.site.siteMetadata.twitter_site

        return (
          <Helmet
            htmlAttributes={{
              language,
            }}
            title={title}
            titleTemplate={titleTemplate}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `robots`,
                content: `${robotsNoindex === true ? "noindex" : "index"}, ${
                  robotsNofollow === true ? "nofollow" : "follow"
                }`,
              },
              {
                property: `og:type`,
                content: ogType,
              },
              {
                property: `og:title`,
                content: ogTitle,
              },
              {
                property: `og:description`,
                content: ogDescription,
              },
              {
                property: `og:image`,
                content: ogImage,
              },
              {
                property: `og:site_name`,
                content: ogSiteName,
              },
              {
                property: `og:locale`,
                content: language,
              },
              {
                property: `fb_app_id`,
                content: fbAppId,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:title`,
                content: twitterTitle,
              },
              {
                name: `twitter:description`,
                content: twitterDescription,
              },
              {
                name: `twitter:image`,
                content: twitterImage,
              },
              {
                name: `twitter:creator`,
                content: twitterCreator,
              },
              {
                name: `twitter:site`,
                content: twitterSite,
              },
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: null,
  title: null,
  title_override_pattern: false,
  description: null,
  robots_noindex: false,
  robots_nofollow: false,
  og_title: null,
  og_description: null,
  og_type: null,
  og_site_name: null,
  fb_app_id: null,
  twitter_title: null,
  twitter_description: null,
  twitter_image: null,
  twitter_creator: null,
  twitter_site: null,
  meta: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  title_override_pattern: PropTypes.bool,
  description: PropTypes.string,
  social_image: PropTypes.string,
  robots_noindex: PropTypes.bool,
  robots_nofollow: PropTypes.bool,
  og_title: PropTypes.string,
  og_description: PropTypes.string,
  og_image: PropTypes.string,
  og_type: PropTypes.string,
  og_site_name: PropTypes.string,
  fb_app_id: PropTypes.string,
  twitter_title: PropTypes.string,
  twitter_description: PropTypes.string,
  twitter_image: PropTypes.string,
  twitter_creator: PropTypes.string,
  twitter_site: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        social_image
        lang
        og_type
        fb_app_id
        twitter_creator
        twitter_site
        siteUrl
      }
    }
  }
`
