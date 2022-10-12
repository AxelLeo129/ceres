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
  public profile: any = {username: 'sdaf', first_name: 'qwe', last_name: 'las', email: '@@@'};
  public imagen_perfil: any = '/assets/img/default-user.png';
  public segment: string = 'restaurants';
  public restaurants: Array<any> = [
    {
      id: 1,
      title: 'Restaurante Vegetariano Primavera'
    }
  ];
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    //this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }
  
  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['login']);
  }

  toRestaurant(id: number) {
    this.router.navigate(['details/restaurant/' + id]);
  }

}
