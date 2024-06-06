import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckingQuoteEditComponent } from './decking-quote-edit.component';

describe('DeckingQuoteEditComponent', () => {
  let component: DeckingQuoteEditComponent;
  let fixture: ComponentFixture<DeckingQuoteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckingQuoteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckingQuoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
