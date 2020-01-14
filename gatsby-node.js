/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require(`path`)
// const slash = require(`slash`)

// -----------------------------------------------------------------------------
// onCreateWebpackConfig

exports.onCreateWebpackConfig = ({ getConfig, actions, stage, loaders }) => {
  const config = getConfig()

  // remove default file loader rules for fonts
  config.module.rules = [
    ...config.module.rules.filter(rule => !String(rule.test).includes(`woff`)),
  ]

  // add base64-font-loader
  config.module.rules.push({
    loader: `base64-font-loader`,
    include: /assets\/fonts/,
    test: /\.(woff|woff2)$/i,
  })

  // nullify loaders for some packages
  // if (stage === `build-html`) {
  //   config.module.rules.push({
  //     test: /mapbox-gl|react-mapbox-gl/,
  //     use: loaders.null(),
  //   })
  // }

  actions.replaceWebpackConfig(config)
}

// -----------------------------------------------------------------------------
// createPages

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//
//   const { data } = await graphql(`
//     query {
//       wpPages: allWordpressPage(
//         filter: { slug: { regex: "/^((?!(^_gatsbydummy)).)*$/i" } }
//       ) {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//
//       wpPosts: allWordpressPost(
//         filter: { slug: { regex: "/^((?!(^_gatsbydummy)).)*$/i" } }
//       ) {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//   `)
//
//   const templates = {
//     default: `./src/templates/default.js`,
//     home: `./src/templates/home.js`,
//     about: `./src/templates/about.js`,
//     post: `./src/templates/post.js`,
//   }
//
//   // pages
//
//   const pageSlugsToTemplates = {
//     home: `home`,
//     about: `about`,
//   }
//
//   data.wpPages.edges.forEach(edge => {
//     const template =
//       templates[pageSlugsToTemplates[edge.node.slug] || `default`]
//
//     createPage({
//       path: edge.node.slug === `home` ? `/` : edge.node.slug,
//       component: slash(path.resolve(template)),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
//
//   // posts
//
//   data.wpPosts.edges.forEach(edge => {
//     createPage({
//       path: `/posts/${edge.node.slug}`,
//       component: slash(path.resolve(templates.posts)),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }
