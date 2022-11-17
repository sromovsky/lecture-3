import { Request, Response } from 'express';
import { User } from './User';
import { Invoice } from './Invoice';
import { Service } from './Service';
import { UserInfo } from './UserInfo';

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

let user1_userInfo: UserInfo = new UserInfo("Jožko Mrkvička", "Hodžovo Námestie 1", "+421912319128", "jozo@mrkvicka.sk");
let user1_service1: Service = new Service(1, "Domena - testujem.xyz", 9.99);
let user1_service2: Service = new Service(2, "Web - testujem.xyz", 5.99)
let user1_serviceArr: Service[] = [user1_service1, user1_service2];
let user1_invoice1: Invoice = new Invoice(1, user1_serviceArr);
let user1_invoiceArr: Invoice[] = [user1_invoice1];
let user1: User = new User(1, user1_userInfo, user1_serviceArr, user1_invoiceArr);

let user2_userInfo: UserInfo = new UserInfo("Peter Malý", "Zochová 12", "+421908621098", "p.maly@gmail.com")
let user2_service1: Service = new Service(1, "Web - test.xyz", 3.99);
let user2_service2: Service = new Service(2, "Virtual Server", 25.99);
let user2_serviceArr1: Service[] = [user2_service1];
let user2_serviceArr2: Service[] = [user2_service2];
let user2_invoice1: Invoice = new Invoice(1, user2_serviceArr1);
let user2_invoice2: Invoice = new Invoice(2, user2_serviceArr2);
let user2_invoiceArr: Invoice[] = [user2_invoice1, user2_invoice2];
let user2_serviceArr: Service[] = user2_serviceArr1.concat(user2_serviceArr2);
let user2: User = new User(2, user2_userInfo, user2_serviceArr, user2_invoiceArr);

let userArr: User[] = [user1, user2];

//Error messages
const userDoesntExist = { 'Error': '400 - Bad Request', 'Info': 'User doesn\'t exist' };
const missingReqParameters = { 'Error': '400 - Bad Request', 'Missing': 'Required parameters' };
const userExists = { 'Error': '400 - Bad Request', 'Info': 'User with ID already exists' };

// Get all data from all arrays
app.get('/', (req: Request, res: Response) => {
    res.send(userArr);
});

// Get all user data
app.get('/users', (req: Request, res: Response) => {
    let userArray = [];
    for (let i = 0; i < userArr.length; i++) {
        userArray.push(userArr[i].getPrintableUserInfo());
    }
    res.send(userArray);
});

// Create new user without invoices or services
app.post('/users', (req: Request, res: Response) => {
    if (req.body.name !== undefined && req.body.address !== undefined && req.body.phone !== undefined && req.body.email !== undefined) { 
        const id = userArr[userArr.length - 1].getUserId() + 1;
        const newUserInfo = new UserInfo(req.body.name, req.body.address, req.body.phone, req.body.email);
        const newUser = new User(id,newUserInfo,[],[]);
        userArr.push(newUser);
        res.status(200).send(newUser.getPrintableUserInfo());
    } else {
        res.status(400).send(missingReqParameters);
    }
});

// Get all info about specific user
app.get('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = userArr.findIndex(user => user.getUserId() === id);
    if (index != -1) {
        res.status(200).send(userArr[index].getPrintableUserInfo());
    } else {
        res.status(400).send(userDoesntExist);
    }
});

// Create user with specific ID
app.post('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = userArr.findIndex(user => user.getUserId() === id);
    if (index == -1) {
        res.status(400).send(userExists);
    } else {
        if (req.body.name !== undefined && req.body.address !== undefined && req.body.phone !== undefined && req.body.email !== undefined) { 
            const newUserInfo = new UserInfo(req.body.name, req.body.address, req.body.phone, req.body.email);
            const newUser = new User(id,newUserInfo,[],[]);
            userArr.push(newUser);
            res.status(200).send(newUser.getPrintableUserInfo());
        } else {
            res.status(400).send(missingReqParameters);
        }
    }
});

// Edit existing User
app.put('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = userArr.findIndex(user => user.getUserId() === id);
    if (index != -1) {
        if(req.body.name) {
            userArr[index].getUserInfo().setName(req.body.name);
        }
        if(req.body.address) {
            userArr[index].getUserInfo().setAddress(req.body.address);
        }
        if(req.body.phone) {
            userArr[index].getUserInfo().setAddress(req.body.address);
        }
        if(req.body.email) {
            userArr[index].getUserInfo().setEmail(req.body.email);
        }
        res.status(200).send(userArr[index]);
    } else {
        res.status(400).send(userDoesntExist);
    }

});

// Delete existing user with all data (invoices & services)
app.delete('/users/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const removedUser = userArr.filter(user => user.getUserId() == id);
    if (removedUser.length > 0) {
        userArr = userArr.filter(user => user.getUserId() !== id);
        res.status(200).send(removedUser);
    } else {
        res.status(400).send(userDoesntExist);
    }
});

//Get all user info including invoices & services
app.get('/users/:id/all', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = userArr.findIndex(user => user.getUserId() === id);
    if (index != -1) {
        res.status(200).send(userArr[index]);
    } else {
        res.status(400).send(userDoesntExist);
    }
});

// Get all invoice data
app.get('/invoices', (req: Request, res: Response) => {
    let invoiceArray = [];
    for (let i = 0; i < userArr.length; i++) {
        invoiceArray.push(userArr[i].getPrintableInvoices());
    }
    res.send(invoiceArray);
});

// Get all service data
app.get('/services', (req: Request, res: Response) => {
    let serviceArray = [];
    for (let i = 0; i < userArr.length; i++) {
        serviceArray.push(userArr[i].getPrintableServices());
    }
    res.send(serviceArray);
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});