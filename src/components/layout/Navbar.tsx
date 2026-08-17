import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import styles from './Navbar.module.css';
import { CLINIC_CONFIG, SITE_ROUTES, ALL_ROUTES, PRIMARY_CTA } from '../../config/clinic.config';
import { Button } from '../ui/Button';

interface NavbarProps {
  activePath?: string;
  onNavigate?: (path: string) => void;
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePath = '/',
  onNavigate,
  onBookClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(activePath);

  useEffect(() => {
    setCurrentPath(activePath);
  }, [activePath]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPath(path);
    if (onNavigate) {
      onNavigate(path);
    }

    if (path === PRIMARY_CTA.path || path === '/book-appointment') {
      if (onBookClick) {
        onBookClick();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }

    // Scroll to top for page transitions
    if (
      path.startsWith('/treatments') ||
      path === '/about' ||
      path.startsWith('/doctors') ||
      path === '/reviews' ||
      path === '/gallery' ||
      path === '/before-after' ||
      path === '/contact' ||
      path === '/'
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* LEFT: CLINIC LOGO / WORDMARK */}
        <a
          href="/"
          className={styles.brand}
          onClick={(e) => handleLinkClick('/', e)}
          aria-label="Garg Dental Clinic & Implant Centre Home"
        >
          <div className={styles.logoBadge} aria-hidden="true">
            <span className={styles.logoInitial}>G</span>
            <span className={styles.logoDot} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.clinicName}>GARG</span>
            <span className={styles.clinicSub}>Dental Clinic & Implant Centre</span>
          </div>
        </a>

        {/* CENTER: STREAMLINED DESKTOP NAVIGATION */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {SITE_ROUTES.map((route) => {
            const isActive =
              currentPath === route.path ||
              (route.path === '/treatments' && currentPath.startsWith('/treatments'));

            return (
              <a
                key={route.path}
                href={route.path}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={(e) => handleLinkClick(route.path, e)}
                aria-current={isActive ? 'page' : undefined}
              >
                {route.label}
                {isActive && <span className={styles.activeIndicator} aria-hidden="true" />}
              </a>
            );
          })}
        </nav>

        {/* RIGHT: DESKTOP PRIMARY CTA */}
        <div className={styles.desktopActions}>
          <a
            href={`tel:${CLINIC_CONFIG.contact.phone}`}
            className={styles.phoneLink}
            title={`Call Garg Dental Clinic: ${CLINIC_CONFIG.contact.phone}`}
          >
            <Button variant="ghost" size="sm" icon={<Phone size={15} />}>
              {CLINIC_CONFIG.contact.phone}
            </Button>
          </a>
          <Button
            variant="primary"
            size="md"
            icon={<Calendar size={16} />}
            asAnchor
            href={PRIMARY_CTA.path}
            onClick={(e) => handleLinkClick(PRIMARY_CTA.path, e)}
          >
            {PRIMARY_CTA.label}
          </Button>
        </div>

        {/* MOBILE HEADER CONTROLS */}
        <div className={styles.mobileControls}>
          <a
            href={`tel:${CLINIC_CONFIG.contact.phone}`}
            className={styles.mobilePhoneBtn}
            aria-label="Call Clinic"
          >
            <Phone size={18} />
          </a>
          <Button
            variant="primary"
            size="sm"
            asAnchor
            href={PRIMARY_CTA.path}
            onClick={(e) => handleLinkClick(PRIMARY_CTA.path, e)}
          >
            Book
          </Button>
          <button
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer} role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          <div className={styles.mobileDrawerContent}>
            <div className={styles.mobileNavList}>
              {ALL_ROUTES.map((route) => {
                const isActive =
                  currentPath === route.path ||
                  (route.path === '/treatments' && currentPath.startsWith('/treatments')) ||
                  (route.path === '/doctors' && currentPath.startsWith('/doctors'));

                return (
                  <a
                    key={route.path}
                    href={route.path}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ''}`}
                    onClick={(e) => handleLinkClick(route.path, e)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{route.label}</span>
                    {isActive && <span className={styles.mobileActiveDot} aria-hidden="true" />}
                  </a>
                );
              })}
            </div>

            <div className={styles.mobileActionsArea}>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={<Calendar size={18} />}
                asAnchor
                href={PRIMARY_CTA.path}
                onClick={(e) => handleLinkClick(PRIMARY_CTA.path, e)}
              >
                {PRIMARY_CTA.label}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                fullWidth
                icon={<Phone size={18} />}
                asAnchor
                href={`tel:${CLINIC_CONFIG.contact.phone}`}
              >
                Call the Clinic ({CLINIC_CONFIG.contact.phone})
              </Button>

              <div className={styles.mobileLocationMeta}>
                <span>{CLINIC_CONFIG.location.addressLine}, {CLINIC_CONFIG.location.city}</span>
                <span>Mon–Sat: 9:00 AM–7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
