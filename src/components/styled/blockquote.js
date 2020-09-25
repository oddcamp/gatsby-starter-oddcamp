import styled, { css } from "styled-components"

const blockquoteStyles = css`
  ${({ theme }) => theme.fonts.set(`secondary`, `normal`)}

  padding-left: 1.3em;
  font-style: italic;
  word-break: break-word;
  border-left: 2px solid;

  > * + * {
    margin-top: 1.25em;
  }

  /* author */

  > footer {
    font-style: normal;

    &::before {
      content: "—";
    }
  }
`

const Blockquote = styled.blockquote`
  ${blockquoteStyles}
`

export { Blockquote, blockquoteStyles }
