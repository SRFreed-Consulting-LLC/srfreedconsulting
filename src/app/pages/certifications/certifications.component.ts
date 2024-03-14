import { Component, OnInit } from '@angular/core';
import { Certification, DataService } from './data';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certifications: Certification[];

  constructor(public dataservice: DataService) {
    this.certifications= this.dataservice.getCertifications();
   }

  ngOnInit() {
  }

}
