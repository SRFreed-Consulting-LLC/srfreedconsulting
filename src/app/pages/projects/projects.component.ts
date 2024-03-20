import { Component, OnInit } from '@angular/core';
import { DataService, Project } from './data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
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

  logos = [
    '../../assets/logos/java_ee.PNG',
    '../../assets/logos/java.png',
    '../../assets/logos/typescript.png',
    '../../assets/logos/javascript.png',
    '../../assets/logos/sql.png',
    '../../assets/logos/tsql.PNG',
    '../../assets/logos/plsql.png',
    '../../assets/logos/python.png',
    '../../assets/logos/bash.png',
    '../../assets/logos/angular.png',
    '../../assets/logos/node.png',
    '../../assets/logos/npm.png',
    '../../assets/logos/google_maps.png',
    '../../assets/logos/gson.PNG',
    '../../assets/logos/jchart.PNG',
    '../../assets/logos/jquery.png',
    '../../assets/logos/jqwidgets.jpg',
    '../../assets/logos/jsplumb.png',
    '../../assets/logos/poi.png',
    '../../assets/logos/sass.png',
    '../../assets/logos/css.png',
    '../../assets/logos/html.png',
    '../../assets/logos/knockout.png',
  ]

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
