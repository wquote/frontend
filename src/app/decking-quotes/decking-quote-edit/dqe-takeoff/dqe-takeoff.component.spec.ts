import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqeTakeoffComponent } from './dqe-takeoff.component';

describe('DqeTakeoffComponent', () => {
  let component: DqeTakeoffComponent;
  let fixture: ComponentFixture<DqeTakeoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DqeTakeoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqeTakeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
