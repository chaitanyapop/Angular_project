import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-recipe-app';
  pageValue : number= 1;
  constructor(){}

  recipeClickedEvent(event : Event){
    console.log("in recipe click")
    this.pageValue = 1;
  }

  shoppingClickEvent(event : Event){
    console.log("in shopping click")
    this.pageValue = 2;
  }

  
}
