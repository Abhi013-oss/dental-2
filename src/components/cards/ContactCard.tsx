import React from 'react';
import styles from './ContactCard.module.css';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  detail: string | React.ReactNode;
  actionLabel?: string;
  actionHref?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  detail,
  actionLabel,
  actionHref,
}) => {
  return (
    <Card hoverable className={styles.card}>
      <div>
        <div className={styles.iconBox}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.detail}>{detail}</div>
      </div>

      {actionLabel && actionHref && (
        <div className={styles.action}>
          <Button variant="outline" size="sm" fullWidth asAnchor href={actionHref}>
            {actionLabel}
          </Button>
        </div>
      )}
    </Card>
  );
};
