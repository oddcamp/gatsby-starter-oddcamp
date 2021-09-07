import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Carousel from "../components/carousel"
import { Heading1 } from "../components/styled/heading"

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  > *:not(:last-child) {
    margin-bottom: ${rem(20)};
  }
`

const Slide = styled.div`
  > .gatsby-image-wrapper {
    height: 80vh;
  }
`

const CarouselPage = ({ data: { imgDummy1, imgDummy2, imgDummy3 } }) => {
  const slides = [
    <Slide key={0}>
      <GatsbyImage
        image={imgDummy1.childImageSharp.gatsbyImageData}
        alt="Dummy image"
      />
    </Slide>,

    <Slide key={1}>
      <GatsbyImage
        image={imgDummy2.childImageSharp.gatsbyImageData}
        alt="Dummy image"
      />
    </Slide>,

    <Slide key={2}>
      <GatsbyImage
        image={imgDummy3.childImageSharp.gatsbyImageData}
        alt="Dummy image"
      />
    </Slide>,
  ]

  return (
    <Layout>
      <Meta data={{ title: `Carousel` }} />

      <Container>
        <Heading1>Carousel</Heading1>

        <Carousel slides={slides} />
      </Container>
    </Layout>
  )
}

CarouselPage.propTypes = {
  data: PropTypes.object,
}

export default CarouselPage

export const pageQuery = graphql`
  query {
    imgDummy1: file(
      sourceInstanceName: { eq: "content-images" }
      relativePath: { eq: "dummy1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }

    imgDummy2: file(
      sourceInstanceName: { eq: "content-images" }
      relativePath: { eq: "dummy2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }

    imgDummy3: file(
      sourceInstanceName: { eq: "content-images" }
      relativePath: { eq: "dummy3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
