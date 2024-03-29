import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-rbac-pageaccess/@core/permissions/permission.store';
import { RBACINFO } from './pics-rbac-pageaccess/@core/urls/rbac-url.config';
import { DataStoreService } from './pics-rbac-pageaccess/@core/service/data-store.service';
import * as i0 from "@angular/core";
export declare class RbacPageaccessComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    accessEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacPageaccessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RbacPageaccessComponent, "rbac-pageaccess", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "accessEvent": "accessEvent"; }, {}, never, never>;
}
