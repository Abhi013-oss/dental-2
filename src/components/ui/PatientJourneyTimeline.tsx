import React from 'react';
import styles from './PatientJourneyTimeline.module.css';

export interface JourneyStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const PatientJourneyTimeline: React.FC = () => {
  const steps: JourneyStep[] = [
    {
      stepNumber: '01',
      title: 'Get in Touch',
      description: 'Contact our clinic via phone, WhatsApp, or online request to arrange a convenient consultation.',
    },
    {
      stepNumber: '02',
      title: 'Consultation',
      description: 'Thorough discussion of your oral health history, dental symptoms, and clinical priorities.',
    },
    {
      stepNumber: '03',
      title: 'Understand Options',
      description: 'Clear step-by-step explanation of identified conditions and available treatment choices.',
    },
    {
      stepNumber: '04',
      title: 'Treatment Planning',
      description: 'Customized clinical plan tailored to your anatomical needs, comfort, and schedule.',
    },
    {
      stepNumber: '05',
      title: 'Follow-Up & Care',
      description: 'Dedicated post-treatment guidance and routine checkups to preserve long-term health.',
    },
  ];

  return (
    <div className={styles.container} aria-label="Patient Journey Timeline">
      <div className={styles.timelineGrid}>
        {steps.map((step) => (
          <div key={step.stepNumber} className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.stepNumber}</div>
            <div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.disclaimer}>
        * This patient journey represents our general care framework. Specific clinical pathways are tailored to individual patient needs.
      </div>
    </div>
  );
};
