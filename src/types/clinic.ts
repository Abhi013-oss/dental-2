/**
 * Garg Dental Clinic & Implant Centre - Data Types
 * Phase 0 Foundation Definitions
 */

export interface ClinicHours {
  days: string;
  time: string;
  isOpen: boolean;
}

export interface LocationInfo {
  addressLine: string;
  landmark: string;
  city: string;
  state: string;
  country: string;
  googleMapsUrlPlaceholder: string;
}

export interface ContactInfo {
  phone: string;
  emailPlaceholder: string;
  whatsappPlaceholder: string;
}

export interface GoogleReviewSummary {
  rating: number;
  reviewCount: number;
  source: string;
}

export interface DoctorProfilePlaceholder {
  name: string;
  qualification: string;
  experienceYears: string;
  registrationNumber: string;
  bio: string;
}

export interface TreatmentFocusItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  isKeyFocus: boolean;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  location: LocationInfo;
  contact: ContactInfo;
  hours: ClinicHours[];
  googleReview: GoogleReviewSummary;
  doctorProfile: DoctorProfilePlaceholder;
  keyFocusAreas: TreatmentFocusItem[];
  placeholders: {
    clinicPhotos: string;
    verifiedReviews: string;
    doctorPhotos: string;
  };
}
