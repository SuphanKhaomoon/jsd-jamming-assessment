import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist(props) {

  function handleNameChange(e) {
    props.onNameChange(e.target.value);
  }

  return (
    <div className="Playlist">
      <input value={props.playlistName} onChange={handleNameChange}/>
      {/* <!-- Add a TrackList component --> */}
      <TrackList 
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
