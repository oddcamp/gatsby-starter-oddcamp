import React from "react"
import PropTypes from "prop-types"

const StoreContext = React.createContext()
const StoreConsumer = StoreContext.Consumer

class StoreProvider extends React.Component {
  state = {
    headerInverted: false,
  }

  render() {
    const { headerInverted } = this.state

    const { setHeaderInverted } = this

    return (
      <StoreContext.Provider
        value={{
          headerInverted,
          setHeaderInverted,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    )
  }

  setHeaderInverted = val => {
    this.setState({ headerInverted: val })
  }
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { StoreContext, StoreProvider, StoreConsumer }
