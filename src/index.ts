import {Request, Response} from 'express';
import {Plane} from "./Plane";

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const pl1 = new Plane(1, 'Ryanair', 'Madrid' , 325);
const pl2 = new Plane(2, 'Wizz Air' , 'Paríž' , 320);
const pl3 = new Plane(3, 'Air Cairo', 'Rím' ,315);
const pl4 = new Plane(4, 'Smartwings','New York',215);
const pl5 = new Plane(5, 'Air Explore','Palma de Malorka',312,);
const pl6 = new Plane(6, 'Air Jets','Štokholm',341);
const pl7 = new Plane(7, 'Smartwings','Kodaň',221);
const pl8 = new Plane(8, 'Air Cairo','Košice',141);
const pl9 = new Plane(9, 'Ryanair','Zágreb',389);
const pl10 = new Plane(10, 'Air Explore','Tokyo',327);


let array: Plane[] = [pl1, pl2, pl3, pl4, pl5, pl5, pl6, pl7, pl8, pl9, pl10];

app.get('/', (req: Request, res: Response) => {
    res.send({autor: "Andrej Čuvan"});
});

app.get('/Plane', (req: Request, res: Response) => {
    res.send(array);
});

app.get('/Plane/:planeId', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const au = array.find(au => au.getId() === id);
    if (au) {
        res.send(au);
    } else {
        res.send({});
    }
});



app.get('/Plane//:arrival', (req: Request, res: Response) => {
    const arrival = req.params.arrival;
    const au = array.filter(au => au.getArrival() === arrival);
    if (au.length == 0){
        res.send('not found'); }
    else {
        if (au) {
            res.send(au);
        }
        else {
            res.send('not found error');
        }
    }
});

app.put('/Plane/:planeId', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const plane = array.find(autplane => autplane.getId() === id);
    if (plane) {
        plane.setId(req.body.id);
        plane.setCompany(req.body.company);
        plane.setArrival(req.body.arrival);
        plane.setPassengers(req.body.passengers);
        res.send(plane);
    }
    else {
        res.send('autplane not found!');
    }
});

app.delete('/Plane/:planeId', (req: Request, res: Response) => {
    const planeId = Number(req.params.planeId);
    array = array.filter(plane => plane.getId() !== planeId);
    res.send(`TrackId: ${planeId} DELETED!`);
});

app.post('/Day-Schedule', (req: Request, res: Response) => {

    const pl= new Plane( array.length + 1,
        req.body.id,
        req.body.company,
        Number(req.body.passengers),
    );
    array.push(pl);
    res.send(pl);

    res.send(`OK - new planeId: ${array.length + 1}`);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});