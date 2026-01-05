interface Station {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

interface StationsListProps {
  stations: Station[];
  onStationClick: (station: Station) => void;
}

export const StationsList = ({ stations, onStationClick }: StationsListProps) => {
  return (
    <div style={{ height: '500px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
      <h3>Stations ({stations.length})</h3>
      {stations.map((station) => (
        <div
          key={station.id}
          onClick={() => onStationClick(station)}
          style={{
            padding: '8px',
            margin: '4px 0',
            border: '1px solid #eee',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: '#f9f9f9'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9e9e9'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
        >
          <strong>{station.name}</strong>
          <div style={{ fontSize: '0.9em', color: '#666' }}>{station.city}</div>
        </div>
      ))}
    </div>
  );
};