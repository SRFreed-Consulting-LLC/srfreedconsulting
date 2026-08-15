import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BackgroundComponent } from './background.component';

describe('BackgroundComponent', () => {
  let component: BackgroundComponent;
  let fixture: ComponentFixture<BackgroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BackgroundComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows recent roles first and expands to the full history', () => {
    const collapsed = component.visible.length;
    expect(collapsed).toBe(component.recentCount);

    component.toggle();
    expect(component.visible.length).toBe(collapsed + component.hiddenCount);
  });

  it('orders the timeline most recent first', () => {
    const years = component.visible.map(e => e.from);
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });
});
