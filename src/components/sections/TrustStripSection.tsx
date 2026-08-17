import React from 'react';
import { Star, MapPin, Clock, ShieldCheck } from 'lucide-react';
import styles from './TrustStripSection.module.css';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export const TrustStripSection: React.FC = () => {
  return (
    <section className={styles.section} aria-label="Clinic Quick Overview & Trust Signals">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.item}>
            <div className={styles.iconCircle} aria-hidden="true">
              <Star size={20} fill="var(--color-teal)" stroke="none" />
            </div>
            <div>
              <div className={styles.value}>{CLINIC_CONFIG.googleReview.rating} / 5 Rating</div>
              <div className={styles.label}>{CLINIC_CONFIG.googleReview.reviewCount} Verified Google Reviews</div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.iconCircle} aria-hidden="true">
              <MapPin size={20} />
            </div>
            <div>
              <div className={styles.value}>{CLINIC_CONFIG.location.city}</div>
              <div className={styles.label}>{CLINIC_CONFIG.location.addressLine}, {CLINIC_CONFIG.location.landmark}</div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.iconCircle} aria-hidden="true">
              <Clock size={20} />
            </div>
            <div>
              <div className={styles.value}>Mon – Sat: 9 AM – 7 PM</div>
              <div className={styles.label}>Sunday Closed</div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.iconCircle} aria-hidden="true">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className={styles.value}>Specialized Focus</div>
              <div className={styles.label}>Dental Implants & Root Canal Therapy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
