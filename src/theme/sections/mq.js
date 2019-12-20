import { em } from "polished"
import bps from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../assets/stylesheets/app/base/_mq.scss'

const breakpoints = bps.mqBreakpoints
const mq = {}

Object.entries(breakpoints).forEach(([key, val]) => {
  mq[`${key}Down`] = `(max-width: ${em(val)})`
  mq[`${key}Up`] = `(min-width: ${em(val + 1)})`
  mq[`${key}UpEq`] = `(min-width: ${em(val)})`
})

export { mq as default, breakpoints }
