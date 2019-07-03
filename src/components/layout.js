import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { rem } from "polished"

import Header from "./header"
import Footer from "./footer"

import theme from "../theme"

import "../assets/stylesheets/fonts/woff.scss" // TODO: implement coditional woff.scss and woff2.scss insertion
import "../assets/stylesheets/app/app.scss"

const Main = styled.main`
  padding: 0 ${rem(40)};

  @media ${props => props.theme.mediumDown} {
    padding: 0 ${rem(20)};
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
