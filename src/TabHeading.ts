import {Directive, TemplateRef} from "@angular/core";

@Directive({
    selector: "[tabHeading]"
})
export class TabHeading {

    constructor(public templateRef: TemplateRef<any>) {
    }
}