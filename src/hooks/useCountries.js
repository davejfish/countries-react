import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
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
      default:
        return countries.filter((country) => {
          if (country.continent) {
            return country.continent === param;
          }
        });
    }
  };

  return { loading, filterCountries, setQuery, searchParam, setSearchParam, error };
}