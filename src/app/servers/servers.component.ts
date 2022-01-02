import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSequence } from 'protractor';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    this.router.navigate(['../servers'], { relativeTo: this.route, queryParamsHandling: 'preserve' }); //con relativeTo podemos indicar la ruta relativa en la que nos basamos, además de que en el constructor podemos pasar nuestro "route" de tipo ActivatedRoute el cual nos devuelve nuestra ruta actual ya que desde router.navigate, la desconocemos; con queryParamsHandling = 'preserve' podemos asegurarnos que nuestros queryParams se conservarán aunque pasemos a otro componente ( su comportamiento por defecto es simplemente eliminar los queryParams )
  }

}
