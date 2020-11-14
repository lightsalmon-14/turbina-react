import React from 'react';
import title from '../images/turbina_logo.svg';
import logo from '../images/logo.svg';
import Player from './Player';
import Streamings from './Streamings';
import { externalLinks as link } from '../utils/content';

function Header() {

	const [ isBlur, setBlur ] = React.useState(false)
	const blurHandler = (blur) => {
			setBlur(blur)
	}

  return (
    <header className="header">
      <div className={`header__menu ${isBlur ? 'visible_blur' : null }`}>
        <a className="header__web" href={link.store} target="_blank" rel="noreferrer"><img className="header__logo" src={logo}
          alt="Логотип" /></a>
        <Streamings />
      </div>
      <h1 className={`header__title ${isBlur ? 'visible_blur' : null }`}>
        <img className="header__image" src={title} alt="Турбина" />
      </h1>
      <Player onBlur={blurHandler} />
    </header>
  )
}

export default Header;
