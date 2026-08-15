import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SideNavigationMenuComponent } from '../../shared/components/side-navigation-menu/side-navigation-menu.component';
import { ScreenService } from '../../shared/services';

@Component({
    selector: 'app-main-layout',
    imports: [CommonModule, HeaderComponent, SideNavigationMenuComponent],
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  @Input() title = '';

  @ViewChild('content', { static: true }) content!: ElementRef<HTMLElement>;

  menuOpened = false;

  /** On small screens the menu floats above the content instead of shrinking it. */
  overlayMode = false;

  private readonly subscriptions = new Subscription();

  constructor(private screen: ScreenService, private router: Router) { }

  ngOnInit() {
    this.applyScreenSize();

    this.subscriptions.add(
      this.screen.changed.subscribe(() => this.applyScreenSize())
    );

    this.subscriptions.add(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.content.nativeElement.scrollTo(0, 0);
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  closeMenu() {
    this.menuOpened = false;
  }

  onNavigated() {
    if (this.overlayMode) {
      this.closeMenu();
    }
  }

  private applyScreenSize() {
    const isLarge = this.screen.sizes['screen-large'];

    this.overlayMode = !isLarge;
    this.menuOpened = isLarge;
  }
}
