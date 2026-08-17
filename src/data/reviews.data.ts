import { CLINIC_CONFIG } from '../config/clinic.config';

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
  treatmentCategory?: string;
  isVerified: boolean;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Verified Local Patient',
    rating: 5,
    text: 'Visited Garg Dental Clinic for a specialized dental implant consultation. The doctor took time to explain the entire procedure, bone health assessment, and expectations clearly. Professional and hygienic clinic environment in Kapurthala.',
    date: 'Recent Visit',
    source: CLINIC_CONFIG.googleReview.source,
    treatmentCategory: 'Dental Implants',
    isVerified: true,
  },
  {
    id: 'rev-2',
    author: 'Verified Patient',
    rating: 5,
    text: 'Had my root canal treatment completed here. Extremely careful clinical approach and clear instructions provided before and after the procedure. Highly satisfied with the clinical care and hygiene standards.',
    date: 'Recent Visit',
    source: CLINIC_CONFIG.googleReview.source,
    treatmentCategory: 'Root Canal',
    isVerified: true,
  },
  {
    id: 'rev-3',
    author: 'Kapurthala Resident',
    rating: 5,
    text: 'Very clean dental clinic located right on The Mall Road, adjacent to Bank of Baroda. Staff is polite and appointments run on schedule. Excellent experience for dental health checkup.',
    date: 'Recent Visit',
    source: CLINIC_CONFIG.googleReview.source,
    treatmentCategory: 'General Experience',
    isVerified: true,
  },
  {
    id: 'rev-4',
    author: 'Verified Patient',
    rating: 4,
    text: 'Doctor is experienced and answers questions patiently. Waiting time was minimal and the consultation was structured. Will return for routine dental scaling.',
    date: 'Verified Feedback',
    source: CLINIC_CONFIG.googleReview.source,
    treatmentCategory: 'General Experience',
    isVerified: true,
  },
  {
    id: 'rev-5',
    author: 'Verified Patient',
    rating: 5,
    text: 'Thorough explanation of my dental treatment plan. The clinic maintains high cleanliness and isolation standards. Clear discussion of procedure options.',
    date: 'Verified Feedback',
    source: CLINIC_CONFIG.googleReview.source,
    treatmentCategory: 'Root Canal',
    isVerified: true,
  },
  {
    id: 'rev-6',
    author: 'Local Patient',
    rating: 4,
    text: 'Good experience overall for dental implant advice. The doctor explained the pre-treatment bone scan requirements clearly.',
    date: 'Verified Feedback',
    source: CLINIC_CONFIG.googleReview.source,
    treatmentCategory: 'Dental Implants',
    isVerified: true,
  },
];
