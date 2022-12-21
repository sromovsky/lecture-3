import {Request, Response} from 'express';
import {SmartTV} from './SmartTV';

//test

const express = require('express');
const port = 3000;

const {delete: delete1, get, listen, use} = express();
use(express.json());
const Samsung_QE65QN85B_65 = new SmartTV(1, "Samsung_QE65QN85B_65", "black", 1199),
    Samsung_QE75QN90B_75 = new SmartTV(2, "Samsung_QE75QN90B_75", "white", 1299),
    Samsung_QE85QN95B_85 = new SmartTV(3, "Samsung_QE85QN95B_85", "black", 1399);


let array: let Samsung_QE65QN85B_65;
SmartTV[] = [Samsung_QE65QN85B_65, Samsung_QE75QN90B_75, Samsung_QE85QN95B_85];

get('/', (req: Request, res: Response) => {
    res.send(`Choose an Smart TV from the selection:`);
    res.send(array);
});

get('/choice', (req: Request, res: Response) => {
    res.send(array.map((SmartTV: { getName: () => any; getColor: () => any; getCapacity: () => any; getPrice: () => any; }) => {
        return {
            name: SmartTV.getName(),
            color: SmartTV.getColor(),
            capacity: SmartTV.getCapacity(),
            price: SmartTV.getPrice()
        }
    }));
});

delete1('/purchase',
    (req: Request, res: Response) => {
        const name = Number(req.params.name);
        array = array.filter((SmartTV: { getName: () => number; }) => SmartTV.getName() == name);
        res.send(`Name: ${name} The device is purchased!`);
    });

listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});