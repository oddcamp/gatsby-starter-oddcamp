import React from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { rem, rgba } from "polished"

import colors from "../theme/sections/colors"
import zIndexes from "../theme/sections/zindex"

ReactModal.setAppElement(`#___gatsby`)

const animContainer = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`

const customStyles = {
  // http://reactcommunity.org/react-modal/styles/
  overlay: {
    position: `fixed`,
    zIndex: zIndexes.ziModal,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `transparent`,
  },
  content: {
    padding: 0,
    position: `static`,
    overflow: `visible`,
    WebkitOverflowScrolling: `auto`,
    outline: `none`,
    borderRadius: 0,
    border: `none`,
    background: `transparent`,
    color: colors.colorWhite,
  },
}

const Container = styled.div`
  height: 100vh;
  padding: ${rem(80)};
  padding-bottom: ${rem(240)};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  color: ${props => props.theme.colorWhite};
  background-color: ${props => props.theme.colorBlue};
  animation: ${animContainer} 0.25s linear;
`

const Close = styled.div`
  margin-top: 2em;
  padding-top: 2em;
  border-top: 1px solid ${props => rgba(props.theme.colorBlack, 0.2)};
`

const Modal = props => (
  <ReactModal style={customStyles} isOpen={true}>
    <Container>
      {props.children}

      <Close>
        <button type="button" className="styled-a" onClick={props.closeClick}>
          Close
        </button>
      </Close>
    </Container>
  </ReactModal>
)

Modal.propTypes = {
  children: PropTypes.node,
  closeClick: PropTypes.func,
}

export default Modal
