import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqeOrderComponent } from './dqe-order.component';

describe('DqeOrderComponent', () => {
  let component: DqeOrderComponent;
  let fixture: ComponentFixture<DqeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DqeOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
