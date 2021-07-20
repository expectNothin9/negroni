import styled from 'styled-components'

const members = [
  {
    id: '1',
    nickname: 'Abcde',
    score: 66
  },
  {
    id: '2',
    nickname: 'Fghi',
    score: 66
  },
  {
    id: '3',
    nickname: 'Jklmnop',
    score: 66
  },
  {
    id: '4',
    nickname: 'Qrst',
    score: 66
  },
  {
    id: '5',
    nickname: 'Uvw',
    score: 66
  },
  {
    id: '6',
    nickname: 'Xyz',
    score: 66
  },
  {
    id: '7',
    nickname: 'Abcdefghijklmnopqrstuvwxyz',
    score: 66
  }
]
const List = styled.ul`
  padding: 6px 0;
  display: flex;
  flex-wrap: wrap;
`
const MemberItem = styled.li`
  background-color: var(--surface-dark);
  color: var(--on-surface);
  width: calc(20% - 8px);
  margin: 4px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  .nickname {
    display: block;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .score {
    display: block;
    text-align: center;
    margin-top: 6px;
    font-size: 24px;
    font-weight: bold;
  }
`
const MembersList = () => {
  return (
    <List className="members-list">
      {members.map((member) => (
        <MemberItem key={member.id}>
          <span className="nickname">{member.nickname}</span>
          <em className="score">{member.score}</em>
        </MemberItem>
      ))}
    </List>
  )
}

export default MembersList