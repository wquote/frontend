import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoFootingsListComponent } from './dmo-footings-list.component';

describe('DmoFootingsListComponent', () => {
  let component: DmoFootingsListComponent;
  let fixture: ComponentFixture<DmoFootingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmoFootingsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmoFootingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
