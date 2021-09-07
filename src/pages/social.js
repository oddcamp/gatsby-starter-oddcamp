import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Location } from "@reach/router"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Link from "../components/link"
import Styled from "../components/styled"

const Container = styled(Styled)`
  ${({ theme }) => theme.grid.container()}
`

const SocialPage = ({ data }) => {
  return (
    <Layout>
      <Meta data={{ title: `Social` }} />

      <Container as="article">
        <h1>Social sharing</h1>

        <p>
          This is how you set up social sharing links for the{` `}
          <em>current page</em>:
        </p>

        <Location>
          {({ location }) => {
            const pageUrl = data.site.siteMetadata.siteUrl + location.pathname

            return (
              <ul>
                <li>
                  <Link
                    target="_blank"
                    rel="nofollow noopener"
                    to={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
                  >
                    Share on Facebook
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    rel="nofollow noopener"
                    to={`https://twitter.com/intent/tweet/?url=${pageUrl}`}
                  >
                    Share on Twitter
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    rel="nofollow noopener"
                    to={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`}
                  >
                    Share on LinkedIn
                  </Link>
                </li>
              </ul>
            )
          }}
        </Location>
      </Container>
    </Layout>
  )
}

SocialPage.propTypes = {
  data: PropTypes.object,
}

export default SocialPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
