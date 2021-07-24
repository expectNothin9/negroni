import styled from 'styled-components'

import MembersList from './MembersList'
import HandCards from './HandCards'
import Table from './Table'

const Playground = styled.section`
  background-color: var(--surface);
  color: var(--on-surface);
  flex-grow: 1;
`
const Aside = styled.aside`
  background-color: var(--surface);
  color: var(--on-surface);
  flex-basis: 184px;
  flex-shrink: 0;
  flex-grow: 0;
  height: calc(100vh - 48px); /* UniHeader */
  border-right: 1px solid var(--divider);
`
const Take6Box = styled.section`
  --gap: 12px;
  --card-w: calc(2.5 * 32px);
  --card-h: calc(3.5 * 32px);
  width: 100%;
  padding-top: 48px; /* UniHeader */
  display: flex;
  @media only screen and (max-width: 768px) {
    --gap: 6px;
  }
`
const Take6Index = () => (
  <Take6Box className="take-6">
    <Aside>
      <MembersList />
    </Aside>
    <Playground>
      <HandCards />
      <Table />
    </Playground>
  </Take6Box>
)

export default Take6Index
