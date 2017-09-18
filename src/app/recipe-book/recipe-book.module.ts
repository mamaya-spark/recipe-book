import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeFinderModule } from './recipe-finder/recipe-finder.module';
import { RecipeManagerModule } from  './recipe-manager/recipe-manager.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  imports: [
    CommonModule,
    RecipeFinderModule,
    RecipeManagerModule,
    ShoppingListModule,
  ],
  declarations: []
})
export class RecipeBookModule { }
