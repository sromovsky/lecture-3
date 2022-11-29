export class Team {
    private World_Ranking: number;
    private Country: string;
    private WinOdds: number;


    constructor(World_Ranking: number, country: string, WinOdds: number) {
        this.World_Ranking = World_Ranking;
        this.Country = country;
        this.WinOdds = WinOdds;

    }

    getWorld_Ranking(): number {
        return this.World_Ranking;
    }

    getCountry() {
        return this.Country;
    }

    getWinOdds() {
        return this.WinOdds;
    }

}