/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require(`dotenv`).config({ path: `.env` })

// onCreateWebpackConfig

// exports.onCreateWebpackConfig = ({ actions, getConfig, loaders, stage }) => {
//   const config = getConfig()

//   if (stage === `build-html`) {
//     config.module.rules.push({
//       test: /mapbox-gl|react-mapbox-gl/,
//       use: loaders.null(),
//     })
//   }

//   actions.replaceWebpackConfig(config)
// }
