import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingComponentComponent } from './component/shopping-component/shopping-component.component';
import { ShoppingEditComponent } from './component/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [

    ShoppingComponentComponent,
      ShoppingEditComponent
  ],
  imports: [
    CommonModule,
  ],
  exports :[ShoppingComponentComponent]
})
export class ShoppingListModule { }
