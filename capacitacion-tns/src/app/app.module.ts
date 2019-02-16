import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {MlLoggerModule} from "@manticore-labs/nativescript";
import { environment } from "~/environment/environment";
import {EventosAplicacionService} from "~/app/servicios/eventos-aplicacion.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        MlLoggerModule.forRoot({
            produccion: environment.production
        }),

    ],
    declarations: [
        AppComponent
    ],
    providers:[
        EventosAplicacionService
    ],

    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }