import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"

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

const CookiesConsent = ({
  disclaimer,
  ctaAccept,
  ctaDeny,
  children,
  ...props
}) => {
  const [reacted, setReacted] = useState(false)

  if (typeof window === `undefined` || reacted) {
    return null
  }

  const acceptTracking = (value) => {
    setReacted(true)
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
            onClick={() => acceptTracking(true)}
            dangerouslySetInnerHTML={{ __html: ctaAccept || `Accept` }}
          />

          <button
            type="button"
            onClick={() => acceptTracking(false)}
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
