import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CREDENTIALS, LEADERSHIP, TIMELINE, TimelineEntry } from '../../data/background';
import { availabilityStatus } from '../../data/work';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  readonly availability = availabilityStatus();
  readonly leadership = LEADERSHIP;
  readonly credentials = CREDENTIALS;

  private readonly all: TimelineEntry[] = [...TIMELINE].sort((a, b) => b.from - a.from);

  /** The full history is long; show the recent decade until asked for more. */
  readonly expanded = signal(false);

  readonly recentCount = 8;

  get visible(): TimelineEntry[] {
    return this.expanded() ? this.all : this.all.slice(0, this.recentCount);
  }

  get hiddenCount(): number {
    return Math.max(0, this.all.length - this.recentCount);
  }

  toggle() {
    this.expanded.update(v => !v);
  }
}
