import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories = [
    { name: 'Baking', image: 'baking.jpg' },
    { name: 'Italian', image: 'italian.jpg' },
    { name: 'Healthy', image: 'healthy.jpg' },
    { name: 'Bread', image: 'bread.jpg' },
    { name: 'Pasta', image: 'pasta.jpg' },
    { name: 'Vegan', image: 'vegan.jpg' }
  ];

  courses = [
    { name: 'Sushi Making', image: 'sushi.jpg' },
    { name: 'Chocolate Cake', image: 'chocolate-cake.jpg' },
    { name: 'Tacos', image: 'tacos.jpg' },
    { name: 'Italian Pasta', image: 'pasta.jpg' }
  ];
}
