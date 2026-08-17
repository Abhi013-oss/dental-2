import type { AppointmentFormData, SubmissionResult, AppointmentRequest } from '../types/appointment.types';

export const validateAppointmentForm = (data: AppointmentFormData): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  // India-compatible phone validation (10 digits minimum)
  const cleanPhone = data.phone ? data.phone.replace(/[\s\-\+\(\)]/g, '') : '';
  if (!cleanPhone || cleanPhone.length < 10 || !/^\d+$/.test(cleanPhone)) {
    errors.phone = 'Please enter a valid phone number (min 10 digits).';
  }

  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
  }

  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred date.';
  } else {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.preferredDate = 'Preferred date cannot be in the past.';
    }
  }

  if (!data.preferredTime) {
    errors.preferredTime = 'Please select a preferred time.';
  }

  if (!data.reason) {
    errors.reason = 'Please select a reason for visit.';
  }

  if (!data.consent) {
    errors.consent = 'Please agree to be contacted regarding your appointment request.';
  }

  return errors;
};

export const submitAppointmentRequest = async (
  data: AppointmentFormData
): Promise<SubmissionResult> => {
  // Anti-spam honeypot verification
  if (data.websiteHoneypot && data.websiteHoneypot.trim().length > 0) {
    // Spam bot detected - return error without storing
    return {
      success: false,
      message: 'Invalid submission detected.',
    };
  }

  const validationErrors = validateAppointmentForm(data);
  if (Object.keys(validationErrors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the highlighted form errors.',
      errors: validationErrors,
    };
  }

  // Simulate API network request delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newRequest: AppointmentRequest = {
    ...data,
    id: `apt-${Date.now()}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return {
    success: true,
    message:
      'Thank you. Your appointment request has been received. The clinic will contact you to confirm availability and appointment details.',
    appointment: newRequest,
  };
};
