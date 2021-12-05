import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S06_Recruit.module.scss';
import step1 from '../../assets/images/people/circle1.png';
import step2 from '../../assets/images/people/circle2.png';
import step3 from '../../assets/images/people/circle3.png';
import step4 from '../../assets/images/people/circle4.png';

const cx = classNames.bind(styles);

const Recruit = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>{t('people.recruit-title')}</h3>
        <h4 className={cx('label')}>{t('people.recruit-label-01')}</h4>
        <ul className={cx('table')}>
          <li className={cx('row')}>
            <h4 className={cx('header')}>{t('people.recruit-header-01')}</h4>
            <div className={cx('body')}>{t('people.recruit-body-01')}</div>
          </li>
          <li className={cx('row')}>
            <h4 className={cx('header')}>{t('people.recruit-header-02')}</h4>
            <div className={cx('body')}>{t('people.recruit-body-02')}</div>
          </li>
          <li className={cx('row')}>
            <h4 className={cx('header')}>{t('people.recruit-header-03')}</h4>
            <div className={cx('body')}>{t('people.recruit-body-03')}</div>
          </li>
        </ul>
        <h4 className={cx('label')} style={{ marginTop: '3rem' }}>
          {t('people.recruit-label-02')}
        </h4>
        <ol className={cx('steps')}>
          <li style={{ backgroundImage: `url(${step1})` }}>
            <p className={cx('order')}>STEP 1</p>
            <p className={cx('text')}>
              {t('people.recruit-step01-text')
                .split('\n')
                .map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
            </p>
          </li>
          <li style={{ backgroundImage: `url(${step2})` }}>
            <p className={cx('order')}>STEP 2</p>
            <p className={cx('text')}>
              {t('people.recruit-step02-text')
                .split('\n')
                .map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
            </p>
          </li>
          <li style={{ backgroundImage: `url(${step3})` }}>
            <p className={cx('order')}>STEP 3</p>
            <p className={cx('text')}>
              {t('people.recruit-step03-text')
                .split('\n')
                .map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
            </p>
          </li>
          <li style={{ backgroundImage: `url(${step4})` }}>
            <p className={cx('order')}>STEP 4</p>
            <p className={cx('text')}>
              {t('people.recruit-step04-text')
                .split('\n')
                .map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
            </p>
          </li>
        </ol>

        <h4 className={cx('label')} style={{ marginTop: '3rem' }}>
          {t('people.recruit-label-03')}
        </h4>
        <p className={cx('support')}>
          <a href="tel:07048503206">
            {t('people.recruit-tel')
              .split('\n')
              .map((line, index) => (
                <span key={index}>{line}</span>
              ))}
          </a>
          <a href="mailto:recruit@beesco.com">recruit@beesco.com</a>
        </p>
      </div>
    </div>
  );
};

export default Recruit;
