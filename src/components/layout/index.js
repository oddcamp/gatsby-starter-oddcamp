import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import initSmartOutline from "@kollegorna/js-utils/src/smart-outline"
import "@kollegorna/sass-utils/src/reset.scss"

import "../../config/yup"
import Header from "../header"
import Footer from "../footer"
import CookiesConsent from "../cookies-consent"
import theme from "../../theme"
import { StoreProvider } from "../../store"

const googleFonts = `https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap`

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
          <Helmet>
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link rel="preload" as="style" href={googleFonts} />
            <link
              rel="stylesheet"
              media="print"
              onLoad="this.media='all'"
              href={googleFonts}
            />
          </Helmet>

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
