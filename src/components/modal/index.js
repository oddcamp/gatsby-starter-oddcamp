import React from "react"
import ReactModal from "react-modal"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { rem, rgba } from "polished"

ReactModal.setAppElement(`body`)

const animContainer = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`

const Container = styled.div`
  height: 100vh;
  padding: ${rem(80)};
  padding-bottom: ${rem(240)};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  animation: ${animContainer} 0.25s linear;
`

const Close = styled.div`
  margin-top: 2em;
  padding-top: 2em;
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.black, 0.2)};
`

const Modal = ({ children, closeClick }) => {
  return (
    <ReactModal isOpen={true}>
      <Container>
        {children}

        <Close>
          <button type="button" className="styled-a" onClick={closeClick}>
            Close
          </button>
        </Close>
      </Container>
    </ReactModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  closeClick: PropTypes.func,
}

export default Modal
