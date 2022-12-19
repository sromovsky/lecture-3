import {Request, Response} from 'express';
import {Person} from './Person';
import {Room} from './Room';

const express = require('express');
const port = 3000;

const app = express();
app.use(express.json());

//pridanie hosti
const p1 = new Person(1, "Mike", "Pain", 39, 3,11,4 );
const p2 = new Person(2, "John", "Wick", 31, 1, 1,3);
const p3 = new Person(3, "Tony", "Church", 49, 2,6,8);
const p4 = new Person(4, "Emma", "Hill", 26, 1,2, 2);

//vytvorenie izieb
const r1 = new Room(1, "single", true,2)
const r2 = new Room(2, "single", true, 4)
const r3 = new Room(3, "single", false)
const r4 = new Room(4, "single", false)
const r5 = new Room(5, "single", false)
const r6 = new Room(6, "double", true,3 )
const r7 = new Room(7, "double", false)
const r8 = new Room(8, "double", false)
const r9 = new Room(9, "double", false)
const r10 = new Room(10, "double", false)
const r11 = new Room(11, "triple", true, 1)
const r12 = new Room(12, "triple", false)
const r13 = new Room(13, "triple", false)
const r14 = new Room(14, "triple", false)
const r15 = new Room(15, "triple", false)
const r16 = new Room(16, "quad", false)
const r17 = new Room(17, "quad", false)
const r18 = new Room(18, "quad", false)
const r19 = new Room(19, "quad", false)
const r20 = new Room(20, "quad", false)

let people: Person[] = [p1, p2, p3, p4];
const rooms: Room[] = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20]


app.get('/', (req: Request, res: Response) => {
    res.send({Zadanie_2: 'Alex Nemeth'});
});

app.get('/guests', (req: Request, res: Response) => {
    let daysin = Number(req.query.withDaysin);
    let result;

    if (daysin) {
        result = people.filter(Person => Person.getDaysin())
    } else {
        result = people;
    }

    res.send(result.map(guest => {
        return {
            id: guest.getId(),
            surname: guest.getSurname()

        }
    }));
});

app.get('/guests/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const guest = people.find(guest => guest.getId() === id);
    if (guest) {
        res.send(guest);
    } else {
        res.send({});
    }
});

//list vsetkych izieb
app.get('/rooms', (req: Request, res: Response) => {
    let id = Number(req.query.id);
    let result;

    if (id) {
        result = rooms.filter(Room => Room.getId())
    } else {
        result = rooms;
    }

    res.send(result.map(room => {
        return {
            id: room.getId(),
            type: room.getType(),
            occupied: room.getOccupied(),
            guestid: room.getGuestid()
        }
    }));
});


//link na uvolnene izby
app.get('/rooms/available', (req: Request, res: Response) => {
    const result = rooms.filter(room => !room.getOccupied());

    res.send(result.map(room => {
        return {
            id: room.getId(),
            type: room.getType(),
        }
    }));
});


//updatovanie IDs hostov
app.put('/guests/:id', (req: Request, res: Response) => {
    const guestId = Number(req.params.id);
    const guest = people.find(guest => guest.getId() === guestId);
    if (guest) {
        if (req.body.name?.length >= 3 && req.body.age !== undefined) {
            const prevRoom = rooms.find(room => room.getId() === guest.getRoomid());
            guest.setName(req.body.name);
            guest.setSurname(req.body.surname);
            guest.setAge(req.body.age);
            guest.setNopeople(req.body.nopeople);
            guest.setRoomid(req.body.roomid);
            prevRoom?.setOccupied(false);
            guest.setDaysin(req.body.daysin);
            const newRoom = rooms.find(room => room.getId() === req.body.roomid);
            newRoom?.setOccupied(true);

            res.send(`Guest with ID ${guest.getId()} successfully updated.`);
        } else {
            res.send(`Invalid value!`);
        }
    } else {
        res.send('Guest not found!');
    }
});

//vymazavanie hostov
app.delete('/guests/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const guest = people.find(guest => guest.getId() === id);
    if (guest !== undefined) {
        const room = rooms.find(room => room.getId() === guest.getRoomid());
        people = people.filter(guest => guest.getId() !== id);
        room?.setOccupied(false);
        res.send(`ID ${id} deleted.`);
    } else {
        res.send(`ID not found!`);
    }

});

//vytvaranie hostov
app.post('/guests', (req: Request, res: Response) => {
    const id = Number(req.body.roomid);
    const room = rooms.find(room => room.getId() === id);
    if (req.body.name?.length >= 3 && req.body.age !== undefined && room !== undefined) {
        const id = people.length + 1;
        const value = new Person(id, req.body.name, req.body.surname, req.body.age, req.body.nopeople, req.body.roomid, req.body.daysin);
        const index = people.push(value);
        res.send(`Guest saved with ID ${id}`);
        room.setOccupied(true);
    } else {
        res.send(`Invalid value!`);
    }
});

app.listen(port, () => {
    console.log(`⚡ [server]: Server is running at http://localhost:${port}`)
});