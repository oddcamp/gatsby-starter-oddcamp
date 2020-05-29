import styled, { css } from "styled-components"
import { rem } from "polished"

import {
  heading1Styles,
  heading2Styles,
  heading3Styles,
  // heading4Styles,
  // heading5Styles,
  // heading6Styles,
} from "./heading"
import { uListStyles, oListStyles, dListStyles } from "./list"
import { paragraphStyles } from "./paragraph"
import { blockquoteStyles } from "./blockquote"
import { tableStyles } from "./table"
import { imageStyles } from "./image"
import { anchorStyles } from "./anchor"
import { codeStyles } from "./code"
import { horizontalLineStyles } from "./horizontal-line"

const elementsToStyles = Object.entries({
  h1: heading1Styles,
  h2: heading2Styles,
  h3: heading3Styles,
  // h4: heading4Styles,
  // h5: heading5Styles,
  // h6: heading6Styles,
  ul: uListStyles,
  ol: oListStyles,
  dl: dListStyles,
  p: paragraphStyles,
  blockquote: blockquoteStyles,
  table: tableStyles,
  img: imageStyles,
  a: anchorStyles,
  code: codeStyles,
  hr: horizontalLineStyles,
})

const Styled = styled.div`
  ${elementsToStyles.map(
    ([element, styles]) => css`
      ${element}:not(.do-unstyle) {
        ${styles}
      }
    `
  )}

  /* default element spacing */

  > * + * {
    margin-top: ${rem(20)};
  }

  /* extra spacing for some elements that aren't the first element */

  ${[`h1`, `h2`, `h3`, `h4`, `h5`, `h6`].map(
    (sel) => css`
      > * + ${sel} {
        margin-top: ${rem(40)};
      }
    `
  )}
`

export default Styled
