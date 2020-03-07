import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
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

const Inner = styled.div`
  ${props => props.theme.gridContainer()}
`

const Footer = ({ data }) => {
  const { title } = data.site.siteMetadata

  return (
    <Container>
      <Inner>
        &copy;
        {` `}
        {new Date().getFullYear()}
        {` `}
        &middot;
        {` `}
        {title}
      </Inner>
    </Container>
  )
}

Footer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)
