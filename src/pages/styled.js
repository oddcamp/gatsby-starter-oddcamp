import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Styled from "../components/styled"
import { Heading2, heading2Styles } from "../components/styled/heading"
import { Paragraph, paragraphStyles } from "../components/styled/paragraph"

const StyledPage = () => {
  return (
    <Layout>
      <Meta data={{ title: `Styled` }} />

      <Container>
        <div>
          <Styled as="section">
            <h1>Styled</h1>

            <p>
              “Styled” is a collection of typographic components. And you can
              use them in multiple ways — whatever suits best your situation…
            </p>
          </Styled>

          <Styled as="section">
            <h2>Main wrapper</h2>

            <p>
              Firstly, you can wrap the content with
              {` `}
              <code>{`<Styled>`}</code>, which styles all sorts of HTML tags.
              This is useful for displaying blog posts, articles and such.
            </p>

            <h3>Heading number three</h3>

            <ul>
              <li>Unordered list item 1</li>
              <li>Unordered list item 2</li>
            </ul>

            <ol>
              <li>Ordered list item 1</li>
              <li>Ordered list item 2</li>
            </ol>

            <p>
              Paragraph and an <a href="/">anchor</a> and a horizontal line:
            </p>

            <hr />

            <blockquote>
              <p>And this is the quote by…</p>

              <footer>Some famous person</footer>
            </blockquote>

            <table>
              <thead>
                <tr>
                  <th>Col 1</th>

                  <th>Col 2</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Cell 1</td>

                  <td>Cell 2</td>
                </tr>
              </tbody>
            </table>

            <p>
              You can also exclude an element from styling by attaching a{` `}
              <code>--unstyled</code> classname:{` `}
              <a href="/" className="--unstyled">
                [I am un unstyled anchor]
              </a>
              .
            </p>
          </Styled>

          <Tags>
            <Heading2>Tags</Heading2>

            <Paragraph>
              You can separately import components (e.g.{` `}
              <code>{`<Heading1>`}</code>,{` `}
              <code>{`<Paragraph>`}</code>, etc.) for HTML tags and style them
              one by one like this. You can take the advantage of Styled
              Components and write semantic code:
            </Paragraph>

            <Paragraph as="h3">
              This is <code>{`<h3>`}</code> element looking like{` `}
              <code>{`<Paragraph>`}</code>.
            </Paragraph>
          </Tags>

          <Styles>
            <h2>Styles</h2>

            <p>
              Besides importing components, you can also import their CSS codes
              and insert them in your custom component. Though you should only
              use aporoach as a last resort.
            </p>
          </Styles>
        </div>
      </Container>
    </Layout>
  )
}

export default StyledPage

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  > div {
    max-width: ${rem(768)};

    > * + * {
      margin-top: ${rem(40)};
    }
  }
`

const Tags = styled.section`
  > * + * {
    margin-top: ${rem(20)};
  }
`

const Styles = styled.section`
  > * + * {
    margin-top: ${rem(20)};
  }

  h2 {
    ${heading2Styles}
  }

  p {
    ${paragraphStyles}
  }
`
