import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"

const NotFoundPage = ({ data: { metaSite } }) => {
  return (
    <Layout>
      <Meta metaSite={metaSite} data={{ title: `Page not found` }} />

      <Styled>
        <h1>Not found</h1>

        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Styled>
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
