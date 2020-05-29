import styled, { css } from "styled-components"

const anchorStyles = css`
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

const Anchor = styled.a`
  ${anchorStyles}
`

export { Anchor, anchorStyles }
