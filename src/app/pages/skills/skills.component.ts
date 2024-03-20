import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  selectedIndex: number = 0;

  tabs = [{
    text: 'My Core Skills',
    id: 0
  },{
    text: 'Technical and Non-Technical Strengths',
    id: 1
  },{
    text: 'Tool Box',
    id: 2
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

  constructor() { }

  ngOnInit() {
  }

  showTab(e: any){
    this.selectedIndex = e.addedItems[0].id
  }
}
