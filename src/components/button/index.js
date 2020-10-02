import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { rem } from "polished"

import Link from "../link"

const Container = styled.button`
  ${({ theme }) => theme.fonts.set(`primary`, `bold`)};

  padding: 0.8em 1.4em;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }

  ${(props) =>
    props.large &&
    css`
      font-size: ${rem(18)};
    `}
`

const Button = ({ children, to, ...rest }) => {
  return (
    <Container as={to ? Link : undefined} to={to} {...rest}>
      {children}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}

export default Button
