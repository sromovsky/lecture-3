import {Request, Response} from 'express';
import {Makeup} from './Makeup';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());
const p1 = new Makeup(15, "Infaillible 24h Fresh Wear", 30, "Loreal"),
    p2 = new Makeup(20, "Soft Pinch Liquid blush", 28, "Sephora"),
    p3 = new Makeup (6 , "Rosy Touch", 34, "Avon")
const makeupElement = Makeup[];
array = [p1, p2, p3 ];

app.get('/', (req: Request, res: Response) => {
    res.send({autor: 'Infaillible 24h Fresh Wear'});
});

app.get('/Makeup ', (req: Request, res: Response) => {
    const teamName = String(req.query.withteamName);

    console.log(teamName);
    let result;

    if (teamName) {
        result = array.filter(Makeup => Makeup.getteamName().includes(teamName))
    }else
    {
        result=array;
    }
    res.send(result.map(Makeup => {
        return {
            position: Makeup.getMakeup(),
            name: Makeup.getName()
        }
    }));
});

app.get('/Makeup /:position', (req: Request, res: Response) => {
    const position = Number(req.params.position);
    const user = array.find(Makeup => Makeup.getposition() === position);
    if (Makeup) {
        res.send(Makeup);
    } else {
        res.send({});
    }
});

app.get('/Makeup/:position/teamName', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    const Makeup = array.find(Makeup => Makeup.getposition() === position);
    if (Makeup) {
        res.send(Makeup.getteamName());
    } else {
        res.send('Not Found');
    }
});

app.post('/Makeup/:position/brand', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    const Makeup = array.find(Makeup => Makeup.getposition() === position);
    if (Makeup) {
        Makeup.brand(req.body.value);
        res.send('DONE!');
    } else {
        res.send('not found');
    }
});

app.put('/Makeup/:position', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    const Makeup = array.find(Makeup => Makeup.getposition() === position);
    if (Makeup) {
        if (req.body.name?.length >= 3 && req.body.age !== undefined) {

            Makeup.setName(req.body.name);
            Makeup.setAge(req.body.age);

            res.send(`OK - Makeup with position: ${Makeup.getposition()} UPDATED!`);
        } else {
            res.send(`Invalposition value!`);
        }
    } else {
        res.send('Makeup not found!');
    }
});

app.delete('/Makeup/:position', (req: Request, res: Response) => {
    const position = Number(req.params.position);

    array = array.filter(Makeup => Makeup.getposition() !== position);
    res.send(`position: ${position} DELETED!`);
});

app.post('/Makeup/s', (req: Request, res: Response) => {
    if (req.body.name?.length >= 3 && req.body.age !== undefined) {
        const position = array.length + 1;
        const value = new Makeup(position ,req.body.name, req.body.age, req.teamName);
        const index = array.push(value);
        res.send(`OK - new position: ${position}`);
    } else {
        res.send(`Invalid value!`);
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});