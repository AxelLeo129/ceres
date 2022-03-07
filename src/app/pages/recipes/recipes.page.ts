import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public restaurants: Array<any> = [
    {
      id: 1,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-cacio-e-pepe-a1392fd.jpg?quality=90&webp=true&resize=440,400',
      title: 'Gnocchi Caccio e Peppe'
    },
    {
      id: 2,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-fajitas-d49e108.jpg?quality=90&webp=true&resize=440,400',
      title: 'Fajitas Vegetarianas'
    },
    {
      id: 3,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Kale-Pesto-df3faaf.jpg?quality=90&webp=true&resize=375,341',
      title: 'Pasta al Pesto Vegana'
    },
    {
      id: 4,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/vegan-ramen-c656140.jpg?quality=90&webp=true&resize=440,400',
      title: 'Ramen Vegano'
    },
    {
      id: 5,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-326597_11-b7385b9.jpg?quality=90&webp=true&resize=440,400',
      title: 'Hamburguesas de Falafel'
    },
    {
      id: 6,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-399680_11-3582ff5.jpg?quality=90&webp=true&resize=440,400',
      title: 'Fideos picantes de brocoli'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toRestaurant(id: number) {
    this.router.navigate(['detrecipes/restaurant/' + id]);
  }

}
