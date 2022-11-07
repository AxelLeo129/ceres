import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { recipes } from '../../utilities/constants';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public restaurants: Array<any> = recipes;
  public restaurants_original: Array<any> = recipes;
  public search_value: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.restaurants = this.filterItems(this.search_value);
  }

  filterItems(searchTerm: string) {
    return this.restaurants_original.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  // toRestaurant(id: number) {
  //   this.router.navigate(['detrecipes/restaurant/' + id]);
  // }

  sort() {
    this.restaurants = this.restaurants.sort((a, b) => 0.5 - Math.random());
  }
  
  toCreate(){
    this.router.navigate(['/cerecipes']);
  }

}
