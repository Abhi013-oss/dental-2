import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import styles from './ReviewCard.module.css';
import { Card } from '../ui/Card';

export interface ReviewCardProps {
  rating?: number;
  patientName: string;
  reviewText: string;
  treatmentName?: string;
  source?: string;
  date?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  rating = 5,
  patientName,
  reviewText,
  treatmentName,
  source = 'Verified Google Review',
  date = 'Recent Patient',
}) => {
  return (
    <Card hoverable className={styles.card}>
      <div>
        <div className={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={styles.star}
              fill={i < rating ? '#D99A32' : 'transparent'}
            />
          ))}
          {treatmentName && (
            <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-teal)' }}>
              {treatmentName}
            </span>
          )}
        </div>

        <p className={styles.quote}>"{reviewText}"</p>
      </div>

      <div className={styles.authorRow}>
        <div>
          <div className={styles.authorName}>{patientName}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{date}</div>
        </div>

        <div className={styles.sourceBadge}>
          <CheckCircle size={14} color="#2E8B70" />
          <span>{source}</span>
        </div>
      </div>
    </Card>
  );
};
