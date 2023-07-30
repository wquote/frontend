import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQuotesListComponent } from './customer-quotes-list.component';

describe('CustomerQuotesListComponent', () => {
  let component: CustomerQuotesListComponent;
  let fixture: ComponentFixture<CustomerQuotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerQuotesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerQuotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
