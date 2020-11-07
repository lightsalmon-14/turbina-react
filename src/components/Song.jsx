import React from 'react';

function Song(props) {
	const { artist, song } = props.currentSong
  return (
			<div className="song current">
        <div className="song__progress"></div>
        <div className="song__title animated">{`${ artist } - ${ song }`}
          <div className="song__time">0:24</div>
        </div>
      </div>
  )
}

export default Song;
