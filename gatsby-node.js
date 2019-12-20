/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
