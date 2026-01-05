# 🚂 German Rail Stations

A modern React application that visualizes German train stations on an interactive map with filtering capabilities.

## 🌐 Live Demo

**[View Live Application](https://saeed-pasa.github.io/Rail/)**

## Features

- **Interactive Map**: View all German train stations on a Leaflet map
- **Station List**: Browse stations with city information
- **City Filter**: Filter stations by city with dropdown selection
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Station Details**: Click stations to zoom and view details

## Tech Stack

- **React 19** with TypeScript
- **Leaflet.js** for interactive maps
- **Vite** for fast development and building
- **Clean Architecture** with organized folder structure

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/     # UI components (Map, StationsList, CityFilter)
├── hooks/          # Custom React hooks
├── services/       # API services
├── types/          # TypeScript type definitions
├── assets/         # Static assets (images, mock data)
└── App.tsx         # Main application component
```

## API

Data is fetched from: `https://gist.github.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw`

## Demo

The app displays 30 German train stations across major cities including Berlin, Hamburg, Munich, Frankfurt, and more.

---

Built as part of a frontend development challenge focusing on React, TypeScript, and interactive mapping.