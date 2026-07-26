import React, { useState, useRef, useEffect } from 'react';
import styles from './CVAccordion.module.css';

export interface CVAccordionProps {
  id: string;
  roleTitle: string;
  company: string;
  period: string;
  description?: string;
  achievements?: string[];
  defaultOpen?: boolean;
}

export const CVAccordion: React.FC<CVAccordionProps> = ({
  id,
  roleTitle,
  company,
  period,
  description,
  achievements = [],
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const accordionRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isOpen && accordionRef.current) {
      // Esperar a que la transición CSS termine (300ms) para calcular la posición final de scroll
      // y respetar las preferencias del OS evitando behavior: 'smooth' forzado en JS.
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({ block: 'nearest' });
      }, 300);
    }
  }, [isOpen]);

  const parseBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  const headerId = `accordion-header-${id}`;
  const bodyId = `accordion-body-${id}`;

  return (
    <div className={styles.accordion} ref={accordionRef}>
      <button
        id={headerId}
        type="button"
        className={styles.accordionHeader}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={bodyId}
      >
        <div className={styles.headerInfo}>
          <h3 className={styles.roleTitle}>{roleTitle}</h3>
          <div className={styles.companyMeta}>
            <span className={styles.companyName}>{company}</span>
            <span className={styles.bulletSeparator} aria-hidden="true">
              •
            </span>
            <span className={styles.period}>{period}</span>
          </div>
        </div>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        id={bodyId}
        className={`${styles.accordionBody} ${isOpen ? styles.accordionBodyOpen : ''}`}
        role="region"
        aria-labelledby={headerId}
      >
        <div className={styles.accordionInner}>
          <div className={styles.content}>
            {description && <p className={styles.description}>{description}</p>}
            {achievements.length > 0 && (
              <ul className={styles.achievementsList}>
                {achievements.map((item, index) => (
                  <li key={index} className={styles.achievementItem}>
                    {parseBoldText(item)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVAccordion;
