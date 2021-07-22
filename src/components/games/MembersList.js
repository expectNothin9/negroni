import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const MemberItem = styled.li`
  background-color: var(--surface-dark);
  color: var(--on-surface);
  width: 160px;
  padding: 12px;
  margin-bottom: 12px;
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
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 6px;
    .score {
      font-size: 18px;
    }
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
