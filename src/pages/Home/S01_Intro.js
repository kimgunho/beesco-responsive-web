import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S01_Intro.module.scss';
import boxText from '../../assets/images/home/box-text.png';

const cx = classNames.bind(styles);

const Intro = () => {
  const { i18n } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx(['box', i18n.language])} style={{ backgroundImage: `url(${boxText})` }} />
      <p className={cx('sub')}>
        We keep dreaming.
        <br />
        We keep running.
      </p>
    </div>
  );
};

export default Intro;
