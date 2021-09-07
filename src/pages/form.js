import styled from "styled-components"

import Layout from "../components/layout"
import Meta from "../components/meta"
import ContactForm from "../components/contact-form"
import { Heading1 } from "../components/styled/heading"

const Container = styled.article`
  ${({ theme }) => theme.grid.container()}

  ${Heading1} {
    margin-bottom: 0.5em;
  }
`

const FormPage = () => {
  return (
    <Layout>
      <Meta data={{ title: `Form` }} />

      <Container>
        <Heading1>Form</Heading1>

        <ContactForm />
      </Container>
    </Layout>
  )
}

export default FormPage
