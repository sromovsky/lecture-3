export class Fighter {
    private name: string;
    private age: number;
    private nationality: string;
    private weight: number;

    constructor(name: string, age: number, nationality: string, weight: number) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.weight = weight;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getNationality(): string {
        return this.nationality;
    }

    getWeight(): number {
        return this.weight;
    }
}