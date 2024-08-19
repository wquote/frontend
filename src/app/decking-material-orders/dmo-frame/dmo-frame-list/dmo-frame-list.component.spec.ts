import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoFrameListComponent } from './dmo-frame-list.component';

describe('DmoFrameListComponent', () => {
  let component: DmoFrameListComponent;
  let fixture: ComponentFixture<DmoFrameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmoFrameListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmoFrameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
