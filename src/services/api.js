const BASE_URL = import.meta.env.VITE_API_URL || '/api'

async function request(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) throw new Error(`API Error ${res.status}: ${res.statusText}`)
  return res.json()
}

export const api = {
  getDashboardStats: () => request('/dashboard/stats'),
  getAssets: (params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return request(`/assets${qs ? '?' + qs : ''}`)
  },
  getMapData: () => request('/map/data'),
}