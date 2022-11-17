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

let service1: Service = new Service(1, "Domena - testujem.xyz", 9.99);
let service2: Service = new Service(2, "Web - testujem.xyz", 5.99)
let user1_serviceArray: Service[] = [service1, service2];

let user1_invoice1: Invoice = new Invoice(1, user1, user1_serviceArray, sumServicePrice(user1_serviceArray));
let invoiceArray: Invoice[] = [user1_invoice1];

let service3: Service = new Service(3, "Web - test.xyz", 3.99)
let user2_serviceArray: Service[] = [service3];

let serviceArray: Service[][] = [user1_serviceArray, user2_serviceArray];

function sumServicePrice(services: Service[]) {
    let totalPrice: number = 0;
    for(let i = 0; i < services.length; i++) {
        totalPrice += services[i].getPrice();
    }
    return totalPrice
}

// Get all data from all arrays
app.get('/', (req: Request, res: Response) => {
    res.send({'users': usrArray, 'invoices': invoiceArray, 'services': serviceArray});
});

// Get all user data
app.get('/users', (req: Request, res: Response) => {
    res.send(usrArray);
});

// Get all invoice data
app.get('/invoices', (req: Request, res: Response) => {
    res.send(invoiceArray);
});

// Get all service data
app.get('/services', (req: Request, res: Response) => {
    let allServices: Service[][] = [];
    for(let i = 0; i < invoiceArray.length; i++) {
        allServices.push(invoiceArray[i].getServices());
    }
    res.send(allServices);
});

// Create new user
app.post('/users', (req: Request, res: Response) => {
    if (req.body.name !== undefined && req.body.address !== undefined && req.body.phone !== undefined && req.body.email !== undefined) {
        const id = usrArray[usrArray.length -1].getId() + 1;
        const value = new User(id ,req.body.name, req.body.address, req.body.phone, req.body.email);
        usrArray.push(value);
        res.send(value);
    } else {
        res.status(400).send({'Error':'400 - Bad Request', 'Missing': 'Required parameters'});
    }
});

// Delete existing user
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