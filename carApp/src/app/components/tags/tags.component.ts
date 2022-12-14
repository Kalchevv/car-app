import { CarService } from './../../services/car.service';
import { Component } from '@angular/core';
import { Tag } from 'src/app/shared/models/tagModel';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: Tag[];
  constructor(carService: CarService) {
    this.tags = carService.getAllTags();
  }
}
