import React from "react"
import { createContext, useState } from "react"
import PropTypes from "prop-types"

const StoreContext = createContext()
const StoreConsumer = StoreContext.Consumer

const StoreProvider = ({ children }) => {
  const [headerInverted, setHeaderInverted] = useState(false)

  return (
    <StoreContext.Provider
      value={{
        headerInverted,
        setHeaderInverted,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node,
}

export { StoreContext, StoreProvider, StoreConsumer }
