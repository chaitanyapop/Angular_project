import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() shoppingEvent = new EventEmitter<any>();
  @Output() recipeEvent = new EventEmitter<any>();

  recipeClicked(event : Event){
    console.log("recipe event emit")
    this.recipeEvent.emit(event);
  }

  shoppingClicked(event : Event){
    console.log("shopping event emit")
    this.shoppingEvent.emit(event);
  }

}
