import './Main.css';
import CountryCards from '../../Countries/Countries';
import { useCountries } from '../../../hooks/useCountries';
import Filter from '../../Filter/Filter';

export default function Main() {
  const { filterCountries, setQuery, searchParam, setSearchParam, error } = useCountries();
  return (
    <main>
      <h2>Countries</h2>
      <span className='error'>{error}</span>
      <Filter setQuery={setQuery} setSearchParam={setSearchParam} searchParam={searchParam}/>
      <div className='autoCards'>
        {filterCountries(searchParam).map((country) => (
          <CountryCards key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
