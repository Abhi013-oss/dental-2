import React from 'react';
import { CLINIC_CONFIG } from '../config/clinic.config';

interface StructuredDataProps {
  currentPath?: string;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  currentPath = window.location.pathname || '/',
}) => {
  const siteUrl = 'https://gargdentalclinic.com';

  // 1. LocalBusiness / Dentist Schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
    'name': CLINIC_CONFIG.name,
    'description':
      'Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala. Specialized Dental Implants and Root Canal Treatment by experienced dental specialists.',
    'url': siteUrl,
    'telephone': CLINIC_CONFIG.contact.phone,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': `${CLINIC_CONFIG.location.addressLine}, ${CLINIC_CONFIG.location.landmark}`,
      'addressLocality': CLINIC_CONFIG.location.city,
      'addressRegion': CLINIC_CONFIG.location.state,
      'addressCountry': 'IN',
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': CLINIC_CONFIG.googleReview.rating,
      'reviewCount': CLINIC_CONFIG.googleReview.reviewCount,
      'bestRating': '5',
      'worstRating': '1',
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        'opens': '09:00',
        'closes': '19:00',
      },
    ],
    'medicalSpecialty': ['Dentistry', 'Endodontics'],
  };

  // 2. BreadcrumbList Schema
  const getBreadcrumbItems = () => {
    const items = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': siteUrl,
      },
    ];

    if (currentPath === '/about') {
      items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'About Us',
        'item': `${siteUrl}/about`,
      });
    } else if (currentPath === '/treatments') {
      items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'Treatments',
        'item': `${siteUrl}/treatments`,
      });
    } else if (currentPath === '/treatments/dental-implants') {
      items.push(
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Treatments',
          'item': `${siteUrl}/treatments`,
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Dental Implants',
          'item': `${siteUrl}/treatments/dental-implants`,
        }
      );
    } else if (currentPath === '/treatments/root-canal-treatment') {
      items.push(
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Treatments',
          'item': `${siteUrl}/treatments`,
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Root Canal Treatment',
          'item': `${siteUrl}/treatments/root-canal-treatment`,
        }
      );
    } else if (currentPath === '/doctors') {
      items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'Doctors',
        'item': `${siteUrl}/doctors`,
      });
    } else if (currentPath === '/reviews') {
      items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'Reviews',
        'item': `${siteUrl}/reviews`,
      });
    } else if (currentPath === '/gallery') {
      items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'Gallery',
        'item': `${siteUrl}/gallery`,
      });
    } else if (currentPath === '/contact') {
      items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'Contact Us',
        'item': `${siteUrl}/contact`,
      });
    } else if (currentPath === '/book-appointment') {
      items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': 'Book Appointment',
        'item': `${siteUrl}/book-appointment`,
      });
    }

    return items;
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': getBreadcrumbItems(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
