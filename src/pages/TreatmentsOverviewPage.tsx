import React from 'react';
import { Calendar, Phone, Stethoscope, ShieldCheck, Activity } from 'lucide-react';
import styles from './TreatmentsOverviewPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { TreatmentCard } from '../components/cards/TreatmentCard';
import { Button } from '../components/ui/Button';
import { MedicalDisclaimer } from '../components/ui/MedicalDisclaimer';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { TreatmentNavTabs } from '../components/ui/TreatmentNavTabs';
import { TREATMENTS_DATA } from '../data/treatments.data';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../config/clinic.config';

export interface TreatmentsOverviewPageProps {
  onBookClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const TreatmentsOverviewPage: React.FC<TreatmentsOverviewPageProps> = ({
  onBookClick,
  onNavigate,
}) => {
  const treatments = Object.values(TREATMENTS_DATA);
  const confirmedFocus = treatments.filter((t) => t.isKeyFocus);
  const secondaryTreatments = treatments.filter((t) => !t.isKeyFocus);

  return (
    <>
      {/* SECONDARY TREATMENT NAV TABS */}
      <TreatmentNavTabs currentSlug="/treatments" onNavigate={onNavigate} />

      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Treatments Overview Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'Treatments', href: '/treatments' }]} />
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Stethoscope size={16} />
                <span>OUR TREATMENTS</span>
              </div>

              <h1 className={styles.headline}>
                Thoughtful Dental Care for Your Individual Needs.
              </h1>

              <p className={styles.description}>
                Explore our dental treatment options and learn what to expect before discussing your care with the clinic. We emphasize clear clinical communication, thorough pre-treatment planning, and anatomical precision.
              </p>

              <div className={styles.ctaRow}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Calendar size={18} />}
                  asAnchor
                  href={PRIMARY_CTA.path}
                  onClick={onBookClick}
                >
                  {PRIMARY_CTA.label}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  icon={<Phone size={18} />}
                  asAnchor
                  href={`tel:${CLINIC_CONFIG.contact.phone}`}
                >
                  Call the Clinic ({CLINIC_CONFIG.contact.phone})
                </Button>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Stethoscope size={48} color="var(--color-teal)" />
              <strong style={{ fontSize: '1.25rem' }}>Specialized Dental Care Library</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {CLINIC_CONFIG.name} — Kapurthala
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                [REAL CLINIC PHOTOGRAPHY PLACEHOLDER]
              </span>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </section>

      {/* 2. CONFIRMED PRIMARY FOCUS AREAS */}
      <section className={styles.featuredSection} aria-label="Confirmed Specialized Focus Areas">
        <div className="container">
          <SectionHeader
            eyebrow="SPECIALIZED CLINICAL FOCUS"
            title="Primary Focus Areas at Garg Dental Clinic"
            subtitle="Our practice places dedicated emphasis on advanced Dental Implants and Root Canal Therapy in Kapurthala."
            showGoldLine
          />

          <div className={styles.featuredGrid}>
            {confirmedFocus.map((t) => (
              <TreatmentCard
                key={t.id}
                title={t.name}
                shortDescription={t.shortDescription}
                slug={t.slug}
                isKeyFocus={t.isKeyFocus}
                icon={t.id === 'dental-implants' ? <ShieldCheck size={26} color="var(--color-teal)" /> : <Activity size={26} color="var(--color-teal)" />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL TREATMENT CATEGORIES */}
      <section className={styles.secondarySection} aria-label="Additional Dental Treatment Categories">
        <div className="container">
          <SectionHeader
            eyebrow="GENERAL & RESTORATIVE CARE"
            title="Comprehensive Dental Maintenance Categories"
            subtitle="Explore additional treatment options that may be evaluated during your personal clinical consultation."
            showGoldLine
          />

          <div className={styles.secondaryGrid}>
            {secondaryTreatments.map((t) => (
              <TreatmentCard
                key={t.id}
                title={t.name}
                shortDescription={t.shortDescription}
                slug={t.slug}
                isKeyFocus={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <AppointmentCTASection variant="navy" onBookClick={onBookClick} />
    </>
  );
};
