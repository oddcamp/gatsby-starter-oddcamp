import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  > *:not(:last-child) {
    margin-bottom: ${rem(20)};
  }
`

const CarouselPage = ({ data: { metaSite } }) => {
  return (
    <Layout>
      <Meta metaSite={metaSite} data={{ title: `Carousel` }} />

      <Container>
        <Styled>
          <h1>Carousel</h1>

          <p>TODO</p>
        </Styled>
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
  }
`
