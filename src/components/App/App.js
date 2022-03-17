import React, { useEffect, useState } from 'react';
import Spotify from '../../utils/Spotify';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

function App() {
  // const data = [
  //   {id: 1, name : 'name1', artist : 'artist1', album : 'album1'},
  //   {id: 2, name : 'name2', artist : 'artist2', album : 'album2'},
  //   {id: 3, name : 'name3', artist : 'artist3', album : 'album3'}
  // ]

  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState('New Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  },[]);

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

  function updatePlaylistName(name) {
    setPlaylistName(name); 
  }

  function savePlaylist() {
    const trackIds = playlistTracks.map(track => track.id);
    Spotify.savePlaylist(playlistName, trackIds).then(() => {
      setPlaylistTracks([]);
      setPlaylistName("New Playlist");
    });
  }

  function search(searchTerm) {
    Spotify.search(searchTerm).then((tracks) => {
      setSearchResults(tracks);
    });
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar 
          onSearch={search}
        />
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
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
