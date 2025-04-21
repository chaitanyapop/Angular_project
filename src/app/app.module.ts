import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { RecipeComponentComponent } from './recipe-book/component/recipe-component/recipe-component.component';
import { ShoppingComponentComponent } from './shopping-list/component/shopping-component/shopping-component.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingListModule,
    RecipeBookModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
