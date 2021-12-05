import React from 'react';
import { useTranslation } from 'react-i18next';

import Jumbotron from '../../component/Jumbotron';
import Slogan from '../../component/Slogan';
import Intro from './S03_Intro';
import HR from './S04_HR';
import Benefits from './S05_Benefits';
import Recruit from './S06_Recruit';
import background from '../../assets/images/people/bg.jpg';

const People = () => {
  const { t } = useTranslation();

  return (
    <>
      <Jumbotron sub={t('people.jumbotron-sub')} background={background}>
        Dreams
        <br /> are
        <br /> our energy
      </Jumbotron>
      <Slogan title="BEESCO PEOPLE">
        {t('people.slogan-sub')
          .split('\n')
          .map((line, index) => (
            <span key={index}>{line}</span>
          ))}
      </Slogan>
      <Intro />
      <HR />
      <Benefits />
      <Recruit />
    </>
  );
};

export default People;
