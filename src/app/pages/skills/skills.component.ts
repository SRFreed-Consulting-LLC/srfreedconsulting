import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
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

  constructor() { }

  ngOnInit() {
  }

  showTab(e: any){
    this.selectedIndex = e.addedItems[0].id
  }
}
