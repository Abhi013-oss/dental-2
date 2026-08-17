import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './AppointmentModal.module.css';
import { AppointmentForm } from '../forms/AppointmentForm';
import type { TreatmentReason } from '../../types/appointment.types';

export interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReason?: TreatmentReason;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialReason,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Appointment Request Modal"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        <AppointmentForm initialReason={initialReason} />
      </div>
    </div>
  );
};
