/**
 * Long-form content for the case studies, keyed by work slug.
 *
 * Kept separate from work.ts so the index stays cheap to load and the
 * narrative content has room to breathe. One shape serves every study.
 */

export interface CaseSection {
  heading: string;
  /** Paragraphs. */
  body: string[];
  /** Optional supporting points under the paragraphs. */
  points?: string[];
}

export interface CaseImage {
  src: string;
  caption: string;
}

export interface CaseStudy {
  /** One sentence above the fold. */
  standfirst: string;
  /** Metadata strip. */
  facts: { key: string; value: string }[];
  sections: CaseSection[];
  gallery?: CaseImage[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {

  /* ------------------------------------------------ Impact: storefront ---- */
  'impact-platform': {
    standfirst:
      'A content-driven storefront that takes real money, ships real product, and handles its own refunds — with the financial write paths moved behind a server boundary after a security review.',
    facts: [
      { key: 'Role', value: 'Architect, developer, operator' },
      { key: 'Status', value: 'Live in production' },
      { key: 'Payments', value: 'Stripe, PayPal' },
      { key: 'Fulfillment', value: 'ShipEngine' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'A discipleship ministry needed to sell and ship physical and digital resources, take donations, run events, and publish its own content — without a developer standing between staff and every change.',
          'That rules out a brochure site with a payment button bolted on. It needs a catalog, a cart, tax, shipping, refunds, and an administrative surface that ordinary staff can operate.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'An Angular and Firebase storefront driven entirely by content records, so the catalog and the pages around it are edited rather than deployed.',
        ],
        points: [
          'Stripe and PayPal payment processing, side by side',
          'ShipEngine for fulfillment and live shipping rates',
          'Tax calculation and refund handling as first-class flows, not afterthoughts',
          'Events and registration alongside the product catalog',
        ],
      },
      {
        heading: 'The security review that changed the architecture',
        body: [
          'I ran an AI-assisted review across the estate. It surfaced something I would rather have found early than late: clients were writing financial and order data directly to Firestore.',
          'Firestore security rules are good at answering "may this user write this document?" They cannot answer "is this total correct?" A client that legitimately owns an order document can still write the wrong amount to it — whether through a bug or through a console.',
          'Those write paths moved behind serverless Cloud Functions, which became the trusted boundary. Validation and authorisation happen there, on the server, where the client cannot reach around them.',
        ],
      },
      {
        heading: 'Operating it',
        body: [
          'I did not hand this over at launch. It is still mine: payments, fulfillment, refunds, and the support that follows a real order going wrong.',
        ],
      },
    ],
    gallery: [
      { src: 'assets/work/public/home.webp', caption: 'Public site' },
      { src: 'assets/work/public/seminars.webp', caption: 'Seminars and training' },
      { src: 'assets/work/public/ebooks.webp', caption: 'Digital resources' },
      { src: 'assets/work/public/events.webp', caption: 'Events' },
      { src: 'assets/work/public/mobile.webp', caption: 'Mobile' },
    ],
  },

  /* ------------------------------------------------------ Impact: CMS ---- */
  'impact-admin': {
    standfirst:
      'The back office behind the storefront: orders, fulfillment, catalog, events and content, built so non-technical staff run the ministry without a developer in the loop.',
    facts: [
      { key: 'Role', value: 'Architect, developer, operator' },
      { key: 'Users', value: 'Ministry staff' },
      { key: 'Access', value: 'Role-based' },
      { key: 'Reporting', value: 'Excel and PDF' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'A ministry cannot depend on one engineer to publish a lesson, refund an order, or add an event. If it does, the software is a liability rather than an asset — and the engineer is a single point of failure.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'A role-based administrative application covering the whole operational surface, with a dashboard that leads on what actually needs attention: recent orders and their fulfillment state.',
        ],
        points: [
          'Orders, purchases and fulfillment tracking with per-order progress',
          'Customers, organizations, coaches and locations',
          'Product catalog, coupons and sales',
          'Events, courses and registrations',
          'Form submissions and campaigns',
          'Excel and PDF reporting for administrators',
        ],
      },
      {
        heading: 'The design constraint that mattered',
        body: [
          'Every screen was built for someone who does not think in database terms. Order state is a progress bar, not a status enum. Content publishing is a form, not a deployment.',
          'This is the part of the estate that determines whether the system survives me stepping away, so it got the same care as the customer-facing site.',
        ],
      },
    ],
    gallery: [
      { src: 'assets/work/admin/dashboard.webp', caption: 'Dashboard — recent orders and fulfillment state' },
      { src: 'assets/work/admin/purchases.webp', caption: 'Purchases' },
      { src: 'assets/work/admin/fulfillment.webp', caption: 'Fulfillment' },
      { src: 'assets/work/admin/products.webp', caption: 'Product catalog' },
      { src: 'assets/work/admin/coupons.webp', caption: 'Coupons' },
      { src: 'assets/work/admin/events.webp', caption: 'Events' },
      { src: 'assets/work/admin/coaches.webp', caption: 'Coaches' },
      { src: 'assets/work/admin/sales.webp', caption: 'Sales reporting' },
    ],
  },

  /* -------------------------------------------------- Impact: library ---- */
  'impact-library': {
    standfirst:
      'An offline-first reader built for people who may only have connectivity at the moment the app is installed — designed from field conditions in rural Zambia, not from a whiteboard.',
    facts: [
      { key: 'Role', value: 'Architect, developer, operator' },
      { key: 'Distribution', value: 'Android via Capacitor, PWA' },
      { key: 'Designed for', value: 'Low-connectivity regions' },
      { key: 'Languages', value: 'Fully localized' },
    ],
    sections: [
      {
        heading: 'The constraint',
        body: [
          'The reader is used in places where the network is not a given. In rural Zambia, a user may have connectivity at the moment of installation and rarely afterwards.',
          'That single fact drives the entire architecture. An app that fetches a lesson when you open it is useless here. Everything the reader will need has to already be on the device, and the experience must never assume a request will succeed.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'An Angular reader packaged with Capacitor for Android and as a PWA, backed by Firestore with offline persistence configured deliberately rather than left at defaults.',
        ],
        points: [
          'Offline-first Firestore caching, with content prefetch at install time',
          'A custom text-quote highlighting engine, built from scratch',
          'Reading progress, streaks and completion tracked locally and synced when possible',
          'Full localization — the interface and the curricula both translate',
          'Group membership and messaging for cohorts working through a series together',
        ],
      },
      {
        heading: 'The highlighting engine',
        body: [
          'Highlighting text inside a rendered document is deceptively hard: a selection can span element boundaries, and the highlight has to survive re-rendering, translation, and being reloaded from cache on a device that has been offline for weeks.',
          'It is built from scratch rather than pulled from a library, because the persistence and translation requirements are specific to this reader. Highlighted passages surface back on the home screen as a prompt to return to a lesson.',
        ],
      },
      {
        heading: 'Rewritten in three days',
        body: [
          'The reader and its companion manager were rebuilt agentically in roughly three days. The original hand-built versions took nine months.',
        ],
      },
    ],
    gallery: [
      { src: 'assets/work/library/reader.webp', caption: 'Reading a lesson' },
      { src: 'assets/work/library/home.webp', caption: 'Home — progress, streak, and a highlighted passage' },
      { src: 'assets/work/library/my-books.webp', caption: 'My library' },
      { src: 'assets/work/library/groups.webp', caption: 'Impact groups' },
      { src: 'assets/work/library/settings.webp', caption: 'Settings and language' },
      { src: 'assets/work/library/mobile.webp', caption: 'Mobile — the primary target' },
    ],
  },

  /* -------------------------------------------------- Impact: manager ---- */
  'impact-manager': {
    standfirst:
      'The staff CMS behind the reader: series, lessons, translations and publication state — plus a live map of where readers are actually active.',
    facts: [
      { key: 'Role', value: 'Architect, developer, operator' },
      { key: 'Authoring', value: 'Form.io' },
      { key: 'Structure', value: 'Series → lesson → page' },
      { key: 'Presence', value: 'Live map, Leaflet' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'Curricula are not blog posts. A series has lessons, lessons have ordered pages, and every one of them may exist in several languages with independent publication states.',
          'Staff — not engineers — need to author all of that, translate it, and decide when it goes live.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'A management application built around the content tree itself: series, lessons and pages, each carrying its own published state, edited through Form.io-driven forms.',
        ],
        points: [
          'Hierarchical authoring — series, lesson, page — with drag-level structure visible at all times',
          'Per-item publication state, so a draft lesson cannot leak into a published series',
          'Translation workflow across the reader and the manager',
          'Content packaging that feeds the reader\'s offline prefetch',
        ],
      },
      {
        heading: 'The presence map',
        body: [
          'The manager includes a live map showing where readers are currently active, drawn with Leaflet over OpenStreetMap data.',
          'For a ministry distributing curricula into regions with poor connectivity, "is anyone actually reading this, and where?" is not a vanity metric — it is the feedback loop that tells staff whether a distribution effort worked.',
        ],
      },
    ],
    gallery: [
      { src: 'assets/work/manager/series-expanded.webp', caption: 'Content tree with publication state, and the live presence map' },
      { src: 'assets/work/manager/content-tree.webp', caption: 'Series and lessons' },
      { src: 'assets/work/manager/lesson.webp', caption: 'Editing a lesson' },
    ],
  },

  /* ------------------------------------------------- Federal Reserve ---- */
  'federal-reserve': {
    standfirst:
      'Modernizing a platform that moves over $200 billion a year — from Java 8 on WebLogic 8 to Java 21 on Spring Boot 4, and out of the data centre onto EKS.',
    facts: [
      { key: 'Role', value: 'Senior Software Engineer' },
      { key: 'Team', value: 'Lincoln product team' },
      { key: 'Duration', value: '18 months embedded' },
      { key: 'Throughput', value: '$200B+ annually' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'A mission-critical payments platform was running on Java 8 and WebLogic 8 — a stack whose support horizon had long since passed, carrying volume that cannot simply be paused for a rewrite.',
          'Nothing about this kind of modernization is greenfield. The constraint is that the system keeps working, correctly, throughout.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          'Redesigned and refactored the legacy code onto a current stack, and defined the migration path off the data centre.',
        ],
        points: [
          'Java 8 / WebLogic 8 → Java 21, Spring Boot 4, Spring Framework 7',
          'Defined and drove the cloud migration strategy for the platform',
          'Containerized over 340 libraries and deployable units for EKS',
          'Redesigned the testing strategy as the monolith decomposed into services',
        ],
      },
      {
        heading: 'The defect that had blocked the test suite for months',
        body: [
          'The Java 8 → 21 upgrade introduced an abstract Spring Boot application-context failure that had broken the JBehave and Selenium suite. It had been deferred repeatedly — the kind of bug that is hard to hold in one head, because the evidence is spread across context initialisation, classpath scanning and test lifecycle.',
          'Using GitLab Duo to work through it, it was isolated and resolved in roughly ninety minutes.',
          'That experience is what turned me from an AI sceptic into someone who runs a fully agentic practice — and it is why I now coach other experienced engineers through the same arc.',
        ],
      },
    ],
  },
};
