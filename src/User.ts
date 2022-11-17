import { Invoice } from "./Invoice";
import { Service } from "./Service";
import { UserInfo } from "./UserInfo";

export class User {
    private userId: number;
    private userInfo: UserInfo;
    private invoices: Invoice[];
    private services: Service[];

    constructor(userId: number, userInfo: UserInfo, services: Service[], invoices: Invoice[]) {
        this.userId = userId;
        this.userInfo = userInfo;
        this.invoices = invoices;
        this.services = services;

    }

    getUserId() {
        return this.userId;
    }
    getUserInfo() {
        return this.userInfo;
    }
    getUserInvoices() {
        return this.invoices;
    }
    getUserServices() {
        return this.services
    }

    getPrintableUserInfo() {
        let userInfo = {
            "userId": this.userId,
            "userInfo": this.userInfo
        }
        return userInfo;
    }
    getPrintableInvoices() {
        let userInvoices = {
            "userId": this.userId,
            "Invoices": this.invoices
        }
        return userInvoices;
    }
    getPrintableServices() {
        let userServices = {
            "userId": this.userId,
            "Services": this.services
        }
        return userServices;
    }

    addUserService(service: Service) {
        this.services.push(service);
    }
    removeUserService(id: number) {
        this.services = this.services.filter(service => service.getServiceId() != id);
    }
}