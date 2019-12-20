/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// triggers `onRouteChange` event for `window` on route change

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (location && prevLocation) {
    window.dispatchEvent(new window.Event(`onRouteChange`))
  }
}
