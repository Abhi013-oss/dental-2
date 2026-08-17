import React from 'react';
import { Users } from 'lucide-react';
import styles from './DoctorsOverviewPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { DoctorCard } from '../components/cards/DoctorCard';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { DOCTORS_DATA } from '../data/doctors.data';

export interface DoctorsOverviewPageProps {
  onBookClick?: () => void;
  onNavigate?: (path: string) => void;
}

export const DoctorsOverviewPage: React.FC<DoctorsOverviewPageProps> = ({
  onBookClick,
  onNavigate,
}) => {
  const doctorsList = Object.values(DOCTORS_DATA);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Doctors Overview Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'Doctors', href: '/doctors' }]} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <Users size={16} />
              <span>OUR DENTAL TEAM</span>
            </div>

            <h1 className={styles.headline}>
              Meet the Professionals Behind Your Care.
            </h1>

            <p className={styles.description}>
              Learn more about the dental professionals at Garg Dental Clinic & Implant Centre. Dedicated to comprehensive clinical evaluation, personalized care planning, and transparent patient communication.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DOCTORS GRID */}
      <section className={styles.sectionWhite} aria-label="Dental Specialists Overview">
        <div className="container">
          <SectionHeader
            eyebrow="CLINICAL PRACTITIONERS"
            title="Dental Specialists at Garg Dental Clinic"
            subtitle="Experienced practitioners dedicated to Dental Implants, Endodontics, and Restorative Oral Healthcare."
            showGoldLine
          />

          <div className={styles.grid2}>
            {doctorsList.map((doc) => (
              <div key={doc.id} onClick={() => onNavigate && onNavigate(doc.slug)} style={{ cursor: 'pointer' }}>
                <DoctorCard
                  name={doc.name}
                  qualification={doc.qualification}
                  experienceYears={doc.experienceYears}
                  registrationNumber={doc.registrationNumber}
                  bio={doc.bioParagraphs[0]}
                  profileSlug={doc.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <AppointmentCTASection variant="navy" onBookClick={onBookClick} />
    </>
  );
};
