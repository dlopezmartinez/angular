import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    activatedEmitter = new Subject<boolean>(); //la diferencia entre un observable y un subject se trata de que un subject puede ser llamado con .next() desde "fuera" y no desde el propio observable como hemos visto antes en nuestro observable custom.

}