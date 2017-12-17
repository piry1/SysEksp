import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmrResultsComponent } from './bmr-results.component';

describe('BmrResultsComponent', () => {
  let component: BmrResultsComponent;
  let fixture: ComponentFixture<BmrResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmrResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmrResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
