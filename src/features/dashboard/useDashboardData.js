import { useState, useEffect } from 'react'
import { MOCK_STATS, MOCK_ASSETS } from '../../mocks/dashboardMock'

const SIMULATED_DELAY_MS = 600

/**
 * Fetches dashboard stats and asset list.
 * Swap the setTimeout block with a real api.getDashboardStats() call
 * when the backend is ready.
 */
export function useDashboardData() {
  const [stats,   setStats]   = useState(null)
  const [assets,  setAssets]  = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const timer = setTimeout(() => {
      try {
        setStats(MOCK_STATS)
        setAssets(MOCK_ASSETS)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }, SIMULATED_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  return { stats, assets, loading, error }
}