import React from 'react';
import { streamings } from '../utils/content';

const Streamings = () => {

  const [isOpen, setIsOpen] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  return (
    <>
      <button className={`button ${isClicked
        ? 'button__close_top' : 'header__button'}`}
        onClick={handleClick}>{isClicked ? '' : 'Стриминги'}
      </button>
      <nav className={`header__links ${isOpen ? '' : 'button__visible'}`}>
          {streamings.map((stream) => {
            return <a className="header__link" target="_blank" 
            key={stream.id}
            {...stream}
            >{stream.name}</a>
          })}
      </nav>
    </>
  );
};
export default Streamings;