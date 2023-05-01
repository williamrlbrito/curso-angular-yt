import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 5 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  constructor() {}

  get(): Animal[] {
    return this.animals;
  }

  remove(animal: Animal): Animal[] {
    this.animals = this.animals.filter((f) => f.name !== animal.name);
    return this.animals;
  }
}
