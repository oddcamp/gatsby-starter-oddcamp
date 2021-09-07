import styled, { css } from "styled-components"
import { rem } from "polished"

import { StoreConsumer } from "../../store"
import Link from "../link"
import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg"

const nav = [
  { url: `/`, title: `Home` },
  { url: `/styled`, title: `Styled` },
  { url: `/grid`, title: `Grid` },
  { url: `/button`, title: `Button` },
  { url: `/svg`, title: `SVG` },
  { url: `/image`, title: `Image` },
  { url: `/form`, title: `Form` },
  { url: `/modal`, title: `Modal` },
  { url: `/carousel`, title: `Carousel` },
  { url: `/social`, title: `Social` },
  { url: `/context`, title: `Context` },
]

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

  display: flex;
  align-items: center;
`

const Logo = styled.div`
  a {
    display: flex;
    align-items: center;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }

  svg {
    width: ${rem(60)};
    height: ${rem(60)};
    margin-right: ${rem(10)};
    display: block;
  }
`

const Nav = styled.nav`
  margin-left: auto;
  padding-left: ${rem(20)};
  display: flex;

  a {
    &:not(:first-child) {
      margin-left: ${rem(15)};
    }

    &:hover,
    &:focus,
    &.\\--active {
      text-decoration: underline;
    }

    &:active {
      opacity: 0.5;
    }
  }
`

const Header = () => {
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

                <span>GatsbyJS Starter</span>
              </Link>
            </Logo>

            {nav && nav.length > 0 && (
              <Nav>
                {nav.map((item, i) => (
                  <Link key={i} to={item.url} activeClassName="--active">
                    {item.title}
                  </Link>
                ))}
              </Nav>
            )}
          </Inner>
        </Container>
      )}
    </StoreConsumer>
  )
}

export default Header
