import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './BeforeAfterSection.module.css';
import { SectionHeader } from './SectionHeader';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { Button } from '../ui/Button';

export interface BeforeAfterSectionProps {
  onNavigate?: (path: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onNavigate }) => {
  const handleViewCases = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/before-after');
    }
  };

  return (
    <section className={styles.section} aria-label="Treatment Clinical Case Results">
      <div className="container">
        <SectionHeader
          eyebrow="TREATMENT RESULTS"
          title="Every Smile Has Its Own Treatment Journey."
          subtitle="Clinical outcomes depend on initial presentation, individual oral anatomy, and adherence to treatment planning."
          align="center"
          showGoldLine
        />

        <div className={styles.sliderContainer}>
          <BeforeAfterSlider
            category="Restorative Anatomy & Implant Integration"
            disclaimer="Individual results may vary. Before-and-after images should only be used with appropriate patient consent."
          />

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Button
              variant="outline"
              size="md"
              icon={<ArrowRight size={16} />}
              asAnchor
              href="/before-after"
              onClick={handleViewCases}
            >
              View More Clinical Cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
