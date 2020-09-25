import styled, { css } from "styled-components"

const paragraphStyles = css`
  line-height: 1.6;
  font-size: 1.125em; /* 18 */
  word-break: break-word;

  @media ${({ theme }) => theme.mq.mediumDown} {
    font-size: 1em;
  }
`

const Paragraph = styled.p`
  ${paragraphStyles}
`

export { Paragraph, paragraphStyles }
