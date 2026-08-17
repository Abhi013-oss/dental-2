export type AppointmentStatus =
  | 'pending'
  | 'contacted'
  | 'confirmed'
  | 'completed'
  | 'cancelled'
  | 'rejected';

export type TreatmentReason =
  | 'Dental Consultation'
  | 'Dental Implants'
  | 'Root Canal Treatment'
  | 'Other';

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  reason: TreatmentReason;
  message?: string;
  consent: boolean;
  websiteHoneypot?: string; // Anti-spam field
}

export interface AppointmentRequest extends AppointmentFormData {
  id: string;
  status: AppointmentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  appointment?: AppointmentRequest;
  errors?: Record<string, string>;
}
