import React from 'react';

function Host(hostInfo) {
    return (
      <>
        <span className="nom-proprietaire">{hostInfo.name}</span>
        <img
          className="photo-proprietaire"
          src={hostInfo.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;