import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S06_Vision.module.scss';
import diagramKo from '../../assets/images/company/diagram-kr.png';
import diagramEn from '../../assets/images/company/diagram-en.png';

const cx = classNames.bind(styles);

const Vision = () => {
  const { i18n } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>VISION</h3>
        <p className={cx('slogan')}>
          <span className={cx('accent')}>Be&nbsp;</span>
          the&nbsp;
          <span className={cx('accent')}>e</span>
          xcellent&nbsp;
          <br />
          <span className={cx('accent')}>s</span>
          hoe&nbsp;
          <span className={cx('accent')}>co</span>
          mpany
        </p>
        <img src={i18n.language === 'ko' ? diagramKo : diagramEn} alt="VISION" />
      </div>
    </div>
  );
};

export default Vision;
