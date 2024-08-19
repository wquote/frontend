import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerQuotesListComponent } from './customer/customer-quotes-list/customer-quotes-list.component';
import { DeckingQuoteEditComponent } from './decking-quotes/decking-quote-edit/decking-quote-edit.component';
import { HomeComponent } from './home/home.component';
import { MaterialListComponent } from './materials/material-list/material-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'landing', component: HomeComponent, pathMatch: 'full' },

  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/new', component: CustomerEditComponent },
  { path: 'customers/:id', component: CustomerEditComponent },
  { path: 'customers/:id/quotes', component: CustomerQuotesListComponent },

  // { path: 'customers/:customerId/quotes/new', component: DeckingQuoteEditComponent },
  { path: 'quotes/decking/new', component: DeckingQuoteEditComponent },
  { path: 'quotes/decking/:quoteId', component: DeckingQuoteEditComponent },

  { path: 'materials', component: MaterialListComponent },
  // { path: 'decking-material-order/footings', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
