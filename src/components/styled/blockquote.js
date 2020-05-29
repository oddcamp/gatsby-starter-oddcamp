import styled, { css } from "styled-components"
import { rem } from "polished"

const blockquoteStyles = css`
  ${(props) => props.theme.ffSecondarySet()}

  padding-left: 1.3em;
  font-style: italic;
  word-break: break-word;
  border-left: 2px solid;

  > * + * {
    margin-top: ${rem(20)};
  }

  /* author */

  > footer {
    &::before {
      content: "—";
    }
  }
`

const Blockquote = styled.blockquote`
  ${blockquoteStyles}
`

export { Blockquote, blockquoteStyles }
