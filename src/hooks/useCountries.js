import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  }, []);

  const filterCountries = () => {
    return (continent === '') ? countries : countries.filter((country) => {
      if (country.continent)
        return country.continent.toLowerCase().includes(continent);
      return false;
    });
  };

  return { filterCountries, setContinent, error };
}