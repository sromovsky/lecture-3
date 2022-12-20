import { Request, Response } from 'express';
import { Notebook } from './Notebook';

const express = require('express');
// spustíme server a nasadíme ho na port 3000
const port = 3000;

// vytvoríme novú inštanciu expressu a použijeme middleware na parsovanie JSONu
const app = express();
app.use(express.json());

// vytvoríme nové notebooky
const Dell_Inspiron_15 = new Notebook(1, "Dell Inspiron 15", "black", 512, 859);
const HP_Pavilion_15 = new Notebook(2, "HP Pavilion 15", "white", 1024, 854);
const Lenovo_Thinkpad_14 = new Notebook(3, "Lenovo Thinkpad 14", "black", 2048, 999);
const MacBook_Pro_16 = new Notebook(4, "MacBook Pro 16", "silver", 4096, 769);
const Asus_Zenbook_14 = new Notebook(5, "Asus Zenbook 14", "gray", 8192, 999);

// vytvoríme pole pre notebooky
let array: Notebook[] = [Dell_Inspiron_15, HP_Pavilion_15, Lenovo_Thinkpad_14, MacBook_Pro_16, Asus_Zenbook_14];

// trasa pre zobrazenie výberu notebookov
app.get('/', (req: Request, res: Response) => {
    res.send(`Vyberte si notebook z ponuky:`);
    res.send(array);
});

// trasa pre zobrazenie vlastností notebookov
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

// trasa pre zakúpenie notebooku
app.delete('/purchase/name:', (req: Request, res: Response) => {
    const name = Number(req.params.name);
    array = array.filter(notebook => notebook.getName() != name);
    res.send(`Name: ${name} The device is purchased!`);
});

// trasa pre vytvorenie nového notebooku
app.post('/notebooks', (req: Request, res: Response) => {
    // získame dáta o novom notebooku z požiadavky HTTP
    const newNotebook = req.body;
    // pridáme nový notebook do nášho poľa
    array.push(newNotebook);
    res.send(`Successfully added ${newNotebook.name} to the notebook list.`);
});

// trasa pre aktualizáciu
app.put('/notebooks/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedNotebook = req.body;

    array = array.map(notebook => {
        if (notebook.id === id) {
            return updatedNotebook;
        }
        return notebook;
    });

    res.send(`Successfully updated notebook with id ${id}.`);
});
// spustíme server a nasadíme ho na port 3000
app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)});


