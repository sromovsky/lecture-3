import {Request, Response} from 'express';
import {SmartTV} from "./SmartTV";

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const TV1 = new SmartTV('LG', 'black', 55);
const TV2 = new SmartTV('Samsung', 'silver', 65);
const TV3 = new SmartTV('Tesla', 'white', 42);

const TVs: SmartTV[] = [TV1, TV2, TV3];

app.get('/', (req: Request, res: Response) => {
    res.send(TVs);
});

app.get('/:name', (req: Request, res: Response) => {
    const filteredTvs = TVs.filter(tv => tv.getName() === req.params.name);
    if(filteredTvs.length === 0){
        res.send('TV not found!');
    }
    res.send(filteredTvs);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});