import React, { useState, useEffect } from 'react';
import { User, Phone, Mail, Calendar, Clock, CheckCircle2, ShieldAlert, Send } from 'lucide-react';
import styles from './AppointmentForm.module.css';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { Checkbox } from './Checkbox';
import { Button } from '../ui/Button';
import { CLINIC_CONFIG } from '../../config/clinic.config';
import type { AppointmentFormData, TreatmentReason } from '../../types/appointment.types';
import { submitAppointmentRequest } from '../../services/appointmentService';
import { trackEvent } from '../../analytics/analytics';

export interface AppointmentFormProps {
  initialReason?: TreatmentReason;
  onSuccess?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialReason = 'Dental Consultation',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '09:00 - 12:00',
    reason: initialReason,
    message: '',
    consent: false, // MUST BE UNCHECKED BY DEFAULT
    websiteHoneypot: '',
  });

  useEffect(() => {
    if (initialReason) {
      setFormData((prev) => ({ ...prev, reason: initialReason }));
    }
  }, [initialReason]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Get today's date in YYYY-MM-DD for min date attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const reasonOptions = [
    { label: 'Dental Consultation', value: 'Dental Consultation' },
    { label: 'Dental Implants', value: 'Dental Implants' },
    { label: 'Root Canal Treatment', value: 'Root Canal Treatment' },
    { label: 'Other', value: 'Other' },
  ];

  const timeOptions = [
    { label: 'Morning: 9:00 AM – 12:00 PM', value: '09:00 - 12:00' },
    { label: 'Afternoon: 12:00 PM – 4:00 PM', value: '12:00 - 16:00' },
    { label: 'Evening: 4:00 PM – 7:00 PM', value: '16:00 - 19:00' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerError(null);
    setIsSubmitting(true);

    try {
      const result = await submitAppointmentRequest(formData);
      setIsSubmitting(false);

      if (result.success) {
        setIsSubmittedSuccess(true);
        trackEvent('appointment_request_submit', { category: formData.reason });
        if (onSuccess) onSuccess();
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setServerError(result.message);
      }
    } catch (err) {
      setIsSubmitting(false);
      setServerError('We couldn\'t send your request right now. Please try again or contact the clinic directly.');
    }
  };

  const handleReset = () => {
    setIsSubmittedSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '09:00 - 12:00',
      reason: initialReason,
      message: '',
      consent: false,
      websiteHoneypot: '',
    });
  };

  if (isSubmittedSuccess) {
    return (
      <div className={styles.successCard} role="region" aria-label="Appointment Request Received">
        <div className={styles.successIcon}>
          <CheckCircle2 size={32} />
        </div>
        <h3 className={styles.successTitle}>Appointment Request Received</h3>
        <p className={styles.successDesc}>
          Thank you, <strong>{formData.fullName}</strong>. Your request has been received by Garg Dental Clinic & Implant Centre. Our receptionist will contact you at <strong>{formData.phone}</strong> to confirm availability and discuss your appointment details.
        </p>

        <div className={styles.successActions}>
          <Button variant="outline" size="md" onClick={handleReset}>
            Submit Another Request
          </Button>

          <Button
            variant="primary"
            size="md"
            icon={<Phone size={16} />}
            asAnchor
            href={`tel:${CLINIC_CONFIG.contact.phone}`}
          >
            Call Clinic ({CLINIC_CONFIG.contact.phone})
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>Request an Appointment</h3>
        <p className={styles.subtitle}>
          Send an appointment request and the clinic can contact you to discuss availability and the next steps.
        </p>
      </div>

      <div className={styles.privacyNote}>
        <strong>Privacy Note:</strong> Please avoid sharing sensitive medical information through this form. The clinic can discuss your concerns during your consultation.
      </div>

      {serverError && (
        <div className={styles.errorMessage} role="alert">
          <ShieldAlert size={18} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} />
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* HONEYPOT ANTI-SPAM FIELD */}
        <input
          type="text"
          name="websiteHoneypot"
          value={formData.websiteHoneypot}
          onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
          className={styles.honeypot}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* FULL NAME & PHONE */}
        <div className={styles.grid2}>
          <div>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              icon={<User size={18} />}
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            {errors.fullName && <div className={styles.fieldErrorText}>{errors.fullName}</div>}
          </div>

          <div>
            <Input
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              icon={<Phone size={18} />}
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            {errors.phone && <div className={styles.fieldErrorText}>{errors.phone}</div>}
          </div>
        </div>

        {/* EMAIL & REASON FOR VISIT */}
        <div className={styles.grid2}>
          <div>
            <Input
              label="Email Address (Optional)"
              type="email"
              placeholder="Enter your email address"
              icon={<Mail size={18} />}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <div className={styles.fieldErrorText}>{errors.email}</div>}
          </div>

          <div>
            <Select
              label="Reason for Visit"
              options={reasonOptions}
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value as TreatmentReason })}
            />
            {errors.reason && <div className={styles.fieldErrorText}>{errors.reason}</div>}
          </div>
        </div>

        {/* PREFERRED DATE & PREFERRED TIME */}
        <div className={styles.grid2}>
          <div>
            <Input
              label="Preferred Date"
              type="date"
              min={todayStr}
              icon={<Calendar size={18} />}
              required
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            />
            {errors.preferredDate && <div className={styles.fieldErrorText}>{errors.preferredDate}</div>}
          </div>

          <div>
            <Select
              label="Preferred Time Window"
              options={timeOptions}
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            />
            {errors.preferredTime && <div className={styles.fieldErrorText}>{errors.preferredTime}</div>}
          </div>
        </div>

        {/* MESSAGE / ADDITIONAL INFO */}
        <div className={styles.fullWidth}>
          <Textarea
            label="Additional Information (Optional)"
            placeholder="Is there anything you'd like the clinic to know before contacting you?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* CONSENT CHECKBOX */}
        <div className={styles.fullWidth}>
          <Checkbox
            label="I agree to be contacted by Garg Dental Clinic regarding my appointment request."
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          />
          {errors.consent && <div className={styles.fieldErrorText}>{errors.consent}</div>}
        </div>

        {/* SUBMIT BUTTON */}
        <div className={styles.submitBtn}>
          <Button
            variant="primary"
            size="lg"
            fullWidth
            type="submit"
            disabled={isSubmitting}
            icon={isSubmitting ? <Clock size={18} /> : <Send size={18} />}
          >
            {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
          </Button>
        </div>
      </form>
    </div>
  );
};
