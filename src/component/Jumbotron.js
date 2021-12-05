import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './Jumbotron.module.scss';

const cx = classNames.bind(styles);

const Jumbotron = ({ children, sub, background }) => {
  const { i18n } = useTranslation();

  return (
    <div className={cx('container')} style={{ backgroundImage: `url(${background})` }}>
      <h2 className={cx(i18n.language)}>{children}</h2>
      <p className={cx('sub')}>{sub}</p>
    </div>
  );
};

export default Jumbotron;
