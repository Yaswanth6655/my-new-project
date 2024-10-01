import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalComponent } from './request-for-proposal.component';

describe('RequestForProposalComponent', () => {
  let component: RequestForProposalComponent;
  let fixture: ComponentFixture<RequestForProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestForProposalComponent]
    });
    fixture = TestBed.createComponent(RequestForProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
