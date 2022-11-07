import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { community } from '../../utilities/constants';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  private restaurants: Array<any> = community;
  public restaurant: any = {};
  public comentario: string = "";
  public comentarios = [
    {
      name: 'Juan Pedro',
      msg: 'Lorem ipsum'
    },
    {
      name: 'Ana María',
      msg: 'Lorem ipsum'
    },
    {
      name: 'Luis Gabriel',
      msg: 'Lorem ipsum'
    }
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  comment(){ 
    this.comentarios.push({
      name: "Axel Leo",
      msg: this.comentario
    });
    this.comentario = "";
   }
  
  getProduct() {
    const id = this.route.snapshot.params.id;
    this.restaurant = this.restaurants.find((e) => e.id == id);
  }

}
