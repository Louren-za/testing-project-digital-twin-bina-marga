import React from 'react'
import PropTypes from 'prop-types'
import AssetItem from './AssetItem.jsx'
import { AssetPropType } from '../../types/propTypes'
import { COLOR, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACING, SHADOW } from '../../constants/tokens'

export default function AssetList({ assets }) {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Recent Infrastructure Assets</h2>

      {assets.length === 0 ? (
        <p style={styles.empty}>No assets found.</p>
      ) : (
        <div>
          {assets.map((asset, index) => (
            <div
              key={asset.id}
              style={index === assets.length - 1 ? styles.lastItem : undefined}
            >
              <AssetItem asset={asset} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

AssetList.propTypes = {
  assets: PropTypes.arrayOf(AssetPropType).isRequired,
}

const styles = {
  wrapper: {
    background:   COLOR.bgSurface,
    border:       `1px solid ${COLOR.border}`,
    borderRadius: RADIUS.xl,
    padding:      `${SPACING[6]}px ${SPACING[7]}px`,
    boxShadow:    SHADOW.sm,
  },
  title: {
    fontSize:     FONT_SIZE.base,
    fontWeight:   FONT_WEIGHT.semibold,
    color:        COLOR.textPrimary,
    marginBottom: SPACING[2],
  },
  empty: {
    fontSize:  FONT_SIZE.sm,
    color:     COLOR.textMuted,
    textAlign: 'center',
    padding:   `${SPACING[8]}px 0`,
  },
  lastItem: {
    borderBottom: 'none',
  },
}