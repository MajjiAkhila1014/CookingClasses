import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    { name: 'Baking', image: 'baking.jpg' },
    { name: 'Italian', image: 'italian.jpg' },
    { name: 'Healthy', image: 'healthy.jpg' },
    { name: 'Bread', image: 'bread.jpg' },
    { name: 'Pasta', image: 'pasta.jpg' },
    { name: 'Vegan', image: 'vegan.jpg' }
  ];

  
}
