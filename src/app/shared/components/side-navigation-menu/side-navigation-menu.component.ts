import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navigation, NavigationItem } from '../../../app-navigation';

@Component({
    selector: 'app-side-navigation-menu',
    imports: [CommonModule, RouterModule],
    templateUrl: './side-navigation-menu.component.html',
    styleUrls: ['./side-navigation-menu.component.scss']
})
export class SideNavigationMenuComponent {
  /** Collapsed rail mode — icons only, labels hidden. */
  @Input() compactMode = false;

  /** Emitted after a nav item is activated so the shell can close an overlay menu. */
  @Output() navigated = new EventEmitter<void>();

  readonly items: NavigationItem[] = navigation.map(item => ({
    ...item,
    path: item.path.startsWith('/') ? item.path : `/${item.path}`
  }));

  onNavigate() {
    this.navigated.emit();
  }
}
