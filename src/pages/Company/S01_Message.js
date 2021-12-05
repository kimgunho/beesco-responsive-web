import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';

import styles from './S01_Message.module.scss';
import slide1 from '../../assets/images/company/ceo-slide1.jpg';
import slide2 from '../../assets/images/company/ceo-slide2.jpg';
import sign from '../../assets/images/company/sign.png';

const cx = classNames.bind(styles);

SwiperCore.use([Autoplay]);

const Message = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>CEO MESSAGE</h3>
        <div className={cx('info')}>
          <div className={cx('text')}>
            <h4 className={cx('title')}>{t('company.massage-title')}</h4>
            <p className={cx('sub')}>
              {t('company.massage-sub')}
              <span className={cx('lastText')}>{t('company.massage-last')}</span>
            </p>
            <p className={cx('sign')}>
              <span className={cx('writer')}>{t('company.massage-sign')}</span>
              <img className={cx(i18n.language)} src={sign} alt="최유상" />
            </p>
          </div>
          <div className={cx('slider')}>
            <Swiper autoplay={{ delay: 3000 }} loop={true}>
              <SwiperSlide>
                <img src={slide1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
