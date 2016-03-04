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