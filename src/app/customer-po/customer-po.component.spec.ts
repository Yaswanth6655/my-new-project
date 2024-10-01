import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPoComponent } from './customer-po.component';

describe('CustomerPoComponent', () => {
  let component: CustomerPoComponent;
  let fixture: ComponentFixture<CustomerPoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPoComponent]
    });
    fixture = TestBed.createComponent(CustomerPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
