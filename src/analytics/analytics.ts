/**
 * Privacy-Conscious Production Analytics System
 * Garg Dental Clinic & Implant Centre
 * 
 * IMPORTANT PRIVACY RULE:
 * Never transmit patient identity information (names, phone numbers, email addresses,
 * medical conditions, or message text) to analytics platforms.
 */

export type AnalyticsEventType =
  | 'page_view'
  | 'appointment_cta_click'
  | 'appointment_form_start'
  | 'appointment_request_submit'
  | 'phone_click'
  | 'whatsapp_click'
  | 'directions_click'
  | 'treatment_view'
  | 'doctor_profile_view'
  | 'review_view'
  | 'gallery_open';

export interface AnalyticsEventData {
  category?: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

export const trackEvent = (
  eventName: AnalyticsEventType,
  eventData?: AnalyticsEventData
): void => {
  // In production, this integrates with Google Analytics 4 (gtag) or privacy-friendly analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: eventData?.category || 'engagement',
      event_label: eventData?.label,
      value: eventData?.value,
      non_interaction: eventData?.nonInteraction || false,
    });
  }

  // Development console logging for verification
  if (import.meta.env.DEV) {
    console.log(`[Analytics Event] ${eventName}`, eventData || '');
  }
};

export const trackPageView = (path: string, title?: string): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', import.meta.env.VITE_ANALYTICS_ID || 'G-MEASUREMENT_ID', {
      page_path: path,
      page_title: title || document.title,
    });
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics PageView] ${path} - ${title || document.title}`);
  }
};
