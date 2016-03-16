import {Directive, TemplateRef, ViewContainerRef} from "angular2/core";

@Directive({
    selector: "[tabTransclude]",
    properties: [
        "tabTransclude"
    ]
})
export class TabTransclude {
    
    private _tabTransclude: TemplateRef;

    constructor(public viewRef: ViewContainerRef) {
    }

    private set tabTransclude(templateRef: TemplateRef) {
        this._tabTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }

    private get tabTransclude() {
        return this._tabTransclude;
    }

}