import { Observable } from 'rxjs';
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
    let carsObservable: Observable<Car[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        carsObservable = this.carService.getAllCarsBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        carsObservable = this.carService.getAllCarsByTag(params.tag);
      } else {
        carsObservable = carService.getAllCars();
      }

      carsObservable.subscribe((serverCars) => {
        this.cars = serverCars;
      });
    });
  }
}
