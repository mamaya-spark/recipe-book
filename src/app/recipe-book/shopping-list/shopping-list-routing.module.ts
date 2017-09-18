import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListPageComponent } from './shopping-list/shopping-list-page/shopping-list-page.component';

const routes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
      {
        path: '',
        component: ShoppingListPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
