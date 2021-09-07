import React from "react"
import { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Meta from "../components/meta"
import Modal from "../components/modal"
import Styled from "../components/styled"
import { Anchor } from "../components/styled/anchor"

const Container = styled.div`
  ${({ theme }) => theme.grid.container()}
`

const ModalPage = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <Layout>
      <Meta data={{ title: `Modal` }} />

      <Container>
        <Styled as="article">
          <h1>Modal</h1>

          <p>
            <Anchor
              as="button"
              type="button"
              onClick={() => setModalOpen(!isModalOpen)}
            >
              Open the modal
            </Anchor>
            .
          </p>
        </Styled>
      </Container>

      {isModalOpen && (
        <Modal onRequestClose={() => setModalOpen(false)} title="Modal">
          <Styled>
            <h2>Hi</h2>
            <p>I’m a modal.</p>
          </Styled>
        </Modal>
      )}
    </Layout>
  )
}

export default ModalPage
