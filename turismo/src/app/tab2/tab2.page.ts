import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  restaurantes = [
    {
      name: 'Coco Bambu',
      image: 'assets/img/entrda.jpg',
      description: 'Brasileira, Frutos do mar, Internacional'
      
    },
    {
      name: 'STK Gastronomia & Bar',
      image: 'assets/img/fachada-stk-gastronimia.jpg',
      description: 'Steakhouse, Brasileira, Internacional'
    },
    {
      name: 'Cachaçaria do Dedé e Empório - Shopping Ponta Negra',
      image: 'assets/img/entrada-da-cachacaria.jpg',
      description: ' Bares e pubs'
    }
    ,
    {
      name: 'Picanha Mania',
      image: 'assets/img/picanha-mania.jpg',
      description: 'Steakhouse, Brasileira, Churrasco, Sul-americana'
    }
    ,
    {
      name: 'Camarada Camarão Manaus - Manauara Shopping',
      image: 'assets/img/grelhados-do-cheff.jpg',
      description: 'Brasileira, Internacional, Restaurante com bar, Frutos do mar'
    }
  ];


  constructor() {}

}
