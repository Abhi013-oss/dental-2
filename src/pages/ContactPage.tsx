import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, Calendar, Compass } from 'lucide-react';
import styles from './ContactPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { AppointmentForm } from '../components/forms/AppointmentForm';
import { ClinicInformationCard } from '../components/cards/ClinicInformationCard';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { Button } from '../components/ui/Button';
import { CLINIC_CONFIG, PRIMARY_CTA } from '../config/clinic.config';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/919872485245?text=${encodeURIComponent(
    'Hello Garg Dental Clinic, I would like to enquire about booking a dental appointment.'
  )}`;

  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${CLINIC_CONFIG.location.addressLine}, ${CLINIC_CONFIG.location.landmark}, ${CLINIC_CONFIG.location.city}, ${CLINIC_CONFIG.location.state}, ${CLINIC_CONFIG.location.country}`
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Contact Garg Dental Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <Phone size={16} />
              <span>CONTACT GARG DENTAL</span>
            </div>

            <h1 className={styles.headline}>
              Visit Garg Dental Clinic in Kapurthala.
            </h1>

            <p className={styles.description}>
              Find the clinic, check opening hours, or get in touch to arrange your dental appointment.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="lg"
                icon={<Calendar size={18} />}
                asAnchor
                href={PRIMARY_CTA.path}
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
        </div>
      </section>

      {/* 2. CONTACT ACTION CARDS */}
      <section className={styles.sectionWhite} aria-label="Contact Action Options">
        <div className="container">
          <div className={styles.cardsGrid}>
            {/* CARD 1: PHONE */}
            <div className={styles.actionCard}>
              <div className={styles.iconBox}>
                <Phone size={22} />
              </div>
              <h3 className={styles.cardTitle}>Call the Clinic</h3>
              <p className={styles.cardDetail}>
                Direct phone line for instant scheduling and enquiries.
                <br />
                <strong>{CLINIC_CONFIG.contact.phone}</strong>
              </p>
              <div className={styles.cardAction}>
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  asAnchor
                  href={`tel:${CLINIC_CONFIG.contact.phone}`}
                >
                  Call Now
                </Button>
              </div>
            </div>

            {/* CARD 2: WHATSAPP */}
            <div className={styles.actionCard}>
              <div className={styles.iconBox}>
                <MessageCircle size={22} />
              </div>
              <h3 className={styles.cardTitle}>WhatsApp Enquiries</h3>
              <p className={styles.cardDetail}>
                Fast messaging channel for appointment requests.
                <br />
                <strong>+91 98724 85245</strong>
              </p>
              <div className={styles.cardAction}>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  asAnchor
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message WhatsApp
                </Button>
              </div>
            </div>

            {/* CARD 3: LOCATION */}
            <div className={styles.actionCard}>
              <div className={styles.iconBox}>
                <MapPin size={22} />
              </div>
              <h3 className={styles.cardTitle}>Clinic Location</h3>
              <p className={styles.cardDetail}>
                {CLINIC_CONFIG.location.addressLine}, {CLINIC_CONFIG.location.city}
                <br />
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  {CLINIC_CONFIG.location.landmark}
                </span>
              </p>
              <div className={styles.cardAction}>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  icon={<ExternalLink size={14} />}
                  asAnchor
                  href={CLINIC_CONFIG.location.googleMapsUrlPlaceholder}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </div>
            </div>

            {/* CARD 4: HOURS */}
            <div className={styles.actionCard}>
              <div className={styles.iconBox}>
                <Clock size={22} />
              </div>
              <h3 className={styles.cardTitle}>Opening Hours</h3>
              <p className={styles.cardDetail}>
                Monday–Saturday: {CLINIC_CONFIG.hours[0].time}
                <br />
                Sunday: Closed
              </p>
              <div className={styles.cardAction}>
                <Button
                  variant="secondary"
                  size="sm"
                  fullWidth
                  asAnchor
                  href="#contact-form"
                >
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>

          {/* 3. CLINIC INFO CARD + MAP GRID */}
          <div className={styles.formGrid}>
            <div>
              <SectionHeader
                eyebrow="LOCATION & HOURS"
                title="Garg Dental Clinic Information"
                showGoldLine
              />
              <ClinicInformationCard />
            </div>

            <div>
              <SectionHeader
                eyebrow="HOW TO FIND US"
                title="Map & Directions"
                showGoldLine
              />

              <div style={{ marginBottom: '1.5rem', background: 'var(--color-warm-white)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-navy)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  <Compass size={20} color="var(--color-teal)" />
                  <span>How to Find the Clinic</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                  You'll find Garg Dental Clinic & Implant Centre on <strong>The Mall Road</strong> in Kapurthala, conveniently located <strong>adjacent to Bank of Baroda</strong>.
                </p>
              </div>

              {/* LIVE INTERACTIVE GOOGLE MAP */}
              <div style={{ borderRadius: 'var(--radius-xl, 16px)', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 8px 24px rgba(14, 51, 64, 0.06)', height: '360px', marginBottom: '1rem' }}>
                <iframe
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Garg Dental Clinic Location Map Kapurthala"
                />
              </div>

              <Button
                variant="primary"
                size="md"
                fullWidth
                icon={<ExternalLink size={16} />}
                asAnchor
                href={CLINIC_CONFIG.location.googleMapsUrlPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Full Map on Google Maps
              </Button>
            </div>
          </div>

          {/* 4. APPOINTMENT FORM SECTION */}
          <div id="contact-form" style={{ marginTop: '5rem' }}>
            <SectionHeader
              eyebrow="SEND A MESSAGE"
              title="Appointment Enquiry Form"
              subtitle="Send an appointment request and the clinic will contact you to discuss availability."
              showGoldLine
            />
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CONTACT CTA */}
      <AppointmentCTASection
        variant="navy"
        title="Ready to Arrange Your Visit?"
        subtitle="Send an appointment request or contact the clinic directly to discuss your dental care requirements."
      />
    </>
  );
};
