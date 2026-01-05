import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef, useEffect } from 'react';
import type { Station } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../assets/images/marker-icon.png';
import markerIcon2x from '../assets/images/marker-icon-2x.png';
import markerShadow from '../assets/images/marker-shadow.png';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl: markerIcon2x,
   iconUrl: markerIcon,
   shadowUrl: markerShadow,
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
      <div style={{
         height: '100%',
         borderRadius: '12px',
         overflow: 'hidden',
         boxShadow: 'var(--shadow)'
      }}>
         <MapContainer
            center={[51.1657, 10.4515]}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
            ref={mapRef}
         >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {stations.map((station) => (
               <Marker key={station.id} position={[station.lat, station.lng]}>
                  <Popup>
                     <div style={{ padding: '0.5rem' }}>
                        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>
                           {station.name}
                        </strong>
                        <span style={{ color: '#666', fontSize: '0.9rem' }}>
                           {station.city}
                         </span>
                     </div>
                  </Popup>
               </Marker>
            ))}
         </MapContainer>
      </div>
   );
};