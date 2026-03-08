import React from 'react'
import PropTypes from 'prop-types'
import { AssetPropType } from '../../types/propTypes'
import { ASSET_STATUS, ASSET_TYPE } from '../../constants/appConstants'
import { COLOR, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACING } from '../../constants/tokens'

export default function AssetItem({ asset }) {
  const { name, location, type, status } = asset

  const statusStyle = ASSET_STATUS[status] ?? ASSET_STATUS.Good
  const typeStyle   = ASSET_TYPE[type]     ?? ASSET_TYPE.Road

  return (
    <div style={styles.item}>
      <div style={styles.info}>
        <p style={styles.name}>{name}</p>
        <p style={styles.location}>{location}</p>
      </div>
      <div style={styles.badges}>
        <span style={{ ...styles.badge, background: typeStyle.bg, color: typeStyle.color }}>
          {type}
        </span>
        <span style={{ ...styles.badge, background: statusStyle.bg, color: statusStyle.color }}>
          {status}
        </span>
      </div>
    </div>
  )
}

AssetItem.propTypes = {
  asset: AssetPropType.isRequired,
}

const styles = {
  item: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        `${SPACING[4]}px 0`,
    borderBottom:   `1px solid ${COLOR.borderLight}`,
  },
  info: {
    display:       'flex',
    flexDirection: 'column',
    gap:           SPACING[1],
    minWidth:      0,
  },
  name: {
    fontSize:     FONT_SIZE.md,
    fontWeight:   FONT_WEIGHT.semibold,
    color:        COLOR.textPrimary,
    whiteSpace:   'nowrap',
    overflow:     'hidden',
    textOverflow: 'ellipsis',
  },
  location: {
    fontSize: FONT_SIZE.sm,
    color:    COLOR.textMuted,
  },
  badges: {
    display:    'flex',
    gap:        SPACING[2],
    flexShrink: 0,
    marginLeft: SPACING[3],
  },
  badge: {
    padding:      `3px 10px`,
    borderRadius: RADIUS.full,
    fontSize:     FONT_SIZE.xs,
    fontWeight:   FONT_WEIGHT.semibold,
    whiteSpace:   'nowrap',
  },
}