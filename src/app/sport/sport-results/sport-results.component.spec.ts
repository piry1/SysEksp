import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportResultsComponent } from './sport-results.component';

describe('SportResultsComponent', () => {
  let component: SportResultsComponent;
  let fixture: ComponentFixture<SportResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
