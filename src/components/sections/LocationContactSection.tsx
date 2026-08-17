import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import styles from './LocationContactSection.module.css';
import { SectionHeader } from './SectionHeader';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export const LocationContactSection: React.FC = () => {
  const { location, contact, hours, name } = CLINIC_CONFIG;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${location.addressLine}, ${location.landmark}, ${location.city}, ${location.state}, ${location.country}`
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className={styles.section} aria-label="Clinic Location & Contact Information">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: ADDRESS, HOURS & ACTIONS */}
          <div className={styles.content}>
            <SectionHeader
              eyebrow="VISIT OUR CLINIC"
              title="Find Garg Dental Clinic in Kapurthala."
              subtitle="Conveniently situated on The Mall Road adjacent to Bank of Baroda. Visit us for clinical dental consultations."
              showGoldLine
            />

            <div className={styles.clinicCard}>
              <div className={styles.infoItem}>
                <div className={styles.iconCircle} aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={styles.infoTitle}>{name}</div>
                  <div className={styles.infoText}>
                    {location.addressLine}, {location.landmark}<br />
                    {location.city}, {location.state}, {location.country}
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconCircle} aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <div className={styles.infoTitle}>Phone Number</div>
                  <div className={styles.infoText}>{contact.phone}</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconCircle} aria-hidden="true">
                  <Clock size={20} />
                </div>
                <div>
                  <div className={styles.infoTitle}>Clinic Hours</div>
                  <div className={styles.infoText}>
                    {hours.map((h, i) => (
                      <div key={i}>
                        {h.days}: <strong>{h.time}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* THREE PRIMARY CONTACT ACTIONS */}
            <div className={styles.actionButtons}>
              <Button
                variant="primary"
                size="md"
                icon={<Phone size={16} />}
                asAnchor
                href={`tel:${contact.phone}`}
              >
                Call Clinic
              </Button>

              <Button
                variant="secondary"
                size="md"
                icon={<MessageCircle size={16} />}
                asAnchor
                href={`https://wa.me/${contact.whatsappPlaceholder.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>

              <Button
                variant="outline"
                size="md"
                icon={<Navigation size={16} />}
                asAnchor
                href={location.googleMapsUrlPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE MAP CONTAINER */}
          <div className={styles.mapFrame} style={{ overflow: 'hidden', borderRadius: 'var(--radius-xl, 16px)', minHeight: '380px', border: '1px solid var(--color-border)', boxShadow: '0 8px 24px rgba(14, 51, 64, 0.06)' }}>
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Garg Dental Clinic & Implant Centre Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
