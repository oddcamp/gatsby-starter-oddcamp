import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { rem } from "polished"

import { StoreConsumer } from "../store"
import Link from "../components/link"
import Button from "../components/button"

import logoSvgUrl, {
  ReactComponent as LogoSvg,
} from "../assets/images/logo.svg"

const Container = styled.article.attrs({ className: `styled` })`
  ${props => props.theme.gridContainer()}

  .gatsby-image-wrapper {
    max-width: ${rem(800)};
  }

  .-svg-logo {
    width: ${rem(60)};
    height: ${rem(60)};
  }
`

const IndexPage = ({ data }) => {
  const { imgDummy } = data

  return (
    <Container>
      <h1>Hi!</h1>

      <p>
        Why don’t you checkout the <Link to="/about">about us</Link> page…
      </p>

      <StoreConsumer>
        {({ headerInverted, setHeaderInverted }) => (
          <p>
            You can also
            {` `}
            <button
              type="button"
              className="styled-a"
              onClick={() => setHeaderInverted(!headerInverted)}
            >
              invert the header
            </button>
            {` `}
            color theme.
          </p>
        )}
      </StoreConsumer>

      <hr />

      <h2>Gatsby image</h2>

      <Img
        fluid={imgDummy.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Dummy image"
      />

      <h2>SVG</h2>

      <p>This SVG is inlined:</p>

      <p>
        <LogoSvg aria-label="Logo inlined" className="-svg-logo" />
      </p>

      <p>
        And this is inserted via <code>{`<img />`}</code> tag:
      </p>

      <img src={logoSvgUrl} alt="Logo via Img tag" className="-svg-logo" />

      <h2>Button</h2>

      <p>
        This <code>{`<Button />`}</code> is compiled to{` `}
        <code>button[type="button"]</code>:
      </p>

      <p>
        <Button type="button" className="do-unstyle">
          Button button
        </Button>
      </p>

      <p>
        And <code>{`<Button />`}</code> is compiled to <code>a[href]</code>:
      </p>

      <p>
        <Button to="/" className="do-unstyle">
          Button link
        </Button>
      </p>
    </Container>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        imgDummy: file(
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "dummy.jpg" }
        ) {
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
