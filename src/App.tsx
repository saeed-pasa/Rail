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

  if (loading) return <div style={{ padding: '20px' }}>Loading stations...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>German Train Stations</h1>
      
      <CityFilter 
        cities={cities}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
      />
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <Map stations={filteredStations} selectedStation={selectedStation} />
        </div>
        <div style={{ flex: 1 }}>
          <StationsList stations={filteredStations} onStationClick={handleStationClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
