import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TabItem {
  text: string;
  id?: number;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-tabs" role="tablist">
      <button
        type="button"
        role="tab"
        class="ui-tabs__tab"
        *ngFor="let tab of tabs; let i = index"
        [class.ui-tabs__tab--active]="i === selectedIndex"
        [attr.aria-selected]="i === selectedIndex"
        [attr.tabindex]="i === selectedIndex ? 0 : -1"
        (click)="select(i)"
        (keydown)="onKeydown($event, i)">
        {{ tab.text }}
      </button>
    </div>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: TabItem[] = [];
  @Input() selectedIndex = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();

  select(index: number) {
    if (index === this.selectedIndex) {
      return;
    }

    this.selectedIndex = index;
    this.selectedIndexChange.emit(index);
  }

  onKeydown(event: KeyboardEvent, index: number) {
    const last = this.tabs.length - 1;
    let next: number | null = null;

    switch (event.key) {
      case 'ArrowRight': next = index === last ? 0 : index + 1; break;
      case 'ArrowLeft': next = index === 0 ? last : index - 1; break;
      case 'Home': next = 0; break;
      case 'End': next = last; break;
    }

    if (next === null) {
      return;
    }

    event.preventDefault();
    this.select(next);

    const tabs = (event.target as HTMLElement).parentElement?.children;
    (tabs?.[next] as HTMLElement | undefined)?.focus();
  }
}
