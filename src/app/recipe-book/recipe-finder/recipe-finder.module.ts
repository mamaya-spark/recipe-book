import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeFinderRoutingModule } from './recipe-finder-routing.module';
import { RecipeFinderComponent } from './recipe-finder/recipe-finder.component';
import { AllRecipesPageComponent } from './recipe-finder/all-recipes-page/all-recipes-page.component';
import { NewRecipePageComponent } from './recipe-finder/new-recipe-page/new-recipe-page.component';
import { RecipeDetailPageComponent } from './recipe-finder/recipe-detail-page/recipe-detail-page.component';
import { RecipeDetailEditPageComponent } from './recipe-finder/recipe-detail-edit-page/recipe-detail-edit-page.component';

@NgModule({
  imports: [
    CommonModule,
    RecipeFinderRoutingModule
  ],
  declarations: [
    RecipeFinderComponent,
    AllRecipesPageComponent,
    NewRecipePageComponent,
    RecipeDetailPageComponent,
    RecipeDetailEditPageComponent,
  ]
})
export class RecipeFinderModule { }
