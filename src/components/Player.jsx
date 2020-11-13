import React, { useState, useRef, useCallback, useEffect } from 'react';
import playList from '../utils/songs';
import PlayingNow from './PlayingNow';
import Icons from './icons/index';

const Player = () => {

	const [ textButtonState, setTextButtonState ] = useState('Текст песни');
	const [ currentSong, setCurrentSong ] = useState(playList[0])
	const [ isPlaylistOpen, setIsPlaylistOpen ] = useState(false)
	const [ isPlaying, setIsPlaying ] = useState(false)
	const [isClicked, setIsClicked] = React.useState(true);
	// const playPauseButtonRef = useRef()
	// const playlistButtonRef = useRef()
	const togglePlaylistRef = useRef()
	const videoButtonRef = useRef()
	const songTextButtonRef = useRef()
	const audioRef = useRef()
	const [ songTime, setSongTime ] = useState({ currentTime: 0, songDuration: 0 })

	const nextRandomSong = useCallback(() => {
		audioRef.current.play()
	}, [])

	useEffect((min = 0, max = playList.length) => {
		const randomNumber = Math.floor(Math.random() * (max - min)) + min
		setCurrentSong(playList[randomNumber]);
	}, [nextRandomSong]);

	const playToggleHandler = (e) => {
		if (e.target.textContent) {
			const selectedSong = playList.find(song => song.artist + ' — ' + song.title === e.target.textContent)
			setCurrentSong(selectedSong)
		}

		if (!isPlaying) {
				audioRef.current.play()
				setIsPlaying(currentSong)
		} else {
				audioRef.current.pause()
				setIsPlaying(false)
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
			songTextButtonRef.current.classList.toggle('visible-btn');
			videoButtonRef.current.classList.toggle('visible-btn');
			setIsPlaylistOpen(true)
			setIsClicked(!isClicked);
		} else {
			togglePlaylistRef.current.classList.toggle('visible');
			songTextButtonRef.current.classList.toggle('visible-btn');
			videoButtonRef.current.classList.toggle('visible-btn');
			setIsPlaylistOpen(false)
			setIsClicked(!isClicked);
		}
	}

		const songTimeUpdateHandler = async (e) => {
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
		<img
			src={ currentSong.cover }
			alt={ currentSong.title }
			className={`${!isClicked && currentSong.cover ? 'audioPlayer__cover' : 'audioPlayer__cover_invisible'}`}
		/>
    <div className="audioPlayer__controls">
			{
				<button className="icons" onClick={ playToggleHandler }>
					{
						!isPlaying ?
						<Icons.Play iconClass="icons__play" /> :
						<Icons.Pause iconClass="icons__pause" />
					}
				</button>
			}
		</div>
    <div className="audioPlayer__song">
				<div className="song__title">song and artist
					{/* {
					currentSong ?
					`${ currentSong.artist } — ${ currentSong.title }` : 'Песен не добавлено'
					} */}

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
					max={ songTime.songDuration }
					name="songTime" className="song__duration"
					onChange={ dragHandler }
				/>
      </div>
    <div className="audioPlayer__buttons">
			<button
				className="button button__video"
				ref={ videoButtonRef }
				onClick={ toggleButtonText }
			>
				Клип
			</button>

      <button
				className="button button__text"
				ref={ songTextButtonRef }
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
					onEnded={ nextRandomSong }
				/>
			}
		</div>
		<div className="audioPlayer__playlist" ref={ togglePlaylistRef }>
      <h4 className="song__subtitle">Релизы</h4>
			{ (Object.keys(playList).length !== 0) ?
					<ul className="song__list">
						{
							textButtonState === 'Текст песни' ?

							playList.map((song, key) => {
								const activeSongClass = isPlaying && currentSong === song ? 'song_active' : '';
								return <li onClick={ playToggleHandler } className={`song__title playlist_song ${ activeSongClass }`} key={ key }>{ activeSongClass ? <PlayingNow /> : '' }
									{`${ song.artist } — ${ song.title }`}
								</li> }) :

							currentSong.text.map(paragraph => <p className="playlist__text">{ paragraph }</p>)
						}
					</ul>
				: <p className="playlist__text">Больше релизов не найдено</p>
			}
		</div>
  </section>
  )
}

export default Player;
