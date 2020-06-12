// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
//
// import Layout from "../components/layout"
// import MetaWp from "../components/meta-wp"
//
// const AboutTemplate = ({ data }) => {
//   const { wp, metaWp } = data
//
//   return (
//     <Layout>
//       <MetaWp wp={metaWp} />
//
//       <p>Hello from {wp.title}</p>
//     </Layout>
//   )
// }
//
// AboutTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// }
//
// export default AboutTemplate
//
// export const pageQuery = graphql`
//   query($id: String!) {
//     ...MetaWpPage
//
//     wp: wordpressPage(id: { eq: $id }) {
//       title
//     }
//   }
// `
