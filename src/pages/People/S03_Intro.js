import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S03_Intro.module.scss';
import office from '../../assets/images/people/office.jpg';

const cx = classNames.bind(styles);

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <div className={cx('info')}>
          <h3 className={cx('title')}>{t('people.intro-title')}</h3>
          <p className={cx('text')}>{t('people.intro-text')}</p>
        </div>
        <div className={cx('image')}>
          <img src={office} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
