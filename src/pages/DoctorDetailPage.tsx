import React from 'react';
import { User, Calendar, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';
import styles from './DoctorDetailPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { Button } from '../components/ui/Button';
import { MedicalDisclaimer } from '../components/ui/MedicalDisclaimer';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import type { DoctorProfileData } from '../data/doctors.data';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../config/clinic.config';

export interface DoctorDetailPageProps {
  doctor: DoctorProfileData;
  onBookClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const DoctorDetailPage: React.FC<DoctorDetailPageProps> = ({
  doctor,
  onBookClick,
}) => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label={`${doctor.name} Profile Hero`}>
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb
              items={[
                { label: 'Doctors', href: '/doctors' },
                { label: doctor.name, href: doctor.slug },
              ]}
            />
          </div>

          <div className={styles.heroGrid}>
            {/* PORTRAIT FRAME */}
            <div className={styles.portraitWrapper}>
              <div className={styles.portraitFrame}>
                <div className={styles.placeholderOverlay}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={32} color="var(--color-navy)" />
                  </div>
                  <strong style={{ fontSize: '1.2rem' }}>{doctor.name}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    {doctor.portraitImagePlaceholder}
                  </span>
                </div>
              </div>

              <div className={styles.champagneBadge}>Verified Practitioner</div>
            </div>

            {/* DOCTOR CREDENTIALS HEADER */}
            <div className={styles.heroContent}>
              <h1 className={styles.doctorName}>{doctor.name}</h1>
              <div className={styles.qualification}>{doctor.qualification}</div>
              <div className={styles.specialization}>{doctor.specialization}</div>

              <div className={styles.ctaRow}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Calendar size={18} />}
                  asAnchor
                  href={PRIMARY_CTA.path}
                  onClick={onBookClick}
                >
                  Book Doctor Consultation
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

              <MedicalDisclaimer text="Doctor credentials and registration details are maintained in strict accordance with verified clinic information." />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROFESSIONAL BIOGRAPHY */}
      <section className={styles.sectionWhite} aria-label="Professional Biography">
        <div className="container">
          <SectionHeader
            eyebrow="BIOGRAPHY"
            title="Professional Introduction"
            showGoldLine
          />

          <div className={styles.readableText}>
            {doctor.bioParagraphs.map((para, idx) => (
              <p key={idx} className={styles.paragraph}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUALIFICATIONS & REGISTRATION MATRIX */}
      <section className={styles.sectionWarm} aria-label="Qualifications & Clinical Registration">
        <div className="container">
          <SectionHeader
            eyebrow="CREDENTIALS"
            title="Qualifications & Clinical Credentials"
            subtitle="Verified professional details provided by Garg Dental Clinic & Implant Centre."
            showGoldLine
          />

          <div className={styles.matrixGrid}>
            {doctor.qualificationsList.map((item, index) => (
              <div key={index} className={styles.matrixBox}>
                <div className={styles.matrixLabel}>{item.title}</div>
                <div className={styles.matrixValue}>{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AREAS OF PRACTICE */}
      <section className={styles.sectionWhite} aria-label="Areas of Practice">
        <div className="container">
          <SectionHeader
            eyebrow="CLINICAL FOCUS"
            title="Specialized Areas of Practice"
            subtitle="Core clinical procedures and oral health management areas."
            showGoldLine
          />

          <div className={styles.practiceGrid}>
            {doctor.areasOfPractice.map((area, index) => (
              <div key={index} className={styles.practiceCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--color-teal)" />
                  <h3 className={styles.practiceTitle}>{area.title}</h3>
                </div>
                <p className={styles.practiceDesc}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL CARE APPROACH */}
      <section className={styles.sectionWarm} aria-label="Professional Care Approach">
        <div className="container">
          <SectionHeader
            eyebrow="PATIENT CARE VALUES"
            title="Clinical Philosophy & Care Approach"
            subtitle="How we structure our patient consultations and care routines to ensure clarity, safety, and respect."
            showGoldLine
          />

          <div className={styles.approachList}>
            {doctor.careApproachPoints.map((point, index) => (
              <div key={index} className={styles.approachCard}>
                <div className={styles.approachIcon}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--color-navy)', display: 'block', marginBottom: '0.25rem' }}>
                    {point.title}
                  </strong>
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {point.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION CTA */}
      <AppointmentCTASection
        variant="navy"
        title="Have Questions About Your Dental Care?"
        subtitle="Arrange a clinical consultation with our dental team to discuss your concerns and understand your treatment options."
        onBookClick={onBookClick}
      />
    </>
  );
};
