import { graphql } from "gatsby"

export const query = graphql`
  fragment MetaSiteFragment on Query {
    metaSite: site {
      fields: siteMetadata {
        siteUrl
        baseUrl
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
`
