import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}