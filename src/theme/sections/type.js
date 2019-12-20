import type from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../assets/stylesheets/app/base/_type.scss'
import { css } from "styled-components"
import { capitalize } from "lodash"

type.ffPrimarySet = (weight = `normal`) => css`
  font-family: ${props => props.theme.ffPrimary};
  font-weight: ${props => props.theme[`fwPrimary${capitalize(weight)}`]};
`

type.ffSecondarySet = (weight = `normal`) => css`
  font-family: ${props => props.theme.ffSecondary};
  font-weight: ${props => props.theme[`fwSecondary${capitalize(weight)}`]};
`

export default type
