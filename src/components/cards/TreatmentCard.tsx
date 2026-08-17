import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import styles from './TreatmentCard.module.css';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export interface TreatmentCardProps {
  title: string;
  shortDescription: string;
  slug: string;
  icon?: React.ReactNode;
  isKeyFocus?: boolean;
  onNavigate?: (slug: string) => void;
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  title,
  shortDescription,
  slug,
  icon,
  isKeyFocus = false,
  onNavigate,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(slug);
    }
  };

  return (
    <Card hoverable hasGoldAccentBorder={isKeyFocus} className={styles.card}>
      <div>
        {isKeyFocus && (
          <Badge variant="teal" style={{ marginBottom: '1rem' }}>
            Primary Focus Area
          </Badge>
        )}
        <div className={styles.iconWrapper}>
          {icon || <Activity size={24} />}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{shortDescription}</p>
      </div>

      <a href={slug} className={styles.link} onClick={handleClick}>
        <span>Explore Treatment</span>
        <ArrowRight size={16} className={styles.arrow} />
      </a>
    </Card>
  );
};
