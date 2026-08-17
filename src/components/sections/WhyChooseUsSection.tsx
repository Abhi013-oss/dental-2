import React from 'react';
import styles from './WhyChooseUsSection.module.css';
import { SectionHeader } from './SectionHeader';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'Patient-Focused Consultation',
      description:
        'We begin with a thorough examination and take time to understand your individual dental concerns, preferences, and long-term goals.',
    },
    {
      num: '02',
      title: 'Clear Communication',
      description:
        'Clinical procedures and treatment choices are explained in plain language, empowering you to make informed decisions about your oral care.',
    },
    {
      num: '03',
      title: 'Personalised Treatment Planning',
      description:
        'Every treatment strategy—from single-tooth restorations to full dental implant plans—is tailored specifically for your anatomy and health.',
    },
    {
      num: '04',
      title: 'Comfortable Clinical Environment',
      description:
        'Our dental clinic on The Mall Road, Kapurthala is designed to provide a calm, reassuring, and hygienic environment for every visit.',
    },
  ];

  const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];

  return (
    <section className={styles.section} aria-label="Why Choose Garg Dental Clinic">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: HEADING */}
          <div className={`${styles.leftCol} fade-up`}>
            <SectionHeader
              eyebrow="WHY GARG DENTAL"
              title="A Dental Experience Built Around Trust and Clarity."
              subtitle="We believe quality healthcare relies on clinical precision, open communication, and respectful patient care."
              showGoldLine
            />
          </div>

          {/* RIGHT: FEATURE LIST */}
          <div className={styles.featuresList}>
            {reasons.map((item, idx) => (
              <div key={item.num} className={`${styles.featureCard} fade-up ${delays[idx % delays.length]}`}>
                <div className={styles.featureNumber} aria-hidden="true">
                  {item.num}
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
