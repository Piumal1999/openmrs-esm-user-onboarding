import { Type } from '@openmrs/esm-framework';

export const configSchema = {
  showTutorial: {
    _type: Type.Boolean,
    _default: false,
    _description: 'Enable or Disable Onboarding Walkthrough',
  },
  tutorialData: {
    _type: Type.Array,
    _default: [
      {
        title: 'Sample Demo',
        description: 'This is a Sample Demo',
        steps: [
          {
            target: '[aria-label="OpenMRS"]',
            content: 'This is the OpenMRS logo. Click here to go back to the home page.',
            disableBeacon: true,
          },
          {
            target: '[aria-label="OpenMRS"]',
            content: 'Second step for OpenMRS logo. Click here to go back to the home page.',
            disableBeacon: true,
          },
        ],
      },
      {
        title: 'Sample Demo 2',
        description: 'This is a Sample Demo',
        steps: [
          {
            target: '[aria-label="OpenMRS"]',
            content: 'This is the OpenMRS logo 2. Click here to go back to the home page.',
            disableBeacon: true,
          },
        ],
      },
    ],
    _description: 'List of tutorials to be displayed in the modal',
  },
};

export type Config = {
  showTutorial: boolean;
  tutorialData: {
    title: string;
    description: string;
    steps: {
      target: string;
      content: string;
      disableBeacon: boolean;
    }[];
  }[];
};
