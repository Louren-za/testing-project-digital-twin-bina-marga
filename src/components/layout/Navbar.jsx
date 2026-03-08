import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, BookOpen, Activity, BarChart2, Globe, Moon, Sun, Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../../constants/appConstants'
import { COLOR, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACING } from '../../constants/tokens'

const NAV_ICONS = {
  '/dashboard':  LayoutDashboard,
  '/catalog':    BookOpen,
  '/monitoring': Activity,
  '/analytics':  BarChart2,
}

// Breakpoint layar kecil (px)
const MOBILE_BREAKPOINT = 768

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Deteksi resize
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header style={styles.header}>
      <div style={styles.inner}>

        {/* Logo */}
        <div style={styles.logo}>
          <img
            src="/logo.png"
            alt="Logo Bina Marga"
            style={styles.logoIcon}
          />
          <span style={styles.logoText}>Digital Twin Bina Marga</span>
        </div>

        {/* Nav — desktop only */}
        {!isMobile && (
          <nav style={styles.nav}>
            {NAV_ITEMS.map(({ label, path }) => {
              const Icon = NAV_ICONS[path]
              return (
                <NavLink
                  key={path}
                  to={path}
                  style={({ isActive }) => ({
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : {}),
                  })}
                >
                  {Icon && <Icon size={15} />}
                  <span>{label}</span>
                </NavLink>
              )
            })}
          </nav>
        )}

        {/* Actions */}
        <div style={styles.actions}>
          <button style={styles.iconBtn} title="Language" onClick={() => {}}>
            <Globe size={18} />
          </button>
          <button
            style={styles.iconBtn}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setDarkMode(d => !d)}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              style={styles.iconBtn}
              title={menuOpen ? 'Tutup menu' : 'Buka menu'}
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          )}
        </div>

      </div>

      {/* Dropdown menu — mobile only */}
      {isMobile && menuOpen && (
        <nav style={styles.mobileMenu}>
          {NAV_ITEMS.map(({ label, path }) => {
            const Icon = NAV_ICONS[path]
            return (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => ({
                  ...styles.mobileNavLink,
                  ...(isActive ? styles.mobileNavLinkActive : {}),
                })}
              >
                {Icon && <Icon size={16} />}
                <span>{label}</span>
              </NavLink>
            )
          })}
        </nav>
      )}

    </header>
  )
}

const styles = {
  header: {
    background:   COLOR.bgSurface,
    borderBottom: `1px solid ${COLOR.border}`,
    position:     'sticky',
    top:          0,
    zIndex:       100,
    boxShadow:    '0 1px 4px rgba(0,0,0,0.06)',
  },
  inner: {
    maxWidth:   1280,
    margin:     '0 auto',
    padding:    `0 ${SPACING[10]}px`,
    height:     56,
    display:    'flex',
    alignItems: 'center',
    gap:        SPACING[8],
  },
  logo: {
    display:    'flex',
    alignItems: 'center',
    gap:        SPACING[2] + 2,
    flexShrink: 0,
  },
  logoIcon: {
    width:        36,
    height:       36,
    borderRadius: RADIUS.md,
    objectFit:    'contain',
  },
  logoText: {
    fontWeight:    FONT_WEIGHT.bold,
    fontSize:      FONT_SIZE.base,
    color:         COLOR.textPrimary,
    letterSpacing: '-0.01em',
  },
  nav: {
    display:    'flex',
    alignItems: 'center',
    gap:        SPACING[1],
    flex:       1,
  },
  navLink: {
    display:        'flex',
    alignItems:     'center',
    gap:            SPACING[2] - 2,
    padding:        `6px ${SPACING[4]}px`,
    borderRadius:   RADIUS.md,
    fontSize:       FONT_SIZE.md,
    fontWeight:     FONT_WEIGHT.medium,
    color:          COLOR.textSecondary,
    textDecoration: 'none',
    transition:     'all 0.15s ease',
    whiteSpace:     'nowrap',
  },
  navLinkActive: {
    background: COLOR.blueBg,
    color:      COLOR.blue,
    fontWeight: FONT_WEIGHT.semibold,
  },
  actions: {
    display:    'flex',
    alignItems: 'center',
    gap:        SPACING[1],
    marginLeft: 'auto',
  },
  iconBtn: {
    width:          36,
    height:         36,
    borderRadius:   RADIUS.md,
    border:         `1px solid ${COLOR.border}`,
    background:     'transparent',
    cursor:         'pointer',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    color:          COLOR.textSecondary,
    transition:     'all 0.15s ease',
  },

  // Mobile dropdown
  mobileMenu: {
    display:       'flex',
    flexDirection: 'column',
    padding:       `${SPACING[2]}px ${SPACING[5]}px ${SPACING[3]}px`,
    borderTop:     `1px solid ${COLOR.border}`,
    background:    COLOR.bgSurface,
    gap:           SPACING[1],
  },
  mobileNavLink: {
    display:        'flex',
    alignItems:     'center',
    gap:            SPACING[2],
    padding:        `${SPACING[3]}px ${SPACING[4]}px`,
    borderRadius:   RADIUS.md,
    fontSize:       FONT_SIZE.md,
    fontWeight:     FONT_WEIGHT.medium,
    color:          COLOR.textSecondary,
    textDecoration: 'none',
    transition:     'all 0.15s ease',
  },
  mobileNavLinkActive: {
    background: COLOR.blueBg,
    color:      COLOR.blue,
    fontWeight: FONT_WEIGHT.semibold,
  },
}