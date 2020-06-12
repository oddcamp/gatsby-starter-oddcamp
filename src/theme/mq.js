import { em } from "polished"

const breakpoints = {
  xxxsmall: 0,
  xxsmall: 320,
  xsmall: 480,
  small: 640,
  medium: 768,
  large: 960,
  xlarge: 1024,
  xxlarge: 1200,
  xxxlarge: 1400,
  xxxxlarge: 1680,
}

const mq = {}
Object.entries(breakpoints).forEach(([key, val]) => {
  mq[`${key}Down`] = `(max-width: ${em(val)})`
  mq[`${key}Up`] = `(min-width: ${em(val + 1)})`
  mq[`${key}UpEq`] = `(min-width: ${em(val)})`
})

export { mq as default, breakpoints }
