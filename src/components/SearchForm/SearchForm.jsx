import { useState } from 'react';
import css from './SearchForm.module.css';
//import { Loader } from 'components/Loader/Loader';

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  //const [loader, setLoader] = useState(false);
  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      {/* {loader && <Loader />} */}
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <button className={css.searchButton} type="submit">
          Search Movie
        </button>
      </form>
    </>
  );
};
