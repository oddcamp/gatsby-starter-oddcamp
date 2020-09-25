import styled, { css } from "styled-components"

const heading1Styles = css`
  ${({ theme }) => theme.fonts.set(`secondary`, `normal`)}

  font-size: 3.5em; /* 56 */
  line-height: 1.1;
  word-break: break-word;

  @media ${({ theme }) => theme.mq.mediumDown} {
    font-size: 2.25em; /* 36 */
  }
`

const heading2Styles = css`
  ${({ theme }) => theme.fonts.set(`secondary`, `normal`)}

  font-size: 2.25em; /* 36 */
  line-height: 1.1;
  letter-spacing: -0.02em;
  word-break: break-word;

  @media ${({ theme }) => theme.mq.mediumDown} {
    font-size: 1.625em; /* 26 */
  }
`

const heading3Styles = css`
  ${({ theme }) => theme.fonts.set(`secondary`, `normal`)}

  font-size: 1.625em; /* 26 */
  line-height: 1.2;
  letter-spacing: -0.02em;
  word-break: break-word;

  @media ${({ theme }) => theme.mq.mediumDown} {
    font-size: 1.25em; /* 20 */
  }
`

// const heading4Styles = css``

// const heading5Styles = css``

// const heading6Styles = css``

const Heading1 = styled.h1`
  ${heading1Styles}
`

const Heading2 = styled.h2`
  ${heading2Styles}
`

const Heading3 = styled.h3`
  ${heading3Styles}
`

// const Heading4 = styled.h4`
//   ${heading4Styles}
// `

// const Heading5 = styled.h5`
//   ${heading5Styles}
// `

// const Heading6 = styled.h6`
//   ${heading6Styles}
// `

export {
  Heading1,
  Heading2,
  Heading3,
  // Heading4,
  // Heading5,
  // Heading6,
  heading1Styles,
  heading2Styles,
  heading3Styles,
  // heading4Styles,
  // heading5Styles,
  // heading6Styles,
}
