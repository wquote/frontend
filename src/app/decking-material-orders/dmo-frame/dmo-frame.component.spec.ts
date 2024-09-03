import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoFrameComponent } from './dmo-frame.component';

describe('DmoFrameComponent', () => {
  let component: DmoFrameComponent;
  let fixture: ComponentFixture<DmoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
