import React from 'react';
import classNames from 'classnames/bind';

import styles from './Slogan.module.scss';

const cx = classNames.bind(styles);

const Slogan = ({ title, children }) => {
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>{title}</h3>
        <p className={cx('sub')}>{children}</p>
      </div>
    </div>
  );
};

export default Slogan;
