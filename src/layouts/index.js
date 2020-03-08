import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import initSmartOutline from "@kollegorna/js-utils/src/smart-outline"

import "../config/yup"
import "../assets/stylesheets/fonts/woff.scss"
import "../assets/stylesheets/app/app.scss"

import Meta from "../components/meta"
// import MetaWp from "../components/meta-wp"
import Header from "../components/header"
import Footer from "../components/footer"
import CookiesConsent from "../components/cookies-consent"
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

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <React.Fragment>
          <Meta />
          {/* <MetaWp /> */}

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
