import { useState, useMemo } from 'react';
import { Map } from './Map';
import { StationsList } from './StationsList';
import { CityFilter } from './CityFilter';
import { useStations } from './hooks';
import './App.css';

interface Station {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

function App() {
  const { stations, loading, error } = useStations();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [isDark, setIsDark] = useState(false);

  const cities = useMemo(() => {
    const uniqueCities = [...new Set(stations.map(station => station.city))];
    return uniqueCities.sort();
  }, [stations]);

  const filteredStations = useMemo(() => {
    return selectedCity ? stations.filter(station => station.city === selectedCity) : stations;
  }, [stations, selectedCity]);

  const handleStationClick = (station: Station) => {
    setSelectedStation(station);
  };

  if (loading) return <div className="loading">Loading stations...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <header className="header">
        <h1>🚂 German Rail Stations</h1>
        <div className="header-controls">
          <CityFilter 
            cities={cities}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />
          <button 
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>
      
      <main className="main-content">
        <div className="map-container">
          <Map stations={filteredStations} selectedStation={selectedStation} />
        </div>
        <div className="sidebar">
          <StationsList stations={filteredStations} onStationClick={handleStationClick} />
        </div>
      </main>
    </div>
  );
}

export default App;