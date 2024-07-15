import React from 'react';
import { useTranslation } from 'react-i18next';
import { showModal } from '@openmrs/esm-framework';

const Tutorial = () => {
  const { t } = useTranslation();
  const openTutorialModal = () => {
    const dispose = showModal('tutorial-modal', {
      onClose: () => dispose(),
    });
  };

  return <div onClick={openTutorialModal}>{t('tutorials', 'Tutorials')}</div>;
};

export default Tutorial;
