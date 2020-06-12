import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import Button from "./button"
import Field from "./form/field"
import { Heading2 } from "./styled/heading"

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

const Row = styled.div`
  margin-top: 1em;
`

const Done = styled.p`
  margin-top: 1em;
`

const Container = styled.div`
  width: 100%;
  max-width: ${rem(640)};
  padding: 2em;
  border: 2px solid;
`

class ContactForm extends React.Component {
  name = ``

  state = {
    submitted: false,
  }

  submit = (formData) => {
    this.name = formData.name
    this.setState({ submitted: true })
  }

  render() {
    const { className } = this.props
    const { submitted } = this.state

    return (
      <Container className={className}>
        <Heading2>Contact us</Heading2>

        {submitted && <Done>Well done, {this.name}!</Done>}

        {!submitted && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={this.submit}
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
                  <Button type="submit" large>
                    Do it
                  </Button>
                </Row>
              </Form>
            )}
          </Formik>
        )}
      </Container>
    )
  }
}

ContactForm.propTypes = {
  className: PropTypes.string,
}

export default ContactForm
