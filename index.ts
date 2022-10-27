import {Request, Response} from 'express';

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const array: any[] = [];

app.get('/', (req: Request, res: Response) => {
    res.send(array);
});

app.post('/', (req: Request, res: Response) => {
    const value = req.body?.value;
    let index: number = 0;

    if (value) {
        index = array.push(req.body?.value)
        res.send(`OK - new index: ${index}`);
    } else {
        res.send(`Undefined value!`);
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at https://localhost:${port}`)
});