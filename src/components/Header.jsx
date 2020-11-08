import React from 'react';
import title from '../images/turbina_logo.svg';
import logo from '../images/logo.svg';
import Player from './Player';

function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <a className="header__web" href="https://marshakbooks.ru"><img className="header__logo" src={logo}
          alt="Логотип" /></a>
        <button className="header__button button">Стриминги</button>
        <nav className="header__links">
          <a className="header__link" target="_blank" href="1">Яндекс.Музыка</a>
          <a className="header__link" target="_blank" href="1">Spotify</a>
          <a className="header__link" target="_blank" href="1">Apple Music</a>
          <a className="header__link" target="_blank" href="1">VK Music</a>
        </nav>
      </div>
      <h1 className="header__title">
        <img className="header__image" src={title} alt="Турбина" />
      </h1>
      <Player />
    </header>
  )
}

export default Header;
