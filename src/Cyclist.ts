export class Cyclist {
    private position: number;
    private name: string;
    private age: number;
    private teamName: string;

    constructor(position: number, name: string, age: number, teamName: string) {
        this.position = position;
        this.name = name;
        this.age = age;
        this.teamName = teamName;
    }

    getposition(): number {
        return this.position;
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

    getteamName(teamName: string) {
        return this.teamName;
    }

    setteamName(teamName: string) {
        this.teamName=teamName;
    }
}

