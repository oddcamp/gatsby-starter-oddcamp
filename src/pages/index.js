import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { rem } from "polished"

import Link from "../components/link"

import logoSvgUrl, {
  ReactComponent as LogoSvg,
} from "../assets/images/logo.svg"

const Article = styled.article.attrs({ className: `styled` })`
  .gatsby-image-wrapper {
    max-width: ${rem(800)};
  }

  .-svg-logo {
    width: ${rem(60)};
    height: ${rem(60)};
  }
`

const IndexPage = ({ data }) => (
  <React.Fragment>
    <Article>
      <h1>Hi!</h1>

      <p>
        Read <Link to="/about">about us</Link>.
      </p>

      <hr />

      <h2>Gatsby image</h2>

      <p>
        <Img fluid={data.imgDummy.childImageSharp.fluid} />
      </p>

      <h2>SVG</h2>

      <p>This SVG is inlined:</p>

      <p>
        <LogoSvg aria-label="Logo inlined" className="-svg-logo" />
      </p>

      <p>
        And this is inserted via <code>{`<img />`}</code> tag:
      </p>

      <p>
        <img src={logoSvgUrl} alt="Logo via Img tag" className="-svg-logo" />
      </p>
    </Article>
  </React.Fragment>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        imgDummy: file(relativePath: { eq: "dummy.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
)
