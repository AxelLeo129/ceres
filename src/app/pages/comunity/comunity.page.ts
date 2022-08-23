import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { community } from '../../utilities/constants';

@Component({
  selector: 'app-comunity',
  templateUrl: './comunity.page.html',
  styleUrls: ['./comunity.page.scss'],
})
export class ComunityPage implements OnInit {

  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  public restaurants: Array<any> = community;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toRestaurant(id: number) {
    this.router.navigate(['post/' + id]);
  }


}
