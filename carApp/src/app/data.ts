import { Car } from './shared/models/carModel';

export const sample_cars: Car[] = [
  {
    id: '1',
    brand: 'BMW M3',
    price: 54000,
    productionYear: 1997,
    fuelType: ['Petrol'],
    tags: ['Manual', 'Fast'],
    favourite: false,
    imageUrl: 'assets/bmw.jpg',
  },
  {
    id: '2',
    brand: 'Mercedes AMG',
    price: 78000,
    productionYear: 2017,
    fuelType: ['Petrol'],
    tags: ['Automatic', 'Fast'],
    favourite: true,
    imageUrl: 'assets/mercedes.jpg',
  },
  {
    id: '3',
    brand: 'Ford Focus',
    price: 5000,
    productionYear: 2004,
    fuelType: ['Diesel'],
    tags: ['Manual', 'Slow'],
    favourite: false,
    imageUrl: 'assets/ford.jpg',
  },
];
