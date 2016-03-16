import {Directive, TemplateRef} from "angular2/core";

@Directive({
    selector: "[tabHeading]"
})
export class TabHeading {

    constructor(public templateRef: TemplateRef) {
    }
}