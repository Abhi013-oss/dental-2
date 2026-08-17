export interface ClinicalCaseItem {
  id: string;
  caseNumber: string;
  title: string;
  treatmentCategory: string;
  beforeImagePlaceholder: string;
  afterImagePlaceholder: string;
  beforeSrc?: string;
  afterSrc?: string;
  consentConfirmed: boolean;
  shortDescription: string;
  clinicalOverview: string[];
  disclaimer: string;
}

export const CASES_DATA: ClinicalCaseItem[] = [
  {
    id: 'case-001',
    caseNumber: 'Case Study #001',
    title: 'Dental Implant Tooth Replacement & Crown Restorative Anatomy',
    treatmentCategory: 'Dental Implants',
    beforeImagePlaceholder: '[BEFORE: SINGLE TOOTH EDENTULOUS SPACE - ANATOMICAL PRESENTATION]',
    afterImagePlaceholder: '[AFTER: IMPLANT ABUTMENT & INTEGRATED CROWN RESTORATION]',
    consentConfirmed: true,
    shortDescription:
      'Replacement of a missing single tooth using an implant post and custom shade-matched crown.',
    clinicalOverview: [
      'Initial presentation showed loss of a single natural tooth with intact adjacent teeth and healthy bone density.',
      'A biocompatible implant post was placed and allowed to osseointegrate naturally over the recommended healing phase.',
      'A custom abutment and porcelain crown were placed, restoring chewing stability and smile aesthetics without altering adjacent teeth.',
    ],
    disclaimer:
      'Individual results depend on initial bone availability, systemic health, and daily oral hygiene maintenance.',
  },
  {
    id: 'case-002',
    caseNumber: 'Case Study #002',
    title: 'Root Canal Endodontic Preservation & Protective Crown',
    treatmentCategory: 'Root Canal',
    beforeImagePlaceholder: '[BEFORE: DEEP CARIOUS LESION WITH PULP INVOLVEMENT]',
    afterImagePlaceholder: '[AFTER: DISINFECTED ROOT CANALS & FULL COVERAGE CROWN]',
    consentConfirmed: true,
    shortDescription:
      'Endodontic therapy to preserve a severely decayed molar followed by full crown coverage.',
    clinicalOverview: [
      'Patient presented with acute discomfort due to deep decay reaching the nerve pulp chamber.',
      'Under local anesthesia and rubber dam isolation, inflamed pulp tissue was removed, canals were disinfected, and gutta-percha sealing was completed.',
      'A full-coverage porcelain-fused crown was placed to prevent future tooth fracture and restore full biting strength.',
    ],
    disclaimer:
      'Endodontic outcomes depend on initial tooth structure, canal anatomy, and prompt permanent crown placement.',
  },
];
