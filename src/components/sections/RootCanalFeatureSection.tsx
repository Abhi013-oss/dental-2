import React from 'react';
import { Activity, ArrowRight, Calendar } from 'lucide-react';
import styles from './RootCanalFeatureSection.module.css';
import { SectionHeader } from './SectionHeader';
import { Button } from '../ui/Button';
import { PRIMARY_CTA } from '../../config/clinic.config';

export interface RootCanalFeatureSectionProps {
  onBookClick?: () => void;
}

export const RootCanalFeatureSection: React.FC<RootCanalFeatureSectionProps> = ({ onBookClick }) => {
  return (
    <section className={styles.section} aria-label="Specialized Root Canal Treatment Feature">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: CONTENT (REVERSED RHYTHM) */}
          <div className={styles.content}>
            <SectionHeader
              eyebrow="ROOT CANAL TREATMENT"
              title="Careful Treatment for Teeth That Need Attention."
              showGoldLine
            />

            <p className={styles.paragraph}>
              Root canal therapy is a targeted endodontic procedure performed to save a severely decayed or infected tooth. By removing compromised nerve tissue inside the tooth and sealing the root canals, the procedure relieves deep discomfort and preserves your natural tooth structure.
            </p>

            <div className={styles.stepsList}>
              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepText}>
                  <strong>Comprehensive Diagnosis:</strong> Clinical assessment and digital radiography to inspect internal tooth anatomy.
                </div>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepText}>
                  <strong>Precision Cleaning & Disinfection:</strong> Gentle removal of inflamed tissue and thorough root canal disinfection.
                </div>
              </div>

              <div className={styles.stepItem}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepText}>
                  <strong>Sealing & Restoration:</strong> Biocompatible root filling followed by a protective crown to restore full biting strength.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="lg"
                icon={<Calendar size={18} />}
                asAnchor
                href={PRIMARY_CTA.path}
                onClick={onBookClick}
              >
                Schedule Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                icon={<ArrowRight size={18} />}
                asAnchor
                href="/treatments/root-canal-treatment"
              >
                Learn About Root Canal Treatment
              </Button>
            </div>
          </div>

          {/* RIGHT: EDITORIAL VISUAL (REVERSED RHYTHM) */}
          <div className={styles.visualWrapper}>
            <div className={styles.imageFrame}>
              <div className={styles.placeholderBox}>
                <Activity size={52} color="var(--color-teal)" />
                <strong style={{ fontSize: '1.2rem' }}>Endodontic Therapy & Isolation</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Internal tooth preservation and root sealing presentation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
