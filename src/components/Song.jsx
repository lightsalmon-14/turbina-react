import React from 'react';

function Song(props) {
	return (
			<div className="song current">
        <div className="song__progress"></div>
        <div className="song__title animated">
					{ props.currentSong ?
					`${ props.currentSong.artist } - ${ props.currentSong.title }` :
					'Песен не добавлено'
					}
          <div className="song__time">0:24</div>
        </div>
      </div>
  )
}

export default Song;
