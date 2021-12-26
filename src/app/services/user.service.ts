import { Injectable, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService implements OnInit {

    constructor(private counterService: CounterService) {

    }

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.updateCounters()
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.updateCounters()
    }

    updateCounters() {
        this.counterService.setInactiveNumber(this.inactiveUsers.length)
        this.counterService.setActiveNumber(this.activeUsers.length);
    }

    ngOnInit(): void {
        this.counterService.setActiveNumber(this.activeUsers.length)
        this.counterService.setInactiveNumber(this.inactiveUsers.length)
    }


}