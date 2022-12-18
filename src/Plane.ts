export class Plane {
    private id: number;
    private company: string;
    private arrival: string;
    private passengers: number;

    constructor(id: number, company: string, arrival: string, passengers: number) {
        this.id = id;
        this.company = company;
        this.arrival = arrival;
        this.passengers = passengers;
    }

    getId(): number {
        return this.id;
    }


    getArrival() {
        return this.arrival;
    }


    setId(id: number) {
        this.id = id;
    }

    setCompany(company: string) {
        this.company = company;
    }

    setArrival(arrival: string) {
        this.arrival = arrival;
    }


    setPassengers(passengers: number) {
        this.passengers = passengers;
    }

}