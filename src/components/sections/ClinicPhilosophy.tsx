import React from 'react';
import styles from './ClinicPhilosophy.module.css';
import { SectionHeader } from './SectionHeader';

export const ClinicPhilosophy: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Listen First',
      description:
        'Care begins by giving you the space to express your dental concerns, past experiences, and expectations without rush.',
    },
    {
      num: '02',
      title: 'Explain Clearly',
      description:
        'We translate clinical evaluations into clear, jargon-free explanations so you understand your oral health status completely.',
    },
    {
      num: '03',
      title: 'Plan Thoughtfully',
      description:
        'Every procedure—from minor restorations to full implant strategies—is planned with tissue preservation and structural integrity in mind.',
    },
    {
      num: '04',
      title: 'Treat Individually',
      description:
        'Recognizing that no two patients share identical anatomy, treatment is tailored specifically to your unique clinical requirements.',
    },
  ];

  return (
    <section className={styles.section} aria-label="Our Approach to Dental Care">
      <div className="container">
        <div className={styles.grid}>
          {/* LEFT: STATEMENT BOX */}
          <div className={styles.statementCol}>
            <SectionHeader
              eyebrow="OUR PHILOSOPHY"
              title="Our Approach to Dental Care"
              showGoldLine
            />

            <div className={styles.statementBox}>
              <div className={styles.statementQuote}>
                "Healthcare built on listening, transparency, and clinical precision."
              </div>
              <div className={styles.statementSub}>
                At Garg Dental Clinic & Implant Centre, our core values guide every interaction, consultation, and procedure we perform.
              </div>
            </div>
          </div>

          {/* RIGHT: PRINCIPLES LIST */}
          <div className={styles.principlesList}>
            {principles.map((p) => (
              <div key={p.num} className={styles.principleCard}>
                <div className={styles.principleNumber}>{p.num}</div>
                <div>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleDesc}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
