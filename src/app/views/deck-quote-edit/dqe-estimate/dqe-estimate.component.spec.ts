import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqeEstimateComponent } from './dqe-estimate.component';

describe('DqeEstimateComponent', () => {
  let component: DqeEstimateComponent;
  let fixture: ComponentFixture<DqeEstimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DqeEstimateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqeEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
