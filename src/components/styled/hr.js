import styled, { css } from "styled-components"

const hrStyles = css`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 0.2em;
`

const Hr = styled.hr`
  ${hrStyles}
`

export { Hr, hrStyles }
