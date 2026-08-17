import React from 'react';
import styles from './Heading.module.css';

export interface HeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  level?: 1 | 2 | 3 | 4;
  showGoldLine?: boolean;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  level = 2,
  showGoldLine = false,
  className = '',
}) => {
  const wrapperClass = [styles.wrapper, styles[align], className].filter(Boolean).join(' ');

  const renderTitle = () => {
    switch (level) {
      case 1:
        return <h1 className={styles.title}>{title}</h1>;
      case 3:
        return <h3 className={styles.title}>{title}</h3>;
      case 4:
        return <h4 className={styles.title}>{title}</h4>;
      case 2:
      default:
        return <h2 className={styles.title}>{title}</h2>;
    }
  };

  return (
    <div className={wrapperClass}>
      {eyebrow && (
        <div className={styles.eyebrow}>
          {showGoldLine && <span className={styles.goldLine} />}
          <span>{eyebrow}</span>
        </div>
      )}
      {renderTitle()}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
