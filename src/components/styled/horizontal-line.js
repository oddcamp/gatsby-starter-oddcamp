import styled, { css } from "styled-components"

const horizontalLineStyles = css`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 0.2em;
`

const HorizontalLine = styled.hr`
  ${horizontalLineStyles}
`

export { HorizontalLine, horizontalLineStyles }
