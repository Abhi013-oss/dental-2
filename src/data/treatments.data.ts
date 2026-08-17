export interface TreatmentProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface TreatmentData {
  id: string;
  name: string;
  eyebrow: string;
  slug: string;
  shortDescription: string;
  isConfirmed: boolean;
  isKeyFocus: boolean;
  heroHeadline: string;
  heroDescription: string;
  heroImagePlaceholder: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  whoMayConsiderHeading: string;
  whoMayConsiderIntro: string;
  whoMayConsiderPoints: string[];
  whoMayConsiderDisclaimer: string;
  processHeading: string;
  processIntro: string;
  processSteps: TreatmentProcessStep[];
  processDisclaimer: string;
  expectationsHeading: string;
  expectationsPoints: string[];
  benefitsHeading: string;
  benefitsPoints: string[];
  benefitsDisclaimer: string;
  aftercareHeading: string;
  aftercarePoints: string[];
  aftercareDisclaimer: string;
  faqs: TreatmentFAQ[];
  ctaHeadline: string;
  ctaDescription: string;
  ctaPrimaryText: string;
  relatedTreatmentIds: string[];
  seoTitle: string;
  seoDescription: string;
}

export const TREATMENTS_DATA: Record<string, TreatmentData> = {
  'dental-implants': {
    id: 'dental-implants',
    name: 'Dental Implants',
    eyebrow: 'DENTAL IMPLANTS',
    slug: '/treatments/dental-implants',
    shortDescription:
      'Advanced tooth replacement solutions designed for anatomical stability, aesthetic integration, and long-term masticatory function.',
    isConfirmed: true,
    isKeyFocus: true,
    heroHeadline: 'Understanding Dental Implants',
    heroDescription:
      'Learn how dental implants may be used to replace missing teeth and why an individual assessment is important when considering implant treatment.',
    heroImagePlaceholder: '[DENTAL IMPLANT CLINICAL PHOTOGRAPHY / ANATOMICAL DIAGRAM PLACEHOLDER]',
    overviewHeading: 'What Are Dental Implants?',
    overviewParagraphs: [
      'Dental implants are biocompatible titanium posts that are surgically positioned into the jawbone beneath your gums. Once in place, they allow your dentist to mount replacement teeth or a bridge onto them.',
      'Unlike removable dentures, implants integrate directly with the bone structure, acting as a stable replacement for the natural tooth root. This helps maintain surrounding facial structure and provides a solid foundation for crowns, bridges, or fixed prosthetics.',
      'Implant treatment is considered a multi-stage clinical procedure requiring thorough pre-treatment imaging, bone evaluation, and customized prosthetic design.',
    ],
    whoMayConsiderHeading: 'Who May Be Considered for Dental Implants?',
    whoMayConsiderIntro:
      'Suitability for dental implant treatment depends on several clinical factors that must be thoroughly evaluated by your dentist during consultation.',
    whoMayConsiderPoints: [
      'Patients missing one or more natural teeth due to decay, injury, or periodontal conditions.',
      'Individuals with adequate jawbone density to support the implant post, or who are eligible for bone augmentation.',
      'Patients with healthy gum tissue free of active periodontal infection.',
      'Individuals committed to maintaining meticulous daily oral hygiene and regular dental checkups.',
    ],
    whoMayConsiderDisclaimer:
      'Your dentist will conduct a comprehensive clinical examination and digital imaging to determine whether dental implants are suitable for your specific oral health condition.',
    processHeading: 'General Treatment Process',
    processIntro:
      'While individual treatment pathways vary depending on clinical complexity, dental implant therapy typically follows a structured sequence:',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Consultation & Comprehensive Assessment',
        description:
          'Clinical evaluation, digital X-rays, and bone density assessment to evaluate suitability and plan initial treatment strategy.',
      },
      {
        stepNumber: '02',
        title: 'Treatment Planning & Preparation',
        description:
          'Customized treatment design addressing prosthetic shape, shade matching, and preparatory oral health care if required.',
      },
      {
        stepNumber: '03',
        title: 'Implant Placement',
        description:
          'Precise surgical insertion of the biocompatible implant post into the jawbone under local anesthesia.',
      },
      {
        stepNumber: '04',
        title: 'Healing & Osseointegration',
        description:
          'A healing period allowing the bone tissue to fuse naturally around the implant post, establishing solid anchoring.',
      },
      {
        stepNumber: '05',
        title: 'Abutment & Final Restoration',
        description:
          'Attaching the connector piece (abutment) and securing the custom-fabricated dental crown or bridge.',
      },
    ],
    processDisclaimer:
      'Treatment steps, healing periods, and overall timelines vary depending on individual patient health, bone quality, and procedural requirements.',
    expectationsHeading: 'What to Expect During Care',
    expectationsPoints: [
      'Clear, step-by-step explanations from your dental surgeon prior to commencing treatment.',
      'Use of local anesthesia and appropriate clinical isolation during procedures to maintain patient comfort.',
      'Scheduled follow-up checkups to monitor tissue healing and prosthetic fit.',
      'Transparent discussion of post-treatment maintenance and long-term oral care protocols.',
    ],
    benefitsHeading: 'Potential Benefits of Implant Treatment',
    benefitsPoints: [
      'Helps restore natural masticatory function and chewing confidence.',
      'Supports surrounding facial contours by preventing bone loss associated with missing teeth.',
      'Does not require alteration or grinding down of adjacent healthy natural teeth.',
      'Provides a fixed, stable restoration designed to integrate with your existing bite.',
    ],
    benefitsDisclaimer:
      'Potential benefits depend on individual anatomical factors, oral hygiene maintenance, and adherence to professional aftercare guidelines.',
    aftercareHeading: 'General Aftercare Guidance',
    aftercarePoints: [
      'Follow all post-procedural care instructions provided directly by your operating dentist.',
      'Maintain diligent gentle brushing and specialized flossing around the implant site.',
      'Avoid hard, sticky, or abrasive foods during the initial post-operative healing phase.',
      'Attend all recommended follow-up visits and routine professional hygiene checkups.',
    ],
    aftercareDisclaimer:
      'Always contact Garg Dental Clinic immediately if you experience unexpected swelling, prolonged discomfort, or questions regarding your healing process.',
    faqs: [
      {
        question: 'What are dental implants?',
        answer:
          'Dental implants are biocompatible posts anchored into the jawbone to serve as stable replacements for missing natural tooth roots, supporting crowns or bridges.',
      },
      {
        question: 'Am I a candidate for dental implants?',
        answer:
          'Candidate eligibility depends on your overall health, gum condition, and available jawbone density. A clinical consultation and digital imaging are required to confirm suitability.',
      },
      {
        question: 'How does the implant process work?',
        answer:
          'The procedure generally involves consultation, surgical post placement, a healing period for bone integration (osseointegration), and attachment of the final crown.',
      },
      {
        question: 'How long does implant treatment take?',
        answer:
          'Timelines depend heavily on healing rates, bone condition, and whether preparatory procedures are needed. Your dentist will provide a estimated schedule following assessment.',
      },
      {
        question: 'What does dental implant treatment cost?',
        answer:
          'Treatment costs vary based on the number of implants, restoration type, and pre-existing clinical requirements. A detailed estimate is provided following your personal consultation.',
      },
      {
        question: 'Is dental implant treatment suitable for everyone?',
        answer:
          'Not all patients are immediate candidates. Certain medical conditions, severe bone loss, or uncontrolled gum disease may require management before considering implants.',
      },
    ],
    ctaHeadline: 'Considering Dental Implants?',
    ctaDescription:
      'Arrange a clinical consultation at Garg Dental Clinic & Implant Centre to discuss your dental needs and evaluate treatment options.',
    ctaPrimaryText: 'Book an Implant Consultation',
    relatedTreatmentIds: ['root-canal', 'restorative-dentistry'],
    seoTitle: 'Dental Implants in Kapurthala | Garg Dental Clinic',
    seoDescription:
      'Learn about dental implants at Garg Dental Clinic & Implant Centre on The Mall Road, Kapurthala. Understand the treatment process, suitability, and consultation details.',
  },

  'root-canal': {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    eyebrow: 'ROOT CANAL TREATMENT',
    slug: '/treatments/root-canal-treatment',
    shortDescription:
      'Precision endodontic therapy utilizing modern isolation and obturation techniques to preserve natural tooth structure.',
    isConfirmed: true,
    isKeyFocus: true,
    heroHeadline: 'Understanding Root Canal Treatment',
    heroDescription:
      'Learn what root canal treatment involves and why your dentist may recommend it when the inside of a tooth becomes affected.',
    heroImagePlaceholder: '[ENDODONTIC CLINICAL SUITE / TEETH ISOLATION PLACEHOLDER]',
    overviewHeading: 'What Is Root Canal Treatment?',
    overviewParagraphs: [
      'Root canal treatment (endodontic therapy) is a routine dental procedure designed to treat infection or inflammation at the center of a tooth (the dental pulp).',
      'The pulp consists of blood vessels, nerves, and connective tissue. When damaged by deep decay, repeated dental procedures, or traumatic injury, it can become inflamed or infected. Root canal treatment removes the affected pulp, cleans and disinfects the internal canals, and seals the tooth.',
      'Preserving your natural tooth through endodontic treatment helps maintain your natural bite alignment, chewing efficiency, and prevents adjacent teeth from shifting out of position.',
    ],
    whoMayConsiderHeading: 'When May Root Canal Treatment Be Needed?',
    whoMayConsiderIntro:
      'Your dentist will assess your tooth through clinical examination and digital radiographs to determine if endodontic care is indicated. Symptoms that may prompt evaluation include:',
    whoMayConsiderPoints: [
      'Persistent tooth discomfort or heightened sensitivity to hot and cold temperatures.',
      'Pain when chewing, biting, or applying pressure to a specific tooth.',
      'Tenderness or swelling in the nearby gum tissue.',
      'Deep tooth decay reaching the nerve chamber, or a cracked tooth compromising internal pulp.',
    ],
    whoMayConsiderDisclaimer:
      'Only a comprehensive examination by your dentist can diagnose internal tooth pulp inflammation or infection.',
    processHeading: 'General Treatment Process',
    processIntro:
      'Root canal therapy follows a precise endodontic sequence focused on thorough disinfection and structural sealing:',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Diagnostic Examination & Radiographs',
        description:
          'Detailed examination and digital X-rays to assess the root shape, canal anatomy, and extent of inflammation.',
      },
      {
        stepNumber: '02',
        title: 'Local Anesthesia & Rubber Dam Isolation',
        description:
          'Numbing the tooth and applying a protective dental dam to keep the treatment area clean and dry.',
      },
      {
        stepNumber: '03',
        title: 'Pulp Removal & Canal Cleaning',
        description:
          'Creating a small access opening to gently remove inflamed pulp tissue and thoroughly disinfect the root canals.',
      },
      {
        stepNumber: '04',
        title: 'Root Canal Shaping & Obturation',
        description:
          'Shaping and sealing the disinfected canals using biocompatible dental filling materials (gutta-percha).',
      },
      {
        stepNumber: '05',
        title: 'Coronal Restoration / Crown Placement',
        description:
          'Sealing the tooth opening with a durable filling or placing a protective dental crown to restore full chewing strength.',
      },
    ],
    processDisclaimer:
      'Treatment steps and appointment count vary depending on tooth complexity, canal anatomy, and the presence of active infection.',
    expectationsHeading: 'What to Expect During Care',
    expectationsPoints: [
      'Local anesthetic application to ensure tooth isolation and patient comfort throughout the procedure.',
      'Use of specialized rotary endodontic instruments and digital radiographs for anatomical precision.',
      'Temporary sealing if treatment requires multiple visits before final crown placement.',
      'Clear post-treatment instructions to manage mild post-procedural tenderness.',
    ],
    benefitsHeading: 'General Benefits of Preserving Your Tooth',
    benefitsPoints: [
      'Preserves your natural tooth structure and root stability.',
      'Restores normal biting and chewing capability without requiring extraction.',
      'Prevents adjacent natural teeth from drifting into empty spaces.',
      'Relieves discomfort associated with deep internal pulp infection.',
    ],
    benefitsDisclaimer:
      'Endodontic outcomes depend on the structural integrity of the remaining tooth and proper final crown restoration.',
    aftercareHeading: 'General Aftercare Guidance',
    aftercarePoints: [
      'Avoid chewing on the treated tooth until the final permanent restoration or crown is placed.',
      'Maintain standard oral hygiene including gentle brushing and flossing around the restored tooth.',
      'Follow specific guidance provided by your treating dentist regarding temporary fillings.',
      'Schedule your permanent crown placement promptly to protect the tooth from future fracture.',
    ],
    aftercareDisclaimer:
      'If you notice persistent swelling or unusual discomfort after your visit, contact Garg Dental Clinic for advice.',
    faqs: [
      {
        question: 'What is root canal treatment?',
        answer:
          'Root canal treatment is an endodontic procedure that cleans and seals an infected or inflamed nerve chamber inside a tooth, preserving the natural tooth structure.',
      },
      {
        question: 'Why might a dentist recommend it?',
        answer:
          'A dentist recommends a root canal when deep decay, trauma, or cracks allow bacteria to reach the internal pulp, causing inflammation or infection.',
      },
      {
        question: 'What happens during the treatment?',
        answer:
          'Under local anesthesia, the dentist accesses the pulp chamber, removes compromised tissue, disinfects the root canals, and seals the tooth with filling material.',
      },
      {
        question: 'How many appointments are needed?',
        answer:
          'Many root canal procedures can be completed in one to two appointments, depending on the complexity of the root anatomy and infection state.',
      },
      {
        question: 'What does root canal treatment cost?',
        answer:
          'Cost depends on which tooth is affected (front tooth vs. molar with multiple canals) and whether a crown is required. Details are provided during consultation.',
      },
      {
        question: 'What should I expect after treatment?',
        answer:
          'Mild temporary tenderness is common as surrounding tissues heal. Your dentist will provide clear care instructions and advise on permanent crown placement.',
      },
    ],
    ctaHeadline: 'Need Root Canal Evaluation?',
    ctaDescription:
      'Get in touch with Garg Dental Clinic & Implant Centre to discuss your tooth symptoms and schedule a clinical evaluation.',
    ctaPrimaryText: 'Book an Appointment',
    relatedTreatmentIds: ['dental-implants', 'restorative-dentistry'],
    seoTitle: 'Root Canal Treatment in Kapurthala | Garg Dental Clinic',
    seoDescription:
      'Learn about Root Canal Treatment at Garg Dental Clinic & Implant Centre in Kapurthala. Understand the endodontic process, steps, aftercare, and consultation details.',
  },

  'general-dentistry': {
    id: 'general-dentistry',
    name: 'General Dentistry',
    eyebrow: 'GENERAL DENTISTRY',
    slug: '/treatments/general-dentistry',
    shortDescription:
      'Comprehensive oral healthcare, preventive checkups, scaling, and oral hygiene management for patients of all ages.',
    isConfirmed: false,
    isKeyFocus: false,
    heroHeadline: 'Comprehensive General Dentistry',
    heroDescription:
      'Routine dental examinations, preventive hygiene, scaling, and general oral health maintenance for patients of all ages.',
    heroImagePlaceholder: '[GENERAL DENTISTRY EXAMINATION PLACEHOLDER]',
    overviewHeading: 'Overview of General Dental Maintenance',
    overviewParagraphs: [
      'General dentistry encompasses preventive care, routine oral evaluations, dental cleanings, and fundamental oral health advice.',
      'Regular checkups allow your dentist to identify early signs of tooth decay, gum inflammation, or structural wear before they require extensive intervention.',
    ],
    whoMayConsiderHeading: 'Who Benefits from General Dental Visits?',
    whoMayConsiderIntro:
      'Routine dental checkups are recommended for individuals and families seeking to maintain healthy teeth and gums.',
    whoMayConsiderPoints: [
      'Patients seeking routine semi-annual or annual oral checkups.',
      'Individuals requiring professional teeth scaling and plaque removal.',
      'Patients wanting personalized oral hygiene instructions and preventive guidance.',
    ],
    whoMayConsiderDisclaimer:
      'Consultation frequency is customized to your individual oral health risk factors.',
    processHeading: 'Typical Consultation Steps',
    processIntro: 'A general dental appointment typically includes:',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Oral Health Examination',
        description: 'Comprehensive inspection of teeth, gums, soft tissues, and existing restorations.',
      },
      {
        stepNumber: '02',
        title: 'Professional Hygiene & Scaling',
        description: 'Removal of plaque and tartar buildup to support periodontal health.',
      },
      {
        stepNumber: '03',
        title: 'Preventive Recommendations',
        description: 'Discussion of oral hygiene habits and scheduling follow-up care if required.',
      },
    ],
    processDisclaimer: 'Specific procedural steps depend on your routine examination findings.',
    expectationsHeading: 'What to Expect',
    expectationsPoints: [
      'Thorough, gentle examination of your oral cavity.',
      'Clear explanation of any identified dental concerns.',
      'Preventive advice tailored to your daily routines.',
    ],
    benefitsHeading: 'Benefits of Routine Care',
    benefitsPoints: [
      'Helps catch minor dental issues before they progress.',
      'Promotes fresh breath and clean gum tissue.',
      'Supports overall systemic health through good oral hygiene.',
    ],
    benefitsDisclaimer: 'Preventive effectiveness relies on consistent home care and regular checkups.',
    aftercareHeading: 'Daily Maintenance Guidance',
    aftercarePoints: [
      'Brush twice daily with fluoride toothpaste.',
      'Clean between teeth daily using dental floss or interdental brushes.',
      'Maintain regular checkups as advised by your dental clinic.',
    ],
    aftercareDisclaimer: 'Contact the clinic if you experience sudden tooth discomfort between visits.',
    faqs: [
      {
        question: 'How often should I visit the dentist for a checkup?',
        answer: 'Generally every 6 months, though your dentist may recommend more or less frequent visits based on your oral health.',
      },
      {
        question: 'What happens during a professional cleaning?',
        answer: 'The dentist or hygienist removes hardened plaque (calculus) from tooth surfaces that regular brushing cannot remove.',
      },
    ],
    ctaHeadline: 'Schedule a General Checkup',
    ctaDescription: 'Arrange a routine dental evaluation at Garg Dental Clinic & Implant Centre in Kapurthala.',
    ctaPrimaryText: 'Book an Appointment',
    relatedTreatmentIds: ['dental-implants', 'root-canal'],
    seoTitle: 'General Dentistry in Kapurthala | Garg Dental Clinic',
    seoDescription: 'General dental checkups, scaling, and oral hygiene management at Garg Dental Clinic in Kapurthala.',
  },

  'cosmetic-dentistry': {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    eyebrow: 'COSMETIC DENTISTRY',
    slug: '/treatments/cosmetic-dentistry',
    shortDescription:
      'Aesthetic enhancement procedures focusing on tooth alignment, shade correction, and smile harmony.',
    isConfirmed: false,
    isKeyFocus: false,
    heroHeadline: 'Cosmetic Dental Enhancements',
    heroDescription:
      'Explore aesthetic dental options designed to improve tooth alignment, shade harmony, and overall smile confidence.',
    heroImagePlaceholder: '[COSMETIC DENTISTRY CONSULTATION PLACEHOLDER]',
    overviewHeading: 'Understanding Aesthetic Dental Options',
    overviewParagraphs: [
      'Cosmetic dentistry focuses on enhancing the visual appearance of teeth and gums through procedures such as shade correction, composite bonding, or alignment evaluation.',
      'All cosmetic procedures begin with a thorough evaluation to ensure underlying teeth and supporting gums are clinically healthy before aesthetic treatments are considered.',
    ],
    whoMayConsiderHeading: 'Who May Consider Aesthetic Treatment?',
    whoMayConsiderIntro:
      'Patients interested in refining the shape, color, or symmetry of their natural teeth may seek cosmetic consultation.',
    whoMayConsiderPoints: [
      'Individuals with tooth discoloration resistant to standard hygiene.',
      'Patients with minor chipping, irregular tooth edges, or small gaps.',
      'Those seeking aesthetic alignment advice.',
    ],
    whoMayConsiderDisclaimer: 'A complete clinical examination is essential before any aesthetic procedure.',
    processHeading: 'General Cosmetic Evaluation Pathway',
    processIntro: 'Aesthetic treatment design involves:',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Aesthetic Consultation',
        description: 'Discussion of your cosmetic preferences and evaluation of smile symmetry.',
      },
      {
        stepNumber: '02',
        title: 'Oral Health Verification',
        description: 'Ensuring absence of active decay or gum inflammation prior to aesthetic work.',
      },
      {
        stepNumber: '03',
        title: 'Treatment Execution & Refinement',
        description: 'Applying composite restorations, whitening, or customized prosthetic units.',
      },
    ],
    processDisclaimer: 'Procedures vary based on individual cosmetic goals and anatomical requirements.',
    expectationsHeading: 'What to Expect',
    expectationsPoints: [
      'Detailed discussion regarding realistic aesthetic outcomes.',
      'Clear explanation of non-invasive vs. restorative options.',
    ],
    benefitsHeading: 'Potential Aesthetic Benefits',
    benefitsPoints: [
      'Supports improved smile harmony and confidence.',
      'Can correct minor surface chips and shade irregularities.',
    ],
    benefitsDisclaimer: 'Aesthetic outcomes depend on initial tooth structure and proper maintenance.',
    aftercareHeading: 'Post-Treatment Hygiene',
    aftercarePoints: [
      'Avoid staining foods and beverages immediately after shade procedures.',
      'Maintain standard oral hygiene routines.',
    ],
    aftercareDisclaimer: 'Follow all specific post-procedure advice provided by your treating dentist.',
    faqs: [
      {
        question: 'Are cosmetic procedures safe for tooth enamel?',
        answer: 'When performed by a qualified dentist following thorough examination, cosmetic procedures are clinically controlled to protect tooth health.',
      },
    ],
    ctaHeadline: 'Discuss Your Smile Goals',
    ctaDescription: 'Schedule an aesthetic consultation at Garg Dental Clinic in Kapurthala.',
    ctaPrimaryText: 'Book a Consultation',
    relatedTreatmentIds: ['dental-implants', 'restorative-dentistry'],
    seoTitle: 'Cosmetic Dentistry in Kapurthala | Garg Dental Clinic',
    seoDescription: 'Cosmetic dental consultations and smile aesthetic options at Garg Dental Clinic in Kapurthala.',
  },

  'restorative-dentistry': {
    id: 'restorative-dentistry',
    name: 'Restorative Dentistry',
    eyebrow: 'RESTORATIVE DENTISTRY',
    slug: '/treatments/restorative-dentistry',
    shortDescription:
      'Structural repairs including crowns, bridges, and durable tooth-colored restorations.',
    isConfirmed: false,
    isKeyFocus: false,
    heroHeadline: 'Restorative Dental Solutions',
    heroDescription:
      'Repair damaged, broken, or decayed teeth with durable crowns, tooth-colored fillings, and dental restorations.',
    heroImagePlaceholder: '[RESTORATIVE CROWN & BRIDGE PLACEHOLDER]',
    overviewHeading: 'Restoring Tooth Form & Function',
    overviewParagraphs: [
      'Restorative dentistry restores the integrity, strength, and appearance of teeth damaged by decay, fracture, or wear.',
      'Common restorative options include tooth-colored fillings, protective dental crowns, and restorative bridges.',
    ],
    whoMayConsiderHeading: 'When Is Restorative Care Indicated?',
    whoMayConsiderIntro: 'Restorative procedures help address structural tooth damage:',
    whoMayConsiderPoints: [
      'Teeth with cavity damage requiring durable composite filling.',
      'Fractured or heavily filled teeth needing protective crown coverage.',
      'Missing teeth requiring dental bridge restoration.',
    ],
    whoMayConsiderDisclaimer: 'Your dentist will recommend specific restorative materials following clinical inspection.',
    processHeading: 'General Restorative Sequence',
    processIntro: 'Restorative treatment typically includes:',
    processSteps: [
      {
        stepNumber: '01',
        title: 'Examination & Decay Removal',
        description: 'Clearing damaged or decayed tooth structure under local anesthesia.',
      },
      {
        stepNumber: '02',
        title: 'Impression & Preparation',
        description: 'Shaping the tooth and taking precise digital or physical impressions for custom restorations.',
      },
      {
        stepNumber: '03',
        title: 'Final Cementation & Placement',
        description: 'Securing the durable crown, bridge, or filling into exact bite alignment.',
      },
    ],
    processDisclaimer: 'Material choices and visit counts depend on restorative scope.',
    expectationsHeading: 'What to Expect',
    expectationsPoints: [
      'Targeted local anesthesia for comfortable treatment.',
      'Shade matching to ensure restorations align with natural teeth.',
    ],
    benefitsHeading: 'Benefits of Restorative Care',
    benefitsPoints: [
      'Protects compromised tooth structure from further cracking or decay.',
      'Restores chewing capacity and comfortable bite function.',
    ],
    benefitsDisclaimer: 'Longevity depends on oral hygiene, bite pressure, and routine dental visits.',
    aftercareHeading: 'Care for Restored Teeth',
    aftercarePoints: [
      'Maintain daily brushing and flossing around crown margins and fillings.',
      'Avoid biting down on excessively hard items like ice or hard candy.',
    ],
    aftercareDisclaimer: 'Contact the clinic promptly if a restoration feels loose or high when biting.',
    faqs: [
      {
        question: 'What is the difference between a filling and a crown?',
        answer: 'A filling repairs minor to moderate decay inside a tooth, while a crown encases the entire visible tooth when structural damage is extensive.',
      },
    ],
    ctaHeadline: 'Repair Damaged Teeth',
    ctaDescription: 'Schedule a restorative evaluation at Garg Dental Clinic & Implant Centre.',
    ctaPrimaryText: 'Book an Appointment',
    relatedTreatmentIds: ['dental-implants', 'root-canal'],
    seoTitle: 'Restorative Dentistry in Kapurthala | Garg Dental Clinic',
    seoDescription: 'Dental crowns, bridges, and tooth-colored fillings at Garg Dental Clinic in Kapurthala.',
  },
};
