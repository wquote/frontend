import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckQuoteEditComponent } from './deck-quote-edit.component';

describe('DeckQuoteEditComponent', () => {
  let component: DeckQuoteEditComponent;
  let fixture: ComponentFixture<DeckQuoteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckQuoteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckQuoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
