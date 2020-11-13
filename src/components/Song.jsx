import React from 'react';

function Song(props) {
	return (
		<>
			<div className="song">
				<label for="songTime">
					{
					props.currentSong ?
					`${ props.currentSong.artist } — ${ props.currentSong.title }` : 'Песен не добавлено'
					}
				</label>
        <input type="range" name="songTime" className="song__title animated" />
      </div>
		</>
  )
}

export default Song;
