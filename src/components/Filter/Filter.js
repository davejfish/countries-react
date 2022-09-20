import './Filter.css';

export default function Filter({ searchParam, setSearchParam, setQuery }) {
  return (
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
  );
}
