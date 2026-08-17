import { useEffect } from 'react';

/**
 * Lightweight, Performant IntersectionObserver Scroll Reveal Hook
 * Automatically attaches to elements marked with .fade-up, .fade-in, .zoom-in, .slide-left, .slide-right
 */
export const useScrollAnimation = (activePath?: string) => {
  useEffect(() => {
    // Check if prefers-reduced-motion is active
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Reveal all animated elements immediately without motion
      document.querySelectorAll('.fade-up, .fade-in, .zoom-in, .slide-left, .slide-right').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animated, unobserve for performance
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Select all animatable targets
    const animatedElements = document.querySelectorAll(
      '.fade-up, .fade-in, .zoom-in, .slide-left, .slide-right'
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [activePath]);
};
