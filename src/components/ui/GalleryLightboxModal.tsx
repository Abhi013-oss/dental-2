import React, { useEffect } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import styles from './GalleryLightboxModal.module.css';

export interface GalleryLightboxModalProps {
  isOpen: boolean;
  imageSrc?: string;
  title: string;
  category?: string;
  onClose: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  isOpen,
  imageSrc,
  title,
  category,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Facility photo: ${title}`}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close image preview">
          <X size={24} />
        </button>

        <div className={styles.imageFrame}>
          {imageSrc ? (
            <img src={imageSrc} alt={title} />
          ) : (
            <div className={styles.placeholderBox}>
              <ImageIcon size={48} color="var(--color-teal)" />
              <strong style={{ fontSize: '1.25rem' }}>{title}</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-mint-soft)' }}>
                {category ? `Category: ${category} | ` : ''}[REAL CLINIC PHOTOGRAPHY PLACEHOLDER]
              </span>
            </div>
          )}
        </div>

        <div className={styles.caption}>
          {title} {category ? `— ${category}` : ''}
        </div>
      </div>
    </div>
  );
};
