import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //name of the component you're creating e.g., customer.root
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'customer-app';
  title : string = 'customer-manager';
}
