import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListPageComponent } from './shopping-list/shopping-list-page/shopping-list-page.component';
import { ShoppingListContentComponent } from './shopping-list/shopping-list-page/shopping-list-content/shopping-list-content.component';
import { RecipesListComponent } from './shopping-list/shopping-list-page/shopping-list-content/recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './shopping-list/shopping-list-page/shopping-list-content/recipes-list/recipes-list-item/recipes-list-item.component';
import { IngredientsListComponent } from './shopping-list/shopping-list-page/shopping-list-content/ingredients-list/ingredients-list.component';
import { IngredientListItemComponent } from './shopping-list/shopping-list-page/shopping-list-content/ingredients-list/ingredient-list-item/ingredient-list-item.component';
import { AddIngredientListItemComponent } from './shopping-list/shopping-list-page/shopping-list-content/ingredients-list/add-ingredient-list-item/add-ingredient-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingListRoutingModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListPageComponent,
    ShoppingListContentComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    IngredientsListComponent,
    IngredientListItemComponent,
    AddIngredientListItemComponent,
  ]
})
export class ShoppingListModule { }
