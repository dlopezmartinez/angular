import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;



  //añadimos nuestro service como una propiedad y lo mencionamos en los providers, de ésta forma Angular sabrá a que nos referimos y como instanciar nuestro servicio.
  constructor(private loggingService: LoggingService,
    private accountsService: AccountService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    //this.loggingService.logStatusChange(status)
    this.accountsService.statusUpdated.emit(status);
  }
}
