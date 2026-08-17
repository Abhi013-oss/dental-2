import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import styles from './MobileActionBar.module.css';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../../config/clinic.config';

export interface MobileActionBarProps {
  onBookClick?: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onBookClick }) => {
  const handleBookClick = (e: React.MouseEvent) => {
    if (onBookClick) {
      e.preventDefault();
      onBookClick();
    }
  };

  return (
    <aside className={styles.actionBar} aria-label="Quick Mobile Actions">
      <a href={`tel:${CLINIC_CONFIG.contact.phone}`} className={styles.actionItem}>
        <Phone size={16} />
        <span>CALL</span>
      </a>

      <a
        href={`https://wa.me/?text=Hello%20Garg%20Dental%20Clinic`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.actionItem}
        title="WhatsApp Clinic Contact"
      >
        <MessageCircle size={16} />
        <span>WHATSAPP</span>
      </a>

      <a
        href={PRIMARY_CTA.path}
        className={`${styles.actionItem} ${styles.bookItem}`}
        onClick={handleBookClick}
      >
        <Calendar size={16} />
        <span>BOOK</span>
      </a>
    </aside>
  );
};
