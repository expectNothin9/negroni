import styled from 'styled-components'

import GameStatus from './GameStatus'
import MembersList from './MembersList'
import HandCards from './HandCards'
import Table from './Table'

const Take6Box = styled.section`
  width: 100%;
  padding-top: calc(48px + 12px); /* UniHeader + gap */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding-top: calc(48px + 6px); /* UniHeader + gap */
  }
`
const Aside = styled.aside`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: 12px;
  border-radius: 4px;
  margin-left: 12px;
  @media only screen and (max-width: 768px) {
    padding: 6px;
    width: 72px;
    margin-left: 6px;
  }
`
const Playground = styled.section`
  background-color: var(--surface);
  color: var(--on-surface);
  flex-grow: 1;
  height: calc(100vh - 48px - 40px - calc(12px * 3)); /* UniHeader, GameStatus, gaps */
  padding: 12px;
  border-radius: 4px;
  @media only screen and (max-width: 768px) {
    padding: 6px;
    height: calc(100vh - 48px - 40px - calc(6px * 3)); /* UniHeader, GameStatus, gaps */
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 1280px;
  width: calc(100% - 24px);
  margin-top: 12px;
  padding-bottom: 12px;
  @media only screen and (max-width: 768px) {
    margin-top: 6px;
    padding-bottom: 6px;
  }
`
const Take6Index = () => (
  <Take6Box className="take-6">
    <GameStatus />
    <Box>
      <Aside>
        <MembersList />
      </Aside>
      <Playground>
        <HandCards />
        <Table />
      </Playground>
    </Box>
  </Take6Box>
)

export default Take6Index
