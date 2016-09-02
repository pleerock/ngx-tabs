import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Tab} from "./Tab";
import {TabHeading} from "./TabHeading";
import {Tabset} from "./Tabset";
import {TabTransclude} from "./TabTransclude";

export * from "./Tab";
export * from "./Tabset";
export * from "./TabHeading";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Tab,
        TabHeading,
        Tabset,
        TabTransclude
    ],
    exports: [
        Tab,
        TabHeading,
        Tabset,
    ]
})
export class TabsModule {

}