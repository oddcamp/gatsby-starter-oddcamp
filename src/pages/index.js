import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"

const Container = styled(Styled)`
  ${({ theme }) => theme.grid.container()}
`

const IndexPage = () => {
  return (
    <Layout>
      <Meta
        data={{
          title: `GatsbyJS starter by Odd Camp`,
          titleOverridePattern: true,
        }}
      />

      <Container as="article">
        <h1>Welcome!</h1>

        <p>Feel free to look around…</p>
      </Container>
    </Layout>
  )
}

export default IndexPage
