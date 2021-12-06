import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import "@oddcamp/sass-utils/src/reset.scss"

import "../../config/yup"
import Header from "../header"
import Footer from "../footer"
import CookiesConsent from "../cookies-consent"
import { StoreProvider } from "../../store"
import theme from "../../theme"
// import "../../assets/stylesheets/index.scss"

const googleFonts = `https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap`

const InitialStyles = createGlobalStyle`
  * {
    line-height: calc(2px + 2.3ex + 2px); /* https://hugogiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/ */
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }

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
        <Fragment>
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
        </Fragment>
      </StoreProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
