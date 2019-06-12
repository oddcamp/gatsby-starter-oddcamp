// eslint-disable-next-line import/no-webpack-loader-syntax
import bps from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../assets/stylesheets/app/base/_mq.scss';
import { em } from 'polished';

const breakpoints = bps.mqBreakpoints;
const mq = {};

Object.entries(breakpoints).forEach(([key, val]) => {
  mq[`${key}Down`] = `(max-width: ${em(val)})`;
  mq[`${key}Up`]   = `(min-width: ${em(val+1)})`;
});

export {
  mq as default,
  breakpoints,
};
