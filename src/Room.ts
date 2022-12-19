export class Room {
    private id: number;
    private type: string;
    private occupied: boolean;
    private guestid: number | undefined;

    constructor(id: number, type: string, occupied: boolean, guestid?: number ) {
        this.id = id;
        this.type = type;
        this.occupied = occupied;
        this.guestid = guestid;
    }

    getId(): number {
        return this.id;
    }

    getType(): string {
        return this.type;
    }

    getOccupied() {
        return this.occupied;
    }

    getGuestid(): number | undefined {
        return this.guestid;
    }

    setOccupied(occupied: boolean) {
        this.occupied = occupied;
    }
}