import React from 'react';
import { User } from 'lucide-react';
import styles from './DoctorCard.module.css';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../config/clinic.config';

export interface DoctorCardProps {
  name?: string;
  qualification?: string;
  experienceYears?: string;
  registrationNumber?: string;
  bio?: string;
  imageSrc?: string;
  profileSlug?: string;
  onNavigate?: (slug: string) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  name = CLINIC_CONFIG.doctorProfile.name,
  qualification = CLINIC_CONFIG.doctorProfile.qualification,
  experienceYears = CLINIC_CONFIG.doctorProfile.experienceYears,
  registrationNumber = CLINIC_CONFIG.doctorProfile.registrationNumber,
  bio = CLINIC_CONFIG.doctorProfile.bio,
  imageSrc,
  profileSlug = '/doctors/lead-specialist',
  onNavigate,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(profileSlug);
    }
  };

  return (
    <Card hoverable radius="lg">
      <div className={styles.imageContainer}>
        {imageSrc ? (
          <img src={imageSrc} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className={styles.placeholderOverlay}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'var(--color-mint)', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={22} />
            </div>
            <strong style={{ fontSize: '0.85rem' }}>{CLINIC_CONFIG.placeholders.doctorPhotos}</strong>
          </div>
        )}
      </div>

      <h3 className={styles.doctorName}>{name}</h3>
      <div className={styles.qualification}>{qualification}</div>

      <p className={styles.bio}>{bio}</p>

      <div className={styles.metaRow}>
        <span className={styles.metaBadge}>Exp: {experienceYears}</span>
        <span className={styles.metaBadge}>Reg No: {registrationNumber}</span>
      </div>

      <Button variant="outline" size="sm" fullWidth asAnchor href={profileSlug} onClick={handleClick}>
        View Full Doctor Profile
      </Button>
    </Card>
  );
};
