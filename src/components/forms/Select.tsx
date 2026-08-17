import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Select.module.css';
import { FormLabel, FormHelper, FormError } from './FormLabel';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
  required?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  helperText,
  error,
  required,
  id,
  className = '',
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={styles.wrapper}>
      {label && (
        <FormLabel htmlFor={selectId} required={required}>
          {label}
        </FormLabel>
      )}

      <div className={styles.selectContainer}>
        <select
          id={selectId}
          className={`${styles.select} ${error ? styles.selectError : ''} ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={18} className={styles.chevron} />
      </div>

      {error ? <FormError>{error}</FormError> : helperText ? <FormHelper>{helperText}</FormHelper> : null}
    </div>
  );
};
