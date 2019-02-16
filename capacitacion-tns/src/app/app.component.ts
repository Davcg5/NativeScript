import {Component, OnInit} from '@angular/core';
import {MlLoggerService} from '@manticore-labs/nativescript';
import {EventosAplicacionService} from '~/app/servicios/eventos-aplicacion.service';


@Component({
moduleId: module.id,
selector: "ns-app",
templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

constructor(
private readonly _log: MlLoggerService,
private readonly _eventosAplicacionService: EventosAplicacionService) {




this._log.l('LOG: Datos');
this._log.i('INFO: Datos');
this._log.w('WARN: Datos');
this._log.e('ERROR: Datos');
this._log.d({
valor: 'DIR Datos'
});


}

ngOnInit(): void {
// this.login()
}


}