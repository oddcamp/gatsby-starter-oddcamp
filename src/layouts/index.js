import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import { rem } from "polished"
import initSmartOutline from "js-utils/src/smart-outline"

import "../config/yup"

import Meta from "../components/meta"
// import MetaWp from "../components/meta-wp"
import Header from "../components/header"
import Footer from "../components/footer"
import CookiesConsent from "../components/cookies-consent"

import theme from "../theme"

import "../assets/stylesheets/fonts/woff.scss"
import "../assets/stylesheets/app/app.scss"

const Main = styled.main`
  padding: 0 ${rem(40)};

  @media ${props => props.theme.mediumDown} {
    padding: 0 ${rem(20)};
  }
`

class Layout extends React.Component {
  componentDidMount() {
    if (typeof document !== `undefined`) {
      initSmartOutline([
        `input:focus`,
        `button:focus`,
        `textarea:focus`,
        `select:focus`,
      ])
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Meta />
          {/* <MetaWp /> */}

          <Header />

          <Main>{this.props.children}</Main>

          <Footer />

          <CookiesConsent />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
