import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { RecipeComponentComponent } from './component/recipe-component/recipe-component.component';
import { RecipeItemComponent } from './component/recipe-item/recipe-item.component';
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [
    RecipeComponentComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    RecipeBookRoutingModule
  ],
  exports: [RecipeComponentComponent]
})
export class RecipeBookModule { }
