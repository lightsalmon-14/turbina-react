import React, { useState, useRef, useEffect } from 'react';
import playList from '../utils/songs';
import PlayingNow from './PlayingNow';
import Icons from './icons/index';

const Player = (props) => {

	const [ textButtonState, setTextButtonState ] = useState('Текст песни');
	const [ currentSong, setCurrentSong ] = useState(playList[0])
	const [ isPlaylistOpen, setIsPlaylistOpen ] = useState(false)
	const [ isPlaying, setIsPlaying ] = useState(false)
	const [ isClicked, setIsClicked ] = React.useState(true);
	const togglePlaylistRef = useRef()
	const audioRef = useRef()
	const [ songTime, setSongTime ] = useState({ currentTime: 0, songDuration: 0 })

	useEffect((min = 0, max = playList.length) => {
		const randomNumber = Math.floor(Math.random() * (max - min)) + min
		setCurrentSong(playList[randomNumber]);
	}, []);

	const toggleBlur = (blur) => {
		if (blur) {
			props.onBlur(true)
		} else {
			props.onBlur(false)
		}
	}

	const isPlayingHandler = (e) => {
		if (e.type === 'playing') {
			setIsPlaying(true)
		}
		if (e.type === 'pause') {
			setIsPlaying(false)
		}
	}

	const setTrack = (e) => {
		const selectedSong = playList.find(song =>
		song.artist + ' feat. ' + song.originalArtist + ' — ' + song.title === e.target.textContent)
		setCurrentSong(selectedSong)
	}

	const playTrack = () => {
		audioRef.current.play()
	}

	const playToggleHandler = () => {
			if (!isPlaying) {
				audioRef.current.play()
			} else {
				audioRef.current.pause()
			}
		}

	const toggleButtonText = () => {
			textButtonState === 'Релизы' ?
			setTextButtonState('Текст песни') :
			setTextButtonState('Релизы')
	}

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		)
	}

	const playlistToggleHandler = (e) => {
		if (!isPlaylistOpen) {
			togglePlaylistRef.current.classList.toggle('visible');
			setIsPlaylistOpen(true)
			toggleBlur(true)
			setIsClicked(!isClicked);
		} else {
			togglePlaylistRef.current.classList.toggle('visible');
			setIsPlaylistOpen(false)
			toggleBlur(false)
			setIsClicked(!isClicked);
		}
	}

		const songTimeUpdateHandler = (e) => {
			const currentTime =  e.target.currentTime
			const songDuration = e.target.duration
			setSongTime({ currentTime, songDuration })
		}

		const dragHandler = (e) => {
			audioRef.current.currentTime = e.target.value
			setSongTime({ currentTime: e.target.value })
		}

  return (
	<section className="audioPlayer">
		{	(Object.values(playList).length !== 0) && <img
			src={ currentSong.cover }
			alt={ currentSong.title }
			className={`${!isClicked && currentSong.cover ? 'audioPlayer__cover' : 'audioPlayer__cover_invisible'}`}
		/> }
    <div className="audioPlayer__controls">
			{
				<button className="icons" onClick={ playToggleHandler }>
					{
						!isPlaying ?
						<Icons.Play iconClass="icons__play" fill={'#fff'} /> :
						<Icons.Pause iconClass="icons__pause" />
					}
				</button>
			}
		</div>
    <div className="audioPlayer__song">
				<div className="song__title animated">
					{
					currentSong ?
					`${ currentSong.artist } .feat ${ currentSong.originalArtist } — ${ currentSong.title }` : 'Песен не добавлено'
					}

				<span className="song__timer">
					{
						songTime.songDuration ?
						getTime(songTime.songDuration - songTime.currentTime) :
						'0:00'
					}
				</span>
				</div>

        <input
					type="range" min="0"
					value={ songTime.currentTime }
					max={ songTime.songDuration || '0:00' }
					name="songTime"
					className="song__duration"
					onChange={ dragHandler }
				/>
      </div>
    <div className="audioPlayer__buttons">
			<button  className={`button button__video ${isPlaylistOpen && currentSong.video ? 'visible-btn' : null}`}>
				<a href={currentSong.video} target="_blank" rel="noreferrer">Клип</a>
			</button>

      <button
				className={`button button__text ${isPlaylistOpen ? 'visible-btn' : null}`}
				onClick={ toggleButtonText }
			>
				{ textButtonState }
			</button>
		</div>
    <div className="audioPlayer__toggle">
			<button className="icons" onClick={ playlistToggleHandler }>
			{ isClicked ?
			<Icons.Toggle iconClass="icons__toggle" /> :
			<Icons.Close iconClass="icons__close" />
			}
			</button>
			{ currentSong &&
				<audio
					onCanPlay={ songTimeUpdateHandler }
					onTimeUpdate={ songTimeUpdateHandler }
					src={ currentSong.url }
					ref={ audioRef }
					onEnded={ playTrack }
					onPlaying={ isPlayingHandler }
					onPause={ isPlayingHandler }
				/>
			}
		</div>
		<div className="audioPlayer__playlist" ref={ togglePlaylistRef }>
      { textButtonState === 'Текст песни' ?
			<h4 className="song__subtitle">Релизы:</h4> :
			<h4 className="song__subtitle">Текст песни:</h4> }
			{ (Object.keys(playList).length !== 0) ?
					<ul className="song__list">
						{
							textButtonState === 'Текст песни' ?

							playList.map((song, key) => {
								const activeSongClass = isPlaying && currentSong === song ? 'song_active' : '';
								return <li onMouseDown={ setTrack } onClick={ playTrack } className={`song__title playlist_song ${ activeSongClass }`} key={ key }>{ activeSongClass ? <PlayingNow /> : '' }
									{`${ song.artist } feat. ${ song.originalArtist } — ${ song.title }`}
								</li> }) :
							<p className="playlist__text">
							{ currentSong.text }
							</p>
						}
					</ul>
				: <p className="playlist__text">Больше релизов не найдено</p>
			}
		</div>
  </section>
  )
}

export default Player;
