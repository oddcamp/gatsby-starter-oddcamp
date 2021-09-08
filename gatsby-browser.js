/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export function onRouteUpdate({ location, prevLocation }) {
  // checks if route has changed
  if (location && prevLocation) {
    // triggers `gatsbyRouteChange` event for `window`
    const event = document.createEvent(`Event`)
    event.initEvent(`gatsbyRouteChange`, true, true)
    window.dispatchEvent(event)
  }
}
