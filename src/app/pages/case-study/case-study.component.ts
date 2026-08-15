import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CASE_STUDIES, CaseStudy } from '../../data/case-studies';
import { WorkItem, WorkService } from '../../data/work';
import { ModalComponent } from '../../shared/components';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent],
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit, OnDestroy {
  item?: WorkItem;
  study?: CaseStudy;
  siblings: WorkItem[] = [];

  /** Index of the gallery image opened in the lightbox, or null. */
  readonly lightbox = signal<number | null>(null);

  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private work: WorkService
  ) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.item = this.work.getBySlug(slug);
      this.study = CASE_STUDIES[slug];
      this.lightbox.set(null);

      if (!this.item || !this.study) {
        this.router.navigate(['/work']);
        return;
      }

      // Other work of the same kind, for the footer.
      this.siblings = this.work
        .getAll()
        .filter(w => w.slug !== slug && w.kind === this.item!.kind && w.hasCaseStudy)
        .slice(0, 3);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  /** Zero-padded section number, e.g. 0 -> "01". */
  ordinal(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  openImage(index: number) {
    this.lightbox.set(index);
  }

  closeImage() {
    this.lightbox.set(null);
  }

  step(delta: number) {
    const gallery = this.study?.gallery;
    const current = this.lightbox();
    if (!gallery || current === null) {
      return;
    }
    const next = (current + delta + gallery.length) % gallery.length;
    this.lightbox.set(next);
  }
}
