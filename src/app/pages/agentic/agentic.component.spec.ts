import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AgenticComponent } from './agentic.component';

describe('AgenticComponent', () => {
  let component: AgenticComponent;
  let fixture: ComponentFixture<AgenticComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AgenticComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('every result states a before and an after', () => {
    expect(component.results.length).toBeGreaterThan(0);
    expect(component.results.every(r => !!r.before && !!r.after)).toBeTrue();
  });
});
