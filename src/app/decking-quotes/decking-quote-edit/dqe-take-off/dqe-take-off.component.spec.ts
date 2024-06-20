import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqeTakeOffComponent } from './dqe-take-off.component';

describe('DqeTakeoffComponent', () => {
  let component: DqeTakeOffComponent;
  let fixture: ComponentFixture<DqeTakeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DqeTakeOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqeTakeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
