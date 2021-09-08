import React from "react"
import styled from "styled-components"
import { rem } from "polished"
import { useCookies } from "react-cookie"

const cookieName = `cookies-consent`

const CookiesConsent = () => {
  const [cookies, setCookie] = useCookies([cookieName])

  if (typeof window === `undefined` || cookies[cookieName]) {
    return null
  }

  const setTracking = (value) => {
    setCookie(cookieName, value, { path: `/`, maxAge: 3600 * 24 * 30 * 12 })
  }

  return (
    <Container>
      <Box>
        <Text>
          Cookies will improve your browsing experiece. Would you like to accept
          the cookies?
        </Text>

        <Cta>
          <button type="button" onClick={() => setTracking(`accept`)}>
            Accept
          </button>

          <button type="button" onClick={() => setTracking(`deny`)}>
            Deny
          </button>
        </Cta>
      </Box>
    </Container>
  )
}

export default CookiesConsent

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: ${({ theme }) => theme.zindex.cookiesConsent};
  bottom: 0;
  right: 0;
  padding: ${rem(30)};
  display: flex;
  justify-content: flex-end;
  pointer-events: none;

  @media ${({ theme }) => theme.mq.xsmallDown} {
    padding: ${rem(10)};
  }
`

const Box = styled.div`
  width: 100%;
  max-width: 20em;
  padding: 1.4em;
  pointer-events: auto;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
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
      ${({ theme }) => theme.fonts.set(`primary`, `bold`)};

      margin-right: 0.5em;
      border-width: 2px;
    }
  }
`
