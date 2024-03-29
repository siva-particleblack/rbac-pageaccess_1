import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class PageHeaderService {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getAuthorizedPages(orgid: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageHeaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageHeaderService>;
}
