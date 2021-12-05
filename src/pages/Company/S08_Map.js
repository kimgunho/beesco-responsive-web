import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './S08_Map.module.scss';
import maps from '../../assets/data/maps';

const cx = classNames.bind(styles);

const Map = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);

  const mapRef = useRef();

  useEffect(() => {
    const currentMap = maps.find((map, index) => index === tabIndex);
    mapRef.current.src = currentMap.url;
  }, [tabIndex]);

  return (
    <div className={cx('container')}>
      <div className={cx('limiter')}>
        <h3 className={cx('title')}>BEESCO WORLD-WIDE</h3>
        <h4 className={cx('label')}>{t('company.map-label')}</h4>
        <ul className={cx('table')}>
          <li className={cx('row')}>
            <h4 className={cx(['header', 'level1'])}>{t('company.map-ko')}</h4>
            <div className={cx('body')}>
              <span className={cx('accentBlue')}>{t('company.map-address')}</span>
              {t('company.map-address-content')}
              <br />
              <span className={cx('accentBlue')}>TEL</span> {t('company.map-ko-tel')}
              <span className={cx('accentBlue')}> FAX</span> {t('company.map-ko-fax')}
            </div>
          </li>
          <li className={cx('row')}>
            <h4 className={cx(['header', 'level1'])}>{t('company.map-in')}</h4>
            <div className={cx(['body', 'hasTable'])}>
              <ul className={cx('table')}>
                <li className={cx('row')}>
                  <h5 className={cx(['header', 'level2'])}>
                    <span className={cx('accentOrange')}>{t('company.map-in-factory-01')}</span>
                    <br />
                    PT. BEESCO INDONESIA
                  </h5>
                  <div className={cx('body')}>
                    <span className={cx('accentBlue')}>{t('company.map-address')}</span> : JL. RAYA KARAWANG CIKAMPEK KM.87, 7 TAMELANG,
                    PURWASARI, KARAWANG, JAWA BARAT INDONESIA
                    <br />
                    <span className={cx('accentBlue')}>TEL</span> {t('company.map-in-tel1')} <span className={cx('accentBlue')}>FAX</span>
                    {t('company.map-in-fax1')}
                  </div>
                </li>
                <li className={cx('row')}>
                  <h5 className={cx(['header', 'level2'])}>
                    <span className={cx('accentOrange')}>{t('company.map-in-factory-02')}</span>
                    <br />
                    PT. BEES FOOTWEAR INC
                  </h5>
                  <div className={cx('body')}>
                    <span className={cx('accentBlue')}>{t('company.map-address')}</span> : JL. RAYA SERANG – JAKARTA KM. 80 DS. KASERANGAN
                    KEC. CIRUAS, KAB. SERANG 42184 SERANG – BANTEN, INDONESIA
                    <br />
                    <span className={cx('accentBlue')}>TEL</span>
                    {t('company.map-in-tel2')} <span className={cx('accentBlue')}>FAX</span> {t('company.map-in-fax2')}
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className={cx('row')}>
            <h4 className={cx(['header', 'level1'])}>{t('company.map-bt')}</h4>
            <div className={cx(['body', 'hasTable'])}>
              <ul className={cx('table')}>
                <li className={cx('row')}>
                  <h5 className={cx(['header', 'level2'])}>
                    <span className={cx('accentOrange')}>{t('company.map-bt-factory')}</span>
                    <br />
                    BEESCO VINA CO. LTD
                  </h5>
                  <div className={cx('body')}>
                    <span className={cx('accentBlue')}>{t('company.map-address')}</span> : CHON THANH INDUSTRIAL PARK, CHON THANH DIST, BINH
                    PHUOC PROVINCE, VIETNAM
                    <br />
                    <span className={cx('accentBlue')}>TEL</span> {t('company.map-bt-tel')}
                    <span className={cx('accentBlue')}>FAX</span> {t('company.map-bt-fax')}
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={cx('mapBox')}>
        <ul className={cx('tab')}>
          {maps.map((map, index) => (
            <li onClick={() => setTabIndex(index)} key={index} className={cx({ on: tabIndex === index })}>
              {t(`company.${map.title}`)}
            </li>
          ))}
        </ul>
        <iframe ref={mapRef} className={cx('map')} src={maps[0].url} allowFullScreen="" loading="lazy" title="map" frameBorder={0}></iframe>
      </div>
    </div>
  );
};

export default Map;
