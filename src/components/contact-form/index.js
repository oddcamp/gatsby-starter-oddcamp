import React, { useState } from "react"
import styled from "styled-components"
import { rem } from "polished"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import Button from "../button"
import Field from "../form/field"

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  champion: Yup.string().required(),
  terms: Yup.boolean().termsAndConditions(),
})

const initialValues = {
  name: ``,
  email: ``,
  champion: ``,
  terms: false,
}

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)

  const submit = (values, { resetForm }) => {
    setSubmitted(values)
    resetForm()
  }

  return (
    <Container>
      {submitted && <Done>Well done, {submitted.name}!</Done>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {() => (
          <Form>
            <Row>
              <Field name="name" label="Name" placeholder="Morgan" />
            </Row>

            <Row>
              <Field
                name="email"
                type="email"
                label="Email"
                placeholder="morgan@free.man"
              />
            </Row>

            <Row>
              <Field
                name="champion"
                component="select"
                label="Champion of the world"
              >
                <option value="">Choose one…</option>
                <option value="1">Farrokh Bulsara</option>
                <option value="2">Ibra</option>
                <option value="3">Ali</option>
                <option value="4">MJ</option>
                <option value="5">jQuery</option>
              </Field>
            </Row>

            <Row>
              <Field
                name="terms"
                type="checkbox"
                label="I accept the privacy policy and terms and conditions"
              />
            </Row>

            <Row>
              <Button type="submit" large="true">
                Submit
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default ContactForm

const Row = styled.div`
  margin-top: 1em;
`

const Done = styled.p`
  padding: 1.5em;
  background-color: rebeccapurple;
  color: ${({ theme }) => theme.colors.white};
`

const Container = styled.div`
  width: 100%;
  max-width: ${rem(640)};
  padding: 2em;
  border: 2px solid;
`
