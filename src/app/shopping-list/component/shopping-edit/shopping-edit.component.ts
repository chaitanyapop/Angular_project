import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {

  @ViewChild('ingredientInput') ingredientInput!: ElementRef;
  @ViewChild('quantityInput') quantityInput!: ElementRef;
  @Output() addIngredientQuantity = new EventEmitter<any>();

  constructor(){}

  addButton(event : Event){
    event.preventDefault();
    this.addIngredientQuantity.emit({
      name: this.ingredientInput.nativeElement.value,
      quantity: this.quantityInput.nativeElement.value
    })
  }
}
