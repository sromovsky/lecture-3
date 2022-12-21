import {Request, Response} from 'express';
import {SmartTV} from './SmartTV';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const Samsung_QE65QN85B_65 = new SmartTV(1, "Samsung_QE65QN85B_65", "black", 1199)
const Samsung_QE75QN90B_75 = new SmartTV(2, "Samsung_QE75QN90B_75", "white", 1299);
const Samsung_QE85QN95B_85 = new SmartTV(3, "Samsung_QE85QN95B_85", "black", 1399);

let array: SmartTV[] = [Samsung_QE65QN85B_65,Samsung_QE75QN90B_75, Samsung_QE85QN95B_85]

app.get('/', (req: Request, res: Response) => {
    res.send(`Choose an Apple SmartTV from the selection:`);
    res.send(array);
});

app.get('/choice', (req: Request, res: Response) => {
    res.send(array.map(() => {
        return {
            name: SmartTV.getName(),
            color: SmartTV.getColor(),
            capacity: SmartTV.getCapacity(),
            price: SmartTV.getPrice()
        }
    }));
});

app.delete('/purchase', (req: Request, res: Response) => {
    const name = Number(req.params.name);
    array = array.filter(SmartTV => SmartTV.getName() == name);
    res.send(`Name: ${name} The device is purchased!`);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});

export class SmartTV {
    private _number: number;
    private _Samsung: string;
    private _red: string;

    static getName(): any {
        throw new Error('Method not implemented.');
    }

    static getColor(): any {
        throw new Error('Method not implemented.');
    }

    static getCapacity(): any {
        throw new Error('Method not implemented.');
    }

    static getPrice(): any {
        throw new Error('Method not implemented.');
    }

    constructor(number: number, SmartTV: string, red: string, number2: number) {
        this._number = number;
        this._Samsung = SmartTV;
        this._red = red;
        this._number = number2;
        this._number = number3;

    }
}
