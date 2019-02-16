import {platformNativeScriptDynamic} from "nativescript-angular/platform";
import {AppModule} from "./app/app.module";
import {ios} from "tns-core-modules/application";
import {EventosDelegate} from "~/app/eventos-applicacion/eventos-delegate/custom-delegate";
import { aplicarAuth0Delegate } from '@manticore-labs/nativescript';

if (ios) {
    ios.delegate = EventosDelegate;
    aplicarAuth0Delegate(EventosDelegate)
}


platformNativeScriptDynamic().bootstrapModule(AppModule);
