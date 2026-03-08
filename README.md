# Digital Twin Bina Marga

Road & Bridge Infrastructure Visualization Dashboard.

**Live Demo**: [digital-twin-bina-marga.vercel.app](https://digital-twin-bina-marga.vercel.app)  
**Repository**: [github.com/Louren-za/testing-project-digital-twin-bina-marga](https://github.com/Louren-za/testing-project-digital-twin-bina-marga)

---

## Framework

- **React 18** + **Vite 5**
- **React Router DOM** — routing
- **Leaflet** — peta interaktif
- **Lucide React** — icons

---

## Cara Menjalankan

### Prasyarat
Pastikan sudah terinstall:
- [Node.js](https://nodejs.org) versi 18 atau lebih baru
- npm (sudah termasuk saat install Node.js)

### Development

```bash
# 1. Clone repository
git clone https://github.com/Louren-za/testing-project-digital-twin-bina-marga.git

# 2. Masuk ke folder project
cd testing-project-digital-twin-bina-marga

# 3. Install dependencies
npm install

# 4. Jalankan dev server
npm run dev
```

Buka `http://localhost:5173` di browser.

### Production

```bash
# Build aplikasi
npm run build

# Preview hasil build
npm run preview
```

---

## Struktur Project

```
src/
│
├── app/
│   ├── App.jsx                       # Root komponen & layout global
│   └── routes.jsx                    # Definisi semua route
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx                # Navigasi utama (responsive)
│   │   └── Footer.jsx                # Footer
│   ├── stats/
│   │   └── StatCard.jsx              # Kartu statistik
│   ├── map/
│   │   └── InfrastructureMap.jsx     # Peta interaktif Leaflet
│   └── assets/
│       ├── AssetList.jsx             # Daftar aset infrastruktur
│       └── AssetItem.jsx             # Item individual aset
│
├── pages/
│   └── dashboard/
│       └── DashboardPage.jsx         # Halaman utama dashboard
│
├── features/
│   ├── dashboard/
│   │   └── useDashboardData.js       # Hook data statistik & aset
│   └── map/
│       └── useMapData.js             # Hook filter layer peta
│
├── services/
│   └── api.js                        # Pemanggilan API backend
│
├── mocks/
│   └── dashboardMock.js              # Data dummy untuk development
│
├── constants/
│   ├── tokens.js                     # Design tokens (warna, spacing)
│   └── appConstants.js               # Konfigurasi bisnis (nav, stat)
│
├── types/
│   └── propTypes.js                  # Shared PropTypes definitions
│
├── utils/
│   └── formatNumber.js               # Helper formatting angka
│
├── styles/
│   └── globals.css                   # CSS global & font
│
└── main.jsx                          # Entry point aplikasi
```
