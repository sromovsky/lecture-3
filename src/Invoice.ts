import { Service } from "./Service";

export class Invoice {
    private id: number;
    private services: Service[];
    private totalPrice: number;

    constructor(id: number, services: Service[]) {
        this.id = id;
        this.services = services;
        this.totalPrice = this.getTotalPrice();

    }
    
    getInvoiceId() {
        return this.id;
    }
    getServices(){
        return this.services;
    }
    getTotalPrice() {
        let totalPrice: number = 0;
        for (let i = 0; i < this.services.length; i++) {
            totalPrice += this.services[i].getPrice();
        }
        return totalPrice;
    }
    recalculateTotalPrice() {
        let totalPrice: number = 0;
        for (let i = 0; i < this.services.length; i++) {
            totalPrice += this.services[i].getPrice();
        }
        this.totalPrice = totalPrice; 
    }
    
    removeService(id: number) {
        this.services = this.services.filter(service => service.getServiceId() != id);
    }
}