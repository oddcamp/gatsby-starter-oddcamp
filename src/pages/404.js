import React from "react"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"

const NotFoundPage = () => {
  return (
    <Layout>
      <Meta title="Page not found" />

      <Styled>
        <h1>Not found</h1>

        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Styled>
    </Layout>
  )
}

export default NotFoundPage
