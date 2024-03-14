import { Component, OnInit } from '@angular/core';
import { DataService, Project } from './data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  selectedIndex: number[] = [];

  tabs = [{
    text: 'Details',
    id: 0
  },{
    text: 'Skill and Tools',
    id: 1
  }];

  constructor(public dataservice: DataService) {
    this.projects = dataservice.getProjects();
    
    this.projects.forEach(() => {
      this.selectedIndex.push(0);
    })
   }

  ngOnInit() {
  }

  showTab(e: any, projectid: number){
    this.selectedIndex[projectid] = e.addedItems[0].id
  }
}
