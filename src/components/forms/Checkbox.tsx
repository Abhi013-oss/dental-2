import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', ...props }) => {
  const checkboxId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <label className={`${styles.container} ${className}`}>
      <input type="checkbox" id={checkboxId} className={styles.checkbox} {...props} />
      <span className={styles.label}>{label}</span>
    </label>
  );
};
