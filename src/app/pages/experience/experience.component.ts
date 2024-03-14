import { Component, OnInit } from '@angular/core';
import { DataService, JobContract } from './data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  popupVisible = false;
  contracts: JobContract[];
  selectedContract: JobContract;
  
  constructor(public dataservice: DataService) {
    this.contracts= this.dataservice.getContracts();
   }

  ngOnInit() {}

  showContract(e: number){
    let contracts: JobContract[] = this.dataservice.getContracts();

    if(contracts){
      let contract = contracts.find(contract => contract.id == e);

      if(contract){
        this.selectedContract = contract;
      }
    }

    this.popupVisible = true;
  }

}
