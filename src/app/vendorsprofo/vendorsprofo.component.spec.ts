import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsprofoComponent } from './vendorsprofo.component';

describe('VendorsprofoComponent', () => {
  let component: VendorsprofoComponent;
  let fixture: ComponentFixture<VendorsprofoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorsprofoComponent]
    });
    fixture = TestBed.createComponent(VendorsprofoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
