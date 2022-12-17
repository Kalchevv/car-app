import { Router } from 'express';
import { sample_cars, sample_tags } from '../data';

const router = Router();

router.get('/', (req, res) => {
  res.send(sample_cars);
});

router.get('/search/:search', (req, res) => {
  const search = req.params.search;
  const cars = sample_cars.filter((car) =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );
  res.send(cars);
});

router.get('/tags', (req, res) => {
  res.send(sample_tags);
});

router.get('/tag/:tag', (req, res) => {
  const tag = req.params.tag;
  const cars = sample_cars.filter((car) => car.tags?.includes(tag));
  res.send(cars);
});

router.get('/:carId', (req, res) => {
  const carId = req.params.carId;
  const cars = sample_cars.find((car) => car.id === carId);
  res.send(cars);
});

export default router;
