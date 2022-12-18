export  class Player {
    private Name: string;
    private Age: number;
    private Nationality: string;
    private Ranking: number;

    constructor(Name: string, Age: number, Nationality: string, Ranking: number) {
        this.Name = Name;
        this.Age = Age;
        this.Nationality = Nationality;
        this.Ranking = Ranking;
    }
    getName(): string {
        return this.Name;
    }


    getNationality(): string {
        return this.Nationality;
    }


    getAge(): number {
        return this.Age;
    }

    getRanking(): number {
        return this.Ranking;
    }
}