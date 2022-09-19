import './Main.css';
import CountryCards from '../../Countries/Countries';

const arr = [1, 2, 3, 4, 5];

export default function Main() {
  return (
    <div className='autoCards'>
      {arr.map((country) => (
        <CountryCards key={country} />
      ))}
    </div>
  );
}
