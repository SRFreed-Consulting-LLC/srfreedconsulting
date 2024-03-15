import { Injectable } from "@angular/core";

export class JobContract {
    id: number;
    title: string;
    company: string;
    description: string;
    details?: string[];
    frameworks: string[];
    cloudSkills?: string[];
    softSkills: string[];
    uniqueTools?: string[];
    testTools?: string[];
    buildTools?: string[];
    languages: string[];
    startDate: string;
    endDate: string;
    icon?: string;
}

@Injectable({
    providedIn: 'root'
  })
  
  export class DataService {
    getContracts(){
      return contracts;
    }
  }

const contracts: JobContract [] = [
    {
        id:1,
        title:"Senior Software Engineer",
        company:"TekStream Solutions",
        description:"Served as a Senior Backend Java Developer on Pathways 2.0 Software team creating Custom Training Software built for Chick-Fil-A.",
        details:[
            'Drove the design and implementation of Backend APIs used',
            "Built, monitored, and ensured stability for all asynchronous integration processes",
            'Supported Front End developers in defining data models and API definitions.',
            'Implemented a system to integrate 3rd Party software to support Front End.',
            'Built Unit tests to test all tiers of the Backend application.'
        ],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Security, Rest)', 'Hibernate ORM'],
        cloudSkills: ['AWS(DynamoDB, SQS, API Gateway, Redis, Cloud Formation, S3, EKS, Elastisearch)'],
        softSkills:['API Documentation', 'Java Software Development','Application Architecture'],
        languages: ['Java 11', 'Javascript', 'SQL', 'Python'],
        uniqueTools:['Data Dog', 'BrightCove', 'Learn Upon'],
        testTools:['Junit 4/5', 'Mockito'],
        buildTools:['Jenkins', 'Github', 'Artifactory', 'Github Actions', 'Maven', 'Docker'],
        startDate:"01/2023",
        endDate:"02/2024",  
        icon: 'assets/tekstream_solutions_logo.jpg'
    },
    {
        id: 2,
        title:"Senior Software Engineering",
        company:"Deloitte Consulting",
        description:"Served as a Senior Java Developer working on the Convergent Project for health care organizations to connect data and share information and insight.",
        details:[
            'Built new or enhanced current Messaging handlers asynchronously receive and process messages from messaging service, access business rules for each transaction, and disposition of transactions.',
            'Built business rule interfaces to handle Transaction Management and dispositioning of transactions.',
            'Defined Test plans and implemented testing strategies for Testing Message handlers and Business Rules.',
        ],
        cloudSkills: ['AWS(Lambda, SQS, SNS, ElastiCache, S3, EKS)'],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Rest)', 'Hibernate ORM'],
        softSkills:['API Documentation', 'Java Software Development', 'Application Architecture'],
        languages: ['Java 11', 'Javascript', 'SQL'],
        uniqueTools:['Camunda BPM', 'RabbitMQ'],
        testTools:['Junit 4/5', 'Mockito'],
        buildTools:['Maven', 'Github', 'Artifactory', 'Docker'],
        startDate:"06/2022",
        endDate:"01/2023", 
        icon:'assets/next_consulting_srl_logo.jpg' 
    },
    {
        id: 3,
        title:"Senior Test Development Engineer",
        company:"Northwestern Mutual",
        description:"Served as a Senior Testing Consultant on the Shift Left Team.This team was assembled to help internal development teams better conform to testing standards and practices.",
        details:[
            'Engaged with internal development teams on testing strategies. requiring me to know and understand all technologies used on each project.',
            'Generated platform-specific testing standards and strategies.',
            'Developed and ran Training courses to train developers on those strategies.',
            'Researched and implemented technical tools to enforce testing standards.'
        ],
        frameworks:['Java Enterprise Edition'],
        softSkills:['API Documentation', 'Java Software Development', 'Test Engineering'],
        languages: ['Java 11', 'SQL'],
        testTools:['Junit 4/5', 'Mockito', 'Jacoco', 'Sonar Qube'],
        buildTools:['Maven', 'Gradle', 'Github', 'Artifactory',],
        startDate:"01/2022",
        endDate:"05/2022",  
        icon:"assets/northwestern_mutual_logo.jpg"
    },
    {
        id: 4,
        title:"Senior Software Engineer",
        company:"JPMorgan Chase & Co",
        description:"Served as a Senior Application Developer on the customer-facing Payment AR/AP platform.",
        details: [
            'Built and maintained AR/AP microservices that allowed customers to define their current business structure, define customers, and send out payments using different payment channels.',
            'Enhanced existing data model to allow for integration of more backend Finance Systems.',
            'Created end-to-end testing plan routines to enforce AR/AP system transactional integrity.',
        ],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Security, Rest, MVC)', 'Hibernate ORM'],
        softSkills:['API Documentation', 'Java Software Development'],
        languages: ['Java 11', 'SQL'],
        testTools:['Junit 4/5', 'Mockito', 'Jacoco', 'Sonar Qube'],
        buildTools:['Jenkins', 'Github', 'Artifactory', 'Maven', 'Docker'],
        startDate:"08/2021",
        endDate:"12/2021",  
        icon:"assets/jpmorganchase_logo.jpg"
    },      
    {
        id: 5,
        title:"Senior Java Software Engineer",
        company:"Chick-fil-A Corporate",
        description:"Returned to serve as a Senior Application Developer on internal Tax Software team.",
        details: [
            'Provide aggregated tax reports, tax transaction auditing, and generation of 1099’s for over 3000 vendors working with Chick-fil-A.',
            'Integrated and Monitored Tax Audit Software to provide real-time and offline tax calculations for daily transactions numbering in the 1.5 million to 2 million per day range.',
            'Created a Workflow Engine that supported all of the above processes using Apache Camel for validation of EOY reports.',
        ],
        cloudSkills: ['AWS(RDS, Lambda, Fargate, SQS, SNS, BeanStalk, API Gateway, Kenesis, S3)'],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Security, Rest)', 'Hibernate ORM'],
        softSkills:['API Documentation', 'Java Software Development'],
        languages: ['Java 11', 'Typescript', 'Javascript', 'SQL', 'Python'],
        uniqueTools:['Angular', 'Node.js', 'Apache Camel'],
        testTools:['Junit 4/5', 'Mockito', 'Jacoco', 'Sonar Qube'],
        buildTools:['Jenkins', 'Github', 'Artifactory', 'Maven', 'Docker'],
        startDate:"11/2019",
        endDate:"06/2021",  
        icon:"assets/CFA_logo.jpg"
    },  
    {
        id: 6,
        title:"Senior Java Engineer",
        company:"Chewy.com",
        description:"Served as a Senior Application Developer on a Customer Service project to upgrade the current application to as serverless infrastructure and stream ordering.",
        details:[
            'Built and enhanced SQS and SNS topics and queues, data models, and client libraries.',
            'Implemented service using AWS Lambda to handle Messages from Topics and Queues',
            'Built testing infrastructure and suite using AWS Localstack.'
        ],
        cloudSkills: ['AWS(RDS, Lambda, SQS, SNS)'],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Security, Rest)', 'Hibernate ORM', 'Enterprise JavaBeans (EJB)'],
        softSkills:['API Documentation', 'Java Software Development'],
        languages: ['Java 11', 'SQL'],
        testTools:['Junit 4/5', 'Mockito'],
        buildTools:['Maven', 'Docker', 'Github', 'Artifactory'],
        startDate:"11/2019",
        endDate:"06/2021",  
        icon:"assets/chewy_com_logo.jpg"
    },  
    {
        id: 7,
        title:"Enterprise Architect",
        company:"Definition 6",
        description:"Served as an Enterprise Architect Consultant on a project for International Marketing Centers to consolidate an online ordering platform for newly acquired companies.",
        details:[
            'Architected the Enterprise Services Layer for the Multi Venue Digital Platform along with integration strategy for newly acquired Americas Mart.',
            'Created all Architecture Models required for acceptance through Architecture 1 and Architecture 2 toll gates (CHEF Methodology).',
            'The list of artifacts required includes the Business Domain Model, Application Domain Model, Component Models, and Deployment Model for each system. Models were built for both AWS and Azure deployment.',
            'Designed a Digital Identity platform using AWS Cognito.',
            'Planned out day-to-day development activities to build the Enterprise Services layer.',
            'Planned, designed, and developed strategies for integrating external systems into Enterprise Services Layer.',
        ],
        cloudSkills: ['AWS(Cognito)'],
        frameworks:['Java Enterprise Edition', 'Spring (Boot, Data, Security)', 'Hibernate ORM'],
        softSkills:['API Documentation', 'Java Software Development', 'Application Architecture', 'Enterprise Architecture'],
        languages: ['Java 8', 'SQL'],
        uniqueTools:[ 'Sparx Systems Enterprise Architect', 'Hippo CMS'],
        startDate:"02/2019",
        endDate:"11/2021",  
        icon:"assets/definition_6_logo.jpg"
    },   
    {
        id: 8,
        title:"Development Mentor",
        company:"Chick-fil-A Corporate Support Center",
        description:"Worked as a Java Mentor with the internal Tax Software team. My main responsibility was to work with developers of the 1099 application, ensuring proper development techniques were implemented.",
        details:[
            'Provided aggregated tax reports, tax transaction auditing, and generation of vendor 1099 creation for over 3000 vendors working with Chick-fil-A.',
            'Developed the 1099 application is an Angular JS application (SPA), deployed and running within an AWS Beanstalk instance, leveraging RDS and other AWS Services.',
            'Consulting with Enterprise Architect to deliver data Integration from external accounting software systems into the 1099 application.',
            'Built AWS Lambdas to monitor external S3 repositories for data updates.',
            'Built and supported Lambdas and Farget instances to import data nightly, and create annual 1099 export files to be generated.',
        ],
        cloudSkills: ['AWS(RDS, Lambda, Fargate, BeanStalk, API Gateway, Kenesis, S3)'],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Security, Rest)', 'Hibernate ORM'],
        softSkills:['Java Software Development','Application Architecture'],
        languages: ['Java 8', 'Typescript', 'Javascript', 'SQL', 'Python'],
        uniqueTools:['AngularJS'],
        testTools:['Junit 4/5', 'Mockito', 'Jacoco', 'Sonar Qube'],
        buildTools:['Jenkins', 'Maven', 'Docker', 'Github', 'Artifactory',],
        startDate:"10/2017",
        endDate:"02/2019",  
        icon:"assets/CFA_logo.jpg"
    },  
    {
        id: 9,
        title:"Director Of Development",
        company:"Forty8Fifty Labs",
        description:"Served as Director of Development in a startup company with 12 employes.",
        details:[
            'Managed daily tasks for 5 developers while providing architecture and development guidance.', 
            'Worked primarily on building Plugins for Atlassian products (JIRA / JSD) for the Cloud and local Atlassian installations along with multiple front and back-end utilities.',
            'Designed and developed a JIRA Service Desk plugin that allows for designing a Service Ticket workflow based on parsing incoming Service Desk Requests.'
        ],
        cloudSkills: ['AWS(RDS, ECS)'],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Security, Rest)', 'Hibernate ORM'],
        softSkills:['API Documentation', 'Java Software Development','Application Architecture'],
        languages: ['Java 8', 'Javascript', 'SQL'],
        uniqueTools:['Node.js', 'Splunk', 'Data Dog', 'Atlassian SDK', 'Active Objects', 'Knockout'],
        testTools:['Junit 4/5', 'Mockito'],
        buildTools:['Chef', 'Ant', 'Subversion'],        
        startDate:"06/2016",
        endDate:"09/2017",
        icon:"assets/forty_8_fifty_labs_logo.jpg"
    },      
    {
        id: 10,
        title:"Integration Architect",
        company:"OSG",
        description:"Consulted on a startup project with a major financial services company based out of New York City to build an online money lending application.",
        details:[ 
            'Participated as a SCRUM team member to provide guide technologies, services, design patterns, and risks for building a Consumer Loan Platform.',
            'Provided an initial System Architecture Design with phase 1 application documentation and bootstrap project.'
        ],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, Rest)', 'Hibernate ORM'],
        softSkills:['API Documentation', 'Java Software Development', 'Application Architecture', 'Integration Architecture'],
        uniqueTools:['Apache Camel', 'MongoDB'],
        languages: ['Java 6', 'SQL'],
        testTools:['Junit 4/5', 'Mockito', 'Jacoco', 'Sonar Qube'],
        buildTools:['Jenkins', 'Maven', 'Subversion'],
        startDate:"12/2015",
        endDate:"06/2016",
        icon:"assets/connectwithosg_logo.jpg"
    },  
    {
        id: 11,
        title:"Java Architecture Consultant",
        company:"Federal Home Loan Bank of Atlanta",
        description:"Served as both an Architect and Developer to design and build a multi-tiered, Web Service / Rest Service based user administration system to manage Local and Remote user’s permissions to enterprise applications.",
        details:[
            'Participated as SCRUM Master and Team Member. This application was an integration project responsible for integrating both custom and 3rd party applications while introducing a new development Framework for the company.',
            'Built user interface using legacy WebLogic 10.3 Workshop.',
            'Provided security using Custom Self Service application and RSA (Cleartrust).',
            'Refactored POJO beans into EJB 2 specific Session Beans.',
            'Designed and built custom Email application using EJB’s (MDB) and JMS.',
            'Designed and built Rest based Service to run on JBoss 6.0 server.',
            'Leveraged provider Pattern to allow for service to dynamically interact with Different services such as RSA and ACI (Wire Transfer Application).',
            'Refactored POJO beans as EJB 3 specific Session Beans.',
            'Integrated Hibernate into the Service layer to manage Database interactions.',
            'Build an interface for Selenium tests to be run against the Service layer.',
            'Built Jenkins jobs to manage both the client and service applications developed.',
            'Build Session beans and MDBs using Eclipse Juno and WebLogic Workshop 10.3.',
            'Leveraged XML Beans to manage Enterprise data schema.',
            'Used Hibernate 4 for database Persistence to an Oracle and Sybase database.',
            'Used SVN for Version Control and Jenkins for Continuous Integration.',
            'Used Version1 heavily to manage team tasks along with MAVEN to manage Builds, Utilized JUNIT as the Unit Test Framework.',
        ],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Batch, Data, Security, Rest)', 'Hibernate ORM', 'Enterprise JavaBeans (EJB)'],
        softSkills:['Java Software Development'],
        uniqueTools:['RSA Security', 'JBoss Application Server', 'WebLogic'],
        languages: ['Java 6', 'Javascript', 'SQL'],
        testTools:['Junit 4/5', 'Mockito', 'Selenium'],
        buildTools:['Jenkins', 'Maven', 'Subversion'],
        startDate:"06/2015",
        endDate:"12/2015",  
        icon:"assets/FHLB_logo.jpg"        
    },   
    {
        id: 12,
        title:"Senior Java Developer",
        company:"Caesars Entertainment (OSG)",
        description:"Served as Senior Developer of 7 person Application Development team. Created a complex multi-threaded, multi-tiered, Message driven application that listens for JMS Messages on a Tibco Service Bus and performed transaction driven data base updates to Patron records for database containing over 50 million records.",
        details:[
            'Provided a Batch Import Framework to allow affiliates to upload Patron updates via a batch file.',
            'Imported files from remote locations and parsed files for individual detailed information.',
            'Interpreted details from files and populated data model built by JAXB. ',
            'Pre-processed files for validity before sending to bank for updating.',
            'Heavily utilized Factory Patterns to create appropriate objects for Batch Import Framework.',
            'Designed and built Message Driven EJB’s for the Bank Service to provide Import functionality. Refactored 3 other MDB’s to allow Import MDB to leverage existing services.',
            'Pushed logic down from MDB’s into Process level classes. Transitioned the Hibernate Entity Manager that used JTA persistence into NON JTA Persistence units to provide Bean Managed Persistence (BMP) instead of Container Managed Persistence (CMP)',
            'Defined Transactional boundaries of refactored classes to allow for Exceptions to be bubbled up to the Service method and handled appropriately without ending Transactions',
            'Ensured data integrity by building preprocessing validation methods that were executed before the Processing of the transaction.',
            'Built a customer Task Queue Service wrapper for the Websphere Task Manager to provide a common framework for executing Runnable objects on a separate managed thread.',
            'Helped to design a Customer Unified Testing Framework that tested data integrity from Transactions, transaction processing accuracy, and different Database and JMS scenarios.'
        ],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Batch, Data)', 'Hibernate ORM', 'Enterprise JavaBeans (EJB)'],
        softSkills:['Java Software Development', 'Integration Architecture'],
        languages: ['Java 6', 'Javascript', 'SQL'],
        uniqueTools:['TIBCO EMS'],
        testTools:['Junit 4', 'Mockito'],
        buildTools:['Maven', 'Subversion'],
        startDate:"04/2014",
        endDate:"06/2015", 
        icon:"assets/caesars_entertainment_inc_logo.jpg" 
    },     
    {
        id: 13,
        title:"Lead Java Developer",
        company:"Nexidia",
        description:"Served as Lead Developer of 3 person Application Development team.",
        details: [
            'Created a complex multi-threaded, multi-tiered, MVC workflow based application to extract required media and meta data files from customer environments to be processed by reporting and processing engine at Nexidia.',
            'Provided a management interface as well as a remote server interface to allow for distributed processing on remote sites.',
            'Custom-built administrative interface for the user to define customer hierarchy (Customer, Sites, Servers, Processes, and Resources), configure each item as needed, and control items in the hierarchy when required.',
            'Used custom-built protocol using SFTP to manage remote systems behind firewalls using JCIFS.',
            'Leveraged a customer-built “heartbeat” to provide for the status of remote components (Server, Process, and Resources).',
            'Provided custom-designed workflow interface to graphically layout workflow components and describe how terabytes of content were moved from the Customer site to Nexidia.',
            'Used over 20 custom-built plug-and-play components in the workflow interface. These components were used to query databases (JDBC), identify media, analyze the media (NIA Workbench), move the media (JCIFS), extract metadata (OPENZIP, OPENCVS), and transform media and files to the appropriate format (GSON).',
            'Analyzed media files to look for duplicate content, the language of media files, and blank spots in media files.',
            'Reported runtime statistics for analysis of process performance and to allow the user to graphically see where the errors occurred during processing files.',
            'Provided an alerting system to allow remote servers to send alerts to designated administrators upon encountering an Error, or when a defined error threshold had been exceeded.'
        ],
        frameworks:['Java Enterprise Edition', 'Spring(Boot, Data, REST)', 'Hibernate ORM', 'Enterprise JavaBeans (EJB)'],
        softSkills:['Java Software Development', 'Application Architecture'],
        uniqueTools:['SFTP', 'Open Zip'],
        languages: ['Java 6', 'Javascript', 'SQL'],
        testTools:['Junit 4', 'Mockito'],
        buildTools:['Maven'],
        startDate:"08/2013",
        endDate:"04/2014",
        icon:"assets/nexidia_logo.jpg"

    },  
    {
        id: 14,
        title:"Lead Java Developer",
        company:"AT&T",
        description:"Served as Lead Developer of internal 5 person Web Development team. Created a Rich interface-web based application for executives to view reports on the web or on a mobile device",
        details: [
            'Developed a tabbed interface for users to quickly view uploaded reports.',
            'Provided report management using an accordion-style menu system.',
            'Provided administration interface to allow report producers to upload reports.',
            'Provided the ability to sort reports based on user “favorites”, (instance, series, or category favorites) or the most recently updated reports available.',
            'Provided the ability to search through reports based upon report meta-data and quickly view other reports.',
        ],
        frameworks:['Java Enterprise Edition', 'Enterprise JavaBeans (EJB)'],
        softSkills:['Java Software Development', 'Application Architecture'],
        uniqueTools:['JavaServer Pages (JSP)', 'JDBC', '2FA'],
        languages: ['Java 6', 'Javascript', 'SQL'],
        testTools:['Junit 4', 'Mockito'],
        buildTools:['Apache Ant'],
        startDate:"10/2012",
        endDate:"08/2013",
        icon:"assets/att_logo.jpg"
    }       
];
    
