interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export const CityFilter = ({ cities, selectedCity, onCityChange }: CityFilterProps) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="city-filter" style={{ marginRight: '10px' }}>Filter by city:</label>
      <select
        id="city-filter"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        style={{ padding: '5px', minWidth: '150px' }}
      >
        <option value="">All cities</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};