import { useSelector } from 'react-redux'
import styled from 'styled-components'

import Icon from '../Icon'
import Card from './Card'

const StyledGrid = styled.div`
  background-color: var(--surface-dark);
  color: var(--on-surface);
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
  &.column-1 {
    background-color: var(--primary);
  }
  i {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 48px;
    color: var(--background);
  }
`
const Grid = ({ row, column, children }) => (
  <StyledGrid className={`row-${row} column-${column}`}>
    {column === 6 && <Icon type="warning" />}
    {children}
  </StyledGrid>
)
const GridBox = styled.div`
  padding: var(--gap);
  display: grid;
  grid-template-columns: var(--card-w) var(--card-w) var(--card-w) var(--card-w) var(--card-w) var(
      --card-w
    );
  grid-template-rows: var(--card-h) var(--card-h) var(--card-h) var(--card-h);
  column-gap: var(--gap);
  row-gap: var(--gap);
`
const grids = {
  rows: [
    { id: 1, columns: [1, 2, 3, 4, 5, 6] },
    { id: 2, columns: [1, 2, 3, 4, 5, 6] },
    { id: 3, columns: [1, 2, 3, 4, 5, 6] },
    { id: 4, columns: [1, 2, 3, 4, 5, 6] }
  ]
}
const Table = () => {
  const gameState = useSelector(({ game }) => game.tables[0]?.game.state)
  return (
    <GridBox className="table">
      {grids.rows.map((row) =>
        row.columns.map((columnId) => {
          const card = gameState[`row${row.id}`][columnId - 1]
          return (
            <Grid key={`${row.id}-${columnId}`} row={row.id} column={columnId}>
              {card && <Card card={card} />}
            </Grid>
          )
        })
      )}
    </GridBox>
  )
}

export default Table
