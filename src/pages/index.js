import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Link from "../components/link"
import SEO from "../components/seo"

const Article = styled.article.attrs({ className: "styled" })`
  .gatsby-image-wrapper {
    max-width: ${rem(800)};
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Article>
      <h1>Hi!</h1>

      <p>
        Read <Link to="/about">about us</Link>.
      </p>

      <p>
        <Img fluid={data.imgDummy.childImageSharp.fluid} />
      </p>
    </Article>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        imgDummy: file(relativePath: { eq: "dummy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
)
