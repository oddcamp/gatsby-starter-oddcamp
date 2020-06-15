import { css } from "styled-components"
import { rem } from "polished"

const containerMaxWidth = 1240
const columnsCount = 12
const gutter = 20

const container = (maxWidth = containerMaxWidth) => css`
  width: 100%;
  padding-left: ${rem(gutter)};
  padding-right: ${rem(gutter)};
  margin-left: auto;
  margin-right: auto;

  ${
    maxWidth &&
    css`
      max-width: ${rem(maxWidth)};
    `
  }

  @media ${(props) => props.theme.mediumDown} {
    padding-left: ${rem(gutter / 2)};
    padding-right: ${rem(gutter / 2)};
  }
`

const grid = () => css`
  display: flex;
  flex-wrap: wrap;
`

const gridGutterX = (gutterX, { nested } = {}) => css`
  /* default */
  ${
    !gutterX &&
    css`
      ${!nested &&
      css`
        padding-left: ${rem(gutter / 2)};
        padding-right: ${rem(gutter / 2)};

        @media ${(props) => props.theme.mediumDown} {
          padding-left: ${rem(gutter / 4)};
          padding-right: ${rem(gutter / 4)};
        }
      `}

      ${nested &&
      css`
        margin-left: ${rem(-gutter / 2)};
        margin-right: ${rem(-gutter / 2)};

        @media ${(props) => props.theme.mediumDown} {
          margin-left: ${rem(-gutter / 4)};
          margin-right: ${rem(-gutter / 4)};
        }
      `}

      > * {
        padding-left: ${rem(gutter / 2)};
        padding-right: ${rem(gutter / 2)};

        @media ${(props) => props.theme.mediumDown} {
          padding-left: ${rem(gutter / 4)};
          padding-right: ${rem(gutter / 4)};
        }
      }
    `
  }

  /* custom */
  ${
    typeof gutterX === `number` &&
    css`
      ${!nested &&
      css`
        padding-left: ${rem(gutterX / 2)};
        padding-right: ${rem(gutterX / 2)};
      `}

      ${nested &&
      css`
        margin-left: ${rem(-gutterX / 2)};
        margin-right: ${rem(-gutterX / 2)};
      `}

      > * {
        padding-left: ${rem(gutterX / 2)};
        padding-right: ${rem(gutterX / 2)};
      }
    `
  }
`

const gridGutterY = (gutterY) => css`
  /* default */
  ${
    !gutterY &&
    css`
      margin-top: ${rem(-gutter / 2)};
      margin-bottom: ${rem(-gutter / 2)};

      > * {
        padding-top: ${rem(gutter / 2)};
        padding-bottom: ${rem(gutter / 2)};
      }

      @media ${(props) => props.theme.mediumDown} {
        margin-top: ${rem(-gutter / 4)};
        margin-bottom: ${rem(-gutter / 4)};

        > * {
          padding-top: ${rem(gutter / 4)};
          padding-bottom: ${rem(gutter / 4)};
        }
      }
    `
  }

  /* custom */
  ${
    typeof gutterY === `number` &&
    css`
      margin-top: ${rem(-gutterY / 2)};
      margin-bottom: ${rem(-gutterY / 2)};

      > * {
        padding-top: ${rem(gutterY / 2)};
        padding-bottom: ${rem(gutterY / 2)};
      }
    `
  }
`

const cell = (size = 12, { gutterY, nested } = {}) => css`
  width: ${(size * 100) / columnsCount}%;
`

export default {
  container,
  grid,
  gridGutterX,
  gridGutterY,
  cell,
}
