import React from "react"
import PropTypes from "prop-types"
import { useCookies } from "react-cookie"
import styled from "styled-components"
import { rem } from "polished"

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: ${props => props.theme.ziCookiesConsent};
  bottom: 0;
  right: 0;
  padding: ${rem(30)};
  display: flex;
  justify-content: flex-end;
  pointer-events: none;

  @media ${props => props.theme.xsmallDown} {
    padding: ${rem(10)};
  }
`

const Box = styled.div`
  width: 100%;
  max-width: 20em;
  padding: 1.4em;
  pointer-events: auto;
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorPurple};
`

const Text = styled.p`
  margin-bottom: 1em;
`

const Cta = styled.div`
  display: flex;

  > button {
    padding: 0.5em 1em;
    height: 2.6em;
    border: 1px solid;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }

    &:first-child {
      margin-right: 0.5em;
      border-width: 2px;
      font-weight: ${props => props.theme.fwPrimaryBold};
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
    setCookie(`gatsby-gdpr-google-analytics`, value, {
      path: `/`,
      maxAge: 3600 * 24 * 30 * 12, // year
    })
    if (value) window.location.reload(true)
  }

  return (
    <Container {...props}>
      <Box>
        <Text
          dangerouslySetInnerHTML={{
            __html:
              disclaimer ||
              children ||
              `Cookies will improve your browsing experiece. Would you like to accept the cookies?`,
          }}
        />

        <Cta>
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
        </Cta>
      </Box>
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
