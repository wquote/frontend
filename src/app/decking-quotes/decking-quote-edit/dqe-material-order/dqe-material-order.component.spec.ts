import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqeMaterialOrderComponent } from './dqe-material-order.component';

describe('DqeMaterialOrderComponent', () => {
  let component: DqeMaterialOrderComponent;
  let fixture: ComponentFixture<DqeMaterialOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DqeMaterialOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqeMaterialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
