import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeBookRoutingModule } from './recipe-book-routing.module';
import { RecipeComponentComponent } from './component/recipe-component/recipe-component.component';
import { RecipeItemComponent } from './component/recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    RecipeComponentComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    RecipeBookRoutingModule
  ],
  exports: [RecipeComponentComponent]
})
export class RecipeBookModule { }
