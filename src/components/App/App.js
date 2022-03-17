import React, { useState } from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

function App() {
  const data = [
    {id: 1, name : 'name1', artist : 'artist1', album : 'album1'},
    {id: 2, name : 'name2', artist : 'artist2', album : 'album2'},
    {id: 3, name : 'name3', artist : 'artist3', album : 'album3'}
  ]

  const [searchResults, setSearchResults] = useState([...data]);

  const [playlistName, setPlaylistName] = useState('');

  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  function removeTrack(track) {
    setPlaylistTracks(
      playlistTracks.filter((newTrack => newTrack.id !== track.id))
    );
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults 
            searchResults={searchResults}
            onAdd={addTrack}
          />
          {/* <!-- Add a Playlist component --> */}
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
