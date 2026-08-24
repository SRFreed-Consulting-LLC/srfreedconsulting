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

/** A phone screen, rendered inside a device frame rather than as a flat image. */
export interface DeviceShot {
  src: string;
  /** Shown under the device, e.g. the language. */
  label: string;
  /** Optional second line, e.g. what the screen is. */
  note?: string;
}

export interface DeviceSet {
  heading: string;
  body: string;
  shots: DeviceShot[];
}

export interface CaseStudy {
  /** One sentence above the fold. */
  standfirst: string;
  /** Metadata strip. */
  facts: { key: string; value: string }[];
  sections: CaseSection[];
  gallery?: CaseImage[];
  /** Phone screens shown in a device frame — used where the product ships as an app. */
  devices?: DeviceSet;
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

  /* --------------------------------------- Impact: operations console ---- */
  'impact-admin': {
    standfirst:
      'One role-based console covering nine operational domains — CRM, order management, catalog, CMS, a curriculum LMS, a campaign manager and reporting — so ministry staff run the organization without a developer in the loop.',
    facts: [
      { key: 'Role', value: 'Architect, developer, operator' },
      { key: 'Users', value: 'Ministry staff' },
      { key: 'Access', value: 'Role-based' },
      { key: 'Domains', value: '9 top-level' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'A ministry cannot depend on one engineer to publish a lesson, refund an order, or add an event. If it does, the software is a liability rather than an asset — and the engineer is a single point of failure.',
          'The usual answer is to buy five products: a CRM, a CMS, a storefront back office, an email platform and an LMS. For an organization this size that means five subscriptions, five logins, five permission models, and integration work between all of them.',
        ],
      },
      {
        heading: 'What I built',
        body: [
          'A single Angular console over the same Firebase backend as the public site, organized into the operational domains staff actually work in. In industry terms it covers:',
        ],
        points: [
          'CRM — contacts, organizations and their history',
          'Order management — purchases, fulfillment and shipping labels',
          'E-commerce back office — product catalog, coupons and pricing',
          'CMS — site content, testimonials, imagery and page configuration',
          'LMS — curriculum series, lessons, templates and learner groups',
          'Campaign manager — campaigns, newsletters, tag rules and a status board',
          'Event management — events, the annual summit and coaches',
          'Low-code form builder — forms and system templates, no deploy required',
          'Reporting — subscribers and exports to Excel and PDF',
        ],
      },
      {
        heading: 'Absorbing a second application',
        body: [
          'Curriculum authoring originally lived in its own application, the Library Manager. Running it separately meant a second deployment, a second login and a second permission model for staff who were already in the admin console all day.',
          'It was merged in as the Library domain. Series and lesson authoring, lesson templates, learner groups, library users and the activity log now sit alongside everything else — one console, one identity, one role model. Retiring an application you wrote is the right call more often than shipping another one.',
        ],
      },
      {
        heading: 'Importing a book with AI',
        body: [
          'Getting a curriculum into the system used to mean re-creating it by hand: reading a printed book, retyping each lesson, rebuilding the question sets, and placing the images — before any of it could be translated.',
          'Import Book takes the PDF instead. The book is read by an AI pass that detects its structure — units, lessons, questions and images — and proposes the hierarchy that would otherwise be built by hand.',
          'Nothing is written on the model’s say-so. The detected structure is presented for review first, and a person confirms it before anything is saved. That is the same principle I apply to agent-generated code: the machine proposes, a human is accountable for what lands.',
        ],
        points: [
          'Upload a PDF, choose or create the series it belongs to',
          'AI detects units, lessons, questions and images',
          'The proposed structure is reviewed before any of it is persisted',
          'Imported content then flows into the translation workflow',
        ],
      },
      {
        heading: 'Knowing whether any of it worked',
        body: [
          'The console includes a world map of where readers are currently active, drawn with Leaflet over OpenStreetMap data, alongside an activity log.',
          'For an organization distributing curricula into regions with poor connectivity, whether anyone is actually reading — and where — is not a vanity metric. It is the feedback loop that tells staff whether a distribution effort worked.',
        ],
      },
      {
        heading: 'The design constraint that mattered',
        body: [
          'Every screen was built for someone who does not think in database terms. Order state is a progress bar, not a status enum. Publishing content is a form, not a deployment.',
          'This is the part of the estate that determines whether the system survives me stepping away, so it got the same care as the customer-facing site.',
        ],
      },
    ],
    gallery: [
      { src: 'assets/work/admin/dashboard.webp', caption: 'Dashboard — recent orders and fulfillment state' },
      { src: 'assets/work/admin/crm-contacts.webp', caption: 'CRM — contacts and organizations' },
      { src: 'assets/work/admin/library-browse.webp', caption: 'LMS — curriculum series, with Import Book' },
      { src: 'assets/work/admin/import-book.webp', caption: 'Import Book — AI detects units, lessons, questions and images for review before anything is saved' },
      { src: 'assets/work/admin/library-lesson-templates.webp', caption: 'LMS — lesson templates' },
      { src: 'assets/work/admin/library-world-map.webp', caption: 'World map — where readers are active' },
      { src: 'assets/work/admin/library-users.webp', caption: 'Library users' },
      { src: 'assets/work/admin/products.webp', caption: 'E-commerce — product catalog' },
      { src: 'assets/work/admin/coupons.webp', caption: 'E-commerce — coupons' },
      { src: 'assets/work/admin/campaigns.webp', caption: 'Campaign manager' },
      { src: 'assets/work/admin/cms-web-config.webp', caption: 'CMS — site configuration' },
      { src: 'assets/work/admin/form-builder.webp', caption: 'Low-code form builder' },
      { src: 'assets/work/admin/events.webp', caption: 'Event management' },
    ],
  },

  /* -------------------------------------------------- Impact: library ---- */
  'impact-library': {
    standfirst:
      'Built so a ministry could stop printing curricula and shipping them around the world — and built to work where the network does not, from field conditions in rural Zambia rather than from a whiteboard.',
    facts: [
      { key: 'Role', value: 'Architect, developer, operator' },
      { key: 'Distribution', value: 'Android via Capacitor, PWA' },
      { key: 'Designed for', value: 'Low-connectivity regions' },
      { key: 'Languages', value: 'English, French, Spanish, chiTonga' },
    ],
    sections: [
      {
        heading: 'Why it exists',
        body: [
          'Impact curricula were printed and shipped around the world. Every title meant a print run, a shipment and a wait — and a reader working through the study questions in the margins of a physical page.',
          'The app exists to end that. People read the books and answer the questions on a device, and the ministry stops paying to print and send them.',
          'It has grown well past a reader since. It is where groups form and talk, and it ties into the ministry storefront and the rest of the website — so the reading, the community and the commerce are one system rather than three.',
        ],
      },
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
    devices: {
      heading: 'The same lesson, four languages',
      body:
        'The reader ships in English, French, Spanish and chiTonga — a language of southern Zambia, which is not an accident given where this app is used. Interface, navigation, progress figures and the curriculum itself all translate; a lesson renders in the reader\'s preferred language when a translation exists, and in its original language when one does not. These are real screens from the running app, not mockups.',
      shots: [
        { src: 'assets/work/library/langs/lesson-en.webp', label: 'English', note: 'Lesson' },
        { src: 'assets/work/library/langs/lesson-fr.webp', label: 'Français', note: 'Lesson' },
        { src: 'assets/work/library/langs/lesson-es.webp', label: 'Español', note: 'Lesson' },
        { src: 'assets/work/library/langs/lesson-to.webp', label: 'chiTonga', note: 'Lesson' },
        { src: 'assets/work/library/langs/home-en.webp', label: 'English', note: 'Home' },
        { src: 'assets/work/library/langs/home-fr.webp', label: 'Français', note: 'Home' },
        { src: 'assets/work/library/langs/home-es.webp', label: 'Español', note: 'Home' },
        { src: 'assets/work/library/langs/home-to.webp', label: 'chiTonga', note: 'Home' },
      ],
    },
    gallery: [
      { src: 'assets/work/library/reader.webp', caption: 'Reading a lesson' },
      { src: 'assets/work/library/home.webp', caption: 'Home — progress, streak, and a highlighted passage' },
      { src: 'assets/work/library/my-books.webp', caption: 'My library' },
      { src: 'assets/work/library/groups.webp', caption: 'Impact groups' },
      { src: 'assets/work/library/settings.webp', caption: 'Settings and language' },
      { src: 'assets/work/library/mobile.webp', caption: 'Mobile — the primary target' },
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
