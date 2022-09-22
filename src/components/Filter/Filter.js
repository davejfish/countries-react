import './Filter.css';

export default function Filter({ searchParam, setSearchParam, setQuery }) {
  return (
    <div className='search'>
      <label>
        continent
        <select onChange={(e) => setSearchParam(e.target.value)}>
          <option value=''>All</option>
          <option value='Oceania'>Oceania</option>
          <option value='Europe'>Europe</option>
          <option value='Africa'>Africa</option>
          <option value='North America'>North America</option>
          <option value='Antarctica'>Antarctica</option>
          <option value='South America'>South America</option>
          <option value='Asia'>Asia</option>
        </select>
      </label>
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
  );
}
