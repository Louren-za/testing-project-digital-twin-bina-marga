import { COLOR } from './tokens'
import { Route, Navigation, Radio, AlertTriangle } from 'lucide-react'

export const STAT_CONFIG = [
  {
    key:     'roads',
    label:   'Roads',
    icon:    Route,
    color:   COLOR.blue,
    bgColor: COLOR.blueBg,
  },
  {
    key:     'bridges',
    label:   'Bridges',
    icon:    Navigation,
    color:   COLOR.yellow,
    bgColor: COLOR.yellowBg,
  },
  {
    key:     'activeSensors',
    label:   'Active Sensors',
    icon:    Radio,
    color:   COLOR.green,
    bgColor: COLOR.greenBg,
  },
  {
    key:     'alerts',
    label:   'Alerts',
    icon:    AlertTriangle,
    color:   COLOR.red,
    bgColor: COLOR.redBg,
  },
]

/**
 * Navigasi utama.
 */
export const NAV_ITEMS = [
  { label: 'Dashboard',  path: '/dashboard'  },
  { label: 'Catalog',    path: '/catalog'    },
  { label: 'Monitoring', path: '/monitoring' },
  { label: 'Analytics',  path: '/analytics'  },
]

/**
 * Warna per tipe layer peta.
 */
export const MAP_FILTER_COLORS = {
  Roads:   COLOR.blue,
  Bridges: COLOR.green,
  Sensors: COLOR.yellow,
}

/**
 * Status badge config.
 */
export const ASSET_STATUS = {
  Good: { bg: COLOR.statusGoodBg, color: COLOR.statusGood },
  Fair: { bg: COLOR.statusFairBg, color: COLOR.statusFair },
  Poor: { bg: COLOR.statusPoorBg, color: COLOR.statusPoor },
}

/**
 * Asset type badge config.
 */
export const ASSET_TYPE = {
  Road:   { bg: COLOR.blueBg,   color: COLOR.blue  },
  Bridge: { bg: COLOR.greenBg,  color: COLOR.green },
  Sensor: { bg: COLOR.yellowBg, color: COLOR.yellow },
}