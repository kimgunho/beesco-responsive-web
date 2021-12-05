import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import styles from './S04_HR.module.scss';
import icon1 from '../../assets/images/people/hr-result.png';
import icon2 from '../../assets/images/people/hr-grade.png';
import icon3 from '../../assets/images/people/hr-benefit.png';

const cx = classNames.bind(styles);

const HR = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>{t('people.hr-rules-title')}</h3>
        <ul className={cx('rules')}>
          <li>
            <h4 className={cx('label')}>{t('people.hr-title-01')}</h4>
            <img src={icon1} alt={t('people.hr-title-01')} />
            <p className={cx('text')}>{t('people.hr-text-01')}</p>
            <p className={cx('more')}>
              <FiPlus />
            </p>
          </li>
          <li>
            <h4 className={cx('label')}>{t('people.hr-title-02')}</h4>
            <img src={icon2} alt={t('people.hr-title-02')} />
            <p className={cx('text')}>{t('people.hr-text-02')}</p>
            <p className={cx('more')}>
              <FiPlus />
            </p>
          </li>
          <li>
            <h4 className={cx('label')}>{t('people.hr-title-03')}</h4>
            <img src={icon3} alt={t('people.hr-title-03')} />
            <p className={cx('text')}>{t('people.hr-text-03')}</p>
            <p className={cx('more')}>
              <FiPlus />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HR;
