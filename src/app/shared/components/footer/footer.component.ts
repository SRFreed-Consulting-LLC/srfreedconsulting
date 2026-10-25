import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navigation, NavigationItem } from '../../../app-navigation';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer__wrap">
        <span class="footer__name">SRFreed Consulting, LLC</span>
        <nav class="footer__nav" aria-label="Footer">
          <ul class="footer__list">
            <li *ngFor="let item of items">
              <a class="footer__link" [routerLink]="item.path">{{ item.text }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly items: NavigationItem[] = navigation;
}
