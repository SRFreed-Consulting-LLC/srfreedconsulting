import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CREDENTIALS, TIMELINE, TimelineEntry } from '../../data/background';
import { availabilityStatus, WorkItem, WorkService } from '../../data/work';

interface Proof {
  figure: string;
  label: string;
  detail: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private readonly work = inject(WorkService);

  readonly availability = availabilityStatus();

  readonly proofs: Proof[] = [
    {
      figure: '$200B',
      label: 'processed annually',
      detail: 'on the platform I spent 18 months modernizing at the Federal Reserve',
    },
    {
      figure: '3',
      label: 'apps I run in production',
      detail: 'designed, launched and still operated by me, payments included',
    },
    {
      figure: '28+',
      label: 'years shipping',
      detail: 'from Delta in 1997 to Spring Boot 4 and Angular 20 today',
    },
  ];

  /** The framed screenshot under the metrics line — the storefront's home. */
  readonly showcase: WorkItem | undefined = this.work.getBySlug('impact-platform');

  /** Six pieces of work, products first — the portfolio's opening argument. */
  readonly featured: WorkItem[] = [
    'impact-platform',
    'impact-admin',
    'impact-library',
    'smeac-spec-builder',
    'federal-reserve',
    'cfa-tax',
  ]
    .map(slug => this.work.getBySlug(slug))
    .filter((w): w is WorkItem => !!w);

  /** The engagements that carry the most weight, most recent first. */
  readonly timeline: TimelineEntry[] = [...TIMELINE]
    .filter(entry => entry.notable)
    .sort((a, b) => b.from - a.from);

  readonly credentials = CREDENTIALS;
}
