import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {TAB_DIRECTIVES} from "../../src/ng2-tabs";

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

</div>
`,
    directives: [TAB_DIRECTIVES]
})
export class Sample1App {

}

bootstrap(Sample1App);