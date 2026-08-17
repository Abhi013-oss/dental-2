import React, { useState, useMemo } from 'react';
import { Camera, Maximize2, Building2, Stethoscope, Users, MapPin, Shield, Sparkles } from 'lucide-react';
import styles from './GalleryPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { EnhancedLightboxModal } from '../components/ui/EnhancedLightboxModal';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { GALLERY_DATA } from '../data/gallery.data';

export interface GalleryPageProps {
  onBookClick?: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Clinic Environment',
    'Treatment Suite',
    'Consultation Space',
    'Sterilization & Hygiene',
    'Exterior',
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_DATA;
    return GALLERY_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const getTileIcon = (id: string) => {
    switch (id) {
      case 'reception-suite':
        return <Building2 size={32} color="var(--color-teal)" />;
      case 'operatory-suite':
      case 'main-operatory-suite':
        return <Stethoscope size={32} color="var(--color-teal)" />;
      case 'consultation-room':
        return <Users size={32} color="var(--color-teal)" />;
      case 'exterior-facade':
        return <MapPin size={32} color="var(--color-teal)" />;
      case 'sterilization-unit':
        return <Shield size={32} color="var(--color-teal)" />;
      default:
        return <Sparkles size={32} color="var(--color-teal)" />;
    }
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Gallery Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'Gallery', href: '/gallery' }]} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <Camera size={16} />
              <span>OUR CLINIC</span>
            </div>

            <h1 className={styles.headline}>
              Take a Look Inside Garg Dental Clinic.
            </h1>

            <p className={styles.description}>
              Explore our clinic environment, treatment suites, hygiene areas, and exterior location on The Mall Road, Kapurthala.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GALLERY GRID & FILTERING */}
      <section className={styles.sectionWhite} aria-label="Clinic Facility Photography Gallery">
        <div className="container">
          <SectionHeader
            eyebrow="FACILITY PREVIEW"
            title="Clinic Environment Photography"
            subtitle="Click any photo to open full-screen preview with gallery navigation."
            showGoldLine
          />

          {/* CATEGORY FILTER TABS */}
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.tabBtn} ${selectedCategory === cat ? styles.activeTab : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <div className={styles.galleryGrid}>
            {filteredItems.map((item, index) => {
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
                  onClick={() => setLightboxIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setLightboxIndex(index);
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
                      {getTileIcon(item.id)}
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

          {/* LIGHTBOX MODAL */}
          <EnhancedLightboxModal
            isOpen={lightboxIndex !== null}
            images={filteredItems}
            currentIndex={lightboxIndex ?? 0}
            onClose={() => setLightboxIndex(null)}
            onNavigateIndex={(idx) => setLightboxIndex(idx)}
          />
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <AppointmentCTASection variant="navy" onBookClick={onBookClick} />
    </>
  );
};
