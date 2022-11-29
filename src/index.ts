import {Request, Response} from 'express';
import {Team} from './Teams';

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const Brazil = new Team(1, "Brazília", 3.50);
const France = new Team(4, "Francúzsko", 6.50);
const Spain = new Team(7, "Španielsko", 7.28);
const Argentina = new Team(3, "Argentína", 8.50);
const England = new Team(5, "Anglicko", 11.00);
const Portugal = new Team(9, "Portugalsko", 12.00);
const Germany = new Team(11, "Nemecko", 13.00);
const Netherlands = new Team(8, "Holandsko", 15.00);
const Denmark = new Team(10, "Dánsko", 60.00);
const Croatia = new Team(12, "Chorvátsko", 60.00);
const Belgium = new Team(2, "Belgicko", 70.00);
const Uruguay = new Team(14, "Uruguaj", 90.00);
const Switzerland = new Team(15, "Švajčiarsko", 95.00);
const Senegal = new Team(18, "Senegal", 100.00);
const Morocco = new Team(22, "Maroko", 130.00);
const Serbia = new Team(21, "Srbsko", 130.00);
const USA = new Team(16, "USA", 150.00);
const Poland = new Team(26, "Polsko", 150.00);
const Japan = new Team(24, "Japonsko", 250.00);
const Ghana = new Team(61, "Ghana", 333.00);
const Australia = new Team(38, "Austrália", 350.00);
const Iran = new Team(20, "Irán", 350.00);
const Saudi_Arabia = new Team(51, "Saudská Arábia", 400.00);
const Korea_Republic = new Team(28, "Južná Kórea", 505.00);
const Mexico = new Team(13, "Mexiko", 750.00);
const Cameroon = new Team(43, "Kamerun", 750.00);
const Wales = new Team(19, "Wales", 1000.00);
const Costa_Rica = new Team(31, "Kostarika", 1200.00);
const Tunisia = new Team(30, "Tunisko", 2000.00);

let array: Team[] = [Brazil, France, Spain, Argentina, England, Portugal, Germany, Netherlands, Croatia, Denmark, Belgium, Uruguay,Switzerland, Senegal, Morocco,
    Serbia, Poland, USA, Japan, Ghana, Australia, Iran, Saudi_Arabia, Korea_Republic, Mexico, Cameroon, Wales, Costa_Rica, Tunisia];

app.get('/', (req: Request, res: Response) => {
    res.send(array);
});

app.get('/users', (req: Request, res: Response) => {
    const score = Number(req.query.withScore);



    let result = array;

    res.send(result.map(user => {
        return {
            World_Ranking: user.getWorld_Ranking(),
            Country: user.getCountry(),
            Win_Odds: user.getWinOdds()

        }
    }));
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});