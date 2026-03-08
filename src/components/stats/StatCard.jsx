import React from 'react'
import PropTypes from 'prop-types'
import { formatNumber } from '../../utils/formatNumber'
import { COLOR, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACING } from '../../constants/tokens'

export default function StatCard({ label, value, icon: Icon, color, bgColor }) {
  return (
    <div style={styles.card}>
      <div style={styles.content}>
        <p style={styles.label}>{label}</p>
        <p style={styles.value}>{formatNumber(value)}</p>
      </div>
      <div style={{ ...styles.iconWrap, background: bgColor }}>
        <Icon size={20} color={color} strokeWidth={1.8} />
      </div>
    </div>
  )
}

StatCard.propTypes = {
  label:   PropTypes.string.isRequired,
  value:   PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon:    PropTypes.elementType.isRequired,
  color:   PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
}

const styles = {
  card: {
    background:     COLOR.bgSurface,
    border:         `1px solid ${COLOR.border}`,
    borderRadius:   RADIUS.lg,
    padding:        `${SPACING[5]}px ${SPACING[5]}px`,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    boxShadow:      '0 1px 3px rgba(0,0,0,0.05)',
    minWidth:       0,
    overflow:       'hidden',
    gap:            SPACING[3],
  },
  content: {
    display:       'flex',
    flexDirection: 'column',
    gap:           SPACING[1],
    minWidth:      0,   
    flex:          1,
  },
  label: {
    fontSize:      FONT_SIZE.xs,
    fontWeight:    FONT_WEIGHT.medium,
    color:         COLOR.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    whiteSpace:    'nowrap',
    overflow:      'hidden',
    textOverflow:  'ellipsis',
  },
  value: {
    fontSize:           FONT_SIZE['3xl'],
    fontWeight:         FONT_WEIGHT.bold,
    color:              COLOR.textPrimary,
    lineHeight:         1.2,
    fontVariantNumeric: 'tabular-nums',
    whiteSpace:         'nowrap',
  },
  iconWrap: {
    width:          'clamp(36px, 4vw, 48px)',
    height:         'clamp(36px, 4vw, 48px)',
    borderRadius:   RADIUS.lg,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    flexShrink:     0,
  },
}