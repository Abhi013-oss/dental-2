import React from 'react';
import { Calendar, Phone, Building2, CheckCircle2 } from 'lucide-react';
import styles from './AboutPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { Button } from '../components/ui/Button';
import { MedicalDisclaimer } from '../components/ui/MedicalDisclaimer';
import { ClinicPhilosophy } from '../components/sections/ClinicPhilosophy';
import { PatientJourneyTimeline } from '../components/ui/PatientJourneyTimeline';
import { CuratedGallery } from '../components/sections/CuratedGallery';
import { ReviewCard } from '../components/cards/ReviewCard';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { LocationContactSection } from '../components/sections/LocationContactSection';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../config/clinic.config';

export interface AboutPageProps {
  onBookClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBookClick, onNavigate }) => {
  const handleReadReviews = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/reviews');
    }
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="About Clinic Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'About Us', href: '/about' }]} />
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.goldLine} />
                <span>ABOUT GARG DENTAL</span>
              </div>

              <h1 className={styles.headline}>
                Professional Dental Care, Built Around People.
              </h1>

              <p className={styles.description}>
                At Garg Dental Clinic & Implant Centre, we believe every patient deserves clear communication, personalized care planning, and a dental experience where you feel comfortable asking questions.
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
                  Contact the Clinic ({CLINIC_CONFIG.contact.phone})
                </Button>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Building2 size={48} color="var(--color-teal)" />
              <strong style={{ fontSize: '1.25rem' }}>{CLINIC_CONFIG.name}</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {CLINIC_CONFIG.location.addressLine}, {CLINIC_CONFIG.location.city}
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>
                [REAL CLINIC PHOTOGRAPHY PLACEHOLDER]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLINIC STORY PLACEHOLDER CONTAINER */}
      <section className={styles.sectionWhite} aria-label="About Clinic Story">
        <div className="container">
          <SectionHeader
            eyebrow="OUR PRACTICE"
            title="About Garg Dental Clinic & Implant Centre"
            showGoldLine
          />

          <div className={styles.readableText}>
            <p className={styles.paragraph}>
              Garg Dental Clinic & Implant Centre is a established dental practice situated on The Mall Road, adjacent to Bank of Baroda in Kapurthala, Punjab.
            </p>
            <p className={styles.paragraph}>
              Our clinic focuses on specialized Dental Implant procedures, Root Canal Therapy, and general oral health maintenance. We maintain high standards of clinical hygiene, digital diagnostics, and individualized patient consultation.
            </p>

            <div className={styles.placeholderBox}>
              <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
                [CLINIC STORY — TO BE PROVIDED BY CLINIC]
              </strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                This space is reserved for the clinic's formal practice history, founder narrative, and milestone timeline upon verification.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINIC PHILOSOPHY */}
      <ClinicPhilosophy />

      {/* 4. PATIENT EXPERIENCE */}
      <section className={styles.sectionWhite} aria-label="A More Comfortable Dental Experience">
        <div className="container">
          <SectionHeader
            eyebrow="PATIENT EXPERIENCE"
            title="A More Comfortable Dental Experience"
            subtitle="How we structure our patient consultations and care routines to ensure clarity and ease."
            showGoldLine
          />

          <div className={styles.readableText}>
            <div className={styles.pointsList}>
              <div className={styles.pointItem}>
                <div className={styles.pointIcon} aria-hidden="true">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Welcoming Communication
                  </strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Our clinical team takes time to answer your questions and discuss any anxieties before starting care.
                  </span>
                </div>
              </div>

              <div className={styles.pointItem}>
                <div className={styles.pointIcon} aria-hidden="true">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Clear Procedural Explanations
                  </strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    We walk you through radiographs, diagnosis, and recommended treatment options step-by-step.
                  </span>
                </div>
              </div>

              <div className={styles.pointItem}>
                <div className={styles.pointIcon} aria-hidden="true">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Thoughtful Consultation
                  </strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Care plans consider your overall oral health goals, anatomical condition, and schedule.
                  </span>
                </div>
              </div>
            </div>

            <MedicalDisclaimer />
          </div>
        </div>
      </section>

      {/* 5. PATIENT JOURNEY TIMELINE */}
      <section className={styles.sectionWarm} aria-label="The Patient Journey">
        <div className="container">
          <SectionHeader
            eyebrow="CARE FRAMEWORK"
            title="Your Patient Journey"
            subtitle="What to expect when consulting Garg Dental Clinic & Implant Centre."
            align="center"
            showGoldLine
          />

          <PatientJourneyTimeline />
        </div>
      </section>

      {/* 6. CLINIC ENVIRONMENT & CURATED GALLERY */}
      <CuratedGallery />

      {/* 7. TESTIMONIAL INTEGRATION */}
      <section className={styles.sectionWhite} aria-label="Verified Patient Review Snippet">
        <div className="container">
          <SectionHeader
            eyebrow="PATIENT TRUST"
            title="Verified Patient Feedback"
            subtitle={`Rated ${CLINIC_CONFIG.googleReview.rating} / 5 across ${CLINIC_CONFIG.googleReview.reviewCount} verified Google reviews.`}
            showGoldLine
          />

          <div style={{ maxWidth: '720px', marginTop: '2.5rem' }}>
            <ReviewCard
              patientName="Verified Local Patient"
              reviewText="Visited Garg Dental Clinic for dental implant consultation. The doctor took time to explain the entire procedure, bone health, and expectations clearly. Professional and hygienic clinic in Kapurthala."
              treatmentName="Dental Implants"
              date="Verified Patient Review"
            />

            <div style={{ marginTop: '1.5rem' }}>
              <Button
                variant="outline"
                size="md"
                asAnchor
                href="/reviews"
                onClick={handleReadReviews}
              >
                Read More Patient Reviews
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL ABOUT CTA */}
      <AppointmentCTASection
        variant="navy"
        title="Let's Start With a Conversation."
        subtitle="Whether you are exploring treatment options or simply want to understand your dental needs better, the first step is a clinical consultation."
        onBookClick={onBookClick}
      />

      {/* 9. LOCATION & CONTACT SUMMARY */}
      <LocationContactSection />
    </>
  );
};
