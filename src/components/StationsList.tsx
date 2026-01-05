import type { Station } from '../types';


interface StationsListProps {
   stations: Station[];
   onStationClick: (station: Station) => void;
}

export const StationsList = ({ stations, onStationClick }: StationsListProps) => {
   return (
      <div style={{
         background: 'var(--bg-primary)',
         borderRadius: '12px',
         boxShadow: 'var(--shadow)',
         height: '100%',
         display: 'flex',
         flexDirection: 'column'
      }}>
         <div style={{
            padding: '1rem',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg-primary)',
            borderRadius: '12px 12px 0 0'
         }}>
            <h3 style={{
               color: 'var(--text-primary)',
               fontSize: '1.1rem',
               fontWeight: '600'
            }}>
               Stations ({stations.length})
            </h3>
         </div>

         <div style={{
            flex: 1,
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 160px)',
            padding: '0.5rem'
         }}>
            {stations.map((station) => (
               <div
                  key={station.id}
                  onClick={() => onStationClick(station)}
                  style={{
                     padding: '1rem',
                     margin: '0.5rem',
                     borderRadius: '8px',
                     cursor: 'pointer',
                     transition: 'all 0.2s ease',
                     border: '1px solid var(--border)',
                     background: 'var(--bg-secondary)'
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.background = 'var(--accent)';
                     e.currentTarget.style.color = 'white';
                     e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.background = 'var(--bg-secondary)';
                     e.currentTarget.style.color = 'var(--text-primary)';
                     e.currentTarget.style.transform = 'translateY(0)';
                  }}
               >
                  <div style={{
                     fontWeight: '500',
                     color: 'var(--text-primary)',
                     marginBottom: '0.25rem'
                  }}>
                     {station.name}
                  </div>
                  <div style={{
                     fontSize: '0.85rem',
                     color: 'var(--text-secondary)'
                  }}>
                     {station.city}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};