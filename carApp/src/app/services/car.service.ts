import { sample_cars, sample_tags } from './../data';
import { Injectable } from '@angular/core';
import { Car } from '../shared/models/carModel';
import { Tag } from '../shared/models/tagModel';

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

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllCarsByTag(tag: string): Car[] {
    return tag == 'All'
      ? this.getAllCars()
      : this.getAllCars().filter((car) => car.tags?.includes(tag));
  }
}
