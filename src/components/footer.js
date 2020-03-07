import React from "react"
import styled from "styled-components"
import { rem } from "polished"

const Container = styled.footer`
  margin-top: ${rem(80)};
  padding: ${rem(80)} ${rem(40)} ${rem(160)};
  border-top: 4px solid ${props => props.theme.colorBlack};

  @media ${props => props.theme.mediumDown} {
    margin-top: ${rem(40)};
    padding: ${rem(40)} ${rem(20)} ${rem(80)};
  }
`

const Footer = () => {
  return <Container>&copy; {new Date().getFullYear()}</Container>
}

export default Footer
