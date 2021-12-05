import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FiPlus } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import styles from './S02_People.module.scss';

const cx = classNames.bind(styles);

const People = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <ul className={cx('limiter')}>
        <li className={cx(['button', 'recruit'])}>
          <Link to="/people">
            <div className={cx('image')} />
            <h3 className={cx('title')}>
              <span className={cx('company')}>BEESCO</span>
              {t('home.hiring')}
            </h3>
            <p className={cx('more')}>
              <FiPlus />
            </p>
          </Link>
        </li>
        <li className={cx(['button', 'welfare'])}>
          <Link to="/people">
            <div className={cx('image')} />
            <h3 className={cx('title')}>
              <span className={cx('company')}>BEESCO</span>
              {t('home.welfare')}
            </h3>
            <p className={cx('more')}>
              <FiPlus />
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default People;
