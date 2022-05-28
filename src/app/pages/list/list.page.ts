import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products } from '../../utilities/constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public restaurants: Array<any> = products;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toRestaurant(id: number) {
    this.router.navigate(['details/restaurant/' + id]);
  }

  sort() {
    this.restaurants = this.restaurants.sort((a, b) => 0.5 - Math.random());
  }

}
