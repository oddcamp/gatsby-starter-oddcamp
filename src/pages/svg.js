import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Meta from "../components/meta"
import { Heading1 } from "../components/styled/heading"
import logoSvgUrl, {
  ReactComponent as LogoSvg,
} from "../assets/images/logo.svg"

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  > *:not(:last-child) {
    margin-bottom: ${rem(20)};
  }

  ${Heading1} {
    margin-bottom: 0.5em;
  }

  img,
  svg {
    width: ${rem(80)};
    height: ${rem(80)};
  }
`

const SvgPage = ({ data: { metaSite } }) => {
  return (
    <Layout>
      <Meta metaSite={metaSite} data={{ title: `SVG` }} />

      <Container>
        <Heading1>SVG</Heading1>

        <p>This SVG is inlined:</p>

        <p>
          <LogoSvg aria-label="Logo inlined" />
        </p>

        <p>
          And this is inserted via <code>{`<img />`}</code> tag:
        </p>

        <p>
          <img src={logoSvgUrl} alt="Logo via Img tag" />
        </p>
      </Container>
    </Layout>
  )
}

SvgPage.propTypes = {
  data: PropTypes.object,
}

export default SvgPage

export const pageQuery = graphql`
  query {
    ...MetaSiteFragment
  }
`
