import { useState, useEffect } from 'react'

const DEFAULT_FILTERS = {
  Roads: true,
  Bridges: true,
  Sensors: true,
}

export function useMapData() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [loading, setLoading] = useState(false)

  function toggleFilter(type) {
    setFilters(prev => ({ ...prev, [type]: !prev[type] }))
  }

  return { filters, toggleFilter, loading }
}