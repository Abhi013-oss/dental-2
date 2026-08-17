import React from 'react';
import { ShieldCheck, Activity, Stethoscope, Sparkles, Layers } from 'lucide-react';
import styles from './TreatmentsSection.module.css';
import { SectionHeader } from './SectionHeader';
import { TreatmentCard } from '../cards/TreatmentCard';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export interface TreatmentsSectionProps {
  onNavigate?: (slug: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onNavigate }) => {
  const getTreatmentIcon = (id: string) => {
    switch (id) {
      case 'dental-implants':
        return <ShieldCheck size={24} color="var(--color-teal)" />;
      case 'root-canal':
        return <Activity size={24} color="var(--color-teal)" />;
      case 'general-dentistry':
        return <Stethoscope size={24} color="var(--color-teal)" />;
      case 'cosmetic-dentistry':
        return <Sparkles size={24} color="var(--color-teal)" />;
      case 'restorative-dentistry':
        return <Layers size={24} color="var(--color-teal)" />;
      default:
        return <Activity size={24} color="var(--color-teal)" />;
    }
  };

  return (
    <section id="treatments" className={styles.section} aria-label="Clinic Treatments Overview">
      <div className="container">
        <SectionHeader
          eyebrow="OUR TREATMENTS"
          title="Dental Care for Every Stage of Your Smile."
          subtitle="From specialized tooth replacement and endodontic care to routine oral maintenance, our clinic provides dedicated treatment focused on your individual needs."
          showGoldLine
        />

        <div className={styles.grid}>
          {CLINIC_CONFIG.keyFocusAreas.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              title={treatment.title}
              shortDescription={treatment.shortDescription}
              slug={treatment.slug}
              isKeyFocus={treatment.isKeyFocus}
              icon={getTreatmentIcon(treatment.id)}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
