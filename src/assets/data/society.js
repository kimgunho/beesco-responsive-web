import StepBackground01 from '../images/society/item-workplace.jpg';
import StepBackground02 from '../images/society/item-contribution.jpg';
import StepBackground03 from '../images/society/item-environment.jpg';

const data = [
  {
    reverse: false,
    title: 'step-title-01',
    sub: 'step-sub-01',
    text: 'step-text-01',
    steps: [
      {
        text: 'steps-text01-01',
      },
      {
        text: 'steps-text01-02',
      },
      {
        text: 'steps-text01-03',
      },
    ],
    image: StepBackground01,
  },
  {
    reverse: true,
    title: 'step-title-02',
    sub: 'step-sub-02',
    text: 'step-text-02',
    steps: [
      {
        text: 'steps-text02-01',
      },
      {
        text: 'steps-text02-02',
      },
      {
        text: 'steps-text02-03',
      },
    ],
    image: StepBackground02,
  },
  {
    reverse: false,
    title: 'step-title-03',
    sub: 'step-sub-03',
    text: 'step-text-03',
    steps: [
      {
        text: 'steps-text03-01',
        subSteps: [
          'steps-text03-01-01',
          'steps-text03-01-02',
          'steps-text03-01-03',
        ],
      },
      {
        text: 'steps-text03-02',
      },
      {
        text: 'steps-text03-03',
      },
    ],
    image: StepBackground03,
  },
];

export default data;
