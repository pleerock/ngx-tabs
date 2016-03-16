# ng2-tabs

Simple tabs control for your angular2 applications using bootstrap3. Does not depend of jquery.

## Installation

`npm install ng2-tabs --save`

## Usage

```typescript
<tabset [pills]="false" (onSelect)="doSomethingOnTabSelect($event)">
    <tab title="Tab title" [disabled]="false">
        <span *tabHeading>
            <b style="color: deepskyblue">Dynamic html</b> <i style="color: deeppink">tab heading</i>
        </span>
        Tab contents.
    </tab>
    ...
</tabset>
```

* `<tabset>` is a container for all tabs
    * `[pills]="true|false"` Specifies if bootstrap pills should be used instead of regular tabs
    * `(onSelect)="doSomethingOnTabSelect($event)"` Callback to be called when tab is being selected
* `<tab>` is a single tab item
    * `title` Simple tab title
    * `[disabled]="true|false` Indicates if current tab is enabled or disabled
    * `<span *tabHeading>...</span>` Allows to specify dynamic html content of the tab title 

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
export class App {

}
```

Take a look on samples in [./sample](https://github.com/pleerock/ng2-tabs/tree/master/sample) for more examples of
usages.
