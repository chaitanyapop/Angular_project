import { Component } from '@angular/core';
import { Ingredient } from '../../../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-component',
  templateUrl: './shopping-component.component.html',
  styleUrl: './shopping-component.component.scss'
})
export class ShoppingComponentComponent {

  ingredients : Ingredient[] = [
    {name: 'Apples', quantity: 5},
    {name: 'Tomatoes', quantity: 10},
  ]
}
