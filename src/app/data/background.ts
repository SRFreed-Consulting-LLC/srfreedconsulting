/**
 * Career history, leadership thread and credentials.
 *
 * This supersedes the old Experience, Certifications and Leadership pages —
 * the content from all three lives here so nothing was lost when they were
 * folded into a single Background screen.
 */

export interface TimelineEntry {
  org: string;
  role: string;
  period: string;
  /** Sort key, most recent first. */
  from: number;
  summary: string;
  points?: string[];
  /** Rendered with emphasis — the engagements that carry the most weight. */
  notable?: boolean;
}

export interface LeadershipItem {
  title: string;
  where: string;
  body: string;
}

export interface Credential {
  name: string;
  issuer: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    org: 'Federal Reserve Bank of Cleveland',
    role: 'Senior Software Engineer',
    period: 'through Aug 2026 · 1 yr 9 mos',
    from: 2024,
    summary:
      'Embedded on the Lincoln product team for 18 months, modernizing a mission-critical application that processes over $200 billion annually.',
    points: [
      'Java 8 / WebLogic 8 → Java 21, Spring Boot 4, Spring Framework 7',
      'Defined and drove the cloud migration strategy',
      'Containerized 340+ libraries and deployable units for EKS',
      'Redesigned the testing strategy as the monolith moved to microservices',
      'Drove team-wide adoption of GitLab Duo for troubleshooting and review',
    ],
    notable: true,
  },
  {
    org: 'Impact Discipleship Ministries',
    role: 'Architect, developer, operator',
    period: '2023 – present',
    from: 2023,
    summary:
      'Four Angular and Firebase applications I designed, launched and still run in production, including payments, fulfillment and support.',
    notable: true,
  },
  {
    org: 'JBH Trucking',
    role: 'Lead Front End Software Engineer',
    period: '2023 – 2024',
    from: 2023,
    summary: 'Led a three-person team building a customer and employee portal.',
    points: [
      'Shipment tracking, asset management and future booking',
      'Integrations with Primus, Macro Point and Samsara',
    ],
  },
  {
    org: 'Alliance Group IMO',
    role: 'Lead Front End Software Engineer',
    period: '2020 – 2023',
    from: 2020,
    summary:
      'Led a three-person team building an agent portal serving over 4,000 users.',
    points: [
      'Requirements gathering and system architecture',
      'Custom product store with inventory, catalog and payments',
      'Custom CMS for admins to create and deploy content',
      'Complete portal authentication service',
    ],
  },
  {
    org: 'Chick-fil-A',
    role: 'Senior Software Engineer — Pathways 2.0',
    period: '2 yrs 1 mo',
    from: 2019,
    summary:
      'Built the backend APIs behind the Pathways 2.0 training platform, driving their design and implementation.',
    points: [
      'API gateway and supporting documentation for the front-end team',
      'Third-party integrations and all asynchronous integration processes',
      'Augmented the enterprise data model as systems were integrated',
    ],
  },
  {
    org: 'Deloitte Consulting',
    role: 'Senior Software Engineer',
    period: '9 mos',
    from: 2022,
    summary:
      'Built the Convergent platform used by health care organizations to share information with the WHO, CDC and others.',
    points: [
      'Spring microservices, DAO models, API gateway',
      'Kafka publishers and consumers against the primary message broker',
    ],
  },
  {
    org: 'Northwestern Mutual',
    role: 'Senior Test Development Engineer',
    period: '5 mos',
    from: 2022,
    summary:
      'Joined the Shift Left team to raise testing standards across internal development teams.',
    points: [
      'Platform-specific testing standards and training courses',
      'Researched and implemented tooling to enforce them',
    ],
  },
  {
    org: 'Chewy.com',
    role: 'Senior Java Engineer',
    period: '6 mos',
    from: 2020,
    summary:
      'Rebuilt ordering-system infrastructure on the customer service team.',
    points: [
      'SQS and SNS topics and queues, data models, client libraries',
      'AWS Lambda services, tested against LocalStack',
    ],
  },
  {
    org: 'JPMorgan Chase & Co',
    role: 'Senior Software Engineer',
    period: '6 mos',
    from: 2021,
    summary:
      'Built customer-facing payment services on the Payment Channels team for the AR/AP platform.',
    points: [
      'AR/AP microservices across multiple payment channels',
      'Extended the API gateway for new endpoints',
      'Kafka publishers and consumers for transaction events',
    ],
  },
  {
    org: 'Chick-fil-A',
    role: 'Senior Java Engineer, then Development Mentor — Tax Software',
    period: '2017 – 2021',
    from: 2017,
    summary:
      'Year-end tax reporting platform, then three years mentoring the team through a serverless migration.',
    points: [
      '1099s for over 3,000 vendors; 1.5–2 million transactions a day',
      'Workflow engine built on Apache Camel for EOY report validation',
      'Migrated the 1099 application to AWS serverless without interrupting operations',
      'Led and mentored junior developers through the redesign',
    ],
    notable: true,
  },
  {
    org: 'Definition 6',
    role: 'Enterprise Architect Consultant',
    period: '11 mos',
    from: 2019,
    summary:
      'Architected consolidation of an online ordering platform across newly acquired companies.',
    points: [
      'Enterprise Services Layer and integration strategy',
      'Architecture models through Architecture 1 and 2 tollgates (CHEF)',
    ],
  },
  {
    org: 'Forty8Fifty Labs',
    role: 'Lead Software Developer',
    period: '1 yr',
    from: 2016,
    summary:
      'Led the Customer Plugin Team at a 12-person startup building workflow products for Atlassian customers.',
    points: [
      'Architecture and development guidance for Atlassian Cloud and server plugins',
      'JSD plugin generating service ticket workflows from incoming requests',
    ],
  },
  {
    org: 'Goldman Sachs',
    role: 'Integration Architect',
    period: '1 yr',
    from: 2015,
    summary:
      'Shaped architecture, technology direction and risk management for a new consumer loan platform.',
  },
  {
    org: 'Federal Home Loan Bank of Atlanta',
    role: 'Java Architecture Consultant',
    period: '1 yr',
    from: 2015,
    summary:
      'Designed and built a multi-tiered REST identity platform managing permissions across enterprise applications.',
  },
  {
    org: 'Caesars Entertainment',
    role: 'Senior Java Developer',
    period: '11 mos',
    from: 2014,
    summary:
      'Multi-threaded, message-driven application performing transaction-driven updates to patron records.',
    points: [
      'Batch import framework for affiliate uploads',
      'Custom task queue service wrapping the WebSphere task manager',
    ],
  },
  {
    org: 'Nexidia',
    role: 'Lead Java Developer',
    period: '6 mos',
    from: 2013,
    summary:
      'Led a three-person team building a workflow application extracting media and metadata from customer environments.',
    points: [
      'Custom heartbeat protocol monitoring distributed remote components',
      'Alerting system with configurable error thresholds',
    ],
  },
  {
    org: 'Jacada, Inc',
    role: 'Project Lead / Senior Solution Architect, North America',
    period: '2005 – 2011',
    from: 2005,
    summary:
      'One of two solution architects reporting to the Director of Professional Services, leading three to four project teams.',
    points: [
      'SOW scoping, project estimates, RFP responses and risk mitigation',
      'Managed remote teams in Israel and India',
      'Mentored and supervised technical leads',
      'Harrah\'s, Nationwide, BlueCross BlueShield, Cox Communications, Adelphia',
    ],
  },
  {
    org: 'Rollins Corporation',
    role: 'Advisory Engineer',
    period: '2003 – 2005',
    from: 2003,
    summary:
      'Full lifecycle development, focused on requirements, domain analysis and end-to-end implementation.',
    points: [
      'Three-tier Struts application with a multithreaded scheduling system',
      'Web services integration with legacy systems for a custom CRM',
    ],
  },
  {
    org: 'The Ross Group',
    role: 'Senior Developer / Team Lead',
    period: '2002 – 2003',
    from: 2002,
    summary:
      'Led a seven-person team designing a B2E / B2C application for AAA clubs across America.',
  },
  {
    org: 'Epicentric',
    role: 'Solution Architect',
    period: '2001',
    from: 2001,
    summary:
      'Integrated database, web and third-party applications into the Epicentric portal framework.',
    points: [
      'SOAP web services (UDDI, WSDL) integrated into the portal framework',
      'Portal applications using JSP, Servlet and XML/XSL',
    ],
  },
  {
    org: 'Clayton College and State University',
    role: 'Visiting Professor',
    period: '1999 – 2001',
    from: 1999,
    summary:
      'Taught network servicing and administration to students working toward an associate degree in network technology.',
  },
  {
    org: 'Delta Airlines',
    role: 'Senior Engineer and Webmaster',
    period: '1997 – 2001',
    from: 1997,
    summary:
      'Full lifecycle development using RUP and Rational Rose; recognized as SME for Java web development and web server technology.',
    points: [
      'JDK 1.1/1.2, JSP, JavaBeans, Servlets, Tibco Rendezvous, JDBC, JNDI, RMI',
      'One of three webmasters maintaining 26 applications for 75,000 employees worldwide',
      'Coordinated web activities with external clients including HP and Sun Microsystems',
    ],
  },
  {
    org: 'Atlanta Legal Aid Society',
    role: 'Systems Engineer and DBA',
    period: '1995 – 1997',
    from: 1995,
    summary:
      'Provided expertise across all technology for the firm — purchasing, direction, application design and reporting.',
  },
  {
    org: 'United States Marine Corps',
    role: 'Platoon Sergeant, Headquarters Platoon, 8th Marines',
    period: '1989 – 1995',
    from: 1989,
    summary:
      'Designed and administered the company training database. Meritoriously promoted twice for leadership and analytical skills.',
    notable: true,
  },
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    title: 'Sergeant before engineer',
    where: 'United States Marine Corps, 1989–1995',
    body:
      'Platoon Sergeant for Headquarters Platoon, 8th Marines. Meritoriously promoted twice — once by the commanding officer for analytical work supporting the regimental training office. The habits formed there, about ownership and about people, predate everything technical.',
  },
  {
    title: 'Three years mentoring a team, not managing one',
    where: 'Chick-fil-A Tax Software, 2017–2019',
    body:
      'Brought in as a Development Mentor rather than a lead: guiding junior developers through a serverless migration of the 1099 platform, setting development practices and code review standards, and completing the migration without interrupting business operations.',
  },
  {
    title: 'Small teams, end to end',
    where: 'JBH, Alliance Group, Nexidia, Ross Group, Forty8Fifty',
    body:
      'Repeatedly led teams of three to seven engineers where leading meant delivering alongside them — architecture, requirements, code review, and the production support afterwards.',
  },
  {
    title: 'Raising the floor across other teams',
    where: 'Northwestern Mutual Shift Left, 2022',
    body:
      'Engaged internal development teams on testing strategy, wrote platform-specific standards, and ran the training courses that taught them — which required understanding every stack in use, not just my own.',
  },
  {
    title: 'Coaching skeptics through AI adoption',
    where: 'Now',
    body:
      'I came to agentic development hesitant, so I recognize the resistance. I coach experienced engineers through the same arc — fear, to AI-assisted, to agentic — and establish the review standards and quality gates that make agent-generated code trustworthy.',
  },
];

export const CREDENTIALS: Credential[] = [
  { name: 'Sun Certified Java Developer', issuer: 'Sun Microsystems' },
  { name: 'Sun Certified Web Component Developer', issuer: 'Sun Microsystems' },
  { name: 'Sun Certified Enterprise Architect for Java EE', issuer: 'Sun Microsystems' },
  { name: 'Microsoft Certified Systems Engineer', issuer: 'Microsoft' },
  { name: 'Microsoft Certified Professional', issuer: 'Microsoft' },
  { name: 'Microsoft Certified Professional + Internet', issuer: 'Microsoft' },
];
