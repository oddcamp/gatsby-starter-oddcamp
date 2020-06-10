/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "element-closest"

export function onRouteUpdate({ location, prevLocation }) {
  if (location && prevLocation) {
    // triggers `onRouteChange` event for `window` on route change
    const event = document.createEvent(`Event`)
    event.initEvent(`onRouteChange`, true, true)
    window.dispatchEvent(event)

    // tracks GatsbyJS page views
    if (window.trackingUtil && window.trackingUtil.trackingAccepted()) {
      window.trackingUtil.runGAcommand([`send`, `pageview`])
      // window.trackingUtil.registerGTMdata({ event: `pageview` })
    }
  }
}

export function onClientEntry() {
  // tracks clicks
  document.addEventListener(`click`, (e) => {
    if (!window.trackingUtil || !window.trackingUtil.trackingAccepted()) {
      return null
    }

    const trigger = e.target.closest(`[data-track-click]`)
    if (trigger) {
      const {
        trackClickGaCategory,
        trackClickGaAction,
        trackClickGaLabel,
      } = trigger.dataset

      window.trackingUtil.runGAcommand([
        `send`,
        `event`,
        {
          eventCategory: trackClickGaCategory,
          eventAction: trackClickGaAction,
          eventLabel: trackClickGaLabel,
        },
      ])

      // window.trackingUtil.registerGTMdata({
      //   category: trackClickGaCategory,
      //   action: trackClickGaAction,
      //   label: trackClickGaLabel,
      // })
    }

    return true
  })
}
