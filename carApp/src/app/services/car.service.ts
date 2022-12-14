import { sample_cars } from './../data';
import { Injectable } from '@angular/core';
import { Car } from '../shared/models/carModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() {}

  getAllCars(): Car[] {
    return sample_cars;
  }

  getAllCarsBySearchTerm(search: string) {
    return this.getAllCars().filter((car) =>
      car.brand.toLowerCase().includes(search.toLowerCase())
    );
  }
}
