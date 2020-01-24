import React from "react"
import PropTypes from "prop-types"
import { useCookies } from "react-cookie"
import styled from "styled-components"
import { rem } from "polished"

const Container = styled.div`
  max-width: 20em;
  position: fixed;
  z-index: ${props => props.theme.ziCookiesConsent};
  bottom: ${rem(30)};
  right: ${rem(30)};
  padding: 1.4em;
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorPurple};

  p {
    margin-bottom: 1em;
  }

  button {
    padding: 0.5em 1em;
    height: 2.6em;
    border: 1px solid;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }

    &:first-of-type {
      margin-right: 0.5em;
      border-width: 2px;
      font-weight: ${props => props.theme.fwPrimaryBold};
    }

    &:last-of-type {
    }
  }
`

const CookiesConsent = ({
  disclaimer,
  ctaAccept,
  ctaDeny,
  children,
  ...props
}) => {
  if (typeof window === `undefined`) return null

  const [cookies, setCookie] = useCookies()

  if (cookies[`gatsby-gdpr-google-analytics`]) {
    return null
  }

  const acceptCookies = value => {
    setCookie(`gatsby-gdpr-google-analytics`, value, { path: `/` })
    if (value) window.location.reload(true)
  }

  return (
    <Container {...props}>
      <p
        dangerouslySetInnerHTML={{
          __html:
            disclaimer ||
            children ||
            `Cookies will improve your browsing experiece. Would you like to accept the cookies?`,
        }}
      />

      <button
        type="button"
        onClick={() => acceptCookies(true)}
        dangerouslySetInnerHTML={{ __html: ctaAccept || `Accept` }}
      />

      <button
        type="button"
        onClick={() => acceptCookies(false)}
        dangerouslySetInnerHTML={{ __html: ctaDeny || `Deny` }}
      />
    </Container>
  )
}

CookiesConsent.propTypes = {
  children: PropTypes.node,
  disclaimer: PropTypes.string,
  ctaAccept: PropTypes.string,
  ctaDeny: PropTypes.string,
}

export default CookiesConsent
