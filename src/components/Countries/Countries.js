import './Countries.css';

export default function CountryCards({ continent, iso2, iso3, name, Local_name }) {
  return (
    <div className='card'>
      <img src='http://placekitten.com/200/300' />
      <span>{name}</span>
      <span>{Local_name}</span>
      <span>{continent}</span>
    </div>
  );
}