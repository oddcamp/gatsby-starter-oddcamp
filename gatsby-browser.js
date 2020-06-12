/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = ({ location, prevLocation }) => {
  // checks if route has changed
  if (location && prevLocation) {
    // triggers `onRouteChange` event for `window`
    const event = document.createEvent(`Event`)
    event.initEvent(`onRouteChange`, true, true)
    window.dispatchEvent(event)

    // tracks the pageview in GTM
    if (window.trackingUtil && window.trackingUtil.trackingAccepted()) {
      window.trackingUtil.registerGTMdata({ event: `pageview` })
    }
  }
}
