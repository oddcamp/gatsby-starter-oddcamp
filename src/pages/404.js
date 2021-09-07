import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}
`

const NotFoundPage = ({ data: { metaSite } }) => {
  return (
    <Layout>
      <Meta metaSite={metaSite} data={{ title: `Page not found` }} />

      <Container>
        <Styled>
          <h1>Not found</h1>

          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Styled>
      </Container>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.object,
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    ...MetaSiteFragment
  }
`
