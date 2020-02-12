import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { startsWith } from "lodash"

const Link = ({ children, to, ...rest }) => {
  const isInternal = /^\/(?!\/)/.test(to)

  if (isInternal) {
    if (
      rest.partiallyActive &&
      typeof window !== `undefined` &&
      window.location.pathname !== `/`
    ) {
      rest.partiallyActive = false
    }

    return (
      <GatsbyLink to={to} {...rest}>
        {children}
      </GatsbyLink>
    )
  }

  if (rest.target && !rest.rel) {
    rest.rel = `noopener noreferrer`
  } else if (startsWith(to, `tel:`) && !rest.rel) {
    rest.rel = `nofollow`
  }

  return (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
}

export default Link
