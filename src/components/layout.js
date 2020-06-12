import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import initSmartOutline from "@kollegorna/js-utils/src/smart-outline"

import "../config/yup"
import "../assets/stylesheets/fonts/woff.scss"
import "@kollegorna/sass-utils/src/reset.scss"

import Header from "./header"
import Footer from "./footer"
import CookiesConsent from "./cookies-consent"
import { StoreProvider } from "../store"
import theme from "../theme"

if (typeof document !== `undefined`) {
  initSmartOutline([
    `input:focus`,
    `button:focus`,
    `textarea:focus`,
    `select:focus`,
  ])
}

const InitialStyles = createGlobalStyle`
  html {
    ${({ theme }) => theme.fonts.set(`primary`, `normal`)}

    font-size: 100%;  /* a11y */
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }

  strong {
    ${({ theme }) => theme.fonts.set(`primary`, `bold`)}
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <React.Fragment>
          <InitialStyles />

          <Header />

          <main>{children}</main>

          <Footer />

          <CookiesConsent />
        </React.Fragment>
      </StoreProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
