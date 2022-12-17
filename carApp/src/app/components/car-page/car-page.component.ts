import { CarService } from './../../services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/shared/models/carModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css'],
})
export class CarPageComponent {
  car!: Car;
  constructor(activatedRoute: ActivatedRoute, carService: CarService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        carService.getCarById(params.id).subscribe((serverCars) => {
          this.car = serverCars;
        });
      }
    });
  }
}
