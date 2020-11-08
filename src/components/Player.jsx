import React from 'react';
import Song from './Song'
import playList from '../utils/songs';

const Player = () => {

	const [ songList, setSongList ] = React.useState(playList)
	const [ isPlaying, setIsPlaying ] = React.useState(null)
	const [ textButtonState, setTextButtonState ] = React.useState('Текст песни')
	const [ currentSong, setCurrentSong ] = React.useState(songList[0])
	const [ isPlaylistOpen, setIsPlaylistOpen ] = React.useState(false)
	const playlistButtonRef = React.useRef();
	const togglePlaylistRef = React.useRef();
	const playPauseButtonRef = React.useRef();
	const songTextButtonRef = React.useRef();
	const audioRef = React.useRef()

	console.log(playPauseButtonRef)

	const nextRandomSong = React.useCallback(() => {
		audioRef.current.play()
	}, [])

	React.useEffect((min = 0, max = playList.length) => {
		const randomNumber = Math.floor(Math.random() * (max - min)) + min
		setCurrentSong(songList[randomNumber]);
	}, [songList, nextRandomSong]);

	const playToggleHandler = (e) => {
		if (!isPlaying) {
			audioRef.current.play()
			setIsPlaying(currentSong)
			playPauseButtonRef.current.classList.remove('button__play')
			playPauseButtonRef.current.classList.add('button__pause')
		} else {
			audioRef.current.pause()
			setIsPlaying(null)
			playPauseButtonRef.current.classList.add('button__play')
			playPauseButtonRef.current.classList.remove('button__pause')
		}
	}

		const toggleButtonText = () => {
				textButtonState === 'Релизы' ?
				setTextButtonState('Текст песни') :
				setTextButtonState('Релизы')
		}

		const playlistToggleHandler = (e) => {

			console.log(e.target)

		if (!isPlaylistOpen) {
			playlistButtonRef.current.classList.toggle('button__toggle');
			playlistButtonRef.current.classList.toggle('button__close');
			togglePlaylistRef.current.classList.toggle('visible');
			songTextButtonRef.current.classList.toggle('visible-btn');
			setIsPlaylistOpen(true)
		} else {
			playlistButtonRef.current.classList.toggle('button__toggle');
			playlistButtonRef.current.classList.toggle('button__close');
			togglePlaylistRef.current.classList.toggle('visible');
			songTextButtonRef.current.classList.toggle('visible-btn');
			setIsPlaylistOpen(false)
		}
	}

  return (
	<>
    <section className="player">
      <button className="button__play button" ref={ playPauseButtonRef } onClick={ playToggleHandler } />

			<Song currentSong={ currentSong } />

      <button className="button button__text" ref={ songTextButtonRef } onClick={ toggleButtonText }>
				{ textButtonState }
			</button>
      <button className="button button__toggle" ref={ playlistButtonRef } onClick={ playlistToggleHandler } />
			{ currentSong && <audio src={ currentSong.url } ref={ audioRef } onEnded={ nextRandomSong }/> }
    </section>

		<section className="playlist" ref={ togglePlaylistRef }>
      <h4 className="song__subtitle">Релизы</h4>
			{ (Object.keys(songList).length !== 0) ?
					<ul className="song__list">

						{
							textButtonState === 'Текст песни' ?

							songList.map((song, key) => {
								const activeSongClass = isPlaying && currentSong === song ? 'song_active' : null;
								return <li onClick={ playToggleHandler } className={`song__title playlist_song ${ activeSongClass }`} key={ key }>
									{`${ song.artist } - ${ song.title }`}
								</li> }) :

							currentSong.text.map(paragraph => <p className="playlist__text">{ paragraph }</p>)
						}
					</ul>
			 : <p className="playlist__text">Больше релизов не найдено</p>
			 }
			</section>
	</>
  )
}

export default Player;
