import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FiChevronUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import styles from './Footer.module.scss';
import logo from '../assets/images/component/logo-white.png';

const cx = classNames.bind(styles);

const Footer = () => {
  const { t } = useTranslation();
  const [showTopButton, setShowTopButton] = useState(window.scrollY);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowTopButton(window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <footer>
        <div className={cx('limiter')}>
          <ul className={cx('info')}>
            <li>
              <img src={logo} alt="BEESCO" />
            </li>
            <li>{t('component.address')}</li>
            <li>{t('component.tel-fax')}</li>
            <li>{t('component.copy')}</li>
          </ul>
        </div>
      </footer>
      <div className={cx(['topButton', { show: showTopButton }])} onClick={onScrollTop}>
        <FiChevronUp />
      </div>
    </>
  );
};

export default Footer;
