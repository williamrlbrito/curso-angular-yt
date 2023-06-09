import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals';
  animals: Animal[] = [];

  constructor(private http: HttpClient) {}

  get(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
