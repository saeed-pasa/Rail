import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface Station {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  stations: Station[];
  selectedStation: Station | null;
}

export const Map = ({ stations, selectedStation }: MapProps) => {
  const mapRef = useRef<L.Map>(null);

  useEffect(() => {
    if (selectedStation && mapRef.current) {
      mapRef.current.setView([selectedStation.lat, selectedStation.lng], 12);
    }
  }, [selectedStation]);

  return (
    <MapContainer
      center={[51.1657, 10.4515]} // Center of Germany
      zoom={6}
      style={{ height: '500px', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stations.map((station) => (
        <Marker key={station.id} position={[station.lat, station.lng]}>
          <Popup>
            <strong>{station.name}</strong><br />
            {station.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};