import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import uuid from "uuid-random"
import styled, { css } from "styled-components"
import { rem, rgba } from "polished"
import { Field as FormikField, ErrorMessage, connect, getIn } from "formik"

const Field = (props) => {
  const fieldRef = useRef()

  const trackSelectState = () => {
    fieldRef.current.classList.toggle(`--placeholder`, !fieldRef.current.value)
  }

  useEffect(() => {
    if (props.component === `select`) {
      trackSelectState()
      fieldRef.current.addEventListener(`change`, trackSelectState)
      fieldRef.current.addEventListener(`blur`, trackSelectState)
    }
  })

  const id = uuid()
  const errorId = `${id}-error`
  const { label, className, formik, ...rest } = props
  const hasErrors =
    getIn(formik.errors, props.name) && getIn(formik.touched, props.name)

  return (
    <Container className={className} type={props.type || props.component}>
      <label htmlFor={id}>{label}</label>

      <FormikField
        innerRef={fieldRef}
        id={id}
        aria-invalid={hasErrors ? `true` : undefined}
        aria-describedby={hasErrors ? errorId : undefined}
        {...rest}
      />

      <ErrorMessage
        name={props.name}
        render={(msg) => (
          <div className="-error" id={errorId}>
            <div>{msg}</div>
          </div>
        )}
      />
    </Container>
  )
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  component: PropTypes.string,
  className: PropTypes.string,
  formik: PropTypes.object,
}

export default connect(Field)

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  input:not([type="checkbox"]):not([type="radio"]),
  select,
  textarea {
    width: 100%;
    padding: 0 0.8em;
    display: block;
    font-size: ${rem(18)};
    line-height: 1.333;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-bottom-width: 2px;
    background-color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => rgba(theme.colors.black, 0.4)};
    }
  }

  input:not([type="checkbox"]):not([type="radio"]),
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

    &.\\--placeholder {
      color: ${({ theme }) => rgba(theme.colors.black, 0.4)};
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
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black};
      animation: 0.5s ${({ theme }) => theme.easings.default};
      animation-name: ${({ theme }) => theme.animations.fadeIn},
        ${({ theme }) => theme.animations.slideInY(5)};

      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        left: 0.5em;
        bottom: 100%;
        border: 0.4em solid transparent;
        border-top: none;
        border-bottom-color: ${({ theme }) => theme.colors.black};
      }
    }
  }

  ${({ type }) =>
    ![`checkbox`, `radio`].includes(type) &&
    css`
      label {
        ${({ theme }) => theme.fonts.set(`primary`, `bold`)};

        margin-bottom: 0.5em;
        text-transform: uppercase;
        font-size: 0.875em;
      }
    `}

  ${({ type }) =>
    [`checkbox`, `radio`].includes(type) &&
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
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.black};
        border-bottom-width: 2px;

        &:checked {
          background-color: ${({ theme }) => theme.colors.black};
        }
      }

      .-error {
        order: 3;
      }
    `}

  ${({ type }) =>
    type === `radio` &&
    css`
      input {
        border-radius: 50%;
      }
    `}
`
