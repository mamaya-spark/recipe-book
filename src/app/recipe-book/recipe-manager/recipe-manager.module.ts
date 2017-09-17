import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeManagerRoutingModule } from './recipe-manager-routing.module';
import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';
import { MyRecipesPageComponent } from './recipe-manager/my-recipes-page/my-recipes-page.component';
import { MyRecipeDetailPageComponent } from './recipe-manager/my-recipe-detail-page/my-recipe-detail-page.component';
import { MyRecipeDetailEditPageComponent } from './recipe-manager/my-recipe-detail-edit-page/my-recipe-detail-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    RecipeManagerRoutingModule
  ],
  declarations: [
    RecipeManagerComponent,
    MyRecipesPageComponent,
    MyRecipeDetailPageComponent,
    MyRecipeDetailEditPageComponent,
  ]
})
export class RecipeManagerModule { }
