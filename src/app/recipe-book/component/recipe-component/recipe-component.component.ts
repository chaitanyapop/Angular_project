import { Component } from '@angular/core';
import { Recipe } from '../model/recipe.model';


@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrl: './recipe-component.component.scss'
})
export class RecipeComponentComponent {

  recipe_data : any;

  individualRecipeEventClicked(event: any){
    this.recipe_data = event;
  }

}
