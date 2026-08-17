import React from 'react';
import styles from './Card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
  variant?: 'white' | 'mint' | 'navy';
  hasGoldAccentBorder?: boolean;
  radius?: 'md' | 'lg' | 'xl';
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  variant = 'white',
  hasGoldAccentBorder = false,
  radius = 'md',
  className = '',
  ...props
}) => {
  const classNames = [
    styles.card,
    hoverable ? styles.hoverable : '',
    variant === 'mint' ? styles.mintBg : '',
    variant === 'navy' ? styles.navyBg : '',
    hasGoldAccentBorder ? styles.goldAccentBorder : '',
    radius === 'lg' ? styles.lgRadius : radius === 'xl' ? styles.xlRadius : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
