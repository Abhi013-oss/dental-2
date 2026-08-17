import React from 'react';
import { Calendar, Phone, MapPin, Clock, Star, ShieldCheck } from 'lucide-react';
import styles from './HeroSection.module.css';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../../config/clinic.config';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  onBookClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section className={styles.heroSection} aria-label="Hero Introduction">
      {/* SUBTLE DENTAL ARCH VISUAL MOTIF BACKGROUND ELEMENTS */}
      <div className={styles.motifBackground} aria-hidden="true">
        <div className={styles.mintShape} />
        <div className={styles.accentCircle} />
        <svg
          className={styles.archMotif}
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,300 C100,160 210,60 350,60 C490,60 550,180 550,300 C550,420 460,520 320,520 C200,520 100,430 100,300 Z"
            stroke="var(--color-teal)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            opacity="0.18"
          />
          <circle cx="350" cy="60" r="4" fill="var(--color-gold-accent)" opacity="0.6" />
        </svg>
      </div>

      <div className={`container ${styles.heroContainer}`}>
        {/* LEFT COLUMN: HERO CONTENT */}
        <div className={`${styles.heroContent} fade-up`}>
          {/* EYEBROW */}
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowBadge}>
              <ShieldCheck size={14} className={styles.eyebrowIcon} aria-hidden="true" />
              <span>GARG DENTAL CLINIC & IMPLANT CENTRE</span>
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className={styles.headline}>
            Confident Smiles Start With Thoughtful Dental Care.
          </h1>

          {/* SUPPORTING TEXT */}
          <p className={styles.description}>
            Personalised dental care with a focus on comfort, clear communication and treatment planning tailored to your individual needs.
          </p>

          {/* HERO CTAS */}
          <div className={styles.ctaRow}>
            <Button
              variant="primary"
              size="lg"
              icon={<Calendar size={18} />}
              asAnchor
              href={PRIMARY_CTA.path}
              onClick={onBookClick}
              className={styles.primaryCta}
            >
              {PRIMARY_CTA.label}
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<Phone size={18} />}
              asAnchor
              href={`tel:${CLINIC_CONFIG.contact.phone}`}
              className={styles.secondaryCta}
            >
              Call the Clinic
            </Button>
          </div>

          {/* LOCAL CONTACT & HOURS INFORMATION */}
          <div className={styles.localInfoBar}>
            <div className={styles.infoItem}>
              <MapPin size={15} className={styles.infoIcon} aria-hidden="true" />
              <span>The Mall Road, Kapurthala</span>
            </div>
            <span className={styles.infoDivider} aria-hidden="true">•</span>
            <div className={styles.infoItem}>
              <Clock size={15} className={styles.infoIcon} aria-hidden="true" />
              <span>Mon–Sat: 9:00 AM–7:00 PM</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: HERO PHOTOGRAPHY & OVERLAY CARDS */}
        <div className={`${styles.heroVisualWrapper} zoom-in delay-200`}>
          <div className={styles.imageFrame}>
            {/* HERO PHOTOGRAPHY */}
            <img
              src="/images/hero-clinic.jpg"
              alt="Garg Dental Clinic & Implant Centre treatment suite in Kapurthala"
              className={styles.heroImage}
              loading="eager"
              width="680"
              height="510"
            />
            <div className={styles.imageOverlayGradient} aria-hidden="true" />

            {/* FLOATING CARD 1: GOOGLE RATING & TRUST INDICATOR */}
            <div className={styles.trustCard}>
              <div className={styles.ratingBadge}>
                <span className={styles.ratingScore}>{CLINIC_CONFIG.googleReview.rating}</span>
                <div className={styles.starRow} aria-label={`${CLINIC_CONFIG.googleReview.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={styles.starIcon}
                      fill="var(--color-gold-accent)"
                      stroke="none"
                    />
                  ))}
                </div>
              </div>
              <div className={styles.reviewTextGroup}>
                <span className={styles.reviewCountText}>{CLINIC_CONFIG.googleReview.reviewCount} Google Reviews</span>
                <span className={styles.reviewSourceLabel}>Verified Patient Feedback</span>
              </div>
            </div>

            {/* FLOATING CARD 2: SPECIALIZED FOCUS & HOURS CARD */}
            <div className={styles.hoursCard}>
              <div className={styles.hoursCardHeader}>
                <span className={styles.hoursCardTitle}>CLINIC HOURS</span>
                <span className={styles.hoursStatusDot} aria-hidden="true" />
              </div>
              <div className={styles.hoursRow}>
                <span className={styles.hoursDays}>Mon – Sat</span>
                <span className={styles.hoursTime}>9:00 AM – 7:00 PM</span>
              </div>
              <div className={styles.hoursSundayRow}>
                <span className={styles.hoursSundayLabel}>Sunday</span>
                <span className={styles.hoursClosedBadge}>Closed</span>
              </div>
            </div>

            {/* SUBTLE CHAMPAGNE MICRO ACCENT BADGE */}
            <div className={styles.specialtyTag}>
              <span>Dental Implants & Endodontics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
