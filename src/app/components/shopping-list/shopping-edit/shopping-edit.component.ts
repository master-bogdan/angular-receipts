import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '@models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef!: ElementRef<HTMLInputElement>;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      +this.amountInputRef.nativeElement.value,
    );

    this.ingredientAdded.emit(newIngredient);
  }
}
