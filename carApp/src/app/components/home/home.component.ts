import { CarService } from './../../services/car.service';
import { Component } from '@angular/core';
import { Car } from 'src/app/shared/models/carModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cars: Car[] = [];

  constructor(private carService: CarService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.cars = this.carService.getAllCarsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        this.cars = this.carService.getAllCarsByTag(params.tag);
      } else {
        this.cars = carService.getAllCars();
      }
    });
  }
}
