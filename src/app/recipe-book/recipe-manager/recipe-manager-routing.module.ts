import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';
import { MyRecipesPageComponent } from './recipe-manager/my-recipes-page/my-recipes-page.component'
import { MyRecipeDetailPageComponent } from './recipe-manager/my-recipe-detail-page/my-recipe-detail-page.component';
import { MyRecipeDetailEditPageComponent } from './recipe-manager/my-recipe-detail-edit-page/my-recipe-detail-edit-page.component';

const routes: Routes = [
  {
    path: 'my/recipes',
    component: RecipeManagerComponent,
    children: [
      {
        path: '',
        component: MyRecipesPageComponent,
      },
      {
        path: ':recipeId',
        component: MyRecipeDetailPageComponent,
      },
      {
        path: ':recipeId/edit',
        component: MyRecipeDetailEditPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeManagerRoutingModule { }
