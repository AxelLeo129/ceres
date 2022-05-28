import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../utilities/constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  private restaurants: Array<any> = products;
  public restaurant: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = this.route.snapshot.params.id;
    this.restaurant = this.restaurants.find((e) => e.id == id);
  }
}
