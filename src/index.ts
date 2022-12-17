import {Request, Response} from 'express';
import {Smartphone} from './Smartphone';

//test

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const iPhone_13_black = new Smartphone(1, "iPhone 13", "black", 128, 859);
const iPhone_13_white = new Smartphone(2, "iPhone 13", "white", 128, 854);
const iPhone_14_black = new Smartphone(3, "iPhone 14", "black", 128, 999);
const iPhone_13_Mini_black = new Smartphone(4, "iPhone 13 Mini", "black", 128, 769);
const iPhone_14_white = new Smartphone(5, "iPhone 14", "white", 128, 999);
const iPhone_13_green = new Smartphone(6, "iPhone 13", "green", 128, 849);
const iPhone_13_Mini_white = new Smartphone(7, "iPhone 13 Mini", "white", 128, 756);
const iPhone_13_Mini_pink = new Smartphone(8, "iPhone 13 Mini", "pink", 128, 767);
const iPhone_12_black = new Smartphone(9, "iPhone 12", "black", 128, 798);
const iPhone_13_blue = new Smartphone(10, "iPhone 13", "blue", 128, 856);
const iPhone_11_black = new Smartphone(11, "iPhone 11", "black", 128, 558);
const iPhone_14_purple = new Smartphone(12, "iPhone 14", "purple", 128, 999);
const iPhone_13_pink = new Smartphone(13, "iPhone 13", "pink", 128, 870);
const iPhone_13_Mini_green = new Smartphone(14, "iPhone 13 Mini", "green", 128, 766);
const iPhone_14_red = new Smartphone(15, "iPhone 14", "red", 128, 999);

let array: Smartphone[] = [iPhone_13_black, iPhone_13_white, iPhone_14_black, iPhone_13_Mini_black, iPhone_14_white,
    iPhone_13_green, iPhone_13_Mini_white, iPhone_13_Mini_pink, iPhone_12_black, iPhone_13_blue,
    iPhone_11_black, iPhone_14_purple, iPhone_13_pink, iPhone_13_Mini_green, iPhone_14_red];

app.get('/', (req: Request, res: Response) => {
    res.send(`Choose an Apple iPhone from the selection:`);
    res.send(array);
});

app.get('/choice', (req: Request, res: Response) => {
    let result = array;
    res.send(result.map(smartphone => {
        return {
            name: smartphone.getName(),
            color: smartphone.getColor(),
            capacity: smartphone.getCapacity(),
            price: smartphone.getPrice()
        }
    }));
});

app.delete('/purchase', (req: Request, res: Response) => {
    const name = Number(req.params.name);
    array = array.filter(smartphone => smartphone.getName() == name);
    res.send(`Name: ${name} The device is purchased!`);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});