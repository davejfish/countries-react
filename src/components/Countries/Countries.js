import './Countries.css';

export default function CountryCards({ continent, iso2, name, Local_name }) {
  return (
    <div className='card'>
      <img src={`https://flagcdn.com/${iso2.toLowerCase()}.svg`} />
      <span>{name}</span>
      <span>{continent}</span>
    </div>
  );
}