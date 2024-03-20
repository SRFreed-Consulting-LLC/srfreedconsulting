import { Component, NgModule } from '@angular/core';
import { AppInfoService } from '../../services/app-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  constructor(public appInfo: AppInfoService) { }
}

