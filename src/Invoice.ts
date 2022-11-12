import { User } from "./User";
import { Service } from "./Service";

export class Invoice {
    private id: number;
    private user: User;
    private services: Service[];
    private totalPrice: number;

    constructor(id: number, user: User, services: Service[], totalPrice: number) {
        this.id = id;
        this.user = user;
        this.services = services;
        this.totalPrice = totalPrice;

    }
}