import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Meta from "../components/meta"
import { Heading1 } from "../components/styled/heading"

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  > *:not(:last-child) {
    margin-bottom: ${rem(20)};
  }

  ${Heading1} {
    margin-bottom: 0.5em;
  }

  .gatsby-image-wrapper {
    max-width: ${rem(800)};
  }
`

const ImagePage = ({ data: { imgDummy } }) => {
  return (
    <Layout>
      <Meta data={{ title: `Image` }} />

      <Container>
        <Heading1>Image</Heading1>

        <p>
          Gatsby <em>fluid</em> image:
        </p>

        <GatsbyImage
          image={imgDummy.childImageSharp.gatsbyImageData}
          alt="Dummy image"
        />
      </Container>
    </Layout>
  )
}

ImagePage.propTypes = {
  data: PropTypes.object,
}

export default ImagePage

export const pageQuery = graphql`
  query {
    imgDummy: file(
      sourceInstanceName: { eq: "content-images" }
      relativePath: { eq: "dummy1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
