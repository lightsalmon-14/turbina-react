import React from 'react';
import title from '../images/turbina_logo.svg';
import logo from '../images/logo.svg';
import Player from './Player';
import Streamings from './Streamings';

function Header() {

  return (
    <header className="header">
      <div className="header__menu">
        <a className="header__web" href="https://marshakbooks.ru"><img className="header__logo" src={logo}
          alt="Логотип" /></a>
        <Streamings />
      </div>
      <h1 className="header__title">
        <img className="header__image" src={title} alt="Турбина" />
      </h1>
      <Player />
    </header>
  )
}

export default Header;
