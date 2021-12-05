import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S07_CI.module.scss';
import WordMark from '../../assets/images/company/ci-logo.jpg';
import signVertical from '../../assets/images/company/sign-vertical.png';
import signHorizontal from '../../assets/images/company/sign-horizontal.png';
import colors from '../../assets/data/colors';

const cx = classNames.bind(styles);

const CI = () => {
  const { t } = useTranslation();
  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>CI STORY</h3>
        <p className={cx('sub')}>{t('company.ci-sub')}</p>
        <ul className={cx('elements')}>
          <li>
            <p className={cx('label')}>{t('company.ci-label-01')}</p>
            <div className={cx('content')}>
              <img src={WordMark} alt={t('company.ci-label-01')} style={{ maxWidth: '420px' }} />
            </div>
          </li>
          <li>
            <p className={cx('label')}>{t('company.ci-label-02')}</p>
            <div className={cx('content')}>
              <ul className={cx('signs')}>
                <li>
                  <div className={cx('sign')}>
                    <p className={cx('sublabel')}>{t('company.ci-label-02-01')}</p>
                    <img src={signVertical} alt={t('company.ci-label-02-01')} style={{ maxWidth: '340px' }} />
                  </div>
                </li>
                <li>
                  <div className={cx('sign')}>
                    <p className={cx('sublabel')}>{t('company.ci-label-02-02')}</p>
                    <img src={signHorizontal} alt={t('company.ci-label-02-02')} style={{ maxWidth: '500px' }} />
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <p className={cx('label')}>{t('company.ci-label-03')}</p>
            <div className={cx('content')}>
              <ul className={cx('colors')}>
                {colors.map((color, index) => (
                  <li key={index}>
                    <div className={cx('color')} style={{ backgroundColor: color.hex }}>
                      <p className={cx('colorName')}>{color.title}</p>
                    </div>
                    <p className={cx('info')}>
                      <span>{color.pantone}</span>
                      <span>{color.rgb}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CI;
