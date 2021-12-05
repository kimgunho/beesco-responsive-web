import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';
import menus from '../assets/data/menus';
import logo from '../assets/images/component/logo-color.png';
import flagKo from '../assets/images/component/flag-ko.png';
import flagEn from '../assets/images/component/flag-en.png';

const cx = classNames.bind(styles);

const Header = () => {
  const { i18n } = useTranslation();
  const [showPanel, setShowPanel] = useState(false);

  const handleGnbToggle = () => {
    setShowPanel(!showPanel);
  };

  const handleChangeLanguage = (lang) => {
    setShowPanel(false);
    i18n.changeLanguage(lang);
    localStorage.setItem('@lang', lang);
  };

  return (
    <header>
      <h1 className={cx('logo')}>
        <Link to="/">
          <img src={logo} alt="BEESCO" />
        </Link>
      </h1>
      <div className={cx('mobileMenuButton')} onClick={handleGnbToggle}>
        {showPanel ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      <div className={cx('gnb', { on: showPanel })}>
        <ul className={cx('menus')}>
          {menus.map((menu, index) => (
            <li key={index}>
              <NavLink onClick={() => setShowPanel(false)} className={({ isActive }) => cx({ active: isActive })} to={menu.link}>
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={cx('langs')}>
          <li onClick={() => handleChangeLanguage('ko')}>
            <img src={flagKo} alt="한국어" />
          </li>
          <li onClick={() => handleChangeLanguage('en')}>
            <img src={flagEn} alt="영어" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
