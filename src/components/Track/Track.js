import React from 'react';
import './Track.css';

function Track({isRemoval, name, artist, album}) {
  const renderAction = () => {
    if(isRemoval) {
      return  <button className="Track-action">-</button>;
    } else {
      return  <button className="Track-action">+</button>;
    }
  }
 
  return (
    <div className="Track">
      <div className="Track-information">
        {/*<!-- track name will go here -->*/}
        <h3>{name}</h3>
        {/*<!-- track artist will go here--> | <!-- track album will go here -->*/}
        <p>{artist} | {album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;
