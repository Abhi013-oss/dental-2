import React from 'react';
import styles from './Textarea.module.css';
import { FormLabel, FormHelper, FormError } from './FormLabel';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  error,
  required,
  id,
  className = '',
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={styles.wrapper}>
      {label && (
        <FormLabel htmlFor={textareaId} required={required}>
          {label}
        </FormLabel>
      )}

      <textarea
        id={textareaId}
        className={`${styles.textarea} ${error ? styles.textareaError : ''} ${className}`}
        {...props}
      />

      {error ? <FormError>{error}</FormError> : helperText ? <FormHelper>{helperText}</FormHelper> : null}
    </div>
  );
};
