import {Component, Input, ContentChild, TemplateRef} from "@angular/core";
import {TabHeading} from "./TabHeading";

import { trigger, style, animate, state, transition } from '@angular/core';

@Component({
    selector: "tab",
    template: `
      <div class="modal" [@tabActive]="'active'" *ngIf="active">
        <ng-content ></ng-content>
      </div>`,
    animations: [
      trigger('tabActive', [
        state('active', style({transform: 'translateX(0%)'})),
        state('void', style({transform: 'translateX(-100%)'})),
        transition('* => void', [
          animate('3000ms ease-out')
        ]),
        transition(
          'void => *', [
          style({transform: 'translateX(100%)'}),
          animate('3000ms ease-in')
        ]),
      ]),
    ]
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
