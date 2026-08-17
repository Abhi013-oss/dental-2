import React from 'react';
import { ShieldCheck, MessageCircle, HeartHandshake, ArrowRight, Building2 } from 'lucide-react';
import styles from './ClinicIntroSection.module.css';
import { SectionHeader } from './SectionHeader';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export interface ClinicIntroSectionProps {
  onLearnMoreClick?: () => void;
}

export const ClinicIntroSection: React.FC<ClinicIntroSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section id="about" className={styles.section} aria-label="About Garg Dental Clinic">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: EDITORIAL VISUAL FRAME */}
          <div className={styles.visualWrapper}>
            <div className={styles.imageFrame}>
              <div className={styles.placeholderOverlay}>
                <Building2 size={48} color="var(--color-teal)" />
                <strong style={{ fontSize: '1.1rem' }}>{CLINIC_CONFIG.name}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {CLINIC_CONFIG.location.addressLine}, {CLINIC_CONFIG.location.city}
                </span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.5rem' }}>
                  {CLINIC_CONFIG.placeholders.clinicPhotos}
                </span>
              </div>
            </div>

            <div className={styles.accentBadge}>
              <span className={styles.badgeTitle}>Patient-First Care</span>
              <span className={styles.badgeSub}>Clear & Transparent Advice</span>
            </div>
          </div>

          {/* RIGHT: EDITORIAL CONTENT */}
          <div className={styles.content}>
            <SectionHeader
              eyebrow="ABOUT GARG DENTAL"
              title="Thoughtful Dental Care, Centered Around You."
              showGoldLine
            />

            <p className={styles.paragraph}>
              At Garg Dental Clinic & Implant Centre, we believe exceptional dental care begins with listening. Every patient's oral health journey is unique, and we take the time to conduct thorough consultations, answer all your questions, and formulate individualised treatment plans with complete clarity.
            </p>

            <div className={styles.pointsList}>
              <div className={styles.pointItem}>
                <div className={styles.pointIcon} aria-hidden="true">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <div className={styles.pointTitle}>Personalised Consultation</div>
                  <div className={styles.pointDesc}>
                    Every treatment option is tailored to your clinical requirements, personal comfort, and long-term oral health.
                  </div>
                </div>
              </div>

              <div className={styles.pointItem}>
                <div className={styles.pointIcon} aria-hidden="true">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className={styles.pointTitle}>Clear Treatment Communication</div>
                  <div className={styles.pointDesc}>
                    We explain clinical procedures step-by-step so you understand every aspect of your care before proceeding.
                  </div>
                </div>
              </div>

              <div className={styles.pointItem}>
                <div className={styles.pointIcon} aria-hidden="true">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className={styles.pointTitle}>Patient-Focused Experience</div>
                  <div className={styles.pointDesc}>
                    A calm, professional clinical environment designed to prioritize patient ease and confidence.
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="md"
              icon={<ArrowRight size={16} />}
              asAnchor
              href="#treatments"
              onClick={onLearnMoreClick}
            >
              Explore Our Treatments
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
