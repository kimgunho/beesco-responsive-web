import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S04_Global.module.scss';

const cx = classNames.bind(styles);

const Global = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>GLOBAL SHOE COMPANY</h3>
        <div className={cx('text')}>
          <p className={cx('sub')}>
            {t('company.global-text')
              .split('\n')
              .map((line, index) => (
                <span key={index}>{line}</span>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Global;
