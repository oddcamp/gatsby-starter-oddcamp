// import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
//
// import MetaWp from "../components/meta-wp"
//
// import "../fragments/meta-wp-page"
//
// const AboutTemplate = ({ data }) => {
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
