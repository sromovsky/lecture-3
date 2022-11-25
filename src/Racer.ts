//Pretekári

export class Racer {
    private StartingPosition: number;
    private Brand: string;
    private age: number;
    private Wins: number[];

    constructor(StartingPosition: number, Brand: string, age: number) {
        this.StartingPosition = StartingPosition;
        this.Brand = Brand;
        this.age = age;
        this.Wins = [];
    }

    getStartingPosition(): number {
        return this.StartingPosition;
    }

    getBrand() {
        return this.Brand;
    }


    getAge() {
        return this.age;
    }

    setBrand(Brand: string) {
        this.Brand = Brand;
    }

    setAge(age: number) {
        this.age = age;
    }

    getWins() {
        return this.Wins;
    }

    setWins(value: number) {
        return this.Wins.push(value);
    }
}