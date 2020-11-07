import React from 'react';

function Player() {
  return (
    <section className="player">
      <button className="button__play button"></button>
      <div className="song current">
        <div className="song__progress"></div>
        <div className="song__title animated">№6 Поезия — Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров
          <div className="song__time">0:24</div>
        </div>
      </div>
      <button className="button button__text">Tекст песни</button>
      <button className="button button__toggle"></button>
    </section>
  )
}

export default Player;