export class Makeup {
    private name: string;
    private price: number;
    private brand: string;

    constructor(price: number, name: string, number: number, brand: string) {
        this.name = name;
        this.price = price ;
        this.brand = brand ;
    }

    getposition(): number {
        return this.position;
    }

    getName() {
        return this.name;
    }

    getprice() {
        return this.price;
    }

    setName(name: string) {
        this.name = name;
    }

    setprice(price: number) {
        this.price = price;
    }

    getbrand(brand: string) {
        return this.brand;
    }

    setbrand(brand: string) {
        this.brand=brand ;
    }
}

