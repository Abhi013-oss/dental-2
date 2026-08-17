import type { LightboxImageItem } from '../components/ui/EnhancedLightboxModal';

export interface GalleryItemData extends LightboxImageItem {
  layoutClass?: 'large' | 'wide' | 'standard';
  description?: string;
  isFeatured?: boolean;
}

export const GALLERY_DATA: GalleryItemData[] = [
  {
    id: 'main-operatory-suite',
    title: 'Main Treatment Suite & Operatory',
    category: 'Treatment Suite',
    layoutClass: 'large',
    isFeatured: true,
    imageSrc: '/images/gallery/clinic_operatory.jpg',
    description: 'Spacious, modern treatment operatory equipped with dental chairs, digital radiograph monitors, and sterilization workflow at Garg Dental Clinic.',
  },
  {
    id: 'reception-suite',
    title: 'Reception & Patient Lounge',
    category: 'Clinic Environment',
    layoutClass: 'standard',
    isFeatured: true,
    description: 'Clean, comfortable patient waiting environment on The Mall Road, Kapurthala.',
  },
  {
    id: 'consultation-room',
    title: 'Private Consultation Room',
    category: 'Consultation Space',
    layoutClass: 'standard',
    isFeatured: true,
    description: 'Dedicated room for digital radiograph inspection and pre-treatment consultation.',
  },
  {
    id: 'exterior-facade',
    title: 'Clinic Exterior — The Mall Road',
    category: 'Exterior',
    layoutClass: 'wide',
    isFeatured: true,
    description: 'Centrally located on The Mall Road, adjacent to Bank of Baroda in Kapurthala.',
  },
  {
    id: 'sterilization-unit',
    title: 'Sterilization & Hygiene Area',
    category: 'Sterilization & Hygiene',
    layoutClass: 'standard',
    isFeatured: true,
    description: 'Sterilization suite following strict infection control and instrument packaging protocols.',
  },
  {
    id: 'clinical-desk',
    title: 'Clinical Support Desk',
    category: 'Clinic Environment',
    layoutClass: 'standard',
    isFeatured: false,
    description: 'Patient reception and appointment coordination desk.',
  },
];
