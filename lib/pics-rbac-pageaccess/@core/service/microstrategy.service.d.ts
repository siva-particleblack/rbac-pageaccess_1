import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { DataStoreService } from './data-store.service';
import { PermissionStore } from '../permissions/permission.store';
import * as i0 from "@angular/core";
export declare class MicrostrategyService {
    private http;
    private alertService;
    private permissionStore;
    private _storeservice;
    dossierList: any;
    RBACORG: any;
    environment: any;
    constructor(http: HttpClient, alertService: AlertService, permissionStore: PermissionStore, _storeservice: DataStoreService);
    getAuthToken(): import("rxjs").Observable<import("@angular/common/http").HttpResponse<Object>>;
    getDossier(projectId?: string, dossierId?: string, pageNo?: string): void;
    getLibraryDetails(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MicrostrategyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MicrostrategyService>;
}
