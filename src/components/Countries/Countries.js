import './Countries.css';

export default function CountryCards() {
  return (
    <div className='card'>
      <img src='http://placekitten.com/200/300' />
      <span>country name</span>
      <span>continent</span>
    </div>
  );
}