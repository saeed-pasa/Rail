import { useState, useEffect } from 'react';

// Station interface
export interface Station {
  id: number;
  name: string;
  city: string;
  lat: number;
  lng: number;
}

export const useStations = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw');
        if (!response.ok) throw new Error('Failed to fetch stations');
        const data = await response.json();
        setStations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, []);

  return { stations, loading, error };
};