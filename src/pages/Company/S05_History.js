import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S05_History.module.scss';
import history from '../../assets/data/history';
import building from '../../assets/images/company/history.jpg';

const cx = classNames.bind(styles);

const History = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>HISTORY</h3>
        <div className={cx('wrapper')}>
          <div className={cx('image')}>
            <img src={building} alt="BEESCO" />
          </div>
          <div className={cx('history')}>
            <ol className={cx('list')}>
              {history.map((item, index) => (
                <li key={index}>
                  <span className={cx('date')}>{item.date}</span>
                  <span className={cx('did')}>{t(`company.${item.key}`)}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
