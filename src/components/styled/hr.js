import styled, { css } from "styled-components"

const hrStyles = css`
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
`

const Hr = styled.hr`
  ${hrStyles}
`

export { Hr, hrStyles }
