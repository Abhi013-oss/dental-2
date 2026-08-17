import React from 'react';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  showGoldLine?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  showGoldLine = false,
  className = '',
}) => {
  const wrapperClass = [styles.header, styles[align], 'fade-up', className].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      {eyebrow && (
        <div className={styles.eyebrow}>
          {showGoldLine && <span className={styles.goldLine} />}
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
