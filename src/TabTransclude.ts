import {Directive, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: "[tabTransclude]",
    properties: [
        "tabTransclude"
    ]
})
export class TabTransclude {
    
    private _tabTransclude: TemplateRef<any>;

    constructor(public viewRef: ViewContainerRef) {
    }

    private set tabTransclude(templateRef: TemplateRef<any>) {
        this._tabTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }

    private get tabTransclude() {
        return this._tabTransclude;
    }

}