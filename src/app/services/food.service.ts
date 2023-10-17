import { Injectable } from '@angular/core';
import { food } from '../shared/modules/food';
import { sampleFoods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[]{
    return sampleFoods;
  }

  getBySearch(SearchTerm: string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(SearchTerm.toLowerCase()))
  }
}
