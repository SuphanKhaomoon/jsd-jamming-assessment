import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

function SearchResults({searchReslts}) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* <!-- Add a TrackList component --> */}
      <TrackList tracks={searchReslts}/>
    </div>
  );
}

export default SearchResults;
