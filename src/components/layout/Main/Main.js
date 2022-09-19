import './Main.css';
import CountryCards from '../../Countries/Countries';
import { useCountries } from '../../../hooks/useCountries';

export default function Main() {
  const { countries } = useCountries();
  return (
    <div className='autoCards'>
      {countries.map((country) => (
        <CountryCards key={country.id} {...country} />
      ))}
    </div>
  );
}
