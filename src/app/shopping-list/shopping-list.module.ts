import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingComponentComponent } from './component/shopping-component/shopping-component.component';


@NgModule({
  declarations: [

    ShoppingComponentComponent
  ],
  imports: [
    CommonModule,
  ],
  exports :[ShoppingComponentComponent]
})
export class ShoppingListModule { }
