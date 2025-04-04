import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [
    { name: 'Italian Food', image: 'assets/images/categories/italian.jpg' },
    { name: 'Healthy Food', image: 'assets/images/categories/healthy.jpg' },
    { name: 'Vegan Food', image: 'assets/images/categories/vegan.jpg' }
  ];

  courses = [
    { name: 'Sushi Making', image: 'assets/images/courses/sushi.jpg' },
    { name: 'Tacos', image: 'assets/images/courses/tacos.jpg' },
    { name: 'Chocolate Cake', image: 'assets/images/courses/chocolate-cake.jpg' }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log("HomeComponent Loaded!");
  }
}
