import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Location } from "@reach/router"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Link from "../components/link"
import ContactForm from "../components/contact-form"
import Modal from "../components/modal"
import Styled from "../components/styled"
import { Anchor } from "../components/styled/anchor"

const ContactFormStyled = styled(ContactForm)``

const Container = styled.div`
  ${({ theme }) => theme.grid.container()}

  ${ContactFormStyled} {
    margin-top: 4em;
  }
`

const AboutPage = ({ data: { metaSite } }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <Layout>
      <Container>
        <Meta
          metaSite={metaSite}
          data={{ title: `About`, description: `This is the about us page.` }}
        />

        <Styled as="article">
          <h1>About</h1>

          <p>
            This is about us page. Go back to the <Link to="/">homepage</Link>
            {` `}
            or
            {` `}
            <Anchor
              as="button"
              type="button"
              onClick={() => setModalOpen(!isModalOpen)}
            >
              open the modal
            </Anchor>
            .
          </p>

          <p>
            Share <em>current</em> page on:
          </p>

          <Location>
            {({ location }) => {
              const pageUrl = metaSite.fields.baseUrl + location.pathname

              return (
                <ul>
                  <li>
                    <Link
                      target="_blank"
                      rel="nofollow noopener"
                      to={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
                    >
                      Share on Facebook
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      rel="nofollow noopener"
                      to={`https://twitter.com/intent/tweet/?url=${pageUrl}`}
                    >
                      Share on Twitter
                    </Link>
                  </li>

                  <li>
                    <Link
                      target="_blank"
                      rel="nofollow noopener"
                      to={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`}
                    >
                      Share on LinkedIn
                    </Link>
                  </li>
                </ul>
              )
            }}
          </Location>
        </Styled>

        <ContactFormStyled />

        {isModalOpen && (
          <Modal closeClick={() => setModalOpen(false)}>
            <div className="styled">
              <h2 className="do-unstyle styled-h1">Hi!</h2>
              <p>There.</p>
            </div>
          </Modal>
        )}
      </Container>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object,
}

export default AboutPage

export const pageQuery = graphql`
  query {
    ...MetaSiteFragment
  }
`
