import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Directive({
    selector: "[tabTransclude]"
})
export class TabTransclude {

    _tabTransclude: TemplateRef<any>;

    constructor(public viewRef: ViewContainerRef) {
    }

    @Input()
    set tabTransclude(templateRef: TemplateRef<any>) {
        this._tabTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }

    get tabTransclude() {
        return this._tabTransclude;
    }

}