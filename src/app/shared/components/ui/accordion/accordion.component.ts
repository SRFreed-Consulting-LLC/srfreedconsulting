import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList
} from '@angular/core';
import { Subscription } from 'rxjs';

let nextPanelId = 0;

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 class="ui-accordion__heading">
      <button
        type="button"
        class="ui-accordion__trigger"
        [attr.aria-expanded]="expanded"
        [attr.aria-controls]="panelId"
        (click)="toggle()">
        <span class="ui-accordion__title">{{ title }}</span>
        <span class="ui-accordion__chevron" aria-hidden="true"></span>
      </button>
    </h3>
    <div class="ui-accordion__panel" [class.ui-accordion__panel--open]="expanded" [id]="panelId">
      <div class="ui-accordion__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./accordion.component.scss']
})
export class AccordionItemComponent {
  @Input() title = '';
  @Input() expanded = false;

  readonly panelId = `ui-accordion-panel-${nextPanelId++}`;

  /** Set by the parent accordion so items can coordinate in single-open mode. */
  onToggle: (item: AccordionItemComponent) => void = () => this.expanded = !this.expanded;

  toggle() {
    this.onToggle(this);
  }
}

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="ui-accordion"><ng-content></ng-content></div>`,
  styles: [`
    .ui-accordion {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      overflow: hidden;
      background-color: var(--color-surface);
    }
  `]
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  /** When false, opening one item collapses the others. */
  @Input() multiple = true;

  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

  private subscription?: Subscription;

  ngAfterContentInit() {
    this.wire();
    this.subscription = this.items.changes.subscribe(() => this.wire());
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private wire() {
    this.items.forEach(item => {
      item.onToggle = clicked => this.handleToggle(clicked);
    });
  }

  private handleToggle(clicked: AccordionItemComponent) {
    const willExpand = !clicked.expanded;

    if (willExpand && !this.multiple) {
      this.items.forEach(item => item.expanded = false);
    }

    clicked.expanded = willExpand;
  }
}
