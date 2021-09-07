import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"
import Img from "gatsby-image/withIEPolyfill"

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

const CarouselPage = ({
  data: { metaSite, imgDummy1, imgDummy2, imgDummy3 },
}) => {
  const slides = [
    <Slide key={0}>
      <Img fluid={imgDummy1.childImageSharp.fluid} alt="Dummy image" />
    </Slide>,

    <Slide key={1}>
      <Img fluid={imgDummy2.childImageSharp.fluid} alt="Dummy image" />
    </Slide>,

    <Slide key={2}>
      <Img fluid={imgDummy3.childImageSharp.fluid} alt="Dummy image" />
    </Slide>,
  ]

  return (
    <Layout>
      <Meta metaSite={metaSite} data={{ title: `Carousel` }} />

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
    ...MetaSiteFragment

    imgDummy1: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "dummy1.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    imgDummy2: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "dummy2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    imgDummy3: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "dummy3.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
