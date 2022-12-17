import {
  carsUrl,
  carsSearchUrl,
  carsTagsUrl,
  carsIdUrl,
} from './../shared/urls';
import { HttpClient } from '@angular/common/http';
import { sample_cars, sample_tags } from './../data';
import { Injectable } from '@angular/core';
import { Car } from '../shared/models/carModel';
import { Tag } from '../shared/models/tagModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(carsUrl);
  }

  getAllCarsBySearchTerm(search: string) {
    return this.http.get<Car[]>(carsSearchUrl + search);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(carsTagsUrl);
  }

  getAllCarsByTag(tag: string): Observable<Car[]> {
    return tag == 'All'
      ? this.getAllCars()
      : this.http.get<Car[]>(carsTagsUrl + tag);
  }

  getCarById(carId: string): Observable<Car> {
    return this.http.get<Car>(carsIdUrl + carId);
  }
}
