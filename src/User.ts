export class User {
    private id: number;
    private name: string;
    private address: string;
    private phone: string;
    private email: string;

    constructor(id: number, name: string, address: string, phone: string, email: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;

    }

    getId() {
        return this.id;
    }
}