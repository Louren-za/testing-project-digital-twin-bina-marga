import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardPage from '../pages/dashboard/DashboardPage.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/catalog" element={<DashboardPage />} />
      <Route path="/monitoring" element={<DashboardPage />} />
      <Route path="/analytics" element={<DashboardPage />} />
    </Routes>
  )
}