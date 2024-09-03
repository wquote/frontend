import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerQuotesListComponent } from './customer/customer-quotes-list/customer-quotes-list.component';
import { DeckingQuoteEditComponent } from './decking-quotes/decking-quote-edit/decking-quote-edit.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './materials/material.component';
import { DmoFootingsComponent } from './decking-material-orders/dmo-footings/dmo-footings.component';
import { DmoFrameComponent } from './decking-material-orders/dmo-frame/dmo-frame.component';

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

  { path: 'materials', component: MaterialComponent },
  
  { path: 'material-orders/decking/footings', component: DmoFootingsComponent },
  { path: 'material-orders/decking/frame', component: DmoFrameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
