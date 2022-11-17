import {Request, Response} from 'express';
import { User } from './User';
import { Invoice } from './Invoice';
import { Service } from './Service';

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

const user1: User = new User(1, "Jožko Mrkvička", "Hodžovo Námestie 1", "+421912319128", "jozo@mrkvicka.sk");
const user2: User = new User(2, "Peter Malý", "Zochová 12", "+421908621098","p.maly@gmail.com");
let usrArray: User[] = [user1, user2];
let invoiceArray: Invoice[] = [];
let serviceArray: Service[] = [];

app.get('/', (req: Request, res: Response) => {
    res.send({'users': usrArray, 'invoices': invoiceArray, 'services': serviceArray});
});

app.get('/users', (req: Request, res: Response) => {
    res.send(usrArray);
});

app.get('/invoices', (req: Request, res: Response) => {
    res.send(invoiceArray);
});

app.get('/services', (req: Request, res: Response) => {
    res.send(serviceArray);
});

app.post('/users', (req: Request, res: Response) => {
    if (req.body.name !== undefined && req.body.address !== undefined && req.body.phone !== undefined && req.body.email !== undefined) {
        const id = usrArray.length + 1;
        const value = new User(id ,req.body.name, req.body.address, req.body.phone, req.body.email);
        usrArray.push(value);
        res.send(value);
    } else {
        res.status(400).send({'Error':'400 - Bad Request', 'Missing': 'Required parameters'});
    }
});

app.delete('/users/delete/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const removedUser = usrArray.filter(usr => usr.getId() == id);
    if (removedUser.length > 0) {
        usrArray = usrArray.filter(user => user.getId() !== id);
        res.status(200).send(removedUser);
    } else {
        res.status(400).send({'Error':'400 - Bad Request', 'Info': 'ID not found'});
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});