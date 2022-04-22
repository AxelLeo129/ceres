import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public restaurants: Array<any> = [
    {
      id: 1,
      title: 'Restaurante Vegetariano Primavera'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet...'
    },
    {
      id: 6,
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
