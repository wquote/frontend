import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DqeTakeOffLayoutComponent } from './dqe-take-off-layout.component';

describe('DqeTakeOffLayoutComponent', () => {
  let component: DqeTakeOffLayoutComponent;
  let fixture: ComponentFixture<DqeTakeOffLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DqeTakeOffLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DqeTakeOffLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
