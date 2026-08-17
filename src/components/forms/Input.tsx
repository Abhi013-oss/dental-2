import React from 'react';
import styles from './Input.module.css';
import { FormLabel, FormHelper, FormError } from './FormLabel';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  icon?: React.ReactNode;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  icon,
  required,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={styles.wrapper}>
      {label && (
        <FormLabel htmlFor={inputId} required={required}>
          {label}
        </FormLabel>
      )}

      <div className={styles.inputContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <input
          id={inputId}
          className={`${styles.input} ${icon ? styles.inputWithIcon : ''} ${error ? styles.inputError : ''} ${className}`}
          {...props}
        />
      </div>

      {error ? <FormError>{error}</FormError> : helperText ? <FormHelper>{helperText}</FormHelper> : null}
    </div>
  );
};
