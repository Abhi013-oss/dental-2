import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import styles from './EnhancedLightboxModal.module.css';

export interface LightboxImageItem {
  id: string;
  title: string;
  category: string;
  imageSrc?: string;
  placeholderText?: string;
}

export interface EnhancedLightboxModalProps {
  isOpen: boolean;
  images: LightboxImageItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
}

export const EnhancedLightboxModal: React.FC<EnhancedLightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigateIndex,
}) => {
  const total = images.length;
  const currentItem = images[currentIndex];

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    const newIdx = (currentIndex - 1 + total) % total;
    onNavigateIndex(newIdx);
  }, [currentIndex, total, onNavigateIndex]);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    const newIdx = (currentIndex + 1) % total;
    onNavigateIndex(newIdx);
  }, [currentIndex, total, onNavigateIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Facility Gallery Photo: ${currentItem.title}`}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.topBar}>
          <span className={styles.counter}>
            Photo {currentIndex + 1} of {total}
          </span>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close image lightbox">
            <X size={22} />
          </button>
        </div>

        <div className={styles.stageArea}>
          {total > 1 && (
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div className={styles.imageFrame}>
            {currentItem.imageSrc ? (
              <img src={currentItem.imageSrc} alt={currentItem.title} />
            ) : (
              <div className={styles.placeholderBox}>
                <ImageIcon size={48} color="var(--color-teal)" />
                <strong style={{ fontSize: '1.25rem' }}>{currentItem.title}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-mint-soft)' }}>
                  Category: {currentItem.category} | [REAL CLINIC PHOTOGRAPHY PLACEHOLDER]
                </span>
              </div>
            )}
          </div>

          {total > 1 && (
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        <div className={styles.captionBar}>
          <div className={styles.captionTitle}>{currentItem.title}</div>
          <div className={styles.captionCategory}>{currentItem.category} — Garg Dental Clinic</div>
        </div>
      </div>
    </div>
  );
};
