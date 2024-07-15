import React from 'react';
import { useTranslation } from 'react-i18next';
import { getGlobalStore, useConfig, useStore } from '@openmrs/esm-framework';
import styles from './styles.scss';
import { ModalHeader } from '@carbon/react';
import { ModalBody } from '@carbon/react';
import { ModalFooter } from '@carbon/react';

const joyrideStore = getGlobalStore('joyride-store');

const TutorialModal = ({ onClose }) => {
  const { t } = useTranslation();
  const config = useConfig();
  const tutorialData = config.tutorialData;

  return (
    <React.Fragment>
      <ModalHeader closeModal={onClose}>{t('tutorial', 'Tutorials')}</ModalHeader>
      <ModalBody>
        <p className={styles.description}>
          {t('modalDescription', 'Find walkthroughs and video tutorials on some of the core features of OpenMRS.')}
        </p>
        <div className={styles.tutorialModal}>
          {tutorialData.map((tutorial, index) => (
            <div className={styles.tutorialItem} key={index}>
              <h3 className={styles.tutorialTitle}>{tutorial.title}</h3>
              <p className={styles.tutorialDescription}>{tutorial.description}</p>
              <div
                className={styles.walkthrough}
                onClick={() => {
                  joyrideStore.setState({
                    steps: tutorial.steps,
                    runJoyride: true,
                  });
                  onClose();
                }}
              >
                {t('walkthrough', 'Walkthrough')}
              </div>
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>footer</ModalFooter>
    </React.Fragment>
  );
};

export default TutorialModal;
