// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import MetaWp from "../components/meta-wp"

// const IndexTemplate = ({ data }) => {
//   const { wp, metaWp } = data

//   return (
//     <Layout>
//       <MetaWp wp={metaWp} />

//       <p>Hello from {wp.title}</p>
//     </Layout>
//   )
// }

// IndexTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// }

// export default IndexTemplate

// export const pageQuery = graphql`
//   query($id: String!) {
//     ...MetaWpPage

//     wp: wordpressPage(id: { eq: $id }) {
//       title
//     }
//   }
// `
