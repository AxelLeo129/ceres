import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detrecipes',
  templateUrl: './detrecipes.page.html',
  styleUrls: ['./detrecipes.page.scss'],
})
export class DetailsPage implements OnInit {
  public back_button_text: string = '';
  public back_button_icon: string = 'arrow-back-outline';
  private restaurants: Array<any> = [
    {
      id: 1,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-cacio-e-pepe-a1392fd.jpg?quality=90&webp=true&resize=440,400',
      title: 'Gnocchi Caccio e Peppe',
      details: `<li>300g gnocchi</li>
                <li>2 tbsp mantequilla sin sal</li>
                <li>60g de queso parmesano (vegano si desea)</li>
                <li>2 tsp de pimienta negra</li>
                <li>Hojas de ensalada <b>*opcional</b></li>`,
      steps:   `<li> Cocinar el gnocchi en una olla larga con un poco de agua hirviendo con sal. Drenar y guardar aprox. 200 mL de agua </li>
                <li> Calentar la mantequilla en un sarten, anadir el gnocchi, queso y pimienta asi como 150mL del agua guardada. Aumentar el fuego y mover hasta que toda la mantequilla este derretida y los gnocchis bien cubiertos </li>
                <li> Listo!</li>`,
    },
    {
      id: 2,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-fajitas-d49e108.jpg?quality=90&webp=true&resize=440,400',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>300g gnocchi</li>
                <li>2 tbsp mantequilla sin sal</li>
                <li>60g de queso parmesano (vegano si desea)</li>
                <li>2 tsp de pimienta negra</li>
                <li>Hojas de ensalada <b>*opcional</b></li>`,
      steps:   `<li> Cocinar el gnocchi en una olla larga con un poco de agua hirviendo con sal. Drenar y guardar aprox. 200 mL de agua </li>
                <li> Calentar la mantequilla en un sarten, anadir el gnocchi, queso y pimienta asi como 150mL del agua guardada. Aumentar el fuego y mover hasta que toda la mantequilla este derretida y los gnocchis bien cubiertos </li>
                <li> Listo!</li>`,
    },
    {
      id: 3,
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Kale-Pesto-df3faaf.jpg?quality=90&webp=true&resize=375,341',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>300g gnocchi</li>
                <li>2 tbsp mantequilla sin sal</li>
                <li>60g de queso parmesano (vegano si desea)</li>
                <li>2 tsp de pimienta negra</li>
                <li>Hojas de ensalada <b>*opcional</b></li>`,
      steps:   `<li> Cocinar el gnocchi en una olla larga con un poco de agua hirviendo con sal. Drenar y guardar aprox. 200 mL de agua </li>
                <li> Calentar la mantequilla en un sarten, anadir el gnocchi, queso y pimienta asi como 150mL del agua guardada. Aumentar el fuego y mover hasta que toda la mantequilla este derretida y los gnocchis bien cubiertos </li>
                <li> Listo!</li>`,
    },
    {
      id: 4,
      img: 'https://forum.com.gt/files/user10/RESTAURANTES%20VEGETARIANOS/Arbol%20de%20la%20vida.jpg',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>300g gnocchi</li>
                <li>2 tbsp mantequilla sin sal</li>
                <li>60g de queso parmesano (vegano si desea)</li>
                <li>2 tsp de pimienta negra</li>
                <li>Hojas de ensalada <b>*opcional</b></li>`,
      steps:   `<li> Cocinar el gnocchi en una olla larga con un poco de agua hirviendo con sal. Drenar y guardar aprox. 200 mL de agua </li>
                <li> Calentar la mantequilla en un sarten, anadir el gnocchi, queso y pimienta asi como 150mL del agua guardada. Aumentar el fuego y mover hasta que toda la mantequilla este derretida y los gnocchis bien cubiertos </li>
                <li> Listo!</li>`,
    },
    {
      id: 5,
      img: 'https://enlacocina.b-cdn.net/wp-content/uploads/2020/02/Plan-de-marketing-de-un-restaurante-vegetariano-1020x640.jpg',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>300g gnocchi</li>
                <li>2 tbsp mantequilla sin sal</li>
                <li>60g de queso parmesano (vegano si desea)</li>
                <li>2 tsp de pimienta negra</li>
                <li>Hojas de ensalada <b>*opcional</b></li>`,
      steps:   `<li> Cocinar el gnocchi en una olla larga con un poco de agua hirviendo con sal. Drenar y guardar aprox. 200 mL de agua </li>
                <li> Calentar la mantequilla en un sarten, anadir el gnocchi, queso y pimienta asi como 150mL del agua guardada. Aumentar el fuego y mover hasta que toda la mantequilla este derretida y los gnocchis bien cubiertos </li>
                <li> Listo!</li>`,
    },
    {
      id: 6,
      img: 'https://images.adsttc.com/media/images/5ab9/3634/f197/cc6e/5400/00b7/newsletter/0376.jpg?1522087455',
      title: 'Lorem ipsum dolor sit amet...',
      details: `<li>300g gnocchi</li>
                <li>2 tbsp mantequilla sin sal</li>
                <li>60g de queso parmesano (vegano si desea)</li>
                <li>2 tsp de pimienta negra</li>
                <li>Hojas de ensalada <b>*opcional</b></li>`,
      steps:   `<li> Cocinar el gnocchi en una olla larga con un poco de agua hirviendo con sal. Drenar y guardar aprox. 200 mL de agua </li>
                <li> Calentar la mantequilla en un sarten, anadir el gnocchi, queso y pimienta asi como 150mL del agua guardada. Aumentar el fuego y mover hasta que toda la mantequilla este derretida y los gnocchis bien cubiertos </li>
                <li> Listo!</li>`,
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

  addToFavorites() {
    
  }
}
