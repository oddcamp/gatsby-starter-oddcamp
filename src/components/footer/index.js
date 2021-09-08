import React from "react"
import styled from "styled-components"
import { rem } from "polished"
import { Location } from "@reach/router"

const Footer = () => {
  return (
    <Container>
      <Inner>
        <Copy>
          &copy;
          {` `}
          {new Date().getFullYear()}
          {` `}
          &middot;
          {` `}
          GatsbyJS Starter
        </Copy>

        <Route>
          Current route:
          {` `}
          <Location>{({ location }) => location.pathname}</Location>
        </Route>
      </Inner>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  margin-top: ${rem(80)};
  padding: ${rem(80)} 0 ${rem(160)};
  border-top: 4px solid;

  @media ${({ theme }) => theme.mq.mediumDown} {
    margin-top: ${rem(40)};
    padding: ${rem(40)} 0 ${rem(80)};
  }
`

const Inner = styled.div`
  ${({ theme }) => theme.grid.container()}
  ${({ theme }) => theme.grid.grid()}
  ${({ theme }) => theme.grid.gridGutterX()}

  @media ${({ theme }) => theme.mq.smallDown} {
    ${({ theme }) => theme.grid.gridGutterY()}
  }

  > * {
    ${({ theme }) => theme.grid.cell(6)};

    @media ${({ theme }) => theme.mq.smallDown} {
      ${({ theme }) => theme.grid.cell(12)};
    }
  }
`

const Copy = styled.div``

const Route = styled.div`
  text-align: right;
  opacity: 0.6;

  @media ${({ theme }) => theme.mq.smallDown} {
    text-align: left;
  }
`
