import React from 'react';
import styles from './Badge.module.css';

export interface BadgeProps {
  variant?: 'mint' | 'teal' | 'gold' | 'navy' | 'outline';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'mint',
  icon,
  children,
  className = '',
  style,
}) => {
  const classNames = [styles.badge, styles[variant], className].filter(Boolean).join(' ');

  return (
    <span className={classNames} style={style}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
