import React from 'react';
import styles from './FAQSection.module.css';
import { SectionHeader } from './SectionHeader';
import { FAQAccordion } from '../ui/FAQAccordion';
import type { FAQItem } from '../ui/FAQAccordion';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export const FAQSection: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      id: 'book-appointment',
      question: 'How do I book an appointment?',
      answer: `You can request an appointment online using the 'Book an Appointment' button on this website, or call our clinic directly at ${CLINIC_CONFIG.contact.phone}. Our team will assist in scheduling a convenient consultation time.`,
    },
    {
      id: 'clinic-location',
      question: 'Where is Garg Dental Clinic located?',
      answer: `The clinic is located on ${CLINIC_CONFIG.location.addressLine}, ${CLINIC_CONFIG.location.landmark}, in ${CLINIC_CONFIG.location.city}, ${CLINIC_CONFIG.location.state}. It is centrally accessible with local transport options nearby.`,
    },
    {
      id: 'opening-hours',
      question: 'What are the clinic opening hours?',
      answer: `We are open Monday through Saturday from 9:00 AM to 7:00 PM. The clinic is closed on Sundays.`,
    },
    {
      id: 'first-consultation',
      question: 'What should I expect during my first dental consultation?',
      answer: `Your initial visit involves a comprehensive discussion of your dental history, clinical oral examination, and necessary digital imaging. The doctor will explain any identified conditions and outline personalized treatment recommendations.`,
    },
    {
      id: 'walk-ins',
      question: 'Do I need an appointment before visiting?',
      answer: `Prior appointment booking is recommended to ensure minimal waiting time and dedicated clinical consultation. Please contact the clinic to confirm appointment availability.`,
    },
    {
      id: 'treatments-offered',
      question: 'What treatments are available at Garg Dental Clinic?',
      answer: `Our clinic specializes in Dental Implants and Root Canal Treatment. Additional restorative, cosmetic, and general dental maintenance options can be evaluated during your clinical consultation.`,
    },
  ];

  return (
    <section className={styles.section} aria-label="Frequently Asked Questions">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: HEADING */}
          <div className={styles.leftCol}>
            <SectionHeader
              eyebrow="COMMON QUESTIONS"
              title="Questions Patients Often Ask."
              subtitle="Clear information regarding appointments, location, and clinical consultations at Garg Dental Clinic."
              showGoldLine
            />
          </div>

          {/* RIGHT: ACCORDION */}
          <div>
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};
