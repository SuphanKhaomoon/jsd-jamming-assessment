import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

function TrackList({tracks, onAdd, isRemoval, onRemove}) {
  return (
    <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        { tracks && tracks.map((track) => (
            <Track 
              key={track.id}
              track={track}
              onAdd={onAdd}
              isRemoval={isRemoval}
              onRemove={onRemove}
            />
          ))
        }
    </div>
  );
}

export default TrackList;


