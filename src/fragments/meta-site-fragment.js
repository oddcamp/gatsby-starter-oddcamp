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
`
