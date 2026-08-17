import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  showHomeIcon = true,
  className = '',
}) => {
  return (
    <nav className={`${styles.nav} ${className}`} aria-label="Breadcrumb navigation">
      <ol className={styles.list}>
        {showHomeIcon && (
          <li className={styles.item}>
            <a href="/" className={styles.link} title="Home">
              <Home size={14} style={{ display: 'block' }} />
            </a>
            <ChevronRight size={12} className={styles.separator} />
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className={styles.item}>
              {!isLast && item.href ? (
                <>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                  <ChevronRight size={12} className={styles.separator} />
                </>
              ) : (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
