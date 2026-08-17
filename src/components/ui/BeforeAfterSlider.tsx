import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import styles from './BeforeAfterSlider.module.css';

export interface BeforeAfterSliderProps {
  beforeImagePlaceholder?: string;
  afterImagePlaceholder?: string;
  beforeSrc?: string;
  afterSrc?: string;
  category?: string;
  disclaimer?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImagePlaceholder = '[BEFORE CLINICAL RESULT PLACEHOLDER]',
  afterImagePlaceholder = '[AFTER CLINICAL RESULT PLACEHOLDER]',
  beforeSrc,
  afterSrc,
  category,
  disclaimer = 'Individual clinical results may vary depending on patient anatomy and treatment plan.',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        className={`${styles.container} ${className}`}
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onMouseLeave={() => (isDragging.current = false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and After clinical comparison slider"
      >
        {/* AFTER LAYER (FULL BACKGROUND) */}
        <div className={styles.afterLayer}>
          {afterSrc ? (
            <img src={afterSrc} alt="After treatment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <div className={`${styles.placeholderBox} ${styles.afterBg}`}>
              <strong>{afterImagePlaceholder}</strong>
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Restored Dental Alignment & Anatomy</span>
            </div>
          )}
          <span className={`${styles.label} ${styles.afterLabel}`}>After</span>
        </div>

        {/* BEFORE LAYER (CLIPPED) */}
        <div className={styles.beforeLayer} style={{ width: `${sliderPosition}%` }}>
          <div style={{ width: containerRef.current?.offsetWidth || '100%', height: '100%', position: 'relative' }}>
            {beforeSrc ? (
              <img src={beforeSrc} alt="Before treatment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div className={`${styles.placeholderBox} ${styles.beforeBg}`}>
                <strong>{beforeImagePlaceholder}</strong>
                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>{category || 'Initial Clinical Presentation'}</span>
              </div>
            )}
            <span className={`${styles.label} ${styles.beforeLabel}`}>Before</span>
          </div>
        </div>

        {/* DRAGGABLE HANDLE */}
        <div className={styles.sliderHandle} style={{ left: `${sliderPosition}%` }}>
          <div className={styles.handleCircle}>
            <SlidersHorizontal size={18} />
          </div>
        </div>
      </div>

      <p className={styles.disclaimer}>{disclaimer}</p>
    </div>
  );
};
