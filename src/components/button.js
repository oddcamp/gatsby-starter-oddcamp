import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { rem } from "polished"

const Container = styled.button`
  padding: 0.8em 1.4em;
  display: inline-block;
  font-weight: ${props => props.theme.fwPrimaryBold};
  color: ${props => props.theme.colorBeige};
  background-color: ${props => props.theme.colorGreenDark};

  ${props =>
    props.large &&
    css`
      font-size: ${rem(18)};
    `}
`

const Button = props => {
  const { children, type, ...rest } = props

  return (
    <Container {...rest} type={type || `button`}>
      {children}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
}

export default Button
