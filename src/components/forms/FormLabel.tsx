import React from 'react';

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
}

export const FormLabel: React.FC<FormLabelProps> = ({ children, required, className = '', ...props }) => (
  <label
    style={{
      display: 'block',
      fontFamily: 'var(--font-heading)',
      fontSize: '0.875rem',
      fontWeight: 700,
      color: 'var(--color-navy)',
      marginBottom: '0.35rem',
    }}
    className={className}
    {...props}
  >
    {children}
    {required && <span style={{ color: 'var(--color-error)', marginLeft: '0.25rem' }}>*</span>}
  </label>
);

export const FormHelper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ display: 'block', fontSize: '0.775rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
    {children}
  </span>
);

export const FormError: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ display: 'block', fontSize: '0.775rem', color: 'var(--color-error)', fontWeight: 600, marginTop: '0.25rem' }}>
    {children}
  </span>
);
