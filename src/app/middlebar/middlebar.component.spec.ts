import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlebarComponent } from './middlebar.component';

describe('MiddlebarComponent', () => {
  let component: MiddlebarComponent;
  let fixture: ComponentFixture<MiddlebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddlebarComponent]
    });
    fixture = TestBed.createComponent(MiddlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
