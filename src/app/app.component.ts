import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // ✅ Ensure this file exists
  styleUrls: ['./app.component.css'] // ✅ Ensure this file exists
})
export class AppComponent {
  title = 'TasteIt'; // ✅ Ensure your application title is correctly assigned
}

