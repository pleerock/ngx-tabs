import {Component, Input, ContentChild, TemplateRef} from "@angular/core";
import {TabHeading} from "./TabHeading";

@Component({
    selector: "tab",
    template: `<ng-content *ngIf="active"></ng-content>`
})
export class Tab {

    @ContentChild(TabHeading)
    heading: TabHeading;

    @Input()
    title: string;

    @Input()
    active = false;

    @Input()
    disabled = false;

    get headingTemplate(): TemplateRef<any> {
        return this.heading ? this.heading.templateRef : null;
    };

}