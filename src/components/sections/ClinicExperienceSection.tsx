import React from 'react';
import { Building2, Stethoscope, Maximize2, Shield, Users, Sparkles } from 'lucide-react';
import styles from './ClinicExperienceSection.module.css';
import { SectionHeader } from './SectionHeader';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  isLarge?: boolean;
  imageSrc?: string;
  icon: React.ReactNode;
}

export interface ClinicExperienceSectionProps {
  onImageClick?: (item: GalleryItem) => void;
}

export const ClinicExperienceSection: React.FC<ClinicExperienceSectionProps> = ({ onImageClick }) => {
  const items: GalleryItem[] = [
    {
      id: 'main-operatory',
      title: 'Main Treatment Suite & Operatory',
      category: 'Clinical Environment',
      isLarge: true,
      imageSrc: '/images/gallery/clinic_operatory.jpg',
      icon: <Stethoscope size={32} color="var(--color-teal)" />,
    },
    {
      id: 'reception',
      title: 'Reception & Patient Lounge',
      category: 'Clinic Interior',
      icon: <Building2 size={32} color="var(--color-teal)" />,
    },
    {
      id: 'consultation',
      title: 'Consultation Space',
      category: 'Patient Discussion',
      icon: <Users size={32} color="var(--color-teal)" />,
    },
    {
      id: 'exterior',
      title: 'Exterior & Entrance',
      category: 'The Mall Road Kapurthala',
      icon: <Building2 size={32} color="var(--color-teal)" />,
    },
    {
      id: 'equipment',
      title: 'Clinical Sterilization Suite',
      category: 'Hygiene Standards',
      icon: <Shield size={32} color="var(--color-teal)" />,
    },
    {
      id: 'team',
      title: 'Clinical Support Desk',
      category: 'Patient Care Team',
      icon: <Sparkles size={32} color="var(--color-teal)" />,
    },
  ];

  return (
    <section id="gallery" className={styles.section} aria-label="Clinic Experience and Facilities">
      <div className="container">
        <SectionHeader
          eyebrow="THE CLINIC"
          title="A Calm, Professional Environment for Your Dental Care."
          subtitle="Take a tour of Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala. Designed for hygiene, clinical efficiency, and patient ease."
          showGoldLine
        />

        <div className={styles.grid}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${styles.tile} ${item.isLarge ? styles.tileLarge : ''}`}
              onClick={() => onImageClick && onImageClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onImageClick && onImageClick(item);
                }
              }}
              aria-label={`View photo of ${item.title}`}
            >
              {item.imageSrc ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(14, 51, 64, 0.85) 0%, rgba(14, 51, 64, 0.1) 60%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1.25rem',
                      color: '#fff',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-mint-soft)' }}>
                      {item.category}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.25rem 0 0', color: '#fff' }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              ) : (
                <div className={styles.placeholderBox}>
                  {item.icon}
                  <div className={styles.tileCategory}>{item.category}</div>
                  <h3 className={styles.tileTitle}>{item.title}</h3>
                  <span className={styles.tileNotice}>[REAL CLINIC PHOTOGRAPHY PLACEHOLDER]</span>
                </div>
              )}

              <div className={styles.zoomBadge}>
                <Maximize2 size={13} />
                <span>View Full Photo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
