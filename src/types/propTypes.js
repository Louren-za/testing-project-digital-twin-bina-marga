import PropTypes from 'prop-types'

/**
 * Shared PropTypes definitions.
 */

export const AssetPropType = PropTypes.shape({
  id:       PropTypes.number.isRequired,
  name:     PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type:     PropTypes.oneOf(['Road', 'Bridge', 'Sensor']).isRequired,
  status:   PropTypes.oneOf(['Good', 'Fair', 'Poor']).isRequired,
})

export const StatsPropType = PropTypes.shape({
  roads:         PropTypes.number,
  bridges:       PropTypes.number,
  activeSensors: PropTypes.number,
  alerts:        PropTypes.number,
})

export const MapFiltersPropType = PropTypes.shape({
  Roads:   PropTypes.bool,
  Bridges: PropTypes.bool,
  Sensors: PropTypes.bool,
})