import React from 'react';
import styles from './Button.module.css';
import { trackEvent } from '../../analytics/analytics';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  children,
  asAnchor = false,
  href,
  target,
  rel,
  className = '',
  onClick,
  style,
  ...props
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href) {
      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { label: href });
      } else if (href.includes('wa.me') || href.includes('whatsapp')) {
        trackEvent('whatsapp_click', { label: href });
      } else if (href.includes('maps') || href.includes('directions')) {
        trackEvent('directions_click', { label: href });
      } else if (href.includes('book-appointment')) {
        trackEvent('appointment_cta_click', { label: href });
      }
    }

    if (onClick) {
      (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)(e);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (asAnchor && href) {
    return (
      <a
        href={href}
        className={classNames}
        target={target}
        rel={rel}
        onClick={handleAnchorClick}
        style={style}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classNames} onClick={handleButtonClick} style={style} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
