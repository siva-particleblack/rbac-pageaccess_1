import { OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionStore } from '../permissions/permission.store';
import * as i0 from "@angular/core";
export declare class ShowFieldDirective implements OnInit {
    private templateRef;
    private viewContainer;
    private dataStore;
    showField: string;
    constructor(templateRef: TemplateRef<any>, viewContainer: ViewContainerRef, dataStore: PermissionStore);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowFieldDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ShowFieldDirective, "[showField]", never, { "showField": "showField"; }, {}, never>;
}
