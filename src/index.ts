class Match {
    // atribúty zápasu
    private team1: string;
    private team2: string;
    private score1: number;
    private score2: number;

    // konštruktor pre inicializáciu atribútov
    constructor(team1: string, team2: string) {
        this.team1 = team1;
        this.team2 = team2;
        this.score1 = 0;
        this.score2 = 0;
    }

    // metóda na získanie informácií o zápase
    public getInfo(): string {
        return `Zápas medzi tímami ${this.team1} a ${this.team2}`;
    }

    // metóda na aktualizáciu skóre
    public updateScore(team: string, score: number): void {
        if (team === this.team1) {
            this.score1 += score;
        } else if (team === this.team2) {
            this.score2 += score;
        }
    }

    // metóda na zistenie výsledku zápasu alebo remízy
    public getResult(): string {
        if (this.score1 > this.score2) {
            return `Výsledok zápasu je ${this.score1}:${this.score2} pre tím ${this.team1}`;
        } else if (this.score2 > this.score1) {
            return `Výsledok zápasu je ${this.score1}:${this.score2} pre tím ${this.team2}`;
        } else {
            return "Zápas skončil remízou";
        }
    }
}

// vytvorenie nového zápasu s tímami Team1 a Team2
const match = new Match("Team1", "Team2");

// výpis informácií o zápase
console.log(match.getInfo());

// aktualizácia skóre pre oba tímy
match.updateScore("Team1", 3);
match.updateScore("Team2", 2);

// výpis výsledku zápasu
console.log(match.getResult());
