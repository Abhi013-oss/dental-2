# Garg Dental Clinic — Content Update Guide

This guide explains how a developer or clinic administrator can update clinic information, doctor profiles, treatments, reviews, photography, and opening hours without modifying core application code.

---

## 1. Central Clinic Information (`src/config/clinic.config.ts`)

To update phone numbers, address, rating, or opening hours, edit `src/config/clinic.config.ts`:

```typescript
export const CLINIC_CONFIG = {
  name: 'Garg Dental Clinic & Implant Centre',
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
  },
  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 7:00 PM', isOpen: true },
    { days: 'Sunday', time: 'Closed', isOpen: false },
  ],
  googleReview: {
    rating: 4.5,
    reviewCount: 120,
    source: 'Google Reviews',
  },
};
```

---

## 2. Doctor Profiles & Credentials (`src/data/doctors.data.ts`)

Doctor credentials, bio paragraphs, and qualifications are managed in `src/data/doctors.data.ts`. Replace placeholder brackets (`[DOCTOR NAME]`, `[REGISTRATION NUMBER]`) with verified doctor records:

```typescript
export const DOCTORS_DATA: Record<string, DoctorProfileData> = {
  'lead-specialist': {
    name: 'Dr. Garg', // Replace with verified doctor full name
    qualification: 'BDS, MDS (Endodontics & Implantology)',
    registrationNumber: 'Reg. No. 12345/PB',
    experienceYears: '15+ Years',
    // ...
  }
};
```

---

## 3. Patient Reviews (`src/data/reviews.data.ts`)

Add or update public Google Reviews in `src/data/reviews.data.ts`:

```typescript
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Verified Local Patient',
    rating: 5,
    text: 'Review text excerpt...',
    date: 'Recent Visit',
    source: 'Google Reviews',
    treatmentCategory: 'Dental Implants',
    isVerified: true,
  },
];
```

---

## 4. Clinic Photography (`src/data/gallery.data.ts`)

Add real clinic interior/exterior photography items to `src/data/gallery.data.ts`:

```typescript
export const GALLERY_DATA: GalleryItemData[] = [
  {
    id: 'reception-suite',
    title: 'Reception & Patient Lounge',
    category: 'Clinic Environment',
    imageSrc: '/images/clinic/reception.jpg', // Path to real photography
  },
];
```

---

## 5. Clinical Before & After Cases (`src/data/cases.data.ts`)

Clinical outcome case studies are stored in `src/data/cases.data.ts`. Only cases marked with `consentConfirmed: true` will be rendered publicly:

```typescript
export const CASES_DATA: ClinicalCaseItem[] = [
  {
    id: 'case-001',
    caseNumber: 'Case Study #001',
    title: 'Dental Implant Replacement',
    consentConfirmed: true, // MUST BE TRUE FOR PUBLIC DISPLAY
    // ...
  },
];
```
