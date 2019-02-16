import { Component, OnInit } from "@angular/core";
import {nombre} from '~/app/home/nombre-aplicacion/nombre';
import {MlLoggerService} from "@manticore-labs/nativescript";
import {Auth0} from 'nativescript-auth0';
@Component({
selector: "Home",
moduleId: module.id,
templateUrl: "./home.component.html",
styleUrls: ["./home.component.css","home.component.comun.css"]
})
export class HomeComponent implements OnInit {
auth0;
constructor(private readonly _mlloggerService: MlLoggerService) {
// Use the component constructor to inject providers.
this.auth0 = new Auth0('zkODfb91o5e34eilbELKyL0yOOrRjMxR', 'aso-arco-backend.auth0.com');
}

ngOnInit(): void {
this._mlloggerService.d('debug')
this._mlloggerService.e('error')
this._mlloggerService.i('info')
this._mlloggerService.l('log')
this._mlloggerService.w('warning')

console.log(nombre)
}

login() {
this.auth0.webAuthentication({
scope: 'openid offline_access'
}).then((res) => {
this._mlloggerService.l(JSON.stringify(res));
}, (error) => {
console.error('Error');
console.error(error);
});
}
}