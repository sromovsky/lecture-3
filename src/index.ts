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
    let result = array;

    res.send(result.map(Fighter => {
        return {
            name: Fighter.getName(),
            age: Fighter.getAge(),
            nationality: Fighter.getNationality(),
            Weight: Fighter.getWeight()
        }
    }));
});


app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});