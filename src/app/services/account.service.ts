import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

//usamos injectable cuando queramos injectar un servicio en otro, en éste caso como estamos injectando LoggingAervice en AccountService, hemos de usar el decorador @Injectable para que angular nos reconozca ésto.
@Injectable()
export class AccountService {

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
    }
}