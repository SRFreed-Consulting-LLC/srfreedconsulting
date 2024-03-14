import { Injectable } from "@angular/core";

export class Project {
    id: number;
    title: string;
    company: string;
    description: string;
    details: string[];
    frameworks: string[];
    cloudSkills?: string[];
    softSkills: string[];
    uniqueTools: string[];
    testTools?: string[];
    buildTools: string[];
    languages: string[];
    startDate: string;
    endDate: string;
    icon?: string;
}

@Injectable({
    providedIn: 'root'
  })
  
  export class DataService {
    getProjects(){
      return projects;
    }
  }

const projects: Project [] = [
    {
        id:0,
        title:"JBHub",
        company:"JBH",
        description:"About 2 years ago, I met a person (whom we became quick friends, as we were both Marines), who was looking to have some custom applications built for a growing company. After several meetings with the Owner and the new CEO, we identified their number 1 priority for Operations, and that was Tracking shipments. After several months of planning, we built the JBHub and implemented Tracer.",
        details:[
            "Gathered requirements, researched solutions, and created System Architecture Documentation.",
            "Defined, Architected, and Implemented Integration strategy.",
            "Created application infrastructure using Angular and DeveExpress.",
            "Worked with team to provide seamless API access to all 3 external vendor systems.",
            "Created first application for Portal to track Vehicle locations and Load locations.",
            "Provided mechanism for Tracking application to integrate into current TMS (Primus) to provide load details"
        ],
        frameworks:['Node.js', 'Angular 12+'],
        cloudSkills: ['GCP', 'Firebase(Firestore, Firestorage, Functions, Hosting, Auth)'],
        softSkills:['Application Architecture', 'Application Integration', 'Application Design', 'API Development'],
        uniqueTools:['DevExpress', 'Macro Point API', 'Samsera API', 'Primus API', 'Google API'],
        testTools:['Postman'],
        buildTools:['Visual Studio Code', 'Npm'],
        languages: ['Typescript', 'Javascript', 'SQL'],
        startDate:"11/2023",
        endDate:"Present",  
        icon: 'assets/jbh-logo.PNG'
    },
    {
        id: 1,
        title:"Agent Portal",
        company:"Alliance Group IMO",
        description:"The same friends within Alliance Group asked me to get more involved with starting their interal IT group. Lots of ideas emerged, but the priority was to build a Agent Portal to help support over 5,000 agents that were supported by Alliance Group. The portal needed to be secure, scalable, and easy to use for both Admins and for Users.",
        details:[
            "Gathered requirements, researched solutions, and created System Architecture Documentation.",
            "Designed Infrastructure and Batch Strategy to import data providing Agent Sales Stats.",
            "Designed and Implemented Custom Web Builder to allow Admins to create web pages for Portal Users.",
            "Implemented normal portal tools(User Registration and Management, Agent Profile Management, Company-to-Agent Communication, Scheduling)", 
            "Built custom online store that tracked Inventory Management and Product Sales using Stripe API.",
            "Built Agent Dashboard (using DevExpress Graphs and Widgets) allowing Agent to view historical and statistical for themselves and their teams."
        ],
        cloudSkills: ['GCP', 'Firebase(Firestore, Firestorage, Functions, Hosting, Auth)'],
        frameworks:['Node.js', 'Angular 6+'],
        softSkills:['Application Design', 'API Development'],
        uniqueTools:['DevExpress', 'Stripe'],
        buildTools:['Visual Studio Code', 'Npm'],
        languages: ['Typescript', 'Javascript', 'SQL'],
        startDate:"01/2020",
        endDate:"03/2023", 
        icon:'assets/alliance-group_logo.png' 
    },
    {
        id: 2,
        title:"Living Benefits Mobile App",
        company:"Alliance Group IMO",
        description:"Some good friends of mine recently moved into C-Level positions within Alliance Group. Lots of ideas emerged, but the immediate need was to rebuild a mobile application that the source code was no longer available to them. This application was used to augment their Sales Team by providing an augmented Reality app that worked hand-in hand with their primary sales tool, the 'Living Benefits' handbook.",
        details:[
            "Built cross device, Augmented Reality application using Unity and Vuforia that enabled Image recognition technology, launching videos related to recognized image.",
            "The architecture of the application was built upon video storage service from Vimeo, Data Storage in Firebase and was distributed for both IOS and Android devices.",
            "Learned and built application using Unity and Vuforia.",
            "Integrated build and deployment technology with Firebase to provide quicker future builds."
        ],
        frameworks:['Firebase(Firestore, Firestorage)'],
        softSkills:['Application Design', 'Mobile Development'],
        uniqueTools:['Unity', 'Vuforia Augmented Reality SDK', 'Firebase', 'Vimeo API', 'iOS Development', 'Android Development', 'TestFlight'],
        buildTools:['Visual Studio', 'XCode'],
        languages: ['C#', 'Objective-C', 'Javascript'],
        startDate:"03/2019",
        endDate:"12/2019",  
        icon:"assets/alliance-group_logo.png"
    }
];
    
