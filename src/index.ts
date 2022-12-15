import {Request, Response} from 'express';
import {Cyclist} from './Cyclist';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const p1 = new Cyclist(1, "Peter Sagan", 30, "Bora");
const p2 = new Cyclist(2, "Chris Froome", 28, "Sky");
const p3 = new Cyclist(3, "Martin Velits", 34, "Quickstep");
const p4 = new Cyclist(4, "Lance Armstrong", 35, "Astana")

let array: Cyclist[] = [p1, p2, p3, p4];

app.get('/', (req: Request, res: Response) => {
    res.send({autor: 'Martin Petrik'});
});

app.get('/Cyclist', (req: Request, res: Response) => {
    const teamName = String(req.query.withteamName);

    console.log(teamName);
    let result;

    if (teamName) {
        result = array.filter(Cyclist => Cyclist.getteamName().includes(teamName))
    }else
    {
        result=array;
    }
    res.send(result.map(Cyclist => {
        return {
            position: Cyclist.getCyclist(),
            name: Cyclist.getName()
        }
    }));
});

app.get('/Cyclists/:position', (req: Request, res: Response) => {
    const position = Number(req.params.position);
    const user = array.find(Cyclist => Cyclist.getposition() === position);
    if (Cyclist) {
        res.send(Cyclist);
    } else {
        res.send({});
    }
});

app.get('/Cyclists/:position/teamName', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    const Cyclist = array.find(Cyclist => Cyclist.getposition() === position);
    if (Cyclist) {
        res.send(Cyclist.getteamName());
    } else {
        res.send('Not Found');
    }
});

app.post('/Cyclists/:position/teamName', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    const Cyclist = array.find(Cyclist => Cyclist.getposition() === position);
    if (Cyclist) {
        Cyclist.addteamName(req.body.value);
        res.send('DONE!');
    } else {
        res.send('not found');
    }
});

app.put('/Cyclists/:position', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    const Cyclist = array.find(Cyclist => Cyclist.getposition() === position);
    if (Cyclist) {
        if (req.body.name?.length >= 3 && req.body.age !== undefined) {

            Cyclist.setName(req.body.name);
            Cyclist.setAge(req.body.age);

            res.send(`OK - Cyclist with position: ${Cyclist.getposition()} UPDATED!`);
        } else {
            res.send(`Invalposition value!`);
        }
    } else {
        res.send('Cyclist not found!');
    }
});

app.delete('/Cyclists/:position', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    array = array.filter(Cyclist => Cyclist.getposition() !== position);
    res.send(`position: ${position} DELETED!`);
});

app.post('/Cyclists/s', (req: Request, res: Response) => {
    if (req.body.name?.length >= 3 && req.body.age !== undefined) {
        const position = array.length + 1;
        const value = new Cyclist(position ,req.body.name, req.body.age, req.teamName);
        const index = array.push(value);
        res.send(`OK - new position: ${position}`);
    } else {
        res.send(`Invalid value!`);
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});