import './Main.css';
import CountryCards from '../../Countries/Countries';
import { useCountries } from '../../../hooks/useCountries';

export default function Main() {
  const { filterCountries, setQuery, searchParam, setSearchParam, error } = useCountries();
  return (
    <main>
      <h2>Countries</h2>
      <span className='error'>{error}</span>
      <div className='search'>
        <select value={searchParam} onChange={(e) => setSearchParam(e.target.value)}>
          <option value=''>-</option>
          <option value='continent'>continent</option>
          <option value='name'>name</option>
        </select>
        <label>
          search: 
          <input onChange={(e) => {
            setQuery(e.target.value.toLowerCase());
          }}></input>
        </label>
      </div>
      <div className='autoCards'>
        {filterCountries(searchParam).map((country) => (
          <CountryCards key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
