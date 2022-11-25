//Závod Slovakia Ring

import {Request, Response} from 'express';
import {Racer} from './Racer';

const express = require('express');
const port = 8800;

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`⚡ [server]: Server beží na http://localhost:${port}`)
}
);

const r1 = new Racer(2, "Audi", 27);
const r2 = new Racer(1, "Mercedes", 45);
const r3 = new Racer(7, "BMW", 21);
const r4 = new Racer(4, "Porsche", 25);
const r5 = new Racer(6, "Bentley", 35);
const r6 = new Racer(5, "Honda", 20);
const r7 = new Racer(9, "Bugatti", 29);
const r8 = new Racer(8, "Ferrari", 24);
const r9 = new Racer(3, "Lamborghini", 18);

let pole: Racer[] = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

app.get('/', (req: Request, res: Response) => {
    res.send({Pretekari: 'http://localhost:8800/racers'});
}
);

app.get('/Racers', (req: Request, res: Response) => {


    res.send(pole.map(Racer => {
        return {
            StartingPosition: Racer.getStartingPosition(),
            Brand: Racer.getBrand(),
            Age : Racer.getAge(),
            Wins : Racer.getWins()
        }
    }));
}
);

app.get('/Racers/:StartingPosition', (req: Request, res: Response) => {
    const StartingPosition = Number(req.params.StartingPosition);

    const Racer = pole.find(Racer => Racer.getStartingPosition() === StartingPosition);
    if (Racer) {
        res.send(Racer);
    } else {
        res.send({});
    }
}
);

// vymazanie pretekára
app.delete('/Racers/:StartingPosition', (req: Request, res: Response) => {
    const StartingPosition = Number(req.params.StartingPosition);

    pole = pole.filter(Racer => Racer.getStartingPosition() !== StartingPosition);
    res.send(`Pretekár štartujúci z pozície: ${StartingPosition} bol zmazaný`);
}
);
// upravenie údajov zadaného pretekára
app.put('/Racers/:StartingPosition', (req: Request, res: Response) => {
    const StartingPosition = Number(req.params.StartingPosition);
    const Racer = pole.find(Racer => Racer.getStartingPosition() === StartingPosition);
    if (Racer) {
            Racer.setBrand(req.body.Brand);
            Racer.setAge(req.body.age);
            res.send(`Ok, pretekár zo štartovacej pozície StartingPosition: ${Racer.getStartingPosition()} bol upravený`);
        }
    }
    );
// pridanie výhier pretekárovi
app.post('/Racers/:StartingPosition/Wins', (req: Request, res: Response) => {
    const StartingPosition = Number(req.params.StartingPosition);

    const Racer = pole.find(Racer => Racer.getStartingPosition() === StartingPosition);
    if (Racer) {
        Racer.setWins(req.body.value);
        res.send('Pridané');
    } else {
        res.send('Pretekar nenájdený');
    }
}
);