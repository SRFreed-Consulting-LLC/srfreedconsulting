import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorkItem, WorkService } from '../../data/work';

interface Fact {
  key: string;
  value: string;
}

@Component({
  selector: 'app-impact-system',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './impact-system.component.html',
  styleUrls: ['./impact-system.component.scss']
})
export class ImpactSystemComponent {
  readonly apps: WorkItem[];

  readonly facts: Fact[] = [
    { key: 'Applications', value: '3' },
    { key: 'Shared libraries', value: '2, git submodules' },
    { key: 'Framework', value: 'Angular 20' },
    { key: 'Backend', value: 'Firebase' },
    { key: 'Operated by', value: 'Me, in production' },
  ];

  constructor(work: WorkService) {
    // The three Impact applications, in the order a reader meets them. A fourth,
    // the Library Manager, was merged into the operations console and retired.
    const order = ['impact-platform', 'impact-admin', 'impact-library'];
    this.apps = order
      .map(slug => work.getBySlug(slug))
      .filter((w): w is WorkItem => !!w);
  }
}
