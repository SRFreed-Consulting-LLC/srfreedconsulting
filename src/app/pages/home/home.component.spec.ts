import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('features two resolvable pieces of work', () => {
    expect(component.featured.length).toBe(2);
    expect(component.featured.every(f => !!f.slug)).toBeTrue();
  });

  it('states when I am available', () => {
    expect(component.availability.availableFrom).toBeTruthy();
  });
});
