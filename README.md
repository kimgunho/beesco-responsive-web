# BEESCO Responsive web

플레이 그라운드라는 소속에서 단기로 기존 비스코라는 웹사이트를
리엑트로 변경 및 개선하는 업무를 진행하게 되었습니다.

퍼블리셔로 근무한 전 직장을 퇴사한 후 프론트 분야로 공부를 하며 지내다
처음으로 개인 토이프로젝트가 아닌 상업적인 용도와 더불어 리엑트 환경을 다루는 프로젝트에 참여한 부분이기에 뜻이 깊으며
기회를 주신 DH형님께 감사의 말씀을 드립니다.

**Alert : 이 프로젝트는 프로젝트 gitLab에서 진행 및 완료된 프로젝트입니다. 회고록을 위하여
완료된 프로젝트를 Lab에서 제 개인 Hub로 가져온 후 README 파일만 회고하는 부분이기에 커밋이 없습니다.**

## 프로젝트 배정 및 목표 :

프론트엔드 : 기존 운영중이던 비스코 웹사이트의 코드 개선 및 리엑트 코드로 변화

## 초기 환경트리 및 설정

### 1. 폴더 트리

```
├── assets
│ ├── images
│ └── data
├── component
├── lang // i18next를 활용한 프로젝트내 다국어 설정
├── pages
│ └── Home
│ └── Business
│ └── Company
│ └── People
│ └── Society
```

### 2. 환경 설정

- Viewer : Eslint와 Prettier을 사용하여 작업자간의 환경을 통일화 하였습니다.
- Style : 마크업이후 Scss를 사용하기로 하였습니다. 공통적인 디자인 시스템은 common.scss에 저장하여 활용하는 방안으로 진행하였습니다.
- Pages : 페이지내 파일이름은 각 파트별로 S01 ~ SNuber등으로 순서를 지정하는 네이밍을 하였으며 각 컴포넌트는 arrow-function으로 진행되기로 협의되었습니다.

### 3. 사용된 특수 라이브러리

- i18next : 프로젝트에 다국어 기능이 들어간다는 전달을 받은 이후 구글링을 해보았습니다. 압도적인 추천수 덕분에 결정되었으며 가이드를 보며 진행하였습니다. 사용법은 잊지않기위해 블로그에 기록되었습니다.
- swiper : 타 케로셀 라이브러리에 비해 가볍고 사용하기가 용이하여 채택되었습니다.
- react-icons : 페이지별로 사용되는 아이콘들이 제법 많아 선택되었습니다.

## 진행 프로세스

### 프로젝트 공통 컴포넌트

- Header : 사이트내 헤더를 담당합니다. gnb 데이터는 assets내 gnb에 데이터를 할당하였으며 handleChangeLanguage 함수를 지정하여 i18n.langage의 변화를 주었습니다. 또한 해당 언어값을 새로고침으로도 변동이 없도록 로컬스토리지에 저장하였습니다.
- Footer : 사이트내 푸터를 담당합니다.
- Jumbotron : 각 페이지별 메인 비주얼 컴포넌트입니다.
- Slogan : 각 페이지별 메인 비주얼 및 슬로건 컴포넌트입니다.
- ScrollToTop : 라우터 페이지 이동시 스크롤 위치가 고정인 부분을 최상단으로 이동되도록 걸어주었습니다.

### 공통적인 활용 코드 기록

- 스타일코드로 scss가 채택됨에 따라 함께 사용하기에 용이한 classNames 라이브러리를 활용하였습니다.
  class에 각 모듈화 시킨 스타일의 클래스를 조건에 따라 동적으로 다이나믹하게 사용되었습니다.
- i18next을 활용하여 초기 Init 이후(i18n.js) en,ko 데이터를 전달받도록 개발되었습니다.

```
import { useTranslation } from 'react-i18next'; // i18next load

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className={cx('title')}>{t(`home.${title}`)}</div>
  );
};
```

## 회고록

사실 단순하고 비동기적인 로직이 크게 요하지 않는 정적인 프로젝트다 보니
기능적으로만 본다면 큰 어려움은 없는 프로젝트였습니다. <br />
대신 중요한건 코드를 한줄이라도 더 줄여보려는 개선의지, <br />
제 3자가 코드를 전달받아도 이해가 될수있게끔의
구조와 네이밍에 더욱 많은 시간을 할애하는것이
이번 프로젝트의 핵심키워드였던것 같습니다.<br /> (네이밍 결코 만만하게 봐서는 안될것 같습니다.)

또한 지금은 익숙해졌다고 생각이 들지만
가이드를 봐도, 처음 사용해보는 i18next에 예상보다 시간이 많이 할애된 것 같습니다. <br />
(좀더 단순하게 사용하기 쉬운것 같으나 장황한 부분이 있는것 같았습니다.)<br />

새롭게 안 사실중에는 En, Ko json의 구조를 2중을 넘어 3중으로 제작하였을 때 백엔드 입장에서는
3중까지는 좀더 친절하지않는 구조라 전달받은 덕분에 2중으로 제작이 된 부분도 있습니다.

이번 프로젝트에서는 리엑트만의 장점을 크게 활용하지 못한 부분에 대해서 살짝은 아쉬운 감이 없지는 않지만
이후 개인 프로젝트 666 공포 커뮤니티에서 좀더 적극적으로 활용을 할 예정입니다.
