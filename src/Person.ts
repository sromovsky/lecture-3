export class Person {
    private id: number;
    private name: string;
    private surname: string;
    private age: number;
    private nopeople: number;
    private roomid: number;
    private daysin: number;

    constructor(id: number, name: string, surname: string, age: number, nopeople: number, roomid: number, daysin: number) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.nopeople = nopeople;
        this.roomid = roomid;
        this.daysin = daysin;
    }

    getId(): number {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getSurname() {
        return this.surname;
    }

    getAge() {
        return this.age;
    }

    getNopeople() {
        return this.nopeople;
    }

    getRoomid() {
        return this.roomid;
    }
    getDaysin() {
        return this.daysin;
    }

    setName(name: string) {
        this.name = name;
    }

    setSurname(surname: string) {
        this.surname = surname;
    }

    setAge(age: number) {
        this.age = age;
    }

    setDaysin(daysin: number) {
        this.daysin = daysin;
    }

    setNopeople(nopeople: number) {
        this.nopeople = nopeople;
    }

    setRoomid(roomid: number) {
        this.roomid = roomid;
    }
}