import {ContentChildren, Component, QueryList, Input, AfterContentInit, EventEmitter, Output} from "angular2/core";
import {Tab} from "./Tab";
import {TabTransclude} from "./TabTransclude";

@Component({
    selector: "tabset",
    template: `
<div class="tabset">
    <ul class="nav" [ngClass]="{ 'nav-tabs': !pills, 'nav-pills': pills }">
      <li role="presentation" *ngFor="#tab of tabs" [class.active]="tab.active">
        <a (click)="changeActiveTab(tab)" class="btn" [class.disabled]="tab.disabled">
            <span [tabTransclude]="tab.headingTemplate">{{tab.title}}</span>
        </a>
        
      </li>
    </ul>
    <div class="tabset-content">
        <ng-content></ng-content>    
    </div>
</div>
`,
    directives: [
        TabTransclude
    ]
})
export class Tabset implements AfterContentInit {

    @Input()
    pills: boolean;

    @ContentChildren(Tab)
    tabs: QueryList<Tab>;

    @Output()
    onSelect = new EventEmitter(false);

    changeActiveTab(tab: Tab) {
        const tabs = this.tabs.toArray();
        tabs.forEach(tab => tab.active = false);
        tab.active = true;
        this.onSelect.emit(tabs.indexOf(tab));
    }

    ngAfterContentInit() {
        const readTabs = this.tabs.toArray();
        const activeTab = readTabs.find(tab => tab.active === true);
        if (!activeTab && readTabs.length > 0)
            readTabs[0].active = true;
    }

}
