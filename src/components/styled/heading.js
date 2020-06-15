import styled, { css } from "styled-components"
import { rem } from "polished"

const heading1Styles = css`
  ${({ theme }) => theme.fonts.set(`secondary`, `normal`)}

  font-size: ${rem(56)};
  line-height: 1.1;
  word-break: break-word;

  @media ${({ theme }) => theme.mq.mediumDown} {
    font-size: ${rem(24)};
  }
`

const heading2Styles = css`
  ${({ theme }) => theme.fonts.set(`secondary`, `normal`)}

  font-size: ${rem(34)};
  line-height: 1.1;
  letter-spacing: -0.02em;
  word-break: break-word;

  @media ${({ theme }) => theme.mq.mediumDown} {
    font-size: ${rem(20)};
  }
`

const heading3Styles = css`
  ${({ theme }) => theme.fonts.set(`secondary`, `normal`)}

  font-size: ${rem(24)};
  line-height: 1.2;
  letter-spacing: -0.02em;
  word-break: break-word;

  @media ${({ theme }) => theme.mq.mediumDown} {
    font-size: ${rem(18)};
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
//   ${heading3Styles}
// `

// const Heading5 = styled.h5`
//   ${heading3Styles}
// `

// const Heading6 = styled.h6`
//   ${heading3Styles}
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
