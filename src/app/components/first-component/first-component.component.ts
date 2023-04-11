import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'William Brito';
  age: number = 35;
  job = 'Programmer';
  hobbies = ['run', 'play', 'study'];
  car = {
    name: 'Polo',
    year: 2019,
  };
}
