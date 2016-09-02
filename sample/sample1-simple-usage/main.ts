import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {TabsModule} from "../../src/index";

@Component({
    selector: "app",
    template: `
<div class="container">

    <!-- regular tabs -->
    <tabset>
        <tab title="About me">
            Its all about me.
        </tab>
        <tab title="Contacts">
            This is content of the contacts tab
        </tab>
        <tab title="Map" [disabled]="true">
            Content of the Map Tab
        </tab>
    </tabset>
    
    <br/><br/>
    
    <!-- tabs with custom heading templates -->
    <tabset>
        <tab>
            <span *tabHeading>
                <b style="color: deepskyblue">About</b> <i style="color: deeppink">me</i>
            </span>
            Its all about me.
        </tab>
        <tab>
            <span *tabHeading>
                <i style="color: deeppink">My</i> <b style="color: deepskyblue">contacts</b>
            </span>
            This is content of the contacts tab
        </tab>
        <tab title="Map">
            Content of the Map Tab
        </tab>
    </tabset>
    
    <br/><br/>
    
    <!-- pills tabs -->
    <tabset [pills]="true">
        <tab title="About me">
            Its all about me.
        </tab>
        <tab title="Contacts">
            This is content of the contacts tab
        </tab>
        <tab title="Map">
            Content of the Map Tab
        </tab>
    </tabset>
    
    <!-- tabs in ng-repeat -->
    <tabset [pills]="true">
        <tab [title]="tab" *ngFor="let tab of tabs">
            {{ tab }}
        </tab>
    </tabset>

</div>
`
})
export class Sample1App {

    tabs: string[] = ["Home", "About me", "Contacts", "Map"];

}

@NgModule({
    imports: [
        BrowserModule,
        TabsModule
    ],
    declarations: [
        Sample1App
    ],
    bootstrap: [
        Sample1App
    ]
})
export class Sample1Module {

}

platformBrowserDynamic().bootstrapModule(Sample1Module);