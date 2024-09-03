import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmoCrudComponent } from './dmo-crud.component';

describe('DmoCrudComponent', () => {
  let component: DmoCrudComponent;
  let fixture: ComponentFixture<DmoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmoCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
