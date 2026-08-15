import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AVAILABILITY, WorkItem, WorkService } from '../../data/work';

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
  readonly availability = AVAILABILITY;

  /** Two pieces of work above the fold — the portfolio's opening argument. */
  readonly featured: WorkItem[];

  readonly proofs: Proof[] = [
    {
      figure: '$200B',
      label: 'processed annually',
      detail: 'on the platform I spent 18 months modernizing at the Federal Reserve',
    },
    {
      figure: '4',
      label: 'apps I run in production',
      detail: 'designed, launched and still operated by me, payments included',
    },
    {
      figure: '28+',
      label: 'years shipping',
      detail: 'from Delta in 1997 to Spring Boot 4 and Angular 20 today',
    },
  ];

  constructor(work: WorkService) {
    const slugs = ['impact-platform', 'federal-reserve'];
    this.featured = slugs
      .map(slug => work.getBySlug(slug))
      .filter((w): w is WorkItem => !!w);
  }
}
