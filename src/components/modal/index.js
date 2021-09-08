import React, { useRef } from "react"
import ReactModal from "react-modal"
import { RemoveScroll } from "react-remove-scroll"
import PropTypes from "prop-types"
import styled from "styled-components"
import { rem } from "polished"

import { ReactComponent as DeleteSvg } from "../../assets/images/icons/delete.svg"

const Modal = ({
  children,
  onRequestClose,
  title,
  closeOnOutsideClick = true,
}) => {
  const outsideRef = useRef()

  const outsideClick = (e) => {
    if (e.target === outsideRef.current) {
      e.preventDefault()
      onRequestClose(e)
    }
  }

  return (
    <ReactModalStyled
      isOpen={true}
      defaultStyles={{}}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel={title}
    >
      <RemoveScrollStyled
        ref={outsideRef}
        onClick={closeOnOutsideClick ? outsideClick : undefined}
      >
        <Content>
          <div>
            <CloseButton onClick={onRequestClose} title="Close">
              <DeleteSvg aria-label="Close" />
            </CloseButton>

            {children}
          </div>
        </Content>
      </RemoveScrollStyled>
    </ReactModalStyled>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
}

export default Modal

const ReactModalStyled = styled(ReactModal)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: ${({ theme }) => theme.zindex.modal};
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

const RemoveScrollStyled = styled(RemoveScroll)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
  text-align: center;

  /* scrollable vertical centering */
  &::before {
    content: "";
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  /* --- */
`

const CloseButton = styled.button.attrs({ type: `button` })`
  width: ${rem(40)};
  height: ${rem(40)};
  position: absolute;
  z-index: 1;
  top: ${rem(5)};
  right: ${rem(5)};

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  svg {
    width: 100%;
    height: 100%;
    padding: 0.6em;
    display: block;
  }
`

const Content = styled.div`
  ${({ theme }) => theme.grid.container(640)}

  /* scrollable vertical centering */
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  /* --- */

  > div {
    padding: ${rem(50)} ${rem(30)};
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
  }
`
