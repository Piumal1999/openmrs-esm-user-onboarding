import { createGlobalStore, useStore } from '@openmrs/esm-framework';
import React from 'react';
import ReactJoyride, { type CallBackProps } from 'react-joyride';

export interface JoyrideStore {
  steps: any[];
  runJoyride: boolean;
}

const joyrideStore = createGlobalStore<JoyrideStore>('joyride-store', {
  steps: [],
  runJoyride: false,
});

const RootComponent: React.FC = () => {
  const { steps, runJoyride } = useStore(joyrideStore);

  const handleJoyrideCallback = (data: CallBackProps) => {
    if (data.action === 'close' || data.status === 'finished') {
      joyrideStore.setState({ steps: [], runJoyride: false });
    }
  };

  return <ReactJoyride steps={steps} run={runJoyride} callback={handleJoyrideCallback} showProgress continuous />;
};

export default RootComponent;
