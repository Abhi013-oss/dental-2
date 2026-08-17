import React, { useEffect } from 'react';
import { CLINIC_CONFIG } from '../config/clinic.config';

interface MetaHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  canonicalPath = window.location.pathname || '/',
}) => {
  const siteBaseUrl = 'https://gargdentalclinic.com';
  const fullCanonicalUrl = `${siteBaseUrl}${canonicalPath}`;

  const pageTitle = title || `${CLINIC_CONFIG.name} | Dentist in Kapurthala`;
  const pageDescription =
    description ||
    `${CLINIC_CONFIG.name} located on ${CLINIC_CONFIG.location.addressLine}, ${CLINIC_CONFIG.location.city}. Rated ${CLINIC_CONFIG.googleReview.rating}/5 across ${CLINIC_CONFIG.googleReview.reviewCount} Google Reviews. Specializing in Dental Implants & Root Canal Treatment. Phone: ${CLINIC_CONFIG.contact.phone}.`;

  useEffect(() => {
    document.title = pageTitle;

    // Helper to set or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Standard Meta
    setMetaTag('meta[name="description"]', 'name', 'description', pageDescription);
    setLinkTag('canonical', fullCanonicalUrl);

    // Open Graph Social Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', pageDescription);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonicalUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', CLINIC_CONFIG.name);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    // Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', pageDescription);
  }, [pageTitle, pageDescription, fullCanonicalUrl]);

  return null;
};
