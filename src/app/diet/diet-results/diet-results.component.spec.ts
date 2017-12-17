import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietResultsComponent } from './diet-results.component';

describe('DietResultsComponent', () => {
  let component: DietResultsComponent;
  let fixture: ComponentFixture<DietResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
