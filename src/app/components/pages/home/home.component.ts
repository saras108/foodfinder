import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/modules/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: food[] = [];

  constructor(private foodservice: FoodService , activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe; 
    this.foods = foodservice.getAll();
  }

}
