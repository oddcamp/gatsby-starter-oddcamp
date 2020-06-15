// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
//
// import Layout from "../components/layout"
// import MetaWp from "../components/meta-wp"
//
// const PostTemplate = ({ data }) => {
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
// PostTemplate.propTypes = {
//   data: PropTypes.object.isRequired,
// }
//
// export default PostTemplate
//
// export const pageQuery = graphql`
//   query($id: String!) {
//     ...MetaWpPost
//
//     wp: wordpressPost(id: { eq: $id }) {
//       title
//     }
//   }
// `
