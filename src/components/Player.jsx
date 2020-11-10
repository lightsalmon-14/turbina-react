import React, { useState, useRef, useCallback, useEffect } from 'react';
import playList from '../utils/songs';
import PlayingNow from './PlayingNow';

const Player = () => {

	const [ textButtonState, setTextButtonState ] = useState('Текст песни');
	const [ currentSong, setCurrentSong ] = useState(playList[0])
	const [ isPlaylistOpen, setIsPlaylistOpen ] = useState(false)
	const [ isPlaying, setIsPlaying ] = useState(null)
	const playPauseButtonRef = useRef()
	const playlistButtonRef = useRef()
	const togglePlaylistRef = useRef()
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

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		)
	}

	const playlistToggleHandler = (e) => {

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
	<>
    <section className="player">
      <button
				className="button__play button"
				ref={ playPauseButtonRef }
				onClick={ playToggleHandler }
			/>

			<div className="song">
				<div className="song__title">
					{
					currentSong ?
					`${ currentSong.artist } — ${ currentSong.title }` : 'Песен не добавлено'
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
					max={ songTime.songDuration }
					name="songTime" className="song__duration"
					onChange={ dragHandler }
				/>
      </div>
      <button
				className="button button__text"
				ref={ songTextButtonRef }
				onClick={ toggleButtonText }
			>
				{ textButtonState }
			</button>

      <button
				className="button button__toggle"
				ref={ playlistButtonRef }
				onClick={ playlistToggleHandler }
			/>
			{ currentSong &&
				<audio
					onCanPlay={ songTimeUpdateHandler }
					onTimeUpdate={ songTimeUpdateHandler }
					src={ currentSong.url }
					ref={ audioRef }
					onEnded={ nextRandomSong }
				/>
			}
    </section>

		<section className="playlist" ref={ togglePlaylistRef }>
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
		</section>
	</>
  )
}

export default Player;
