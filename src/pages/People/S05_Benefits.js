import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { FiPlus } from 'react-icons/fi';

import styles from './S05_Benefits.module.scss';
import welfare1 from '../../assets/images/people/welfare-basic.png';
import welfare2 from '../../assets/images/people/welfare-legal.png';
import welfare3 from '../../assets/images/people/welfare-special.png';

const cx = classNames.bind(styles);

const Benefits = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>{t('people.benefits-title')}</h3>
        <ul className={cx('welfares')}>
          <li>
            <div className={cx('circle')} style={{ backgroundImage: `url(${welfare1})` }}>
              <h4 className={cx('label')}>{t('people.welfares-title-01')}</h4>
              <p className={cx('more')}>
                <FiPlus />
              </p>
            </div>
            <ul className={cx('content')}>
              <li>{t('people.welfares-list01-01')}</li>
              <li>
                {t('people.welfares-list01-02')}
                <span>{t('people.welfares-list01-02-sub')}</span>
              </li>
              <li>{t('people.welfares-list01-03')}</li>
              <li>{t('people.welfares-list01-04')}</li>
              <li>{t('people.welfares-list01-05')}</li>
            </ul>
          </li>
          <li>
            <div className={cx('circle')} style={{ backgroundImage: `url(${welfare2})` }}>
              <h4 className={cx('label')}>{t('people.welfares-title-02')}</h4>
              <p className={cx('more')}>
                <FiPlus />
              </p>
            </div>
            <ul className={cx('content')}>
              <li>{t('people.welfares-list02-01')}</li>
              <li>{t('people.welfares-list02-02')}</li>
              <li>{t('people.welfares-list02-03')}</li>
              <li>{t('people.welfares-list02-04')}</li>
            </ul>
          </li>
          <li>
            <div className={cx('circle')} style={{ backgroundImage: `url(${welfare3})` }}>
              <h4 className={cx('label')}>{t('people.welfares-title-03')}</h4>
              <p className={cx('more')}>
                <FiPlus />
              </p>
            </div>
            <ul className={cx('content')}>
              <li className={cx(i18n.language)}>{t('people.welfares-list03-01')}</li>
              <li className={cx(i18n.language)}>{t('people.welfares-list03-02')}</li>
              <li className={cx(i18n.language)}>{t('people.welfares-list03-03')} </li>
              <li className={cx(i18n.language)}>
                {t('people.welfares-list03-04')}
                <span>{t('people.welfares-list03-04-sub')}</span>
              </li>
              <li className={cx(i18n.language)}>
                {t('people.welfares-list03-05')}
                <span>{t('people.welfares-list03-05-sub')}</span>
              </li>
              <li className={cx(i18n.language)}>
                {t('people.welfares-list03-06')}
                <span>{t('people.welfares-list03-06-sub')}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
