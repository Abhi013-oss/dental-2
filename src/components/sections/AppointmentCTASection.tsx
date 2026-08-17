import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import styles from './AppointmentCTASection.module.css';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../../config/clinic.config';
import { Button } from '../ui/Button';

export interface AppointmentCTASectionProps {
  variant?: 'navy' | 'white';
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  onBookClick?: () => void;
}

export const AppointmentCTASection: React.FC<AppointmentCTASectionProps> = ({
  variant = 'navy',
  eyebrow = 'APPOINTMENT CONSULTATION',
  title = 'Ready to Take the Next Step Toward Better Dental Care?',
  subtitle = 'Get in touch with Garg Dental Clinic & Implant Centre to discuss your dental needs and arrange a consultation.',
  className = '',
  onBookClick,
}) => {
  const isNavy = variant === 'navy';

  return (
    <section className={`${styles.section} ${className}`}>
      <div className="container">
        <div className={isNavy ? styles.cardNavy : styles.cardWarmWhite}>
          <div className={styles.goldTopLine} />

          <div className={styles.content}>
            {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
            <h2 className={isNavy ? styles.titleNavy : styles.titleWhite}>{title}</h2>
            <p className={isNavy ? styles.descriptionNavy : styles.descriptionWhite}>
              {subtitle}
            </p>

            <div className={styles.ctaGroup}>
              <Button
                variant="primary"
                size="lg"
                icon={<Calendar size={18} />}
                asAnchor
                href={PRIMARY_CTA.path}
                onClick={onBookClick}
              >
                {PRIMARY_CTA.label}
              </Button>

              <Button
                variant={isNavy ? 'secondary' : 'outline'}
                size="lg"
                icon={<Phone size={18} />}
                asAnchor
                href={`tel:${CLINIC_CONFIG.contact.phone}`}
                style={isNavy ? { backgroundColor: 'var(--color-white)', color: 'var(--color-navy)', borderColor: 'var(--color-white)' } : undefined}
              >
                Call {CLINIC_CONFIG.contact.phone}
              </Button>
            </div>

            <div className={`${styles.contactBadge} ${!isNavy ? styles.contactBadgeWhite : ''}`}>
              <Phone size={14} />
              <span>Monday – Saturday: 9:00 AM – 7:00 PM | The Mall Road, Kapurthala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
