import { sample_cars, sample_tags } from './data';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);
const port = 5000;
app.listen(port, () => {
  console.log('Listening on port 5000');
});

app.get('/api/cars', (req, res) => {
  res.send(sample_cars);
});

app.get('/api/cars/search/:search', (req, res) => {
  const search = req.params.search;
  const cars = sample_cars.filter((car) =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );
  res.send(cars);
});

app.get('/api/cars/tags', (req, res) => {
  res.send(sample_tags);
});

app.get('/api/cars/tag/:tag', (req, res) => {
  const tag = req.params.tag;
  const cars = sample_cars.filter((car) => car.tags?.includes(tag));
  res.send(cars);
});

app.get('/api/cars/:carId', (req, res) => {
  const carId = req.params.carId;
  const cars = sample_cars.find((car) => car.id === carId);
  res.send(cars);
});
