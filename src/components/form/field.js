import React from "react"
import PropTypes from "prop-types"
import uuid from "uuid-random"
import styled, { css, keyframes } from "styled-components"
import { rem, rgba } from "polished"
import { Field, ErrorMessage, connect, getIn } from "formik"

const animError = keyframes`
  0% { transform: translateY(-1em); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  input:not([type=checkbox]):not([type=radio]),
  select,
  textarea {
    width: 100%;
    padding: 0 0.8em;
    display: block;
    font-size: ${rem(18)};
    line-height: 1.333;
    border: 1px solid ${props => props.theme.colorBlack};
    border-bottom-width: 2px;
    background-color: ${props => props.theme.colorWhite};

    &:active {
      border-color: ${props => props.theme.colorBlack};
    }

    &::placeholder {
      color: ${props => rgba(props.theme.colorBlack, 0.4)};
    }
  }

  input:not([type=checkbox]):not([type=radio]),
  select {
    height: 2.7em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  select {
    padding-right: 1em;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: top 1.1em right;
    background-size: 0.6em;
    background-image: url("data:image/svg+xml,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
        <path d="M5 6l-5-6h10z" fill="#fff"/>
      </svg>
    `)}");

    &.--placeholder {
      color: ${props => rgba(props.theme.colorBlack, 0.4)};
    }
  }

  textarea {
    height: 5em;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
  }

  .-error {
    margin-top: 1em;
    flex: 1 0 100%;

    div {
      font-size: 0.875em;
      padding: 0.3em 0.5em;
      display: inline-block;
      position: relative;
      color: ${props => props.theme.colorWhite};
      background-color: ${props => props.theme.colorBlack};
      animation: ${animError} 0.5s ${props => props.theme.easingOutBack};

      &::before {
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        left: 0.5em;
        bottom: 100%;
        border: 0.4em solid transparent;
        border-top: none;
        border-bottom-color: ${props => props.theme.colorBlack};
      }
    }
  }

  ${props =>
    ![`checkbox`, `radio`].includes(props.type) &&
    css`
      label {
        margin-bottom: 0.5em;
        text-transform: uppercase;
        font-size: 0.875em;
        font-weight: ${props => props.theme.fwPrimaryBold};
        color: ${props => props.theme.colorBlack};
      }
    `}

  ${props =>
    [`checkbox`, `radio`].includes(props.type) &&
    css`
      display: flex;
      align-items: center;

      label {
        cursor: pointer;
        order: 2;
      }

      input {
        order: 1;
        width: 1em;
        height: 1em;
        margin-right: 0.5em;
        display: inline-block;
        background-color: ${props => props.theme.colorWhite};
        border: 1px solid ${props => props.theme.colorBlack};
        border-bottom-width: 2px;

        &:checked {
          background-color: ${props => props.theme.colorBlack};
        }
      }

      .-error {
        order: 3;
      }
    `}

  ${props =>
    props.type === `radio` &&
    css`
      input {
        border-radius: 50%;
      }
    `}
`

class TheField extends React.Component {
  componentDidMount() {
    if (this.props.component === `select`) {
      this.trackSelectState()
      this.el.addEventListener(`change`, this.trackSelectState, {
        passive: true,
      })
      this.el.addEventListener(`blur`, this.trackSelectState, { passive: true })
    }
  }

  trackSelectState = () => {
    this.el.classList.toggle(`--placeholder`, !this.el.value)
  }

  render() {
    const id = uuid()
    const errorId = `${id}-error`

    const { label, className, formik, ...rest } = this.props

    const hasErrors =
      getIn(formik.errors, this.props.name) &&
      getIn(formik.touched, this.props.name)

    return (
      <Container
        className={className}
        type={this.props.type || this.props.component}
      >
        <label htmlFor={id}>{label}</label>

        <Field
          innerRef={n => (this.el = n)}
          id={id}
          aria-invalid={hasErrors ? `true` : undefined}
          aria-describedby={hasErrors ? errorId : undefined}
          {...rest}
        />

        <ErrorMessage
          name={this.props.name}
          render={msg => (
            <div className="-error" id={errorId}>
              <div>{msg}</div>
            </div>
          )}
        />
      </Container>
    )
  }
}

TheField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  component: PropTypes.string,
  className: PropTypes.string,
  formik: PropTypes.object,
}

export default connect(TheField)
