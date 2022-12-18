import {Request, Response} from 'express';
import {Fighter} from './Fighter';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const Brandon_Moreno   =  new Fighter("Brandon Moreno",   32, "Mexico",         57);
const Kai_Kara_France  =  new Fighter("Kai Kara France",  27, "New Zealand",    54);
const Peter_Yan        =  new Fighter("Peter Yan",        24, "Russia",         61);
const TJ_Dillashaw     =  new Fighter("TJ Dillashaw",     22, "America",        61);
const Max_Holloway     =  new Fighter("Max Holloway",     35, "America",        65);
const Brian_Ortega     =  new Fighter("Brian Ortega",     31, "America",        66);
const Dustin_Poirier   =  new Fighter("Dustin Poirier",   38, "America",        70);
const Justin_Gaethje   =  new Fighter("Justin_Gaethje",   37, "America",        70);
const Colby_Covington  =  new Fighter("Colby Covington",  28, "America",        77);
const Leon_Edwards     =  new Fighter("Leon Edwards",     25, "New Britain",    77);
const Robert_Whittaker =  new Fighter("Robert Whittaker", 20, "New Zealand",    84);
const Jared_Cannonier  =  new Fighter("Jared Cannonier",  31, "America",        84);
const Jan_Blachowicz   =  new Fighter("Jan Blachowicz",   34, "Poland",         93);
const Jiri_Prochazka   =  new Fighter("Jiri Prochazka",   29, "Czech Republic", 93);
const Ciryl_Gane       =  new Fighter("Ciryl Gane",       35, "France",         112);
const Stipe_Miocic     =  new Fighter("Stipe Miocic",     36, "America",        109);
const Zhang_Weili      =  new Fighter("Zhang Weili",      25, "China",          52);

let array: Fighter[] = [Brandon_Moreno, Kai_Kara_France, Peter_Yan,TJ_Dillashaw ,Max_Holloway, Brian_Ortega,
    Dustin_Poirier, Justin_Gaethje, Colby_Covington, Leon_Edwards, Robert_Whittaker, Jared_Cannonier, Jan_Blachowicz,
    Jiri_Prochazka, Ciryl_Gane, Stipe_Miocic, Zhang_Weili];

app.get('/', (req: Request, res: Response) => {
    res.send(`Vyber si zápasnika:`);
    res.send(array);
});

app.get('/choice', (req: Request, res: Response) => {
    const score = Number(req.query.withScore);

    console.log(score);

    let result;

    if (score) {
        result = array.filter(user => user.getScore().includes(score))
    } else {
        result = array;
    }

    res.send(result.map(user => {
        return {
            id: user.getId(),
            name: user.getName()
        }
    }));
});

app.get('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = array.find(user => user.getId() === id);
    if (user) {
        res.send(user);
    } else {
        res.send({});
    }
});

app.get('/users/:id/score', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = array.find(user => user.getId() === id);
    if (user) {
        res.send(user.getScore());
    } else {
        res.send('not found');
    }
});

app.post('/users/:id/score', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = array.find(user => user.getId() === id);
    if (user) {
        user.addScore(req.body.value);
        res.send('DONE!');
    } else {
        res.send('not found');
    }
});

app.put('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const user = array.find(user => user.getId() === id);
    if (user) {
        if (req.body.name?.length >= 3 && req.body.age !== undefined) {

            user.setName(req.body.name);
            user.setAge(req.body.age);

            res.send(`OK - user with id: ${user.getId()} UPDATED!`);
        } else {
            res.send(`Invalid value!`);
        }
    } else {
        res.send('User not found!');
    }
});

app.delete('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    array = array.filter(user => user.getId() !== id);
    res.send(`Id: ${id} DELETED!`);
});

app.post('/users', (req: Request, res: Response) => {
    if (req.body.name?.length >= 3 && req.body.age !== undefined) {
        const id = array.length + 1;
        const value = new Person(id ,req.body.name, req.body.age);
        const index = array.push(value);
        res.send(`OK - new id: ${id}`);
    } else {
        res.send(`Invalid value!`);
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});