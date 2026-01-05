interface CityFilterProps {
   cities: string[];
   selectedCity: string;
   onCityChange: (city: string) => void;
}

export const CityFilter = ({ cities, selectedCity, onCityChange }: CityFilterProps) => {
   return (
      <select
         value={selectedCity}
         onChange={(e) => onCityChange(e.target.value)}
         style={{
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            minWidth: '200px',
            maxWidth: '100%',
            cursor: 'pointer'
         }}
      >
         <option value="">All Cities ({cities.length + 1})</option>
         {cities.map((city) => (
            <option key={city} value={city}>
               {city}
            </option>
         ))}
      </select>
   );
};