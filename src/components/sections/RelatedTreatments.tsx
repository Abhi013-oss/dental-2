import React from 'react';
import styles from './RelatedTreatments.module.css';
import { SectionHeader } from './SectionHeader';
import { TreatmentCard } from '../cards/TreatmentCard';
import { TREATMENTS_DATA } from '../../data/treatments.data';

export interface RelatedTreatmentsProps {
  relatedIds: string[];
  onNavigate?: (path: string) => void;
}

export const RelatedTreatments: React.FC<RelatedTreatmentsProps> = ({ relatedIds }) => {
  const items = relatedIds
    .map((id) => TREATMENTS_DATA[id])
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Explore Related Dental Treatments">
      <div className="container">
        <SectionHeader
          eyebrow="EXPLORE MORE DENTAL CARE"
          title="Related Clinical Treatments"
          subtitle="Explore additional treatment options and discuss your overall oral health strategy with your dentist."
          showGoldLine
        />

        <div className={styles.grid}>
          {items.map((t) => (
            <TreatmentCard
              key={t.id}
              title={t.name}
              shortDescription={t.shortDescription}
              slug={t.slug}
              isKeyFocus={t.isKeyFocus}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
