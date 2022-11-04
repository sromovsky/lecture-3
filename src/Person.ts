export class Person {
    private id: number;
    private name: string;
    private age: number;
    private score: number[];

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.score = [];
    }

    getId(): number {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    setName(name: string) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }

    getScore() {
        return this.score;
    }

    addScore(value: number) {
        return this.score.push(value);
    }
}