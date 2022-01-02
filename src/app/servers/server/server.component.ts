import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //añadimos un más para transformar nuestra string a un número
    this.server = this.serversService.getServer(id);
    this.route.params.
      subscribe((params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      })
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
    //con relativeTo podemos indicar la ruta relativa en la que nos basamos, además de que en el constructor podemos pasar nuestro "route" de tipo ActivatedRoute el cual nos devuelve nuestra ruta actual ya que desde router.navigate, la desconocemos; con queryParamsHandling = 'preserve' podemos asegurarnos que nuestros queryParams se conservarán aunque pasemos a otro componente ( su comportamiento por defecto es simplemente eliminar los queryParams )
  }

}
