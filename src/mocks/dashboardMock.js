/**
 * Mock data untuk development & testing.
 */

export const MOCK_STATS = {
  roads:         1247,
  bridges:       342,
  activeSensors: 8432,
  alerts:        12,
}

export const MOCK_ASSETS = [
  {
    id:       1,
    name:     'Jalan Tol Jakarta–Cikampek KM 23',
    location: 'West Java',
    type:     'Road',
    status:   'Good',
  },
  {
    id:       2,
    name:     'Jembatan Suramadu',
    location: 'East Java',
    type:     'Bridge',
    status:   'Good',
  },
  {
    id:       3,
    name:     'Jalan Lingkar Luar Jakarta',
    location: 'Jakarta',
    type:     'Road',
    status:   'Fair',
  },
  {
    id:       4,
    name:     'Jembatan Ampera',
    location: 'South Sumatra',
    type:     'Bridge',
    status:   'Good',
  },
  {
    id:       5,
    name:     'Jalan Trans Papua',
    location: 'Papua',
    type:     'Road',
    status:   'Poor',
  },
]

export const MOCK_MAP_POINTS = [
  { id: 1,  type: 'Roads',   lat: -6.20,  lng: 106.80, label: 'Jakarta Ring Road'  },
  { id: 2,  type: 'Roads',   lat: -6.90,  lng: 107.60, label: 'Tol Cipularang'     },
  { id: 3,  type: 'Roads',   lat: -7.25,  lng: 112.75, label: 'Surabaya Bypass'    },
  { id: 4,  type: 'Roads',   lat: -8.65,  lng: 115.20, label: 'Trans Bali'         },
  { id: 5,  type: 'Roads',   lat: -2.50,  lng: 140.70, label: 'Trans Papua'        },
  { id: 6,  type: 'Bridges', lat: -6.175, lng: 106.83, label: 'Jembatan Ampera'   },
  { id: 7,  type: 'Bridges', lat: -7.10,  lng: 112.70, label: 'Jembatan Suramadu' },
  { id: 8,  type: 'Bridges', lat: -0.90,  lng: 134.10, label: 'Jembatan Youtefa'  },
  { id: 9,  type: 'Sensors', lat: -6.21,  lng: 106.84, label: 'Sensor JKT-01'     },
  { id: 10, type: 'Sensors', lat: -7.00,  lng: 107.65, label: 'Sensor BDG-01'     },
  { id: 11, type: 'Sensors', lat: -7.26,  lng: 112.77, label: 'Sensor SBY-01'     },
  { id: 12, type: 'Sensors', lat: -1.26,  lng: 116.83, label: 'Sensor BPP-01'     },
  { id: 13, type: 'Sensors', lat: -0.91,  lng: 134.08, label: 'Sensor MNK-01'     },
]