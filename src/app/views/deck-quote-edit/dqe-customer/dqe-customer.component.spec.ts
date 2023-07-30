import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqeCustomerComponent } from './dqe-customer.component';

describe('DqeCustomerComponent', () => {
  let component: DqeCustomerComponent;
  let fixture: ComponentFixture<DqeCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DqeCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqeCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
