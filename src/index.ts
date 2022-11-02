import {Request, Response} from 'express';
import {Person} from './Person';


const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const array: Person[] = [];

app.get('/', (req: Request, res: Response) => {
    res.send(array);
});

app.post('/', (req: Request, res: Response) => {
    const value = req.body as Person;

    if (value) {
        const index = array.push(value)
        res.send(`OK - new index: ${index}`);
    } else {
        res.send(`Invalid value!`);
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at https://localhost:${port}/`)
});