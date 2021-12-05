import React from 'react';
import { useTranslation } from 'react-i18next';

import Jumbotron from '../../component/Jumbotron';
import Slogan from '../../component/Slogan';
import Message from './S01_Message';
import Global from './S04_Global';
import History from './S05_History';
import Vision from './S06_Vision';
import CI from './S07_CI';
import Map from './S08_Map';
import background from '../../assets/images/company/bg.jpg';

const Company = () => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron sub={t('company.jumbotron-sub')} background={background}>
        We have
        <br /> big
        <br /> dreams
      </Jumbotron>
      <Slogan title="COMPANY">{t('company.slogan-sub')}</Slogan>
      <Message />
      <Global />
      <History />
      <Vision />
      <CI />
      <Map />
    </>
  );
};

export default Company;
