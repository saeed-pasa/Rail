import { useState, useEffect } from 'react';
import type { Station } from '../types';
import { stationsService } from '../services/stationsService';


export const useStations = () => {
   const [stations, setStations] = useState<Station[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchStations = async () => {
         try {
            const data = await stationsService.fetchStations();
            setStations(data);
         } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
         } finally {
            setLoading(false);
         }
      };

      fetchStations().then();
   }, []);

   return { stations, loading, error };
};