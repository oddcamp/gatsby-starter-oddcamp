import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Meta from "../components/meta"
import { Heading1 } from "../components/styled/heading"
import { Anchor } from "../components/styled/anchor"
import { StoreConsumer } from "../store"

const ContextPage = () => {
  return (
    <Layout>
      <Meta data={{ title: `Context` }} />

      <Container>
        <Heading1>Context</Heading1>

        <StoreConsumer>
          {({ headerInverted, setHeaderInverted }) => (
            <p>
              <Anchor
                as="button"
                type="button"
                onClick={() => setHeaderInverted(!headerInverted)}
              >
                Invert the header colors
              </Anchor>
            </p>
          )}
        </StoreConsumer>
      </Container>
    </Layout>
  )
}

export default ContextPage

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  > *:not(:last-child) {
    margin-bottom: ${rem(20)};
  }

  ${Heading1} {
    margin-bottom: 0.5em;
  }
`
