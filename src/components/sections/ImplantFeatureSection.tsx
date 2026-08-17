import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './ImplantFeatureSection.module.css';
import { Button } from '../ui/Button';
import { PRIMARY_CTA } from '../../config/clinic.config';

export interface ImplantFeatureSectionProps {
  onBookConsultation?: () => void;
}

export const ImplantFeatureSection: React.FC<ImplantFeatureSectionProps> = ({ onBookConsultation }) => {
  return (
    <section className={styles.section} aria-label="Specialized Dental Implants Feature">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: EDITORIAL VISUAL */}
          <div className={styles.visualWrapper}>
            <div className={styles.imageFrame}>
              <div className={styles.placeholderBox}>
                <ShieldCheck size={52} color="var(--color-teal)" />
                <strong style={{ fontSize: '1.2rem' }}>Dental Implant Restorative Anatomy</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-mint-soft)' }}>
                  Anatomical placement and restorative integration placeholder
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.goldLine} />
              <span>DENTAL IMPLANTS</span>
            </div>

            <h2 className={styles.headline}>
              Restore the Function and Confidence of Your Smile.
            </h2>

            <p className={styles.description}>
              Dental implants provide a stable, long-term approach for replacing missing teeth. By replacing both the root structure and crown, implants restore natural chewing function, maintain jawbone structure, and integrate seamlessly with your natural teeth.
            </p>

            <div className={styles.pointsGrid}>
              <div className={styles.pointCard}>
                <div className={styles.pointTitle}>Anatomical Stability</div>
                <div className={styles.pointDesc}>
                  Anchored securely into the jawbone to function like natural tooth roots.
                </div>
              </div>

              <div className={styles.pointCard}>
                <div className={styles.pointTitle}>Natural Aesthetics</div>
                <div className={styles.pointDesc}>
                  Custom-crafted crowns shaded and contoured to match your surrounding teeth.
                </div>
              </div>

              <div className={styles.pointCard}>
                <div className={styles.pointTitle}>Preserves Neighboring Teeth</div>
                <div className={styles.pointDesc}>
                  Unlike traditional bridges, adjacent natural teeth remain untouched.
                </div>
              </div>

              <div className={styles.pointCard}>
                <div className={styles.pointTitle}>Comprehensive Evaluation</div>
                <div className={styles.pointDesc}>
                  Detailed clinical examination to confirm suitability and bone density.
                </div>
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <Button
                variant="primary"
                size="lg"
                icon={<Calendar size={18} />}
                asAnchor
                href={PRIMARY_CTA.path}
                onClick={onBookConsultation}
              >
                Book Implant Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={<ArrowRight size={18} />}
                asAnchor
                href="/treatments/dental-implants"
                style={{ borderColor: 'rgba(255, 255, 255, 0.25)', color: 'var(--color-white)' }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
