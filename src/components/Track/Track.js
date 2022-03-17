import React from 'react';
import './Track.css';

function Track({isRemoval, track, onAdd, onRemove}) {
  function removeTrack() {
    onRemove(track)
  }

  function addTrack() {
    onAdd(track)
  }

  function renderAction() {
    if(isRemoval) {
      return  <button className="Track-action" onClick={removeTrack}>-</button>;
    } else {
      return  <button className="Track-action" onClick={addTrack}>+</button>;
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        {/*<!-- track name will go here -->*/}
        <h3>{track.name}</h3>
        {/*<!-- track artist will go here--> | <!-- track album will go here -->*/}
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
