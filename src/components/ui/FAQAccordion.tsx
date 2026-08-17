import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQAccordion.module.css';

export interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
          >
            <button
              className={styles.trigger}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
              id={`faq-header-${item.id}`}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`}
              />
            </button>

            {isOpen && (
              <div
                id={`faq-content-${item.id}`}
                className={styles.content}
                role="region"
                aria-labelledby={`faq-header-${item.id}`}
              >
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
