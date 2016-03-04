import {Component, Input} from "angular2/core";

@Component({
    selector: "tab",
    template: `<ng-content *ngIf="active"></ng-content>`
})
export class Tab {

    @Input()
    title: string;

    @Input()
    active: boolean = false;

}