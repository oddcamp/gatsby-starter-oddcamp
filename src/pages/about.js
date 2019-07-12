import React from "react"
import PropTypes from "prop-types"
// import styled from 'styled-components'
// import { rem } from 'polished'

import Layout from "../components/layout"
import Link from "../components/link"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="This is the about us page."
    />

    <article className="styled">
      <h1>About</h1>

      <p>
        This is about us page. Go back to the <Link to="/">homepage</Link>.
      </p>
    </article>
  </Layout>
)

export default AboutPage

AboutPage.propTypes = {
  data: PropTypes.object,
}
