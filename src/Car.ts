export class Car {
    private brand: string;
    private model: string;
    private year: number;
    private power: number;

    constructor(brand: string, model: string, year: number, power: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.power = power;
    }

    getBrand(): string {
        return this.brand;
    }

    setBrand(brand: string) {
        this.brand = brand;
    }

    getModel(): string {
        return this.model;
    }

    setModel(model: string) {
        this.model = model;
    }

    getYear() {
        return this.year;
    }

    setYear(year: number) {
        this.year = year;
    }

    getPower() {
        return this.power;
    }

    setPower(power: number) {
       this.power = power;
    }
}