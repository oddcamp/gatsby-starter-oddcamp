import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import Link from "./link"

import SvgLogo from "../assets/images/logo.svg"

const Container = styled.header`
  margin-bottom: ${rem(80)};
  padding: ${rem(30)} ${rem(40)};
  color: ${props => props.theme.colorOrangeLight};
  background-color: ${props => props.theme.colorBeigeDarker};

  @media ${props => props.theme.mediumDown} {
    margin-bottom: ${rem(40)};
    padding-left: ${rem(20)};
    padding-right: ${rem(20)};
  }
`

const Logo = styled.div`
  a {
    display: block;

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
    display: block;
  }
`

const Header = ({ data }) => (
  <Container>
    <Logo>
      <Link to="/">
        <SvgLogo aria-label={data.site.siteMetadata.title} />
      </Link>
    </Logo>
  </Container>
)

Header.propTypes = {
  data: PropTypes.object.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            meta_description
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
