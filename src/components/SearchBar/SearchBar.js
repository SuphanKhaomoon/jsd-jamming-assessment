/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {

  const [searchTerm, setSearchTerm] = useState("")

  function search() {
    props.onSearch(searchTerm);
    setSearchTerm('');
  }
  
  function handleTermChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" 
             onChange={handleTermChange}
             value={searchTerm}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH</button>
    </div>
  );
}

export default SearchBar;
