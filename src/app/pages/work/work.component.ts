import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkItem, WorkService } from '../../data/work';

type KindFilter = 'all' | 'product' | 'client';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  private readonly all: WorkItem[];

  readonly tags: string[];
  readonly kind = signal<KindFilter>('all');
  readonly activeTag = signal<string | null>(null);

  readonly items = computed(() => {
    const kind = this.kind();
    const tag = this.activeTag();

    return this.all.filter(item => {
      if (kind !== 'all' && item.kind !== kind) {
        return false;
      }
      if (tag && !item.tags.includes(tag)) {
        return false;
      }
      return true;
    });
  });

  readonly productCount: number;
  readonly clientCount: number;

  constructor(work: WorkService) {
    this.all = work.getAll();
    this.tags = work.getTags();
    this.productCount = this.all.filter(i => i.kind === 'product').length;
    this.clientCount = this.all.filter(i => i.kind === 'client').length;
  }

  setKind(kind: KindFilter) {
    this.kind.set(kind);
  }

  toggleTag(tag: string) {
    this.activeTag.update(current => (current === tag ? null : tag));
  }

  clear() {
    this.kind.set('all');
    this.activeTag.set(null);
  }

  get isFiltered(): boolean {
    return this.kind() !== 'all' || this.activeTag() !== null;
  }
}
