import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {


  //añadimos nuestro service como una propiedad y lo mencionamos en los providers, de ésta forma Angular sabrá a que nos referimos y como instanciar nuestro servicio. En caso de que no lo mencionemos como provider tal y como tenemos nuestro AccountService, éste será heredado de nuestro padre, en caso obvio de que nuestra clase padre tenga tal servicio.
  constructor(private loggingService: LoggingService,
    private accountsService: AccountService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange("New server added, status: " + status)
  }
}
