import React from 'react';
import { Star, MapPin, Clock, ShieldCheck } from 'lucide-react';
import styles from './TrustIndicatorCard.module.css';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export const TrustIndicatorCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.iconCircle}>
          <Star size={20} fill="#159A9C" />
        </div>
        <div>
          <div className={styles.value}>{CLINIC_CONFIG.googleReview.rating} / 5</div>
          <div className={styles.label}>{CLINIC_CONFIG.googleReview.reviewCount} Verified Google Reviews</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconCircle}>
          <MapPin size={20} />
        </div>
        <div>
          <div className={styles.value}>Kapurthala</div>
          <div className={styles.label}>The Mall Road, adj. Bank of Baroda</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconCircle}>
          <Clock size={20} />
        </div>
        <div>
          <div className={styles.value}>9 AM – 7 PM</div>
          <div className={styles.label}>Monday – Saturday (Sunday Closed)</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.iconCircle}>
          <ShieldCheck size={20} />
        </div>
        <div>
          <div className={styles.value}>Specialized Care</div>
          <div className={styles.label}>Dental Implants & Root Canal Therapy</div>
        </div>
      </div>
    </div>
  );
};
