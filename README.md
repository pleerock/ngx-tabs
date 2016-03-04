# ng2-tabs

Simple tabs control for your angular2 applications using bootstrap3. Does not depend of jquery.

## Installation

`npm install ng2-tabs --save`

## Usage

```typescript
<tabset>
    <tab title="Tab title">
        Tab contents.
    </tab>
    ...
</tabset>
```

## Sample

```typescript
import {Component} from "angular2/core";
import {TAB_DIRECTIVES} from "ng2-tabs/ng2-tabs";

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
export class App {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-tabs/tree/master/sample) for more examples of
usages.
