import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { ErrorPageComponent } from "../error-page/error-page.component";
import { HomeComponent } from "../home/home.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "../servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "../servers/edit-server/edit-server.component";
import { ServerResolver } from "../servers/server/server-resolver.service";
import { ServerComponent } from "../servers/server/server.component";
import { ServersComponent } from "../servers/servers.component";
import { UserComponent } from "../users/user/user.component";
import { UsersComponent } from "../users/users.component";

const appRoutes: Routes = [

    { path: '', component: HomeComponent }, //cuidado con usar espacios en blanco ya que por defecto Angular tiene un matching strategy de prefix, es decir, mira siempre el prefijo de la cadena, en caso de que queramos que mire toda la cadena entera deberíamos de añadir la propiedad pathMatch: 'full' ;
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent },
        ]
    },
    {
        path: 'servers',
        // canActivate: [AuthGuard], dado que no queremos proteger nuestra lista de servidores sino sus hijos, usamos canActivateChild
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' } //con ** cogemos todas las rutas que nuestro Router no conoce, ha de estar en último lugar ya que si no, nos redirige siempre a not found ya que analiza las rutas en orden.
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {


}