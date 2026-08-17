import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import styles from './ResponsiveImage.module.css';

export interface ResponsiveImageProps {
  src?: string;
  alt: string;
  aspectRatio?: '4/3' | '16/9' | '1/1' | '3/4';
  objectFit?: 'cover' | 'contain';
  zoomOnHover?: boolean;
  caption?: string;
  placeholderText?: string;
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio = '4/3',
  objectFit = 'cover',
  zoomOnHover = false,
  caption,
  placeholderText = '[REAL CLINIC PHOTO PLACEHOLDER]',
  className = '',
}) => {
  const [hasError, setHasError] = useState(!src);

  const ratioClass =
    aspectRatio === '16/9'
      ? styles.ratio16_9
      : aspectRatio === '1/1'
      ? styles.ratio1_1
      : aspectRatio === '3/4'
      ? styles.ratio3_4
      : styles.ratio4_3;

  return (
    <figure style={{ margin: 0 }}>
      <div
        className={`${styles.container} ${ratioClass} ${zoomOnHover ? styles.zoomOnHover : ''} ${className}`}
      >
        {!hasError && src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`${styles.image} ${styles[objectFit]}`}
            onError={() => setHasError(true)}
          />
        ) : (
          <div className={styles.placeholderOverlay}>
            <div className={styles.placeholderIcon}>
              <ImageIcon size={24} />
            </div>
            <div className={styles.placeholderText}>{placeholderText}</div>
          </div>
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};
