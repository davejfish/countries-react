import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    try {
      fetchData();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
    
  }, []);

  const filterCountries = () => {
    // return (continent === '') ? countries : countries.filter((country) => {
    //   country.continent === continent;
    // });
    if (continent === '') return countries;
    return countries.filter((country) => country.continent === continent);
  };

  return { filterCountries, setContinent };
}