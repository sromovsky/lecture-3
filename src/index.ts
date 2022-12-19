import {Request, Response} from 'express';
import {Person} from "./Person";

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const p1 = new Person(1, "BMW" , "NZ645HK" , 30025,"Peter");
const p2 = new Person(2, "Skoda" , "KN545GT" , 56620,"Karol");
const p3 = new Person(3, "Opel", "BA345BG" ,89715,"Marta");
const p4 = new Person(4, "Audi","BA321FR",120015,"Richard");
const p5 = new Person(5, "Toyota","NR343",300012,"Ondrej");
const p6 = new Person(6, "Skoda","KN387",30041,"Igor");
const p7 = new Person(7, "Audi","NZ632",32145,"Robert");
const p8 = new Person(8, "Subaru","KN213BT",50041,"Norbert");

let array: Person[] = [p1, p2, p3, p4, p5, p6, p7, p8];

app.get('/', (req: Request, res: Response) => {
    res.send({autor: "Viktor Halasz"});
});

app.get('/Person', (req: Request, res: Response) => {
    res.send(array);
});

app.get('/Person/:Id', (req: Request, res: Response) => {
    const Id = Number(req.params.trackId);
    const au = array.find(au => au.getId() === Id);
    if (au) {
        res.send(au);
    } else {
        res.send({});
    }
});



app.get('/Person//:vyrobca', (req: Request, res: Response) => {
    const vyrobca = req.params.vyrobca;
    const au = array.filter(au => au.getvyrobca() === vyrobca);
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

app.put('/Person/:Id', (req: Request, res: Response) => {
    const Id = Number(req.params.Id);
    const autid = array.find(autid => autid.getId() === Id);
    if (autid) {
        autid.setvyrobca(req.body.vyrobca);
        autid.setspz(req.body.spz);
        autid.setkilometre(Number(req.body.kilometre));
        autid.setmeno(req.body.meno);
        res.send(autid);
    }
    else {
        res.send('autid not found!');
    }
});

app.delete('/Person/:Id', (req: Request, res: Response) => {
    const Id = Number(req.params.Id);
    array = array.filter(autid => autid.getId() !== Id);
    res.send(`Id: ${Id} DELETED!`);
});

app.post('/Person', (req: Request, res: Response) => {

    const pl= new Person( array.length + 1,
        req.body.vyrobca,
        req.body.spz,
        Number(req.body.kilometre),
        req.body.meno
    );
    array.push(pl);
    res.send(pl);

    res.send(`OK - new Id: ${array.length + 1}`);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});