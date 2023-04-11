import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'William';
  userData = {
    email: 'williamrldb@gmail.com',
    role: 'admin',
  };
  title = 'curso-angular-yt';
}
