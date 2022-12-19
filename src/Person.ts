export class Person {
    private Id: number;
    private vyrobca: string;
    private spz: string;
    private kilometre: number;
    private meno: string;


    constructor(Id: number, vyrobca: string, spz: string, kilometre: number, meno:string) {
        this.Id = Id;
        this.vyrobca= vyrobca;
        this.spz = spz;
        this.kilometre = kilometre;
        this.meno = meno;
    }

    getId(): number {
        return this.Id;
    }

    getvyrobca() {
        return this.vyrobca;
    }

    getspz() {
        return this.spz;
    }

    getkilometre() {
        return this.kilometre;
    }
    getmeno() {
        return this.meno;
    }
    setvyrobca(vyrobca: string) {
        this.vyrobca = vyrobca;
    }

    setspz(spz: string) {
        this.spz = spz;
    }

    setkilometre(kilometre: number) {
        this.kilometre = kilometre;
    }


    setmeno(meno: string) {
        this.meno = meno;
    }

}