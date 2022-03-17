import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

function TrackList({tracks}) {
  return (
    <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        { tracks && tracks.map((track) => (
            <Track 
              key={track.id}
              name={track.name} 
              artist={track.artist}
              album={track.album}
            />
          ))
        }
    </div>
  );
}

export default TrackList;


