import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ children, to, activeClassName, ...other }) => {
  const isInternal = /^\/(?!\/)/.test(to)

  if (isInternal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  if (other.target && !other.rel) {
    other.rel = `noopener noreferrer`
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  activeClassName: PropTypes.string,
}

export default Link
