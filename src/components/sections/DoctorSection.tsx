import React from 'react';
import { User, ArrowRight, Calendar } from 'lucide-react';
import styles from './DoctorSection.module.css';
import { SectionHeader } from './SectionHeader';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../../config/clinic.config';

export interface DoctorSectionProps {
  onBookConsultation?: () => void;
  onNavigate?: (slug: string) => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onBookConsultation, onNavigate }) => {
  const doctor = CLINIC_CONFIG.doctorProfile;

  const handleMeetDoctor = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/doctors/lead-specialist');
    }
  };

  return (
    <section id="doctors" className={styles.section} aria-label="Meet Our Dental Specialist">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: DOCTOR PORTRAIT FRAME */}
          <div className={styles.portraitWrapper}>
            <div className={styles.portraitFrame}>
              <div className={styles.placeholderOverlay}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={32} color="var(--color-navy)" />
                </div>
                <strong style={{ fontSize: '1.1rem' }}>{doctor.name}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {CLINIC_CONFIG.placeholders.doctorPhotos}
                </span>
              </div>
            </div>

            <div className={styles.champagneAccentBadge}>
              Specialist Practitioner
            </div>
          </div>

          {/* RIGHT: DOCTOR PROFILE DETAILS */}
          <div className={styles.content}>
            <SectionHeader
              eyebrow="OUR SPECIALIST"
              title="Dedicated Dental Care Driven by Precision & Patient Respect."
              showGoldLine
            />

            <h3 className={styles.doctorName}>{doctor.name}</h3>
            <div className={styles.doctorQualification}>{doctor.qualification}</div>

            <p className={styles.bio}>
              Our lead dental surgeon at Garg Dental Clinic & Implant Centre provides comprehensive clinical evaluation and treatment planning in dental implants, restorative dentistry, and endodontics. Every procedure is performed with attention to patient comfort, tissue preservation, and long-term oral stability.
            </p>

            <div className={styles.metaGrid}>
              <div className={styles.metaBox}>
                <div className={styles.metaLabel}>Clinical Experience</div>
                <div className={styles.metaValue}>{doctor.experienceYears}</div>
              </div>

              <div className={styles.metaBox}>
                <div className={styles.metaLabel}>Registration Status</div>
                <div className={styles.metaValue}>{doctor.registrationNumber}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="md"
                icon={<Calendar size={18} />}
                asAnchor
                href={PRIMARY_CTA.path}
                onClick={onBookConsultation}
              >
                Book Doctor Consultation
              </Button>

              <Button
                variant="outline"
                size="md"
                icon={<ArrowRight size={16} />}
                asAnchor
                href="/doctors/lead-specialist"
                onClick={handleMeetDoctor}
              >
                Meet the Doctor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
