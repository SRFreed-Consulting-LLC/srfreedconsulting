import { Injectable } from '@angular/core';
import { CASE_STUDIES } from './case-studies';

/**
 * The Federal Reserve engagement ends 31 August 2026, so availability is a
 * fact the site states plainly rather than something a reader has to infer.
 */
export const AVAILABILITY = {
  /** Last day of the current engagement. Everything else is derived from it. */
  engagementEnds: new Date('2026-08-31T23:59:59'),
  availableFrom: 'September 2026',
  note: 'Current engagement ends 31 August 2026.',
};

/**
 * "Available September 2026" reads as a future date right up until it isn't.
 * Deriving the label from the end date means the site does not quietly go
 * stale on 1 September while nobody is looking at it.
 */
export function availabilityStatus(now: Date = new Date()): { label: string; note: string } {
  return now > AVAILABILITY.engagementEnds
    ? { label: 'Available now', note: '' }
    : { label: `Available ${AVAILABILITY.availableFrom}`, note: AVAILABILITY.note };
}

export type WorkKind = 'product' | 'client';

export interface WorkItem {
  /** URL slug — also the case-study route. */
  slug: string;
  name: string;
  /** Short line under the name in the index. */
  summary: string;
  org: string;
  role: string;
  /** Display period, e.g. "2023 – present". */
  period: string;
  /** Sort key — most recent first. */
  sortYear: number;
  kind: WorkKind;
  /** Facets used by the index filters. */
  tags: string[];
  stack: string[];
  /** Headline outcome, stated as plainly as possible. */
  outcome: string;
  /** Card image, relative to /assets. Omitted where nothing is publishable. */
  image?: string;
  /** True when a dedicated case study exists. */
  hasCaseStudy: boolean;
  liveUrl?: string;
}

/**
 * The three Impact applications share one Angular/Firebase estate and a set of
 * custom libraries versioned as git submodules, so they are listed as siblings
 * rather than folded into a single entry. A fourth app, the Library Manager,
 * was merged into the operations console and no longer exists separately.
 */
export const WORK: WorkItem[] = [
  {
    slug: 'impact-platform',
    name: 'Impact Platform & Storefront',
    summary: 'Public site and commerce for a discipleship ministry.',
    org: 'Impact Discipleship Ministries',
    role: 'Architect, developer, operator',
    period: '2023 – present',
    sortYear: 2026,
    kind: 'product',
    tags: ['Angular', 'Firebase', 'Commerce', 'Self-directed'],
    stack: ['Angular 20', 'Firebase', 'Cloud Functions', 'Stripe', 'PayPal', 'ShipEngine'],
    outcome:
      'Payments, fulfillment, tax and refunds in production — and a security review that moved financial writes behind a trusted server boundary.',
    image: 'assets/work/public/home.webp',
    hasCaseStudy: true,
    liveUrl: 'https://impactdisciples.com',
  },
  {
    slug: 'impact-admin',
    name: 'Impact Operations Platform',
    summary: 'CRM, CMS, LMS, storefront back office and campaign manager in one console.',
    org: 'Impact Discipleship Ministries',
    role: 'Architect, developer, operator',
    period: '2023 – present',
    sortYear: 2026,
    kind: 'product',
    tags: ['Angular', 'Firebase', 'CRM', 'CMS', 'LMS', 'Commerce', 'Self-directed'],
    stack: ['Angular 20', 'Firebase', 'Role-based auth', 'Form.io', 'Leaflet', 'Excel / PDF export'],
    outcome:
      'Nine operational domains behind one role-based console — contacts and organizations, order fulfillment, catalog, content, curriculum authoring, campaigns and reporting — so staff run the ministry without a developer in the loop.',
    image: 'assets/work/admin/dashboard.webp',
    hasCaseStudy: true,
  },
  {
    slug: 'impact-library',
    name: 'Impact Library',
    summary: 'Offline-first reader built to replace printed curricula.',
    org: 'Impact Discipleship Ministries',
    role: 'Architect, developer, operator',
    period: '2023 – present',
    sortYear: 2026,
    kind: 'product',
    tags: ['Angular', 'Firebase', 'Mobile', 'Offline', 'Self-directed'],
    stack: ['Angular 20', 'Firebase', 'Capacitor (Android)', 'PWA', 'i18n'],
    outcome:
      'Built so curricula stop being printed and shipped worldwide — now a community reader in four languages, designed from field conditions in rural Zambia where users often have connectivity only at install time.',
    image: 'assets/work/library/reader.webp',
    hasCaseStudy: true,
  },
  {
    slug: 'federal-reserve',
    name: 'Lincoln Platform Modernization',
    summary: 'Moving a mission-critical payments platform off WebLogic.',
    org: 'Federal Reserve Bank of Cleveland',
    role: 'Senior Software Engineer',
    period: '1 yr 9 mos — through Aug 2026',
    sortYear: 2025,
    kind: 'client',
    tags: ['Java', 'Spring', 'AWS', 'Modernization'],
    stack: ['Java 21', 'Spring Boot 4', 'Spring Framework 7', 'Docker', 'EKS'],
    outcome:
      'Java 8 / WebLogic 8 to Java 21 and Spring Boot 4 on a platform processing over $200 billion annually; 340+ libraries containerized for EKS.',
    hasCaseStudy: true,
  },
  {
    slug: 'jbhub',
    name: 'JBHub Portal & Tracer',
    summary: 'Shipment tracking and asset management for a trucking operator.',
    org: 'JBH Trucking',
    role: 'Lead Front End Engineer',
    period: '2023 – 2024',
    sortYear: 2024,
    kind: 'client',
    tags: ['Angular', 'Firebase', 'Integration', 'Leadership'],
    stack: ['Angular', 'Firebase', 'DevExpress', 'Primus', 'Macro Point', 'Samsara'],
    outcome:
      'Led a three-person team; integrated three external vendor systems behind one portal.',
    hasCaseStudy: true,
  },
  {
    slug: 'agent-portal',
    name: 'Agent Portal',
    summary: 'Policy tracking, training and commerce for 4,000+ agents.',
    org: 'Alliance Group IMO',
    role: 'Lead Front End Engineer',
    period: '2020 – 2023',
    sortYear: 2023,
    kind: 'client',
    tags: ['Angular', 'Firebase', 'Commerce', 'Leadership'],
    stack: ['Angular', 'Firebase', 'DevExpress', 'Stripe'],
    outcome:
      'Custom CMS, product store with inventory and payments, and a dashboard of agent sales statistics.',
    hasCaseStudy: true,
  },
  {
    slug: 'pathways',
    name: 'Pathways 2.0 Backend',
    summary: 'APIs and gateway behind a corporate training platform.',
    org: 'Chick-fil-A',
    role: 'Senior Software Engineer',
    period: '2 yrs 1 mo',
    sortYear: 2022,
    kind: 'client',
    tags: ['Java', 'Spring', 'AWS', 'API'],
    stack: ['Java', 'Spring Boot', 'AWS', 'DynamoDB', 'EKS'],
    outcome:
      'Designed the API gateway and the asynchronous integrations that let third-party systems feed the front end.',
    hasCaseStudy: true,
  },
  {
    slug: 'cfa-tax',
    name: 'Year-End Tax Platform',
    summary: '1099 generation and real-time tax calculation at scale.',
    org: 'Chick-fil-A',
    role: 'Senior Engineer, then Development Mentor',
    period: '2017 – 2021',
    sortYear: 2021,
    kind: 'client',
    tags: ['Java', 'Spring', 'AWS', 'Serverless', 'Leadership'],
    stack: ['Java', 'Spring Boot', 'Apache Camel', 'AWS Lambda', 'Kinesis'],
    outcome:
      '1099s for 3,000+ vendors and 1.5–2 million transactions a day; migrated to serverless without interrupting operations.',
    hasCaseStudy: true,
  },
  {
    slug: 'convergent',
    name: 'Convergent Health Platform',
    summary: 'Sharing health information with the WHO, CDC and others.',
    org: 'Deloitte Consulting',
    role: 'Senior Software Engineer',
    period: '9 mos',
    sortYear: 2023,
    kind: 'client',
    tags: ['Java', 'Spring', 'Kafka', 'Microservices'],
    stack: ['Spring Boot', 'Kafka', 'RabbitMQ', 'GraphQL', 'AWS'],
    outcome:
      'Kafka publishers and consumers applying business rules to transactions and disposing of them reliably.',
    hasCaseStudy: false,
  },
  {
    slug: 'jpmc-payments',
    name: 'AR/AP Payment Services',
    summary: 'Customer-facing payment microservices.',
    org: 'JPMorgan Chase & Co',
    role: 'Senior Software Engineer',
    period: '6 mos',
    sortYear: 2021,
    kind: 'client',
    tags: ['Java', 'Spring', 'Kafka', 'Microservices'],
    stack: ['Spring Boot', 'Kafka', 'Docker', 'Maven'],
    outcome:
      'Payment channel microservices and the gateway endpoints in front of them.',
    hasCaseStudy: false,
  },
  {
    slug: 'chewy-orders',
    name: 'Ordering Infrastructure',
    summary: 'Rebuilding how customer service orders were processed.',
    org: 'Chewy.com',
    role: 'Senior Java Engineer',
    period: '6 mos',
    sortYear: 2020,
    kind: 'client',
    tags: ['Java', 'AWS', 'Serverless'],
    stack: ['AWS Lambda', 'SQS', 'SNS', 'LocalStack'],
    outcome:
      'Event-driven order processing, tested end to end against LocalStack.',
    hasCaseStudy: false,
  },
];

@Injectable({ providedIn: 'root' })
export class WorkService {
  /**
   * Whether a case study exists is derived from the content itself rather than
   * trusted from a hand-maintained flag — otherwise a card can advertise a
   * study that was never written and bounce the reader back to the index.
   */
  private resolve(item: WorkItem): WorkItem {
    return { ...item, hasCaseStudy: !!CASE_STUDIES[item.slug] };
  }

  getAll(): WorkItem[] {
    return [...WORK]
      .sort((a, b) => b.sortYear - a.sortYear)
      .map(item => this.resolve(item));
  }

  getBySlug(slug: string): WorkItem | undefined {
    const found = WORK.find(w => w.slug === slug);
    return found ? this.resolve(found) : undefined;
  }

  /** Every tag in use, ordered by how often it appears. */
  getTags(): string[] {
    const counts = new Map<string, number>();
    for (const item of WORK) {
      for (const tag of item.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(e => e[0]);
  }
}
