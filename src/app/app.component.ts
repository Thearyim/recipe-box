import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Dinner Recipe';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Chow Mein'),
    new Recipe('Chicken Piccata'),
    new Recipe('Beef Stew'),
    new Recipe('Garlic Brown Sugar Glazed Salmon')
  ];

  selectedRecipe: null;

    viewRecipe(clickedRecipe) {
      this.selectedRecipe = clickedRecipe;
    }

    hideRecipe() {
      this.selectedRecipe = null;
    }

}
