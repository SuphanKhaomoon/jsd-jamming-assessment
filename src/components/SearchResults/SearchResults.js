import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

function SearchResults({searchResults}) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <!-- Add a TrackList component --> */}
      <TrackList tracks={searchResults}/>
    </div>
  );
}

export default SearchResults;
