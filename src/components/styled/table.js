import styled, { css } from "styled-components"

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  word-break: break-word;

  thead {
    text-transform: uppercase;
    font-size: 0.875em;
  }

  tfoot {
    color: rgba(0, 0, 0, 0.7);
  }

  tr {
    & + tr {
      border-top: 1px solid;
    }
  }

  th {
    text-align: left;
    padding: 0.5em;
    border-bottom: 1px solid;
  }

  td {
    padding: 0.5em;
  }
`

const Table = styled.table`
  ${tableStyles}
`

export { Table, tableStyles }
