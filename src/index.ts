import {Request, Response} from 'express';
import {Player} from './Player';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const Carlos_Alcaraz = new Player("Carlos Alcaraz", 19, "Spain", 1)
const Rafael_Nadal = new Player("Rafael Nadal", 36, "Spain", 2)
const Casper_Ruud = new Player("Casper Ruud", 23, "Norway", 3)
const Stefanos_Tsitsipas = new Player("Stefanos Tsitsipas", 24, "Greece", 4)
const Novak_Djokovic = new Player("Novak Djokovič", 35, "Serbia", 5)
const Daniil_Medvedev = new Player("Daniil Medvedev", 26, "Russia", 6)
const Andrey_Rublev = new Player("Andrey Rublev", 25, "Russia", 7)
const Taylor_Fritz = new Player("Taylor Fritz", 25, "USA", 8)
const Alexander_Zverev = new Player("Alexander Zverev", 25, "Germany", 9)
const Cameron_Norrie = new Player("Cameron Norrie", 27, "UK", 10)

let array: Player[] = [Carlos_Alcaraz, Rafael_Nadal, Casper_Ruud, Stefanos_Tsitsipas, Novak_Djokovic, Daniil_Medvedev,
    Andrey_Rublev, Taylor_Fritz, Alexander_Zverev, Cameron_Norrie];

app.get('/', (req: Request, res: Response) => {
    res.send(`Vyber hraca:`);
    res.send(array);
});

app.get('/vyber', (req: Request, res: Response) => {
    let result = array;
    res.send(result.map(Player => {
        return {
            name: Player.getName(),
            age: Player.getAge(),
            nationality: Player.getNationality(),
            ranking: Player.getRanking()
        }
    }));
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});
