import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { navigation } from '../../app-navigation';
import { WorkService } from '../../data/work';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

const SITE = 'SRFreed Consulting';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly work = inject(WorkService);

  private sub?: Subscription;

  ngOnInit() {
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title.setTitle(this.titleFor(event.urlAfterRedirects));
        // The document scrolls now, so a route change starts at the top
        // unless the link asked for an anchor.
        if (!event.urlAfterRedirects.includes('#')) {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  /** "SRFreed Consulting" on home, "<Page> · SRFreed Consulting" elsewhere. */
  private titleFor(url: string): string {
    const path = url.split(/[?#]/)[0];
    const [, first, second] = path.split('/');

    if (!first || first === 'home') {
      return SITE;
    }

    if (first === 'work' && second) {
      const item = this.work.getBySlug(second);
      return item ? `${item.name} · ${SITE}` : SITE;
    }

    const nav = navigation.find(item => item.path === `/${first}`);
    if (nav) {
      return `${nav.text} · ${SITE}`;
    }

    // `/contact` renders the Background page.
    if (first === 'contact') {
      return `Background · ${SITE}`;
    }

    return SITE;
  }
}
