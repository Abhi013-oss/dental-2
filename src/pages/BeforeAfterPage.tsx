import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import styles from './BeforeAfterPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { MedicalDisclaimer } from '../components/ui/MedicalDisclaimer';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { CASES_DATA } from '../data/cases.data';

export interface BeforeAfterPageProps {
  onBookClick?: () => void;
}

export const BeforeAfterPage: React.FC<BeforeAfterPageProps> = ({ onBookClick }) => {
  const consentedCases = CASES_DATA.filter((c) => c.consentConfirmed);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Before & After Clinical Cases Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'Before & After', href: '/before-after' }]} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <SlidersHorizontal size={16} />
              <span>BEFORE & AFTER</span>
            </div>

            <h1 className={styles.headline}>
              Every Treatment Journey Is Individual.
            </h1>

            <p className={styles.description}>
              Explore selected clinical cases shared with appropriate patient consent. Clinical results depend on initial oral health condition, anatomical structure, and personalized treatment planning.
            </p>

            <MedicalDisclaimer text="Before-and-after images are provided for illustrative purposes and represent individual cases. Results vary from patient to patient. Images are presented with patient privacy protection." />
          </div>
        </div>
      </section>

      {/* 2. CLINICAL CASES LIST */}
      <section className={styles.sectionWhite} aria-label="Consented Clinical Case Studies">
        <div className="container">
          <SectionHeader
            eyebrow="CLINICAL CASE STUDIES"
            title="Consented Patient Outcome Examples"
            subtitle="Interactive before and after comparison sliders demonstrating restorative anatomy and endodontic care."
            showGoldLine
          />

          <div style={{ marginTop: '3rem' }}>
            {consentedCases.map((caseItem) => (
              <div key={caseItem.id} className={styles.caseCard}>
                {/* LEFT: INTERACTIVE COMPARISON SLIDER */}
                <div>
                  <BeforeAfterSlider
                    beforeImagePlaceholder={caseItem.beforeImagePlaceholder}
                    afterImagePlaceholder={caseItem.afterImagePlaceholder}
                    category={caseItem.treatmentCategory}
                    disclaimer={caseItem.disclaimer}
                  />
                </div>

                {/* RIGHT: CASE DETAILS & CLINICAL OVERVIEW */}
                <div>
                  <div className={styles.caseHeader}>
                    <span className={styles.caseTag}>{caseItem.caseNumber}</span>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-teal)', marginBottom: '0.35rem' }}>
                      Category: {caseItem.treatmentCategory}
                    </div>
                    <h2 className={styles.caseTitle}>{caseItem.title}</h2>
                  </div>

                  <p className={styles.caseDesc}>{caseItem.shortDescription}</p>

                  <strong style={{ fontSize: '0.95rem', color: 'var(--color-navy)', display: 'block', marginBottom: '0.5rem' }}>
                    Clinical Sequence:
                  </strong>

                  <ul className={styles.stepsList}>
                    {caseItem.clinicalOverview.map((stepText, idx) => (
                      <li key={idx} className={styles.stepItem}>
                        {stepText}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.disclaimerText}>
                    * {caseItem.disclaimer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <AppointmentCTASection
        variant="navy"
        title="Discuss Your Dental Treatment Goals"
        subtitle="Schedule a clinical consultation at Garg Dental Clinic & Implant Centre to evaluate your oral health and discuss treatment options."
        onBookClick={onBookClick}
      />
    </>
  );
};
