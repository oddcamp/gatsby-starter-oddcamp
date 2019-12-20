// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
//
// import MetaWp from "../components/meta-wp"
//
// import "../fragments/meta-wp-post"
//
// const PostTemplate = ({ data }) => {
//   const { wp, metaWp } = data
//
//   return (
//     <React.Fragment>
//       <MetaWp wp={metaWp} />
//
//       <p>Hello from {wp.title}</p>
//     </React.Fragment>
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
