import {Request, Response} from 'express';
import {Player} from './Person';


const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const CarlosAlcaraz= new Player('Carlos Alcaraz', 'Spain', 1, 6730);
const RafaelNadal= new Player('Rafael Nadal', 'Spain', 2, 5810);
const CasperRuud= new Player('Casper Ruud', 'Norway', 3, 5600);
const DaniilMedvedev= new Player('Daniil Medvedev', 'Russia', 4, 5155);
const StefanosTsitsipas= new Player('Stefanos Tsitsipas', 'Greece', 5, 4930);
const AlexanderZverev= new Player('Alexander Zverev', 'Germany', 6, 4860);
const NovakDjokovic= new Player('Novak Djokovic', 'Serbia', 7, 4320);
const AndreyRublev= new Player('Andrey Rublev', 'Russia', 8, 3685);
const TaylorFritz= new Player('Taylor Fritz', 'USA', 9, 3195);

const array: Player[] = [];

app.get('/', (req: Request, res: Response) => {
    res.send(array);
});

app.post('/', (req: Request, res: Response) => {
    const value = req.body as Player;

    if (value) {
        const index = array.push(value)
        res.send(`OK - new index: ${index}`);
    } else {
        res.send(`Invalid value!`);
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});