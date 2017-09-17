import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { RecipeGridComponent } from './recipe-grid/recipe-grid.component';
import { RecipeCardComponent } from './recipe-grid/recipe-card/recipe-card.component';
import { AddRecipeCardComponent } from './recipe-grid/add-recipe-card/add-recipe-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailEditComponent } from './recipe-detail-edit/recipe-detail-edit.component';
import { RecipeIngredientsComponent } from './recipe-ingredients/recipe-ingredients.component';
import { RecipeIngredientsEditComponent } from './recipe-ingredients-edit/recipe-ingredients-edit.component';
import { RecipeDirectionsComponent } from './recipe-directions/recipe-directions.component';
import { RecipeDirectionsEditComponent } from './recipe-directions-edit/recipe-directions-edit.component';
import { RecipeNotesComponent } from './recipe-notes/recipe-notes.component';
import { RecipeNotesEditComponent } from './recipe-notes-edit/recipe-notes-edit.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { DropdownOptionsComponent } from './dropdown-options/dropdown-options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    PageContainerComponent,
    PageHeaderComponent,
    PageContentComponent,
    RecipeGridComponent,
    RecipeCardComponent,
    AddRecipeCardComponent,
    RecipeDetailComponent,
    RecipeDetailEditComponent,
    RecipeIngredientsComponent,
    RecipeIngredientsEditComponent,
    RecipeDirectionsComponent,
    RecipeDirectionsEditComponent,
    RecipeNotesComponent,
    RecipeNotesEditComponent,
    DropdownListComponent,
    DropdownOptionsComponent,
  ]
})
export class SharedModule { }
