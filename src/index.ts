import { Request, Response } from 'express';
import { Notebook } from './Notebook';

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const Dell_Inspiron_15 = new Notebook(1, "Dell Inspiron 15", "black", 512, 859);
const HP_Pavilion_15 = new Notebook(2, "HP Pavilion 15", "white", 1024, 854);
const Lenovo_Thinkpad_14 = new Notebook(3, "Lenovo Thinkpad 14", "black", 2048, 999);
const MacBook_Pro_16 = new Notebook(4, "MacBook Pro 16", "silver", 4096, 769);
const Asus_Zenbook_14 = new Notebook(5, "Asus Zenbook 14", "gray", 8192, 999);

let array: Notebook[] = [Dell_Inspiron_15, HP_Pavilion_15, Lenovo_Thinkpad_14, MacBook_Pro_16, Asus_Zenbook_14];

app.get('/', (req: Request, res: Response) => {
    res.send(`Choose a notebook from the selection:`);
    res.send(array);
});

app.get('/choice', (req: Request, res: Response) => {
    let result = array;
    res.send(result.map(notebook => {
        return {
            name: notebook.getName(),
            color: notebook.getColor(),
            storage: notebook.getStorage(),
            price: notebook.getPrice()
        }
    }));
});

app.delete('/purchase', (req: Request, res: Response) => {
    const name = Number(req.params.name);
    array = array.filter(notebook => notebook.getName() != name);
    res.send(`Name: ${name} The device is purchased!`);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});

