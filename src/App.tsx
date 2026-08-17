import React, { useState, useEffect } from 'react';

import { MetaHead } from './seo/MetaHead';
import { StructuredData } from './seo/StructuredData';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { TrustStripSection } from './components/sections/TrustStripSection';
import { ClinicIntroSection } from './components/sections/ClinicIntroSection';
import { TreatmentsSection } from './components/sections/TreatmentsSection';
import { ImplantFeatureSection } from './components/sections/ImplantFeatureSection';
import { RootCanalFeatureSection } from './components/sections/RootCanalFeatureSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { DoctorSection } from './components/sections/DoctorSection';
import { ClinicExperienceSection } from './components/sections/ClinicExperienceSection';
import type { GalleryItem } from './components/sections/ClinicExperienceSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { FAQSection } from './components/sections/FAQSection';
import { AppointmentCTASection } from './components/sections/AppointmentCTASection';
import { LocationContactSection } from './components/sections/LocationContactSection';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';

import { AppointmentModal } from './components/ui/AppointmentModal';
import { GalleryLightboxModal } from './components/ui/GalleryLightboxModal';

import { TreatmentsOverviewPage } from './pages/TreatmentsOverviewPage';
import { TreatmentDetailPage } from './pages/TreatmentDetailPage';
import { AboutPage } from './pages/AboutPage';
import { DoctorsOverviewPage } from './pages/DoctorsOverviewPage';
import { DoctorDetailPage } from './pages/DoctorDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { TREATMENTS_DATA } from './data/treatments.data';
import { DOCTORS_DATA } from './data/doctors.data';
import type { TreatmentReason } from './types/appointment.types';
import { useScrollAnimation } from './utils/useScrollAnimation';

export const App: React.FC = () => {
  const [activePath, setActivePath] = useState(window.location.pathname || '/');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Initialize smooth scroll-reveal animations on route change / scroll
  useScrollAnimation(activePath);

  useEffect(() => {
    const handlePopState = () => {
      setActivePath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setActivePath(path);
    if (window.location.pathname !== path && !path.startsWith('#')) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedGalleryItem(null);
  };

  // Safe parsing of initial treatment reason from URL parameters
  const getInitialReasonFromQuery = (): TreatmentReason => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service === 'dental-implants') return 'Dental Implants';
    if (service === 'root-canal-treatment' || service === 'root-canal') return 'Root Canal Treatment';
    return 'Dental Consultation';
  };

  // Determine current view
  const isHome = activePath === '/';
  const isAbout = activePath === '/about';
  const isDoctorsOverview = activePath === '/doctors';
  const currentDoctor = Object.values(DOCTORS_DATA).find((d) => d.slug === activePath);
  const isTreatmentsOverview = activePath === '/treatments';
  const currentTreatment = Object.values(TREATMENTS_DATA).find((t) => t.slug === activePath);
  const isReviews = activePath === '/reviews';
  const isGallery = activePath === '/gallery';
  const isBeforeAfter = activePath === '/before-after';
  const isBookAppointment = activePath === '/book-appointment';
  const isContact = activePath === '/contact';

  const isKnownRoute =
    isHome ||
    isAbout ||
    isDoctorsOverview ||
    Boolean(currentDoctor) ||
    isTreatmentsOverview ||
    Boolean(currentTreatment) ||
    isReviews ||
    isGallery ||
    isBeforeAfter ||
    isBookAppointment ||
    isContact;

  // Dynamic SEO metadata
  let pageTitle = 'Garg Dental Clinic & Implant Centre | Dentist in Kapurthala';
  let pageDescription =
    'Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala. Specialized Dental Implants and Root Canal Treatment by experienced dental specialists. Rated 4.5/5 on Google Reviews.';

  if (isAbout) {
    pageTitle = 'About Garg Dental Clinic & Implant Centre | Kapurthala';
    pageDescription =
      'Learn about Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala. Patient-first care philosophy, clinical standards, and dental specialist information.';
  } else if (isDoctorsOverview) {
    pageTitle = 'Dental Doctors in Kapurthala | Garg Dental Clinic';
    pageDescription =
      'Meet the dental professionals behind Garg Dental Clinic & Implant Centre in Kapurthala. Specialized focus on Dental Implants and Root Canal Treatment.';
  } else if (currentDoctor) {
    pageTitle = currentDoctor.seoTitle;
    pageDescription = currentDoctor.seoDescription;
  } else if (isTreatmentsOverview) {
    pageTitle = 'Dental Treatments in Kapurthala | Garg Dental Clinic';
    pageDescription =
      'Explore dental treatments offered at Garg Dental Clinic & Implant Centre in Kapurthala. Learn about Dental Implants, Root Canal Treatment, and general oral care.';
  } else if (currentTreatment) {
    pageTitle = currentTreatment.seoTitle;
    pageDescription = currentTreatment.seoDescription;
  } else if (isReviews) {
    pageTitle = 'Garg Dental Clinic Reviews | Kapurthala';
    pageDescription =
      'Read verified patient experiences and Google review ratings for Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala.';
  } else if (isGallery) {
    pageTitle = 'Garg Dental Clinic Gallery | Kapurthala';
    pageDescription =
      'Take a look inside Garg Dental Clinic & Implant Centre in Kapurthala. View facility photography, treatment suites, and clinic environment.';
  } else if (isBeforeAfter) {
    pageTitle = 'Dental Treatment Before & After | Garg Dental Clinic';
    pageDescription =
      'Explore consented clinical case study examples for Dental Implants and Root Canal Therapy at Garg Dental Clinic in Kapurthala.';
  } else if (isBookAppointment) {
    pageTitle = 'Book a Dental Appointment in Kapurthala | Garg Dental Clinic';
    pageDescription =
      'Schedule a dental consultation or treatment appointment at Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala.';
  } else if (isContact) {
    pageTitle = 'Contact Garg Dental Clinic & Implant Centre | Kapurthala';
    pageDescription =
      'Contact information, phone numbers, clinic hours, and location directions for Garg Dental Clinic & Implant Centre in Kapurthala.';
  } else if (!isKnownRoute) {
    pageTitle = 'Page Not Found | Garg Dental Clinic';
    pageDescription = 'The requested page was not found on Garg Dental Clinic & Implant Centre.';
  }

  return (
    <>
      <MetaHead title={pageTitle} description={pageDescription} canonicalPath={activePath} />
      <StructuredData currentPath={activePath} />

      {/* 1. STICKY NAVBAR */}
      <Navbar
        activePath={activePath}
        onNavigate={handleNavigate}
        onBookClick={handleOpenBooking}
      />

      <main id="main-content">
        {isAbout ? (
          <AboutPage onBookClick={handleOpenBooking} onNavigate={handleNavigate} />
        ) : isDoctorsOverview ? (
          <DoctorsOverviewPage onBookClick={handleOpenBooking} onNavigate={handleNavigate} />
        ) : currentDoctor ? (
          <DoctorDetailPage
            doctor={currentDoctor}
            onBookClick={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        ) : isTreatmentsOverview ? (
          <TreatmentsOverviewPage onBookClick={handleOpenBooking} onNavigate={handleNavigate} />
        ) : currentTreatment ? (
          <TreatmentDetailPage
            treatment={currentTreatment}
            onBookClick={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        ) : isReviews ? (
          <ReviewsPage onBookClick={handleOpenBooking} />
        ) : isGallery ? (
          <GalleryPage onBookClick={handleOpenBooking} />
        ) : isBeforeAfter ? (
          <BeforeAfterPage onBookClick={handleOpenBooking} />
        ) : isBookAppointment ? (
          <BookAppointmentPage initialReason={getInitialReasonFromQuery()} />
        ) : isContact ? (
          <ContactPage />
        ) : !isKnownRoute ? (
          <NotFoundPage onNavigate={handleNavigate} />
        ) : (
          /* COMPLETE HOMEPAGE VIEW */
          <>
            {/* 2. HERO SECTION */}
            <HeroSection onBookClick={handleOpenBooking} />

            {/* 3. TRUST STRIP */}
            <TrustStripSection />

            {/* 4. CLINIC INTRODUCTION (#about) */}
            <ClinicIntroSection onLearnMoreClick={() => handleNavigate('/about')} />

            {/* 5. TREATMENTS SECTION (#treatments) */}
            <TreatmentsSection onNavigate={handleNavigate} />

            {/* 6. FEATURED DENTAL IMPLANTS SECTION (DEEP NAVY) */}
            <ImplantFeatureSection onBookConsultation={handleOpenBooking} />

            {/* 7. ROOT CANAL FEATURE SECTION (WARM WHITE) */}
            <RootCanalFeatureSection onBookClick={handleOpenBooking} />

            {/* 8. WHY CHOOSE US SECTION (SOFT MINT) */}
            <WhyChooseUsSection />

            {/* 9. DOCTOR SECTION (#doctors) */}
            <DoctorSection onBookConsultation={handleOpenBooking} onNavigate={handleNavigate} />

            {/* 10. CLINIC EXPERIENCE & GALLERY (#gallery) */}
            <ClinicExperienceSection onImageClick={handleOpenLightbox} />

            {/* 11. PATIENT REVIEWS (#reviews) */}
            <ReviewsSection onNavigate={handleNavigate} />

            {/* 12. BEFORE & AFTER SECTION */}
            <BeforeAfterSection onNavigate={handleNavigate} />

            {/* 13. FAQ SECTION */}
            <FAQSection />

            {/* 14. FINAL APPOINTMENT CTA (DEEP NAVY) */}
            <AppointmentCTASection variant="navy" onBookClick={handleOpenBooking} />

            {/* 15. LOCATION / CONTACT SECTION (#contact) */}
            <LocationContactSection />
          </>
        )}
      </main>

      {/* 16. FOOTER */}
      <Footer />

      {/* MOBILE QUICK ACTION BAR */}
      <MobileActionBar onBookClick={handleOpenBooking} />

      {/* INTERACTIVE APPOINTMENT MODAL */}
      <AppointmentModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* INTERACTIVE GALLERY LIGHTBOX MODAL */}
      <GalleryLightboxModal
        isOpen={Boolean(selectedGalleryItem)}
        title={selectedGalleryItem?.title || ''}
        category={selectedGalleryItem?.category}
        onClose={handleCloseLightbox}
      />
    </>
  );
};

export default App;
