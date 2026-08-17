import React from 'react';
import styles from './TreatmentNavTabs.module.css';
import { TREATMENTS_DATA } from '../../data/treatments.data';

export interface TreatmentNavTabsProps {
  currentSlug?: string;
  onNavigate?: (path: string) => void;
}

export const TreatmentNavTabs: React.FC<TreatmentNavTabsProps> = ({
  currentSlug = '/treatments',
  onNavigate,
}) => {
  const allTreatments = Object.values(TREATMENTS_DATA);

  const handleTabClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div className={styles.navContainer} aria-label="Treatment Pages Navigation">
      <div className="container">
        <div className={styles.scrollArea}>
          <a
            href="/treatments"
            className={`${styles.tabLink} ${currentSlug === '/treatments' ? styles.activeTab : ''}`}
            onClick={(e) => handleTabClick('/treatments', e)}
          >
            All Treatments Overview
          </a>

          {allTreatments.map((treatment) => {
            const isActive = currentSlug === treatment.slug;
            return (
              <a
                key={treatment.id}
                href={treatment.slug}
                className={`${styles.tabLink} ${isActive ? styles.activeTab : ''}`}
                onClick={(e) => handleTabClick(treatment.slug, e)}
              >
                <span>{treatment.name}</span>
                {treatment.isKeyFocus && <span className={styles.keyFocusTag}>Focus</span>}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
