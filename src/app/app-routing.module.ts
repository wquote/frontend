import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { DeckEditComponent } from './views/deck-edit/deck-edit.component';
import { DeckListComponent } from './views/deck-list/deck-list.component';
import { DeckQuoteListComponent } from './views/deck-quote-list/deck-quote-list.component';
import { DeckQuoteEditComponent } from './views/deck-quote-edit/deck-quote-edit.component';
import { QuoteListComponent } from './views/quote-list/quote-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'customers/list', component: CustomerListComponent },
  { path: 'customers/edit/:id', component: CustomerEditComponent },
  { path: 'customers/new', component: CustomerEditComponent },

  { path: 'quotes/list', component: QuoteListComponent },

  { path: 'deck-quotes/list', component: DeckQuoteListComponent },
  { path: 'quotes/decks/edit/:id', component: DeckQuoteEditComponent },
  { path: 'quotes/decks/new', component: DeckQuoteEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
