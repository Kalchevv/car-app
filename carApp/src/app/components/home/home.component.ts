import { CarService } from './../../services/car.service';
import { Component } from '@angular/core';
import { Car } from 'src/app/shared/models/carModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cars: Car[] = [];

  constructor(private carService: CarService) {
    this.cars = carService.getAllCars();
  }
}
