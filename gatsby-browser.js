/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export function onRouteUpdate({ location, prevLocation }) {
  // checks if route has changed
  if (location && prevLocation) {
    // triggers `onRouteChange` event for `window`
    const event = document.createEvent(`Event`)
    event.initEvent(`onRouteChange`, true, true)
    window.dispatchEvent(event)

    // tracks the pageview in GTM
    if (window.trackingUtil && window.trackingUtil.trackingAccepted()) {
      window.trackingUtil.registerGTMdata({ event: `gatsby-page-view` })
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
