import { Component } from '@angular/core';
import { Recipe } from '../model/recipe.model';


@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrl: './recipe-component.component.scss'
})
export class RecipeComponentComponent {

  recipe_list : Recipe[] = [
    {
      name: 'A Test Recipe',
      description: 'This is a simple test',
      imagePath: '../assets/image.png'
    },
    {
      name: 'Another Test Recipe',
      description: 'This is another simple test',
      imagePath: '../assets/image.png'

    }
  ];

}
