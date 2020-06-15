import React from "react"
import { Location } from "@reach/router"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { startsWith } from "lodash"
import filterInvalidDOMProps from "filter-invalid-dom-props"

const Link = ({ children, to, internal, ...rest }) => {
  if (typeof internal === `undefined`) {
    internal = /^\/(?!\/)/.test(to)
  }

  if (internal) {
    return (
      <Location>
        {({ location }) => {
          if (rest.partiallyActive && location.pathname !== `/`) {
            rest.partiallyActive = false
          }

          return (
            <GatsbyLink to={to} {...rest}>
              {children}
            </GatsbyLink>
          )
        }}
      </Location>
    )
  }

  if (rest.target && !rest.rel) {
    rest.rel = `noopener`
  } else if (startsWith(to, `tel:`) && !rest.rel) {
    rest.rel = `nofollow`
  }

  return (
    <a href={to} {...filterInvalidDOMProps(rest)}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  internal: PropTypes.bool,
}

export default Link
