import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
`
const MemberItem = styled.li`
  width: 184px;
  padding: var(--gap);
  border-bottom: 1px solid var(--divider);
  .nickname {
    display: block;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .score {
    display: block;
    text-align: center;
    margin-top: calc(var(--gap) / 2);
    font-weight: bold;
  }
`
const MembersList = () => {
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
