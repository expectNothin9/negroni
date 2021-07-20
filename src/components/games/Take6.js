import styled from 'styled-components'

import Section from '../Section'
import MembersList from './MembersList'
import Table from './Table'

const Take6Box = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding-top: 60px; /* UniHeader 48px + gap 12px */
`
const Aside = styled.aside`
  background-color: var(--surface);
  padding: 12px;
  border-radius: 4px;
  margin-right: 12px;
`
const TableBox = styled(Section)`
  height: calc(100vh - 60px - 12px);
  margin: 0 12px;
`
const Title = styled.h2`
  color: var(--on-surface);
  font-size: 24px;
  font-weight: bold;
  padding: 6px 0 12px;
  text-align: center;
  border-bottom: 1px solid var(--divider);
  margin-bottom: 12px;
`
const Take6 = () => (
  <Take6Box className="take-6">
    <Aside>
      <Title>Take 6!</Title>
      <MembersList />
    </Aside>
    <TableBox>
      <Table />
    </TableBox>
  </Take6Box>
)

export default Take6
