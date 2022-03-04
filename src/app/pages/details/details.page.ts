import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  private restaurants: Array<any> = [
    {
      id: 1,
      img: 'https://i0.wp.com/www.dondecomersano.es/wp-content/uploads/2019/04/Plan-de-marketing-restaurante-vegetariano-para-locales-mixtos.jpg?resize=750%2C480',
      title: 'Restaurante Vegetariano Primavera',
      details: `<li>Dirección: 3era calle 17-88 zona 8 de Mixco, ciudad San Cristobal Guatemala, City 01057</li>
                <li>Horario: Cerrado ⋅ Abre 9AM Martes</li>
                <li>Medidas de seguridad: Mascaría obligatoria · Chequeo de temperatura · Empleados con mascarilla obligatoria y careta.</li>
                <li>Menu: primavera.com.gt</li>
                <li>Teléfono: 2485 - 4210</li>`,
      lat: 14.5938643,
      lng: -90.5822611,
    },
    {
      id: 2,
      img: 'https://stylelovely.com/wp-content/uploads/Los-mejores-restaurantes-vegetarianos.jpg',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>Dirección: 3era calle 17-88 zona 8 de Mixco, ciudad San Cristobal Guatemala, City 01057</li>
                <li>Horario: Cerrado ⋅ Abre 9AM Martes</li>
                <li>Medidas de seguridad: Mascaría obligatoria · Chequeo de temperatura · Empleados con mascarilla obligatoria y careta.</li>
                <li>Menu: primavera.com.gt</li>
                <li>Teléfono: 2485 - 4210</li>`,
      lat: 14.5938643,
      lng: -90.5822611,
    },
    {
      id: 3,
      img: 'https://www.sillasmesas.es/blog/wp-content/uploads/2020/02/comida-restaurante-salad-Planet.jpg',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>Dirección: 3era calle 17-88 zona 8 de Mixco, ciudad San Cristobal Guatemala, City 01057</li>
                <li>Horario: Cerrado ⋅ Abre 9AM Martes</li>
                <li>Medidas de seguridad: Mascaría obligatoria · Chequeo de temperatura · Empleados con mascarilla obligatoria y careta.</li>
                <li>Menu: primavera.com.gt</li>
                <li>Teléfono: 2485 - 4210</li>`,
      lat: 14.5938643,
      lng: -90.5822611,
    },
    {
      id: 4,
      img: 'https://forum.com.gt/files/user10/RESTAURANTES%20VEGETARIANOS/Arbol%20de%20la%20vida.jpg',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>Dirección: 3era calle 17-88 zona 8 de Mixco, ciudad San Cristobal Guatemala, City 01057</li>
                <li>Horario: Cerrado ⋅ Abre 9AM Martes</li>
                <li>Medidas de seguridad: Mascaría obligatoria · Chequeo de temperatura · Empleados con mascarilla obligatoria y careta.</li>
                <li>Menu: primavera.com.gt</li>
                <li>Teléfono: 2485 - 4210</li>`,
      lat: 14.5938643,
      lng: -90.5822611,
    },
    {
      id: 5,
      img: 'https://enlacocina.b-cdn.net/wp-content/uploads/2020/02/Plan-de-marketing-de-un-restaurante-vegetariano-1020x640.jpg',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>Dirección: 3era calle 17-88 zona 8 de Mixco, ciudad San Cristobal Guatemala, City 01057</li>
                <li>Horario: Cerrado ⋅ Abre 9AM Martes</li>
                <li>Medidas de seguridad: Mascaría obligatoria · Chequeo de temperatura · Empleados con mascarilla obligatoria y careta.</li>
                <li>Menu: primavera.com.gt</li>
                <li>Teléfono: 2485 - 4210</li>`,
      lat: 14.5938643,
      lng: -90.5822611,
    },
    {
      id: 6,
      img: 'https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/newsletter/0376.jpg?1522087455',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>Dirección: 3era calle 17-88 zona 8 de Mixco, ciudad San Cristobal Guatemala, City 01057</li>
                <li>Horario: Cerrado ⋅ Abre 9AM Martes</li>
                <li>Medidas de seguridad: Mascaría obligatoria · Chequeo de temperatura · Empleados con mascarilla obligatoria y careta.</li>
                <li>Menu: primavera.com.gt</li>
                <li>Teléfono: 2485 - 4210</li>`,
      lat: 14.5938643,
      lng: -90.5822611,
    },
  ];
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
