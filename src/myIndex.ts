/*import {Request, Response} from 'express';
import {Person} from './Person';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const p1 = new Person(1, "Tomas", 25);
const p2 = new Person(2, "Filip", 15);
const p3 = new Person(3, "David", 20);

p1.addScore(5);
p1.addScore(9);
p1.addScore(10);

p2.addScore(5);
p2.addScore(15);

p3.addScore(5);
p3.addScore(9);

let array: Person[] = [p1, p2, p3];

app.get('/', (req: Request, res: Response) => {
    res.send({autor: 'Tomas Sromovsky'});
});

app.get('/users', (req: Request, res: Response) => {
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
 */
