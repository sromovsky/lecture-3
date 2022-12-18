import {Request, Response} from 'express';
import {Car} from './Car';


const express = require('express');
const port = 3500;

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send(array);
});

app.post('/', (req: Request, res: Response) => {


    if (value) {
        const index = array.push(value)
        res.send(`OK - new index: ${index}`);
    } else {
        res.send(`Invalid value!`);
    }
});

app.get('/show-score', (req: Request, res: Response) => {
    res.send(array);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});