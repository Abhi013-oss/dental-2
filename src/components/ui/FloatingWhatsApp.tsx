import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export interface FloatingWhatsAppProps {
  enabled?: boolean;
  message?: string;
  tooltipText?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  enabled = true,
  message = 'Hello Garg Dental Clinic & Implant Centre',
  tooltipText = 'Quick WhatsApp Contact',
}) => {
  if (!enabled) return null;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.container}>
      <span className={styles.tooltip}>{tooltipText}</span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.trigger}
        title="WhatsApp Quick Contact Placeholder"
        aria-label="Contact Garg Dental Clinic via WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};
