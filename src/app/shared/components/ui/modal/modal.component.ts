import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
    selector: 'app-modal',
    imports: [CommonModule],
    template: `
    <div class="ui-modal__backdrop" (click)="onBackdropClick($event)">
      <div
        class="ui-modal__dialog"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        [attr.aria-label]="title"
        #dialog>
        <div class="ui-modal__header">
          <h2 class="ui-modal__title">{{ title }}</h2>
          <button
            type="button"
            class="ui-modal__close"
            aria-label="Close"
            (click)="closed.emit()">
            &times;
          </button>
        </div>
        <div class="ui-modal__body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title = '';
  /** Close when the backdrop outside the dialog is clicked. */
  @Input() closeOnOutsideClick = true;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('dialog', { static: true }) dialog!: ElementRef<HTMLElement>;

  private previouslyFocused: HTMLElement | null = null;

  ngOnInit() {
    this.previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.classList.add('ui-modal-open');
    this.dialog.nativeElement.focus();
  }

  ngOnDestroy() {
    document.body.classList.remove('ui-modal-open');
    this.previouslyFocused?.focus();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (!this.closeOnOutsideClick) {
      return;
    }

    // Only close when the backdrop itself was clicked, not content inside it.
    if (event.target === event.currentTarget) {
      this.closed.emit();
    }
  }
}
