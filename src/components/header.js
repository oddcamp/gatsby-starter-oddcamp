import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"
import { rem } from "polished"

import { StoreConsumer } from "../store"
import Link from "./link"
import { ReactComponent as LogoSvg } from "../assets/images/logo.svg"

const Container = styled.header`
  margin-bottom: ${rem(80)};
  padding: ${rem(30)} 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 4px solid;

  @media ${({ theme }) => theme.mq.mediumDown} {
    margin-bottom: ${rem(40)};
    padding-left: ${rem(20)};
    padding-right: ${rem(20)};
  }

  ${(props) =>
    props.inverted &&
    css`
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
    `}
`

const Inner = styled.div`
  ${({ theme }) => theme.grid.container()}
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
    <StoreConsumer>
      {({ headerInverted }) => (
        <Container inverted={headerInverted}>
          <Inner>
            <Logo>
              <Link
                to="/"
                data-track-click
                data-track-click-ga-category="Header"
                data-track-click-ga-action="Logo Click"
                data-track-click-ga-label="Home"
              >
                <LogoSvg aria-hidden="true" />

                <span>{name}</span>
              </Link>
            </Logo>
          </Inner>
        </Container>
      )}
    </StoreConsumer>
  )
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
}

export default (props) => (
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
    render={(data) => <Header data={data} {...props} />}
  />
)
