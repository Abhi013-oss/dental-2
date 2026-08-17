import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import styles from './Footer.module.css';
import { CLINIC_CONFIG, ALL_ROUTES } from '../../config/clinic.config';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* BRAND COLUMN */}
          <div className={styles.brandCol}>
            <div>
              <div className={styles.logoTitle}>{CLINIC_CONFIG.name}</div>
            </div>
            <p className={styles.description}>
              Specialized dental care dedicated to advanced Dental Implants and Root Canal Treatment in Kapurthala. Patient comfort, clinical rigor, and anatomical precision.
            </p>
            <div className={styles.ratingBadge}>
              <Star size={16} className={styles.starIcon} fill="currentColor" />
              <span>
                <strong>{CLINIC_CONFIG.googleReview.rating} / 5</strong> rating across {CLINIC_CONFIG.googleReview.reviewCount} Google reviews
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              {ALL_ROUTES.map((route) => (
                <li key={route.path} className={styles.linkItem}>
                  <a href={route.path}>{route.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SPECIALIZED TREATMENTS */}
          <div>
            <h4 className={styles.colTitle}>Specialties</h4>
            <ul className={styles.linkList}>
              {CLINIC_CONFIG.keyFocusAreas.map((treatment) => (
                <li key={treatment.id} className={styles.linkItem}>
                  <a href={treatment.slug}>{treatment.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATION & HOURS */}
          <div>
            <h4 className={styles.colTitle}>Clinic Location</h4>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <MapPin size={18} className={styles.infoIcon} />
                <span>
                  {CLINIC_CONFIG.location.addressLine}, {CLINIC_CONFIG.location.landmark}, {CLINIC_CONFIG.location.city}, {CLINIC_CONFIG.location.state}, {CLINIC_CONFIG.location.country}
                </span>
              </li>
              <li className={styles.infoItem}>
                <Phone size={18} className={styles.infoIcon} />
                <div>
                  <div>{CLINIC_CONFIG.contact.phone}</div>
                </div>
              </li>
              <li className={styles.infoItem}>
                <Clock size={18} className={styles.infoIcon} />
                <div>
                  {CLINIC_CONFIG.hours.map((h, i) => (
                    <div key={i}>
                      {h.days}: <strong>{h.time}</strong>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} {CLINIC_CONFIG.name}. All rights reserved.
          </div>
          <div>
            Location: {CLINIC_CONFIG.location.city}, Punjab | Dental Implants & Root Canal Center
          </div>
        </div>

        {/* MEDICAL CREDIBILITY DISCLAIMER */}
        <div className={styles.disclaimer}>
          <strong>Medical Notice:</strong> Information provided on this website is for educational and appointment orientation purposes only and does not constitute formal medical advice. Individual treatment plans depend on comprehensive clinical and radiological examination.
        </div>
      </div>
    </footer>
  );
};
