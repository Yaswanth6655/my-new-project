import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRfqComponent } from './view-rfq.component';

describe('ViewRfqComponent', () => {
  let component: ViewRfqComponent;
  let fixture: ComponentFixture<ViewRfqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRfqComponent]
    });
    fixture = TestBed.createComponent(ViewRfqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
