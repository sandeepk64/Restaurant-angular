import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck{

  allRecipe:any=[]
  p: number = 1;
  sortedRecipe:any=[]
  searchkey:string=""
  sortKey:string=""

  constructor(private api:ApiService){
  }

  ngOnInit(): void {
    this.api.getAllRecipeAPI().subscribe((result:any)=>{
      this.allRecipe=result.recipes
      console.log(this.allRecipe);
    })
  }

  ngDoCheck(): void {
    this.searchkey=this.api.searchKey    
  }

  sortByDinner(){
    this.sortKey="Dinner"
  }

  sortByLunch(){
    this.sortKey="Lunch"
  }

  sortBySnack(){
    this.sortKey="Snack"
  }

  sortByDessert(){
    this.sortKey="Dessert"
  }

  sortBySideDish(){
    this.sortKey="Side Dish"
  }

  sortByAppetizer(){
    this.sortKey="Appetizer"
  }

  sortByBreakFast(){
    this.sortKey="Breakfast"
  }

  sortByBeverage(){
    this.sortKey="Beverage"
  }

  sortByAll(){
    this.sortKey=""
  }

}