import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import styles from './ClinicInformationCard.module.css';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export const ClinicInformationCard: React.FC = () => {
  return (
    <div className={styles.card} aria-label="Garg Dental Clinic Information">
      <h3 className={styles.brandName}>{CLINIC_CONFIG.name}</h3>

      <div className={styles.sectionGroup}>
        {/* ADDRESS */}
        <div className={styles.infoRow}>
          <div className={styles.iconCircle}>
            <MapPin size={20} />
          </div>
          <div>
            <div className={styles.label}>CLINIC LOCATION</div>
            <div className={styles.valueMain}>{CLINIC_CONFIG.location.addressLine}</div>
            <div className={styles.valueSub}>
              {CLINIC_CONFIG.location.city}, {CLINIC_CONFIG.location.state}, {CLINIC_CONFIG.location.country}
            </div>
            <div className={styles.landmarkHighlight}>
              EASY TO FIND: {CLINIC_CONFIG.location.landmark}
            </div>
          </div>
        </div>

        {/* PHONE */}
        <div className={styles.infoRow}>
          <div className={styles.iconCircle}>
            <Phone size={20} />
          </div>
          <div>
            <div className={styles.label}>PHONE ENQUIRIES</div>
            <div className={styles.valueMain}>{CLINIC_CONFIG.contact.phone}</div>
            <div className={styles.valueSub}>Call directly for appointment scheduling</div>
          </div>
        </div>

        {/* HOURS */}
        <div className={styles.infoRow}>
          <div className={styles.iconCircle}>
            <Clock size={20} />
          </div>
          <div style={{ width: '100%' }}>
            <div className={styles.label}>OPENING HOURS</div>
            <table className={styles.hoursTable}>
              <tbody>
                {CLINIC_CONFIG.hours.map((h, i) => (
                  <tr key={i} className={styles.hoursRow}>
                    <td className={styles.hoursDay}>{h.days}</td>
                    <td className={styles.hoursTime}>{h.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className={styles.ctaGrid}>
        <Button
          variant="primary"
          size="md"
          fullWidth
          icon={<Phone size={16} />}
          asAnchor
          href={`tel:${CLINIC_CONFIG.contact.phone}`}
        >
          Call the Clinic ({CLINIC_CONFIG.contact.phone})
        </Button>

        <Button
          variant="outline"
          size="md"
          fullWidth
          icon={<ExternalLink size={14} />}
          asAnchor
          href={CLINIC_CONFIG.location.googleMapsUrlPlaceholder}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </Button>
      </div>
    </div>
  );
};
