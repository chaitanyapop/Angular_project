import { Component } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {

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
