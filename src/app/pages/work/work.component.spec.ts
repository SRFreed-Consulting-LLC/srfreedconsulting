import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CASE_STUDIES } from '../../data/case-studies';
import { WorkComponent } from './work.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WorkComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('lists every project by default', () => {
    expect(component.items().length).toBe(component.productCount + component.clientCount);
  });

  it('filters to products I operate', () => {
    component.setKind('product');
    expect(component.items().length).toBe(component.productCount);
    expect(component.items().every(i => i.kind === 'product')).toBeTrue();
  });

  it('narrows by tag and clears again', () => {
    const tag = component.tags[0];
    component.toggleTag(tag);
    expect(component.items().every(i => i.tags.includes(tag))).toBeTrue();

    component.clear();
    expect(component.isFiltered).toBeFalse();
    expect(component.items().length).toBe(component.productCount + component.clientCount);
  });
});

describe('WorkComponent case-study links', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WorkComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  it('only advertises a case study where content actually exists', () => {
    const fixture = TestBed.createComponent(WorkComponent);
    fixture.detectChanges();
    const withStudy = fixture.componentInstance.items().filter(i => i.hasCaseStudy);
    // Every advertised study must resolve; none may dead-end on the index.
    expect(withStudy.length).toBeGreaterThan(0);
    expect(withStudy.every(i => !!CASE_STUDIES[i.slug])).toBeTrue();
  });
});
