import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { convertToParamMap } from '@angular/router';

import { CaseStudyComponent } from './case-study.component';

describe('CaseStudyComponent', () => {
  let component: CaseStudyComponent;
  let fixture: ComponentFixture<CaseStudyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CaseStudyComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ slug: 'impact-library' })) }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resolves the work item and its study from the route slug', () => {
    expect(component.item?.slug).toBe('impact-library');
    expect(component.study).toBeTruthy();
  });

  it('pads section numbers', () => {
    expect(component.ordinal(0)).toBe('01');
    expect(component.ordinal(9)).toBe('10');
  });

  it('steps through the gallery and wraps', () => {
    const count = component.study?.gallery?.length ?? 0;
    expect(count).toBeGreaterThan(1);

    component.openImage(0);
    component.step(-1);
    expect(component.lightbox()).toBe(count - 1);

    component.step(1);
    expect(component.lightbox()).toBe(0);

    component.closeImage();
    expect(component.lightbox()).toBeNull();
  });
});
