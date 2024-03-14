import { Injectable } from "@angular/core";

export class Certification {
    id: number;
    title: string;
    company: string;
    year: string;
    icon?: string;
}

@Injectable({
    providedIn: 'root'
  })
  
  export class DataService {
    getCertifications(){
      return certifications;
    }
  }

const certifications: Certification [] = [
    {
        id:1,
        title:"Sun Certified Enterprise Architect for Java EE",
        company:"Sun Microsystems",
        year:"2000",  
        icon: 'assets/sun_logo.jpg'
    },
    {
        id:2,
        title:"Sun Certified Web Component Developer",
        company:"Sun Microsystems",
        year:"2000",  
        icon: 'assets/java_cert_web_comp_dev.bmp'
    }, 
    {
        id:3,
        title:"Sun Certified Java Programmer",
        company:"Sun Microsystems",
        year:"1999",  
        icon: 'assets/scjp.png'
    },    
    {
        id:4,
        title:"Microsoft Certified Systems Engineer",
        company:"Micorsoft",
        year:"1998",  
        icon: 'assets/Mcse.jpg'
    },
    {
        id:5,
        title:"Microsoft Certified Professional + Internet",
        company:"Micorsoft",
        year:"1998",  
        icon: 'assets/Mcp.png'
    },
    {
        id:6,
        title:"Microsoft Certified Professional",
        company:"Micorsoft",
        year:"1998",  
        icon: 'assets/Mcp.png'
    },
];
    
