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
const MembersList = ({ members }) => (
  <List className="members-list">
    {members.map((member) => (
      <MemberItem key={member.id}>
        <span className="nickname">{member.nickname}</span>
        <em className="score">{member.score}</em>
      </MemberItem>
    ))}
  </List>
)

export default MembersList
