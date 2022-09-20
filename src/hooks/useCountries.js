import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParam, setSearchParam] = useState('');
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

  const filterCountries = (param) => {
    switch (param) {
      case '':
        return countries;
      case 'continent':
        return countries.filter((country) => {
          if (country.continent)
            return country.continent.toLowerCase().includes(query);
        });
      case 'name':
        return countries.filter((country) => {
          if (country.name)
            return country.name.toLowerCase().includes(query);
        });
    }
  };

  return { filterCountries, setQuery, searchParam, setSearchParam, error };
}