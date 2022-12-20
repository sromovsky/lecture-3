import {Request, Response} from 'express';
import {Cars} from './Cars';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const Audi = new Cars(1, "Audi", 5, 22000);
const Mercedes = new Cars(2, "Mercedes", 6, 18000);
const Dodge = new Cars(3, "Dodge", 2, 36500);
const Seat = new Cars(4, "Seat", 4, 15300);
const BMW = new Cars(5, "BMW", 2, 24700);
const Peugeot = new Cars(6, "Peugeot", 1, 18200);
const Renault = new Cars(7, "Renault", 7, 8900);
const Dacia = new Cars(8, "Dacia", 9, 7600);
const Opel = new Cars(9, "Opel", 4, 14900);

let array: Cars[] = [Audi, Mercedes, Dodge, Seat, BMW, Peugeot, Renault, Dacia, Opel];

app.get('/', (req: Request, res: Response) => {
    res.send(`Cars selection:`);
    res.send(array);
});

app.get('/choice', (req: Request, res: Response) => {
    let result = array;
    res.send(result.map(Cars => {
        return {
            id: Cars.getId(),
            name: Cars.getName(),
            age: Cars.getAge(),
            price: Cars.getPrice()
        }
    }));
});

app.post('/choice', (req: Request, res: Response) => {
    if (req.body.name?.length >= 3 && req.body.age !== undefined && req.body.price !== undefined) {
        const id = array.length + 1;
        const value = new Cars(id, req.body.name, req.body.age, req.body.price);
        const index = array.push(value);
        res.send(`New car added! (ID ${id}`);
    }
    else {
        res.send(`Invalid value!`);
    }
    })

app.put('/choice/:id', (req: Request, res: Response) => {
    const carsId = Number(req.params.id);
    const cars = cars.find(cars => cars.getId() === carsId);
    if (cars) {
            cars.setId(req.body.id);
            cars.setName(req.body.name);
            cars.setAge(req.body.age);
            cars.setPrice(req.body.price);
            res.send(`Car with ID ${cars.getId()} successfully updated.`);
        } else {
            res.send(`Invalid value!`);
        }
    }
});

app.delete('/purchase', (req: Request, res: Response) => {
    const name = Number(req.params.name);
    array = array.filter(Cars => Cars.getName() == 'name');
    res.send(`Name: ${name}  is purchased!`);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});
