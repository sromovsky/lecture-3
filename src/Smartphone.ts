export class Smartphone {
    private id: number;
    private name: string;
    private color: string;
    private capacity: number;
    private price: number;


    constructor(id: number, name: string, color: string, capacity: number, price: number) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.capacity = capacity;
        this.price = price;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getColor(): string {
        return this.color;
    }

    getCapacity(): number {
        return this.capacity;
    }

    getPrice(): number {
        return this.price;
    }


}