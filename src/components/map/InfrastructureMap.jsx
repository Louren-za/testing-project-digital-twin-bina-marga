import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { MapFiltersPropType } from '../../types/propTypes'
import { MAP_FILTER_COLORS } from '../../constants/appConstants'
import { MOCK_MAP_POINTS } from '../../mocks/dashboardMock'
import { COLOR, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACING } from '../../constants/tokens'

const LEAFLET_CSS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
const LEAFLET_JS  = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
const MAP_CENTER  = [-2.5, 118]
const MAP_ZOOM    = 5

function loadLeaflet(onReady) {
  if (window.L) { onReady(); return }

  const link = document.createElement('link')
  link.rel  = 'stylesheet'
  link.href = LEAFLET_CSS
  document.head.appendChild(link)

  const script    = document.createElement('script')
  script.src      = LEAFLET_JS
  script.onload   = onReady
  script.onerror  = () => console.error('Failed to load Leaflet')
  document.head.appendChild(script)
}

function createMarkerIcon(L, color) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:12px;height:12px;border-radius:50%;
      background:${color};border:2px solid white;
      box-shadow:0 0 6px ${color}88;
    "></div>`,
    iconSize:   [12, 12],
    iconAnchor: [6, 6],
  })
}

export default function InfrastructureMap({ filters }) {
  const mapRef      = useRef(null)
  const mapInstance = useRef(null)
  const markersRef  = useRef([])

  const [mapReady,    setMapReady]    = useState(false)
  const [fullscreen,  setFullscreen]  = useState(false)

  // Initialize map once
  useEffect(() => {
    loadLeaflet(() => {
      if (mapInstance.current) return

      const L   = window.L
      const map = L.map(mapRef.current, {
        center:             MAP_CENTER,
        zoom:               MAP_ZOOM,
        zoomControl:        true,
        attributionControl: false,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(map)

      mapInstance.current = map
      setMapReady(true)
    })

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mapReady || !mapInstance.current) return

    const L = window.L

    markersRef.current.forEach(m => m.remove())
    markersRef.current = []

    MOCK_MAP_POINTS
      .filter(point => filters[point.type])
      .forEach(point => {
        const color  = MAP_FILTER_COLORS[point.type]
        const icon   = createMarkerIcon(L, color)
        const marker = L
          .marker([point.lat, point.lng], { icon })
          .addTo(mapInstance.current)
          .bindTooltip(point.label, {
            permanent:  false,
            direction:  'top',
            offset:     [0, -8],
          })
        markersRef.current.push(marker)
      })
  }, [mapReady, filters])

  return (
    <div style={{ ...styles.wrapper, ...(fullscreen ? styles.fullscreen : {}) }}>

      {/* Header */}
      <div style={styles.header}>
        <span style={styles.title}>3D Infrastructure Network</span>
        <button
          style={styles.fullscreenBtn}
          onClick={() => setFullscreen(f => !f)}
          aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {fullscreen ? <IconCompress /> : <IconExpand />}
        </button>
      </div>

      {/* Map container */}
      <div style={styles.mapContainer}>
        <div ref={mapRef} style={styles.map} />

        {/* Legend overlay */}
        <div style={styles.legend}>
          {Object.entries(MAP_FILTER_COLORS).map(([type, color]) => (
            <span
              key={type}
              style={{
                ...styles.legendItem,
                background: filters[type] ? color : COLOR.textMuted,
                opacity:    filters[type] ? 1 : 0.45,
              }}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

InfrastructureMap.propTypes = {
  filters: MapFiltersPropType.isRequired,
}

function IconExpand() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/>
    </svg>
  )
}

function IconCompress() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"/>
    </svg>
  )
}

const styles = {
  wrapper: {
    background:   COLOR.bgSurface,
    border:       `1px solid ${COLOR.border}`,
    borderRadius: RADIUS.xl,
    overflow:     'hidden',
    boxShadow:    '0 1px 3px rgba(0,0,0,0.05)',
  },
  fullscreen: {
    position:     'fixed',
    inset:        0,
    zIndex:       999,
    borderRadius: 0,
  },
  header: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        `${SPACING[4]}px ${SPACING[6]}px`,
    borderBottom:   `1px solid ${COLOR.borderLight}`,
  },
  title: {
    fontWeight: FONT_WEIGHT.semibold,
    fontSize:   FONT_SIZE.base,
    color:      COLOR.textPrimary,
  },
  fullscreenBtn: {
    background:     'transparent',
    border:         `1px solid ${COLOR.border}`,
    borderRadius:   RADIUS.md,
    padding:        SPACING[2] - 2,
    cursor:         'pointer',
    color:          COLOR.textSecondary,
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
  },
  mapContainer: {
    position: 'relative',
    height:   320,
  },
  map: {
    width:  '100%',
    height: '100%',
  },
  legend: {
    position: 'absolute',
    top:      SPACING[3],
    right:    SPACING[3],
    zIndex:   500,
    display:  'flex',
    gap:      SPACING[2] - 2,
  },
  legendItem: {
    padding:      `4px 10px`,
    borderRadius: RADIUS.full,
    color:        '#fff',
    fontSize:     FONT_SIZE.xs,
    fontWeight:   FONT_WEIGHT.semibold,
    letterSpacing:'0.03em',
    transition:   'opacity 0.2s',
  },
}