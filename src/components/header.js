import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import Link from "./link"
import { ReactComponent as LogoSvg } from "../assets/images/logo.svg"

const Container = styled.header`
  margin-bottom: ${rem(80)};
  padding: ${rem(30)} 0;
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorBlack};

  @media ${props => props.theme.mediumDown} {
    margin-bottom: ${rem(40)};
    padding-left: ${rem(20)};
    padding-right: ${rem(20)};
  }
`

const Inner = styled.div`
  ${props => props.theme.gridContainer()}
`

const Logo = styled.div`
  a {
    display: flex;
    align-items: center;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  svg {
    width: ${rem(60)};
    height: ${rem(60)};
    margin-right: ${rem(10)};
    display: block;
  }
`

const Header = ({ data }) => {
  const { name } = data.site.siteMetadata

  return (
    <Container>
      <Inner>
        <Logo>
          <Link to="/">
            <LogoSvg aria-hidden="true" />

            <span>{name}</span>
          </Link>
        </Logo>
      </Inner>
    </Container>
  )
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            name
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
