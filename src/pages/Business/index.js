import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './index.module.scss';
import business from '../../assets/data/business';
import Jumbotron from '../../component/Jumbotron';
import Slogan from '../../component/Slogan';
import Background from '../../assets/images/business/bg.jpg';
import diagramKoDesktop from '../../assets/images/business/diagram-ko-desktop.jpg';
import diagramKoMobile from '../../assets/images/business/diagram-ko-mobile.jpg';
import diagramEnDesktop from '../../assets/images/business/diagram-en-desktop.jpg';
import diagramEnMobile from '../../assets/images/business/diagram-en-mobile.jpg';

const cx = classNames.bind(styles);

const Business = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Jumbotron sub={t('business.jumbotron-sub')} background={Background}>
        We dream
        <br /> for
        <br /> innovation
      </Jumbotron>
      <Slogan title="RUN MANAGEMENT">{t('business.slogan-sub')}</Slogan>
      <div className={cx('container')}>
        <div className={cx('limiter')}>
          <img className={cx('desktop')} src={i18n.language === 'ko' ? diagramKoDesktop : diagramEnDesktop} alt="" />
          <img className={cx('mobile')} src={i18n.language === 'ko' ? diagramKoMobile : diagramEnMobile} alt="" />
          <ul className={cx('step')}>
            {business.map((item, index) => (
              <li key={index} style={{ backgroundImage: `url(${item.image})` }}>
                <div className={cx('info')}>
                  <div className={cx('box')}>
                    <p className={cx('character')}>{item.title[0]}</p>
                    <p className={cx('title')}>{item.title}</p>
                    <p className={cx('sub')}>{t(`business.${item.sub}`)}</p>
                  </div>
                  <p className={cx('text')}>{t(`business.${item.text}`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Business;
