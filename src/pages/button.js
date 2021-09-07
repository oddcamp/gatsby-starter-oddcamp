import styled from "styled-components"
import { rem } from "polished"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Button from "../components/button"
import { Heading1 } from "../components/styled/heading"
import { Paragraph } from "../components/styled/paragraph"

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  > *:not(:last-child) {
    margin-bottom: ${rem(20)};
  }

  ${Heading1} {
    margin-bottom: 0.5em;
  }
`

const ButtonPage = () => {
  return (
    <Layout>
      <Meta data={{ title: `Button` }} />

      <Container>
        <Heading1>Button</Heading1>

        <Paragraph>
          This <code>{`<Button />`}</code> is compiled to{` `}
          <code>button[type="button"]</code>:
        </Paragraph>

        <p>
          <Button type="button">Button button</Button>
        </p>

        <Paragraph>
          And <code>{`<Button />`}</code> is compiled to <code>a[href]</code>:
        </Paragraph>

        <p>
          <Button to="/button">Button link</Button>
        </p>

        <Paragraph>
          This is <code>large</code> button:
        </Paragraph>

        <p>
          <Button to="/button" large={true}>
            I'm slightly larger
          </Button>
        </p>
      </Container>
    </Layout>
  )
}

export default ButtonPage
