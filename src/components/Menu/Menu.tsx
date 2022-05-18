import React from 'react';

const Menu = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <a className="nav__logo" href="/">
          Crablog.ru
        </a>
        <ul className="nav__menu menu">
          <li className="menu__item">
            <a href="#portfolio" className="menu__link menu__link_portfolio">
              Портфолио
            </a>
          </li>
          <li className="menu__item">
            <a href="#about" className="menu__link menu__link_about menu__link_active">
              Обо мне
            </a>
          </li>
          <li className="menu__item">
            <a href="#contacts" className="menu__link menu__link_contacts">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
