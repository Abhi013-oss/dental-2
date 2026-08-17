import React, { useState, useMemo } from 'react';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import styles from './ReviewsPage.module.css';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { SectionHeader } from '../components/sections/SectionHeader';
import { ReviewCard } from '../components/cards/ReviewCard';
import { Button } from '../components/ui/Button';
import { AppointmentCTASection } from '../components/sections/AppointmentCTASection';
import { REVIEWS_DATA } from '../data/reviews.data';
import { CLINIC_CONFIG } from '../config/clinic.config';

export interface ReviewsPageProps {
  onBookClick?: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onBookClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'highest' | 'newest'>('highest');

  const categories = ['All', 'Dental Implants', 'Root Canal', 'General Experience'];

  const filteredReviews = useMemo(() => {
    let result = [...REVIEWS_DATA];

    if (selectedCategory !== 'All') {
      result = result.filter((r) => r.treatmentCategory === selectedCategory);
    }

    if (sortBy === 'highest') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero} aria-label="Patient Reviews Hero">
        <div className="container">
          <div className={styles.breadcrumbWrapper}>
            <Breadcrumb items={[{ label: 'Reviews', href: '/reviews' }]} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <MessageSquare size={16} />
              <span>PATIENT EXPERIENCES</span>
            </div>

            <h1 className={styles.headline}>
              Real Experiences From Our Patients.
            </h1>

            <p className={styles.description}>
              Read feedback shared by patients and learn more about their experiences visiting Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS SUMMARY & GRID */}
      <section className={styles.sectionWhite} aria-label="Google Rating Summary & Review Grid">
        <div className="container">
          {/* SUMMARY BANNER */}
          <div className={styles.summaryGrid}>
            <div className={styles.summaryLeft}>
              <div className={styles.ratingScore}>{CLINIC_CONFIG.googleReview.rating}</div>

              <div className={styles.starRow} aria-label={`${CLINIC_CONFIG.googleReview.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    fill={i < Math.floor(CLINIC_CONFIG.googleReview.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              <div className={styles.reviewMeta}>
                {CLINIC_CONFIG.googleReview.reviewCount} Verified Google Reviews
              </div>
              <div className={styles.reviewSub}>Public Rating from Verified Clinic Listing</div>

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
            </div>

            <div className={styles.summaryRight}>
              <p style={{ margin: 0 }}>
                "Patient feedback provides valuable insight into the experience of receiving dental care at our clinic. We appreciate all patient reviews as they help us maintain high standards of clinical hygiene, clear communication, and personalized care. Individual experiences may vary depending on clinical requirements."
              </p>
            </div>
          </div>

          <SectionHeader
            eyebrow="PATIENT FEEDBACK"
            title="Public Patient Reviews"
            showGoldLine
          />

          {/* FILTER & SORT CONTROLS */}
          <div className={styles.filterControls}>
            <div className={styles.filterTabs}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.tabBtn} ${selectedCategory === cat ? styles.activeTab : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.sortGroup}>
              <label htmlFor="sort-reviews">Sort by:</label>
              <select
                id="sort-reviews"
                className={styles.sortSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'highest' | 'newest')}
              >
                <option value="highest">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* REVIEWS GRID */}
          <div className={styles.reviewsGrid}>
            {filteredReviews.map((rev) => (
              <ReviewCard
                key={rev.id}
                patientName={rev.author}
                rating={rev.rating}
                reviewText={rev.text}
                treatmentName={rev.treatmentCategory}
                date={rev.date}
                source={rev.source}
              />
            ))}
          </div>

          <div className={styles.disclaimerText}>
            * Reviews displayed above reflect individual patient experiences shared on public review listings.
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <AppointmentCTASection
        variant="navy"
        title="Have Questions About Your Dental Care?"
        subtitle="Speak with our clinical team to discuss your concerns and arrange a clinical consultation at Garg Dental Clinic."
        onBookClick={onBookClick}
      />
    </>
  );
};
