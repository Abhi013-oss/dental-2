import React from 'react';
import { Calendar, Phone, CheckCircle2, ShieldCheck, Activity, Info, FileText } from 'lucide-react';
import styles from './TreatmentDetailPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { Button } from '../components/ui/Button';
import { MedicalDisclaimer } from '../components/ui/MedicalDisclaimer';
import { FAQAccordion } from '../components/ui/FAQAccordion';
import type { FAQItem } from '../components/ui/FAQAccordion';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { TreatmentNavTabs } from '../components/ui/TreatmentNavTabs';
import { RelatedTreatments } from '../components/sections/RelatedTreatments';
import type { TreatmentData } from '../data/treatments.data';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../config/clinic.config';

export interface TreatmentDetailPageProps {
  treatment: TreatmentData;
  onBookClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({
  treatment,
  onBookClick,
  onNavigate,
}) => {
  const faqItems: FAQItem[] = treatment.faqs.map((f, idx) => ({
    id: `faq-${idx}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      {/* SECONDARY TREATMENT TABS NAVIGATION */}
      <TreatmentNavTabs currentSlug={treatment.slug} onNavigate={onNavigate} />

      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label={`${treatment.name} Hero`}>
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb
              items={[
                { label: 'Treatments', href: '/treatments' },
                { label: treatment.name, href: treatment.slug },
              ]}
            />
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.goldLine} />
                <span>{treatment.eyebrow}</span>
              </div>

              <h1 className={styles.headline}>{treatment.heroHeadline}</h1>

              <p className={styles.description}>{treatment.heroDescription}</p>

              <div className={styles.ctaRow}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Calendar size={18} />}
                  asAnchor
                  href={PRIMARY_CTA.path}
                  onClick={onBookClick}
                >
                  {treatment.ctaPrimaryText || PRIMARY_CTA.label}
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
              {treatment.id === 'dental-implants' ? (
                <ShieldCheck size={52} color="var(--color-teal)" />
              ) : (
                <Activity size={52} color="var(--color-teal)" />
              )}
              <strong style={{ fontSize: '1.25rem' }}>{treatment.name}</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {CLINIC_CONFIG.name} — Kapurthala
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                {treatment.heroImagePlaceholder}
              </span>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </section>

      {/* 2. OVERVIEW / WHAT IS IT */}
      <section className={styles.sectionWhite} aria-label={`What is ${treatment.name}`}>
        <div className="container">
          <SectionHeader
            eyebrow="TREATMENT OVERVIEW"
            title={treatment.overviewHeading}
            showGoldLine
          />

          <div className={styles.readableText}>
            {treatment.overviewParagraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO MAY CONSIDER THIS TREATMENT */}
      <section className={styles.sectionWarm} aria-label="Who May Be Considered">
        <div className="container">
          <SectionHeader
            eyebrow="CLINICAL CONSIDERATIONS"
            title={treatment.whoMayConsiderHeading}
            subtitle={treatment.whoMayConsiderIntro}
            showGoldLine
          />

          <div className={styles.readableText}>
            <div className={styles.pointsList}>
              {treatment.whoMayConsiderPoints.map((point, index) => (
                <div key={index} className={styles.pointItem}>
                  <div className={styles.pointIcon} aria-hidden="true">
                    <CheckCircle2 size={18} />
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-navy)', lineHeight: 1.6 }}>
                    {point}
                  </div>
                </div>
              ))}
            </div>

            {treatment.whoMayConsiderDisclaimer && (
              <div className={styles.disclaimerText}>
                <strong>Note:</strong> {treatment.whoMayConsiderDisclaimer}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. STEP-BY-STEP GENERAL PROCESS */}
      <section className={styles.sectionWhite} aria-label="Treatment Process Steps">
        <div className="container">
          <SectionHeader
            eyebrow="EDUCATIONAL SEQUENCE"
            title={treatment.processHeading}
            subtitle={treatment.processIntro}
            showGoldLine
          />

          <div className={styles.processGrid}>
            {treatment.processSteps.map((step) => (
              <div key={step.stepNumber} className={styles.processCard}>
                <div className={styles.stepNumber}>{step.stepNumber}</div>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {treatment.processDisclaimer && (
            <p className={styles.disclaimerText}>
              * {treatment.processDisclaimer}
            </p>
          )}
        </div>
      </section>

      {/* 5. WHAT TO EXPECT & POTENTIAL BENEFITS */}
      <section className={styles.sectionMint} aria-label="What to Expect & Benefits">
        <div className="container">
          <SectionHeader
            eyebrow="CARE & EXPECTATIONS"
            title="What to Expect & Potential Benefits"
            showGoldLine
          />

          <div className={styles.grid2}>
            {/* WHAT TO EXPECT */}
            <div className={styles.boxCard}>
              <h3 className={styles.boxTitle}>
                <Info size={18} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--color-teal)' }} />
                {treatment.expectationsHeading}
              </h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {treatment.expectationsPoints.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* BENEFITS */}
            <div className={styles.boxCard}>
              <h3 className={styles.boxTitle}>
                <FileText size={18} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--color-teal)' }} />
                {treatment.benefitsHeading}
              </h3>
              <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                {treatment.benefitsPoints.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                    {item}
                  </li>
                ))}
              </ul>
              {treatment.benefitsDisclaimer && (
                <p className={styles.disclaimerText}>
                  {treatment.benefitsDisclaimer}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. GENERAL AFTERCARE GUIDANCE */}
      <section className={styles.sectionWarm} aria-label="General Aftercare Guidance">
        <div className="container">
          <SectionHeader
            eyebrow="AFTERCARE GUIDANCE"
            title={treatment.aftercareHeading}
            subtitle="General educational advice for post-treatment oral health maintenance."
            showGoldLine
          />

          <div className={styles.readableText}>
            <div className={styles.pointsList}>
              {treatment.aftercarePoints.map((item, idx) => (
                <div key={idx} className={styles.pointItem}>
                  <div className={styles.pointIcon} aria-hidden="true">
                    <CheckCircle2 size={18} />
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-navy)', lineHeight: 1.6 }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            {treatment.aftercareDisclaimer && (
              <MedicalDisclaimer text={treatment.aftercareDisclaimer} />
            )}
          </div>
        </div>
      </section>

      {/* 7. TREATMENT FAQS */}
      <section className={styles.sectionWhite} aria-label="Treatment Frequently Asked Questions">
        <div className="container">
          <SectionHeader
            eyebrow="PATIENT QUESTIONS"
            title={`Frequently Asked Questions About ${treatment.name}`}
            showGoldLine
          />

          <div style={{ maxWidth: '840px', marginTop: '2.5rem' }}>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* 8. TREATMENT CTA */}
      <AppointmentCTASection
        variant="navy"
        title={treatment.ctaHeadline}
        subtitle={treatment.ctaDescription}
        onBookClick={onBookClick}
      />

      {/* 9. RELATED TREATMENTS */}
      <RelatedTreatments relatedIds={treatment.relatedTreatmentIds} onNavigate={onNavigate} />
    </>
  );
};
