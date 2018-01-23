import React from 'react';
import headerImage from '../../static/images/header-image.svg';

const Header = () => (
  <header className="header">
    <p className="header__text__first">Pokémon</p>
    <img src={headerImage} className="header__image" alt="logo" />
    <p className="header__text__second">Rendezvous</p>
  </header>
);

export default Header;
