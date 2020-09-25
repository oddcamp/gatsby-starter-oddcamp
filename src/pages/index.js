import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"

const Container = styled(Styled)`
  ${({ theme }) => theme.grid.container()}

  .gatsby-image-wrapper {
    max-width: ${rem(800)};
  }

  .-svg-logo {
    width: ${rem(60)};
    height: ${rem(60)};
  }
`

const IndexPage = ({ data: { metaSite, imgDummy } }) => {
  return (
    <Layout>
      <Meta
        metaSite={metaSite}
        data={{
          title: `GatsbyJS starter by Kollegorna`,
          titleOverridePattern: true,
        }}
      />

      <Container as="article">
        <h1>Welcome!</h1>

        <p>Feel free to look around…</p>

        <ul></ul>
      </Container>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    ...MetaSiteFragment

    imgDummy: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "dummy.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
