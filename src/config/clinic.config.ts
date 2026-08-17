import type { ClinicConfig } from '../types/clinic';

/**
 * GARG DENTAL CLINIC & IMPLANT CENTRE
 * Centralized Configuration & Single Source of Truth
 */
export const CLINIC_CONFIG: ClinicConfig = {
  name: 'Garg Dental Clinic & Implant Centre',
  tagline: 'Specialized Dental Implants & Root Canal Treatment',
  
  location: {
    addressLine: 'The Mall Road',
    landmark: 'Adjacent to Bank of Baroda',
    city: 'Kapurthala',
    state: 'Punjab',
    country: 'India',
    googleMapsUrlPlaceholder: 'https://maps.google.com/?q=Garg+Dental+Clinic+Kapurthala',
  },
  
  contact: {
    phone: '+91 98724 85245',
    emailPlaceholder: '[CLINIC EMAIL]',
    whatsappPlaceholder: '+919872485245',
  },
  
  hours: [
    {
      days: 'Monday – Saturday',
      time: '9:00 AM – 7:00 PM',
      isOpen: true,
    },
    {
      days: 'Sunday',
      time: 'Closed',
      isOpen: false,
    },
  ],
  
  googleReview: {
    rating: 4.5,
    reviewCount: 120,
    source: 'Google Reviews',
  },
  
  doctorProfile: {
    name: 'Dr. Garg',
    qualification: 'BDS, MDS Specialist Practitioner',
    experienceYears: '15+ Years',
    registrationNumber: '[REGISTRATION NUMBER]',
    bio: 'Lead Dental Practitioner at Garg Dental Clinic & Implant Centre, specializing in advanced Dental Implants and Root Canal Treatment in Kapurthala.',
  },
  
  keyFocusAreas: [
    {
      id: 'dental-implants',
      title: 'Dental Implants',
      slug: '/treatments/dental-implants',
      shortDescription: 'Advanced tooth replacement solutions designed for anatomical stability, aesthetic integration, and long-term masticatory function.',
      isKeyFocus: true,
    },
    {
      id: 'root-canal',
      title: 'Root Canal Treatment',
      slug: '/treatments/root-canal-treatment',
      shortDescription: 'Precision endodontic therapy utilizing modern isolation and obturation techniques to preserve natural tooth structure.',
      isKeyFocus: true,
    },
    {
      id: 'general-dentistry',
      title: 'General Dentistry',
      slug: '/treatments/general-dentistry',
      shortDescription: 'Comprehensive oral healthcare, preventive checkups, scaling, and oral hygiene management for patients of all ages.',
      isKeyFocus: false,
    },
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      slug: '/treatments/cosmetic-dentistry',
      shortDescription: 'Aesthetic enhancement procedures focusing on tooth alignment, shade correction, and smile harmony.',
      isKeyFocus: false,
    },
    {
      id: 'restorative-dentistry',
      title: 'Restorative Dentistry',
      slug: '/treatments/restorative-dentistry',
      shortDescription: 'Structural repairs including crowns, bridges, and durable tooth-colored restorations.',
      isKeyFocus: false,
    },
  ],
  
  placeholders: {
    clinicPhotos: 'Real clinic photography available in gallery',
    verifiedReviews: 'Google Reviews verified',
    doctorPhotos: 'Dr. Garg Specialist Practitioner',
  },
};

// Streamlined Primary Navbar Routes (Essential 5 items)
export const SITE_ROUTES = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// All Available Navigation Routes
export const ALL_ROUTES = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const PRIMARY_CTA = {
  label: 'Book an Appointment',
  path: '/book-appointment',
};
