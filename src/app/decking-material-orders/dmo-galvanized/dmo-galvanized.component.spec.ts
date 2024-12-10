import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoGalvanizedComponent } from './dmo-galvanized.component';

describe('DmoGalvanizedComponent', () => {
  let component: DmoGalvanizedComponent;
  let fixture: ComponentFixture<DmoGalvanizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmoGalvanizedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmoGalvanizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
