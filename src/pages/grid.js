import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"
import { Heading1 } from "../components/styled/heading"

const GridPage = () => {
  return (
    <Layout>
      <Meta data={{ title: `Social` }} />

      <Article>
        <Heading>Grid</Heading>

        <Styled as={Container}>
          <h2>Container</h2>

          <p>
            This is the <code>default</code> width container
          </p>
        </Styled>

        <Styled as={ContainerNarrow}>
          <h2>Narrow container</h2>

          <p>
            This is the <code>narrow</code> width container
          </p>
        </Styled>

        <Container>
          <Styled>
            <h2>Grid</h2>

            <p>This is grid and its three cells:</p>
          </Styled>

          <Grid>
            <div>
              <Card>Cell 1</Card>
            </div>

            <div>
              <Card>Cell 2</Card>
            </div>

            <div>
              <Card>Cell 3</Card>
            </div>
          </Grid>

          <Styled>
            <p>This is grid has larger gaps:</p>
          </Styled>

          <Grid gaps={true}>
            <div>
              <Card>Cell 1</Card>
            </div>

            <div>
              <Card>Cell 2</Card>
            </div>

            <div>
              <Card>Cell 3</Card>
            </div>
          </Grid>
        </Container>
      </Article>
    </Layout>
  )
}

export default GridPage

const Article = styled.article`
  > * + * {
    margin-top: ${rem(60)};
  }
`

const Heading = styled(Heading1)`
  ${({ theme }) => theme.grid.container()}
`

const Container = styled(Styled)`
  ${({ theme }) => theme.grid.container()}
`

const ContainerNarrow = styled.section`
  ${({ theme }) => theme.grid.container(`narrow`)}
`

const Grid = styled.div`
  ${({ theme }) => theme.grid.grid()}
  ${({ theme }) => theme.grid.gridGutterY(20)}
  ${({ theme, gaps }) =>
    theme.grid.gridGutterX(gaps ? 40 : null, { nested: true })}

  margin-top: ${rem(20)};
  margin-bottom: ${rem(20)};

  > * {
    ${({ theme }) => theme.grid.cell(4)}

    @media ${({ theme }) => theme.mq.mediumDown} {
      ${({ theme }) => theme.grid.cell(12)}
    }
  }
`

const Card = styled.div`
  padding: ${rem(30)};
  border: 1px solid;
`
