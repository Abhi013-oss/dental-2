import React from 'react';
import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import styles from './ReviewsSection.module.css';
import { SectionHeader } from './SectionHeader';
import { ReviewCard } from '../cards/ReviewCard';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export interface ReviewsSectionProps {
  onNavigate?: (path: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onNavigate }) => {
  const reviews = [
    {
      patientName: 'Verified Local Patient',
      reviewText:
        'Visited Garg Dental Clinic for dental implant consultation. The doctor took time to explain the entire procedure, bone health, and expectations clearly. Professional and hygienic clinic in Kapurthala.',
      treatmentName: 'Dental Implants',
      date: 'Recent Patient',
    },
    {
      patientName: 'Verified Patient',
      reviewText:
        'Had my root canal treatment done here. Extremely careful approach and clear instructions given before and after treatment. Highly satisfied with the clinical care.',
      treatmentName: 'Root Canal Treatment',
      date: 'Recent Patient',
    },
    {
      patientName: 'Kapurthala Resident',
      reviewText:
        'Very clean clinic right on The Mall Road. Staff is courteous and appointments run on schedule. Excellent experience for dental health checkup.',
      treatmentName: 'General Consultation',
      date: 'Recent Patient',
    },
  ];

  const handleReadAllReviews = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('/reviews');
    }
  };

  return (
    <section id="reviews" className={styles.section} aria-label="Patient Reviews and Testimonials">
      <div className="container">
        <SectionHeader
          eyebrow="PATIENT FEEDBACK"
          title="What Our Patients Say About Garg Dental Clinic."
          subtitle="Genuine patient feedback reflecting our commitment to professional care, clinical hygiene, and transparent communication."
          showGoldLine
        />

        <div className={styles.grid}>
          {/* LEFT: RATING SUMMARY CARD */}
          <div className={styles.summaryCard}>
            <div className={styles.ratingScore}>{CLINIC_CONFIG.googleReview.rating}</div>

            <div className={styles.starRow} aria-label={`${CLINIC_CONFIG.googleReview.rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={styles.star}
                  fill={i < Math.floor(CLINIC_CONFIG.googleReview.rating) ? 'currentColor' : 'none'}
                />
              ))}
            </div>

            <div className={styles.reviewCountText}>
              {CLINIC_CONFIG.googleReview.reviewCount} Google Reviews
            </div>
            <div className={styles.sourceLabel}>Verified Public Patient Rating</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', marginTop: 'auto' }}>
              <Button
                variant="outline"
                size="sm"
                icon={<ExternalLink size={14} />}
                asAnchor
                href={CLINIC_CONFIG.location.googleMapsUrlPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Google Reviews
              </Button>

              <Button
                variant="primary"
                size="sm"
                icon={<ArrowRight size={14} />}
                asAnchor
                href="/reviews"
                onClick={handleReadAllReviews}
              >
                Read All Reviews
              </Button>
            </div>
          </div>

          {/* RIGHT: REVIEWS LIST */}
          <div className={styles.reviewsGrid}>
            {reviews.map((rev, idx) => (
              <ReviewCard
                key={idx}
                patientName={rev.patientName}
                reviewText={rev.reviewText}
                treatmentName={rev.treatmentName}
                date={rev.date}
                source="Verified Google Review"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
