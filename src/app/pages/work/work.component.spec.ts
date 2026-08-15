import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

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
