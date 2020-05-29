import styled, { css } from "styled-components"

const codeStyles = css`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 0.2em;
`

const Code = styled.code`
  ${codeStyles}
`

export { Code, codeStyles }
