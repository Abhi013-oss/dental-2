import { CLINIC_CONFIG } from '../config/clinic.config';

export interface DoctorProfileData {
  id: string;
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  registrationNumber: string;
  experienceYears: string;
  portraitImagePlaceholder: string;
  heroHeadline: string;
  bioParagraphs: string[];
  qualificationsList: {
    title: string;
    detail: string;
  }[];
  areasOfPractice: {
    title: string;
    description: string;
    isKeyFocus: boolean;
  }[];
  careApproachPoints: {
    title: string;
    description: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const DOCTORS_DATA: Record<string, DoctorProfileData> = {
  'lead-specialist': {
    id: 'lead-specialist',
    slug: '/doctors/lead-specialist',
    name: CLINIC_CONFIG.doctorProfile.name,
    qualification: CLINIC_CONFIG.doctorProfile.qualification,
    specialization: 'Dental Implants & Endodontics',
    registrationNumber: CLINIC_CONFIG.doctorProfile.registrationNumber,
    experienceYears: CLINIC_CONFIG.doctorProfile.experienceYears,
    portraitImagePlaceholder: CLINIC_CONFIG.placeholders.doctorPhotos,
    heroHeadline: 'Dedicated Dental Care Driven by Precision & Patient Respect.',
    bioParagraphs: [
      'Dr. Garg, lead practitioner at Garg Dental Clinic & Implant Centre, brings dedicated focus to specialized dental implant surgery, endodontic (root canal) therapy, and restorative oral care in Kapurthala.',
      'We believe clinical excellence relies on combining thorough diagnostic evaluation with open, patient-first communication. Every treatment plan is tailored specifically to your oral health requirements, anatomical conditions, and personal comfort.',
      'Our practice prioritizes gentle tissue handling, modern infection control protocols, and clear explanations at every step of your clinical journey.',
    ],
    qualificationsList: [
      {
        title: 'Professional Degree',
        detail: CLINIC_CONFIG.doctorProfile.qualification,
      },
      {
        title: 'State Medical Registration',
        detail: CLINIC_CONFIG.doctorProfile.registrationNumber,
      },
      {
        title: 'Clinical Experience',
        detail: CLINIC_CONFIG.doctorProfile.experienceYears,
      },
      {
        title: 'Primary Clinical Focus',
        detail: 'Dental Implants & Root Canal Treatment',
      },
    ],
    areasOfPractice: [
      {
        title: 'Dental Implants',
        description:
          'Biocompatible tooth replacement solutions focused on anatomical stability, jawbone preservation, and natural restorative aesthetics.',
        isKeyFocus: true,
      },
      {
        title: 'Root Canal Treatment',
        description:
          'Precision endodontic therapy utilizing isolation and disinfection techniques to save compromised natural tooth structure.',
        isKeyFocus: true,
      },
      {
        title: 'Restorative & General Care',
        description:
          'Durable crowns, bridges, tooth-colored restorations, and routine oral hygiene evaluations for long-term health.',
        isKeyFocus: false,
      },
    ],
    careApproachPoints: [
      {
        title: 'Listening & Thorough Evaluation',
        description:
          'We take time during initial consultations to understand your symptoms, medical history, and personal treatment goals.',
      },
      {
        title: 'Transparent Communication',
        description:
          'Explaining clinical options, step-by-step procedures, and expected timelines in straightforward language before starting care.',
      },
      {
        title: 'Thoughtful Treatment Planning',
        description:
          'Formulating individualized care strategies that respect natural tooth preservation and structural longevity.',
      },
      {
        title: 'Continuous Care & Aftercare',
        description:
          'Providing post-procedural guidance and routine follow-up checkups to support healthy, long-term clinical outcomes.',
      },
    ],
    seoTitle: 'Dr. Garg | Dental Specialist Profile | Garg Dental Clinic Kapurthala',
    seoDescription:
      'Learn about Dr. Garg, lead dental practitioner at Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala. Specialized focus on Dental Implants and Root Canal Therapy.',
  },
};
