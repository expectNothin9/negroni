import styled from 'styled-components'

import Section from '../Section'
import MembersList from './MembersList'

const Title = styled.h2`
  color: var(--on-surface);
  font-size: 24px;
  font-weight: bold;
  padding: 6px 0 12px;
  text-align: center;
  border-bottom: 1px solid var(--divider);
`

const Take6 = () => (
  <Section className="take-6">
    <Title>Take 6!</Title>
    <MembersList />
  </Section>
)

export default Take6
