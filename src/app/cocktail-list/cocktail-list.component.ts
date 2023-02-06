import { Component } from '@angular/core';
import { ConsCocktail } from '../cons-cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {

  cocktails : ConsCocktail [];

  constructor(cocktailService : CocktailService){

    this.cocktails = cocktailService.getCocktails();
  }

}
