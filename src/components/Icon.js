import PropTypes from 'prop-types'

const Icon = ({ type, title }) => (
  <i className="material-icons" title={title || `${type} icon`}>
    {type}
  </i>
)
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string
}
Icon.defaultProps = {
  title: undefined
}

export default Icon
