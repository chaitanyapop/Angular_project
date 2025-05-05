import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {

  @Input() recipeData !: Recipe;
  

  constructor(){}

 

}
