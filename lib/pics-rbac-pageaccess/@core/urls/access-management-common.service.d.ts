import { DataStoreService } from '../service/data-store.service';
import * as i0 from "@angular/core";
export declare class AccessManagementCommonService {
    private _storeservice;
    private urlData;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    set clickableData(data: any);
    get clickableData(): any;
    getUserList(orgid: any): any;
    getPolicyGroupList(orgid: any): any;
    getRoleList(orgid: any): any;
    getOrganizationList(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccessManagementCommonService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccessManagementCommonService>;
}
