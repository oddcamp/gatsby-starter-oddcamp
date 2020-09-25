import styled, { css } from "styled-components"

const liStyles = css`
  margin-left: 1.5em;
  font-size: 1.125em; /* 18 */
  line-height: 1.6;
  word-break: break-word;

  &:not(:frst-child),
  ul,
  ol {
    margin-top: 0.5em;
  }
`

const uListStyles = css`
  list-style-type: circle;

  > li {
    ${liStyles}
  }
`

const oListStyles = css`
  list-style-type: decimal;

  > li {
    ${liStyles}
  }
`

const dListStyles = css`
  font-size: 1.125em; /* 18 */
  line-height: 1.6;
  word-break: break-word;

  dt {
    display: block;

    &:not(:first-child) {
      margin-bottom: 0.5em;
    }
  }

  dd {
    display: block;
    margin-left: 1.5em;
  }
`

const UList = styled.ul`
  ${uListStyles}
`

const OList = styled.ol`
  ${oListStyles}
`

const DList = styled.dl`
  ${dListStyles}
`

export { UList, OList, DList, uListStyles, oListStyles, dListStyles }
