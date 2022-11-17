export class Service {
    private id: number;
    private name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;

    }
    
    getServiceId() {
        return this.id;
    }
    getPrice() {
        return this.price;
    }
}