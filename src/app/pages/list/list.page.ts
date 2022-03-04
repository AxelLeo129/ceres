import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public restaurants: Array<any> = [
    {
      id: 1,
      img: 'https://i0.wp.com/www.dondecomersano.es/wp-content/uploads/2019/04/Plan-de-marketing-restaurante-vegetariano-para-locales-mixtos.jpg?resize=750%2C480',
      title: 'Restaurante Vegetariano Primavera'
    },
    {
      id: 2,
      img: 'https://stylelovely.com/wp-content/uploads/Los-mejores-restaurantes-vegetarianos.jpg',
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 3,
      img: 'https://www.sillasmesas.es/blog/wp-content/uploads/2020/02/comida-restaurante-salad-Planet.jpg',
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 4,
      img: 'https://forum.com.gt/files/user10/RESTAURANTES%20VEGETARIANOS/Arbol%20de%20la%20vida.jpg',
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 5,
      img: 'https://enlacocina.b-cdn.net/wp-content/uploads/2020/02/Plan-de-marketing-de-un-restaurante-vegetariano-1020x640.jpg',
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 6,
      img: 'https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/newsletter/0376.jpg?1522087455',
      title: 'Lorem ipsum dolor sit amet...'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toRestaurant(id: number) {
    this.router.navigate(['details/restaurant/' + id]);
  }

}
