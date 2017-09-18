import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeFinderComponent} from  './recipe-finder/recipe-finder.component';
import { AllRecipesPageComponent } from './recipe-finder/all-recipes-page/all-recipes-page.component';
import { NewRecipePageComponent} from './recipe-finder/new-recipe-page/new-recipe-page.component';
import { RecipeDetailPageComponent } from './recipe-finder/recipe-detail-page/recipe-detail-page.component';
import { RecipeDetailEditPageComponent} from './recipe-finder/recipe-detail-edit-page/recipe-detail-edit-page.component';

const routes: Routes = [
  {
    path: 'all/recipes',
    component: RecipeFinderComponent,
    children: [
      {
        path: '',
        component: AllRecipesPageComponent,
      },
      {
        path: 'new',
        component: NewRecipePageComponent,
      },
      {
        path: ':recipeId',
        component: RecipeDetailPageComponent,
      },
      {
        path: ':recipeId/edit',
        component: RecipeDetailEditPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeFinderRoutingModule { }
