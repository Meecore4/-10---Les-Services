import { Injectable } from '@angular/core';
import {  ConsCocktail } from './cons-cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktail1 = new ConsCocktail ('Malibu', '5 euros', 'ImgMalibu');
  cocktail2 =  new ConsCocktail ('Dream', '6 euros', 'ImgDream');
  cocktail3 = new ConsCocktail ('Monaco', '4 euros', 'ImgMonaco');
  cocktail4 = new ConsCocktail ('Panaché', '3 euros', 'ImgPanaché');

  cocktails : ConsCocktail [] = [this.cocktail1, this.cocktail2, this.cocktail3, this.cocktail4];

  getCocktails(){

    return this.cocktails;
  }
}
