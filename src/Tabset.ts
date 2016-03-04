import {ContentChildren, Component, QueryList, Input, AfterContentInit} from "angular2/core";
import {Tab} from "./Tab";

@Component({
    selector: "tabset",
    template: `
<div class="tabset">
    <ul class="nav" [ngClass]="{ 'nav-tabs': !pills, 'nav-pills': pills }">
      <li role="presentation" *ngFor="#tab of tabs" [class.active]="tab.active">
        <a (click)="changeActiveTab(tab)">{{ tab.title }}</a>
      </li>
    </ul>
    <div class="tabset-content">
        <ng-content select="tab"></ng-content>    
    </div>
</div>
`
})
export class Tabset implements AfterContentInit {

    @Input()
    pills: boolean;

    @ContentChildren(Tab)
    tabs: QueryList<Tab>;

    changeActiveTab(tab: Tab) {
        this.tabs.toArray().forEach(tab => tab.active = false);
        tab.active = true;
    }

    ngAfterContentInit() {
        const readTabs = this.tabs.toArray();
        const activeTab = readTabs.find(tab => tab.active === true);
        if (!activeTab && readTabs.length > 0)
            readTabs[0].active = true;
    }

}
