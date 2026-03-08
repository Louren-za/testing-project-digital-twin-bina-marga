import React from 'react'
import StatCard from '../../components/stats/StatCard.jsx'
import InfrastructureMap from '../../components/map/InfrastructureMap.jsx'
import AssetList from '../../components/assets/AssetList.jsx'
import { useDashboardData } from '../../features/dashboard/useDashboardData.js'
import { useMapData } from '../../features/map/useMapData.js'
import { STAT_CONFIG } from '../../constants/appConstants.js'
import { COLOR, FONT_SIZE, FONT_WEIGHT, SPACING } from '../../constants/tokens.js'

export default function DashboardPage() {
  const { stats, assets, loading } = useDashboardData()
  const { filters }                = useMapData()

  return (
    <main style={styles.page}>

      {/* Page heading */}
      <div style={styles.heading}>
        <h1 style={styles.pageTitle}>Digital Twin Bina Marga</h1>
        <p style={styles.pageSubtitle}>Road &amp; Bridge Infrastructure Visualization</p>
      </div>

      {/* Stats row */}
      <div style={styles.statsGrid}>
        {STAT_CONFIG.map(({ key, label, icon, color, bgColor }) => (
          <StatCard
            key={key}
            label={label}
            value={loading ? '—' : (stats?.[key] ?? 0)}
            icon={icon}
            color={color}
            bgColor={bgColor}
          />
        ))}
      </div>

      {/* Map */}
      <InfrastructureMap filters={filters} />

      {/* Asset list */}
      <AssetList assets={loading ? [] : assets} />

    </main>
  )
}

const styles = {
  page: {
    maxWidth:      1280,
    margin:        '0 auto',
    padding:       `${SPACING[9]}px ${SPACING[10]}px`,
    display:       'flex',
    flexDirection: 'column',
    gap:           SPACING[7],
  },
  heading: {
    display:       'flex',
    flexDirection: 'column',
    gap:           SPACING[1],
  },
  pageTitle: {
    fontSize:      FONT_SIZE['2xl'],
    fontWeight:    FONT_WEIGHT.bold,
    color:         COLOR.textPrimary,
    letterSpacing: '-0.02em',
  },
  pageSubtitle: {
    fontSize: FONT_SIZE.md,
    color:    COLOR.textMuted,
  },
  statsGrid: {
    display:             'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap:                 SPACING[4],
  },
}