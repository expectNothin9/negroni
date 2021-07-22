import styled from 'styled-components'

const StyledGrid = styled.div`
  background-color: var(--surface-dark);
  color: var(--on-surface);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  &.column-1 {
    background-color: var(--primary);
  }
  &.column-6 {
    background-color: var(--primary);
  }
`
const Grid = ({ row, column }) => <StyledGrid className={`row-${row} column-${column}`} />
const GridBox = styled.div`
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 8px 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
`
const grids = {
  rows: [
    { id: 1, columns: [1, 2, 3, 4, 5, 6, 7] },
    { id: 2, columns: [1, 2, 3, 4, 5, 6, 7] },
    { id: 3, columns: [1, 2, 3, 4, 5, 6, 7] },
    { id: 4, columns: [1, 2, 3, 4, 5, 6, 7] }
  ]
}
const Table = () => {
  return (
    <GridBox className="table">
      {grids.rows.map((row) =>
        row.columns.map((columnId) => (
          <Grid key={`${row.id}-${columnId}`} row={row.id} column={columnId} />
        ))
      )}
    </GridBox>
  )
}

export default Table
