import React from 'react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Digital Twin Bina Marga. All rights reserved.
      </p>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid #e4e7f0',
    background: '#ffffff',
    padding: '16px 32px',
    textAlign: 'center',
  },
  text: {
    fontSize: 12,
    color: '#9ca3af',
  },
}