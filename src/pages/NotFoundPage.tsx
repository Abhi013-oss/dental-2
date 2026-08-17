import React from 'react';
import { Home, Phone, AlertCircle } from 'lucide-react';
import styles from './NotFoundPage.module.css';
import { Button } from '../components/ui/Button';
import { CLINIC_CONFIG } from '../config/clinic.config';

export interface NotFoundPageProps {
  onNavigate?: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/');
    }
  };

  return (
    <div className={styles.page} role="region" aria-label="Page Not Found">
      <div className={styles.content}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'var(--color-mint-soft)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <AlertCircle size={36} />
        </div>

        <div className={styles.errorCode}>404</div>
        <h1 className={styles.headline}>Page Not Found</h1>

        <p className={styles.description}>
          The page you are looking for may have moved, been renamed, or is currently unavailable. Please return to our homepage or contact the clinic directly.
        </p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            size="lg"
            icon={<Home size={18} />}
            asAnchor
            href="/"
            onClick={handleHomeClick}
          >
            Return to Homepage
          </Button>

          <Button
            variant="outline"
            size="lg"
            icon={<Phone size={18} />}
            asAnchor
            href={`tel:${CLINIC_CONFIG.contact.phone}`}
          >
            Call Clinic ({CLINIC_CONFIG.contact.phone})
          </Button>
        </div>
      </div>
    </div>
  );
};
