export class Player {
    private name: string;
    private country: string;
    private rank: number;
    private score: number;

    constructor(name: string, country: string, rank: number, score: number) {
        this.name = name;
        this.country = country;
        this.rank = rank;
        this.score = score;
    }
}