import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { DeckEditComponent } from './views/deck-edit/deck-edit.component';
import { DeckListComponent } from './views/deck-list/deck-list.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'customers/list', component: CustomerListComponent },
  { path: 'customers/edit/:id', component: CustomerEditComponent },
  { path: 'customers/new', component: CustomerEditComponent },

  { path: 'decks/list', component: DeckListComponent },
  { path: 'decks/edit/:id', component: DeckEditComponent },
  { path: 'decks/new', component: DeckEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
