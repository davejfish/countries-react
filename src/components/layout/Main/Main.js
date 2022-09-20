import './Main.css';
import CountryCards from '../../Countries/Countries';
import { useCountries } from '../../../hooks/useCountries';

export default function Main() {
  const { filterCountries, setContinent, error } = useCountries();
  return (
    <main>
      <h2>Countries</h2>
      <span className='error'>{error}</span>
      <div className='search'>
        <label>
          search by continent: 
          <input onChange={(e) => {
            setContinent(e.target.value.toLowerCase());
          }}></input>
        </label>
      </div>
      <div className='autoCards'>
        {filterCountries().map((country) => (
          <CountryCards key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
