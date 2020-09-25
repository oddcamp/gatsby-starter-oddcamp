import styled, { css } from "styled-components"

const anchorStyles = css`
  text-decoration: underline;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

const Anchor = styled.a`
  ${anchorStyles}
`

export { Anchor, anchorStyles }
