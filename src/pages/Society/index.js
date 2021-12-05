import React from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './index.module.scss';
import society from '../../assets/data/society';
import Jumbotron from '../../component/Jumbotron';
import Slogan from '../../component/Slogan';
import background from '../../assets/images/society/bg.jpg';
import diagramKoDesktop from '../../assets/images/society/diagram-ko-desktop.jpg';
import diagramKoMobile from '../../assets/images/society/diagram-ko-mobile.jpg';
import diagramEnDesktop from '../../assets/images/society/diagram-en-desktop.jpg';
import diagramEnMobile from '../../assets/images/society/diagram-en-mobile.jpg';

const cx = classNames.bind(styles);

const Society = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Jumbotron sub={t('society.jumbotron-sub')} background={background}>
        We share
        <br /> our
        <br /> dreams
      </Jumbotron>
      <Slogan title="CSR · SUSTAINABILITY">{t('society.slogan-sub')}</Slogan>
      <div className={cx('container')}>
        <div className={cx('limiter')}>
          <img className={cx('desktop')} src={i18n.language === 'ko' ? diagramKoDesktop : diagramEnDesktop} alt="" />
          <img className={cx('mobile')} src={i18n.language === 'ko' ? diagramKoMobile : diagramEnMobile} alt="" />
          <ul className={cx('wrapper')}>
            {society.map((item, index) => (
              <li key={index} className={cx({ reverse: item.reverse })}>
                <div className={cx('info')}>
                  <h4 className={cx('title')}>
                    <span className={cx('sub')}>{t(`society.${item.sub}`)}</span>
                    {t(`society.${item.title}`)}
                  </h4>
                  <p className={cx('text')}>{t(`society.${item.text}`)}</p>
                  <ol className={cx('detail')}>
                    {item.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>
                        {t(`society.${step.text}`)}
                        {step.subSteps && (
                          <ol>
                            {step.subSteps.map((subStep, subStepIndex) => (
                              <li key={subStepIndex}>{t(`society.${subStep}`)}</li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className={cx('image')} style={{ backgroundImage: `url(${item.image})` }}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Society;
