const Icon = ({ type, title }) => (
  <i className="material-icons" title={title || `${type} icon`}>
    {type}
  </i>
)

export default Icon
