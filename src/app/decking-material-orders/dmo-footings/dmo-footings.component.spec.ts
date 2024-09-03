import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoFootingsComponent } from './dmo-footings.component';

describe('DmoFootingsComponent', () => {
  let component: DmoFootingsComponent;
  let fixture: ComponentFixture<DmoFootingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmoFootingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmoFootingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
