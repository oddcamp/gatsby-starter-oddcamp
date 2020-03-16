import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"
import { Location } from "@reach/router"

const Container = styled.footer`
  margin-top: ${rem(80)};
  padding: ${rem(80)} 0 ${rem(160)};
  border-top: 4px solid ${props => props.theme.colorBlack};

  @media ${props => props.theme.mediumDown} {
    margin-top: ${rem(40)};
    padding: ${rem(40)} 0 ${rem(80)};
  }
`

const Inner = styled.div`
  ${props => props.theme.gridContainer()}
  ${props => props.theme.gridGrid()}
  ${props => props.theme.gridGridGutterX()}

  @media ${props => props.theme.smallDown} {
    ${props => props.theme.gridGridGutterY()}
  }

  > * {
    ${props => props.theme.gridCell(6)};

    @media ${props => props.theme.smallDown} {
      ${props => props.theme.gridCell(12)};
    }
  }
`

const Copy = styled.div``

const Route = styled.div`
  text-align: right;
  opacity: 0.6;

  @media ${props => props.theme.smallDown} {
    text-align: left;
  }
`

const Footer = ({ data }) => {
  const { title } = data.site.siteMetadata

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
          {title}
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

Footer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)
