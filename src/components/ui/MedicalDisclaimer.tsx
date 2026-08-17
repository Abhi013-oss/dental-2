import React from 'react';
import { AlertCircle } from 'lucide-react';
import styles from './MedicalDisclaimer.module.css';

export interface MedicalDisclaimerProps {
  text?: string;
  className?: string;
}

export const MedicalDisclaimer: React.FC<MedicalDisclaimerProps> = ({
  text = 'Information on this page is provided for general educational purposes and does not replace professional dental advice, diagnosis, or treatment.',
  className = '',
}) => {
  return (
    <div className={`${styles.disclaimerBox} ${className}`} role="note" aria-label="Medical Disclaimer">
      <AlertCircle size={18} className={styles.icon} />
      <div>
        <div className={styles.title}>Medical Educational Notice</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
