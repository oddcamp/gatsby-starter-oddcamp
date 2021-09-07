import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"

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

const FormPage = ({ data: { metaSite } }) => {
  return (
    <Layout>
      <Meta metaSite={metaSite} data={{ title: `Form` }} />

      <Container>
        <Heading1>Form</Heading1>

        <ContactForm />
      </Container>
    </Layout>
  )
}

FormPage.propTypes = {
  data: PropTypes.object,
}

export default FormPage

export const pageQuery = graphql`
  query {
    ...MetaSiteFragment
  }
`
