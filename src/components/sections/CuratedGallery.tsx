import React, { useState } from 'react';
import { Building2, Stethoscope, Maximize2, Shield, Users, Sparkles, MapPin } from 'lucide-react';
import styles from './CuratedGallery.module.css';
import { SectionHeader } from './SectionHeader';
import { EnhancedLightboxModal } from '../ui/EnhancedLightboxModal';
import type { LightboxImageItem } from '../ui/EnhancedLightboxModal';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export interface CuratedGalleryTile extends LightboxImageItem {
  layoutClass?: 'large' | 'wide' | 'standard';
  icon: React.ReactNode;
}

export const CuratedGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: CuratedGalleryTile[] = [
    {
      id: 'main-operatory-suite',
      title: 'Main Treatment Suite & Operatory',
      category: 'Treatment Suite',
      layoutClass: 'large',
      imageSrc: '/images/gallery/clinic_operatory.jpg',
      icon: <Stethoscope size={32} color="var(--color-teal)" />,
    },
    {
      id: 'reception-suite',
      title: 'Reception & Patient Lounge',
      category: 'Clinic Interior',
      layoutClass: 'standard',
      icon: <Building2 size={32} color="var(--color-teal)" />,
    },
    {
      id: 'consultation-room',
      title: 'Private Consultation Room',
      category: 'Patient Discussion',
      layoutClass: 'standard',
      icon: <Users size={32} color="var(--color-teal)" />,
    },
    {
      id: 'exterior-facade',
      title: 'Clinic Exterior — The Mall Road',
      category: 'Facility Entrance',
      layoutClass: 'wide',
      icon: <MapPin size={32} color="var(--color-teal)" />,
    },
    {
      id: 'sterilization-unit',
      title: 'Sterilization & Hygiene Area',
      category: 'Infection Control Standards',
      layoutClass: 'standard',
      icon: <Shield size={32} color="var(--color-teal)" />,
    },
    {
      id: 'clinical-desk',
      title: 'Clinical Reception Desk',
      category: 'Patient Support Team',
      layoutClass: 'standard',
      icon: <Sparkles size={32} color="var(--color-teal)" />,
    },
  ];

  const handleTileClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section id="gallery" className={styles.section} aria-label="Inside Garg Dental Clinic Gallery">
      <div className="container">
        <SectionHeader
          eyebrow="CLINIC ENVIRONMENT"
          title="Inside Garg Dental Clinic"
          subtitle={`A tour of our facility on ${CLINIC_CONFIG.location.addressLine}, ${CLINIC_CONFIG.location.city}. Designed for hygienic clinical precision and patient comfort.`}
          showGoldLine
        />

        <div className={styles.galleryGrid}>
          {galleryItems.map((item, index) => {
            const tileClass =
              item.layoutClass === 'large'
                ? styles.tileLarge
                : item.layoutClass === 'wide'
                ? styles.tileWide
                : '';

            return (
              <div
                key={item.id}
                className={`${styles.tile} ${tileClass}`}
                onClick={() => handleTileClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleTileClick(index);
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
                  <span>View Photo</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE MULTI-PHOTO LIGHTBOX MODAL */}
        <EnhancedLightboxModal
          isOpen={lightboxIndex !== null}
          images={galleryItems}
          currentIndex={lightboxIndex ?? 0}
          onClose={handleCloseLightbox}
          onNavigateIndex={(idx) => setLightboxIndex(idx)}
        />
      </div>
    </section>
  );
};
