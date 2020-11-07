import React from 'react';
import Song from './Song'
import playList from '../utils/songs';

const Player = () => {

	const [ songList, setSongList ] = React.useState(playList)
	const [ isPlaying, setIsPlaying ] = React.useState(false)
	const [ currentSong, setCurrentSong ] = React.useState(songList[0])
	const audioRef = React.useRef()

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
			setIsPlaying(true)
			e.target.classList.remove('button__play')
			e.target.classList.add('button__pause')
		} else {
			audioRef.current.pause()
			setIsPlaying(false)
			e.target.classList.add('button__play')
			e.target.classList.remove('button__pause')
		}
	}

  return (
    <section className="player">
      <button className="button__play button" onClick={ playToggleHandler } />

			<Song currentSong={ currentSong } />

      <button className="button button__text">Tекст песни</button>
      <button className="button button__toggle" />
			<audio src={ currentSong.url } ref={ audioRef } onEnded={ nextRandomSong }/>
    </section>
  )
}

export default Player;
