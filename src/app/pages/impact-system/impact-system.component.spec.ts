import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ImpactSystemComponent } from './impact-system.component';

describe('ImpactSystemComponent', () => {
  let component: ImpactSystemComponent;
  let fixture: ComponentFixture<ImpactSystemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ImpactSystemComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resolves all three Impact applications', () => {
    expect(component.apps.length).toBe(3);
    expect(component.apps.every(a => a.kind === 'product')).toBeTrue();
  });
});
