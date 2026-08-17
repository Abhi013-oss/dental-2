import React from 'react';
import { Calendar, Phone, MapPin, Clock, Star, MessageCircle } from 'lucide-react';
import styles from './BookAppointmentPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { AppointmentForm } from '../components/forms/AppointmentForm';
import { Button } from '../components/ui/Button';
import { CLINIC_CONFIG } from '../config/clinic.config';
import type { TreatmentReason } from '../types/appointment.types';

export interface BookAppointmentPageProps {
  initialReason?: TreatmentReason;
}

export const BookAppointmentPage: React.FC<BookAppointmentPageProps> = ({
  initialReason = 'Dental Consultation',
}) => {
  const whatsappUrl = `https://wa.me/919872485245?text=${encodeURIComponent(
    'Hello Garg Dental Clinic, I would like to enquire about booking a dental appointment.'
  )}`;

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Book Appointment Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'Book Appointment', href: '/book-appointment' }]} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <Calendar size={16} />
              <span>BOOK AN APPOINTMENT</span>
            </div>

            <h1 className={styles.headline}>
              Let's Start With a Conversation About Your Dental Care.
            </h1>

            <p className={styles.description}>
              Send an appointment request and the clinic can contact you to discuss availability and the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: INFO + FORM */}
      <section className={styles.sectionWhite} aria-label="Appointment Request Form Section">
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* LEFT COLUMN: VERIFIED CLINIC INFO */}
            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <h2 className={styles.infoTitle}>Clinic Information</h2>

                <div className={styles.metaList}>
                  <div className={styles.metaItem}>
                    <div className={styles.iconBox}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-navy)', display: 'block' }}>Location</strong>
                      <span>{CLINIC_CONFIG.location.addressLine}, {CLINIC_CONFIG.location.city}</span>
                      <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                        {CLINIC_CONFIG.location.landmark}
                      </span>
                    </div>
                  </div>

                  <div className={styles.metaItem}>
                    <div className={styles.iconBox}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-navy)', display: 'block' }}>Phone Enquiries</strong>
                      <span>{CLINIC_CONFIG.contact.phone}</span>
                    </div>
                  </div>

                  <div className={styles.metaItem}>
                    <div className={styles.iconBox}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-navy)', display: 'block' }}>Clinic Hours</strong>
                      <span>Monday–Saturday: {CLINIC_CONFIG.hours[0].time}</span>
                      <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        Sunday: Closed
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.quickActions}>
                  <Button
                    variant="secondary"
                    size="md"
                    fullWidth
                    icon={<Phone size={16} />}
                    asAnchor
                    href={`tel:${CLINIC_CONFIG.contact.phone}`}
                  >
                    Call Clinic ({CLINIC_CONFIG.contact.phone})
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    fullWidth
                    icon={<MessageCircle size={16} />}
                    asAnchor
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Enquiries
                  </Button>
                </div>
              </div>

              {/* RATING BADGE */}
              <div className={styles.ratingBadge}>
                <div className={styles.ratingScore}>{CLINIC_CONFIG.googleReview.rating}</div>
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--color-gold-accent)' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', marginTop: '0.15rem' }}>
                    {CLINIC_CONFIG.googleReview.reviewCount} Verified Google Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: APPOINTMENT FORM */}
            <div>
              <AppointmentForm initialReason={initialReason} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
