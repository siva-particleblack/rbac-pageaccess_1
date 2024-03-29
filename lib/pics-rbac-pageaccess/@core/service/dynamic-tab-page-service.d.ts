import { NgxfUploaderService } from 'ngxf-uploader';
import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class DynamicTabPageService {
    private uploadService;
    private _storeservice;
    private isPageDesign;
    observePage: import("rxjs").Observable<boolean>;
    httpService: any;
    constructor(uploadService: NgxfUploaderService, _storeservice: DataStoreService);
    getActivePage(tabPageId: any, permission?: boolean): any;
    getDynamicPage(pageId: any): any;
    getPageById(pageId: any): any;
    getListBySourceId(sourceId: any): any;
    getResponseByPageId(responseId: any, pageId: any): any;
    createFormResponse(id: any, requestData: any): any;
    createUserSurvey(history: any, Id: any): any;
    updateFormResponse(id: any, requestData: any): any;
    exportReport(data: any): any;
    uploadFile(file: any): import("rxjs").Observable<import("ngxf-uploader").UploadEvent>;
    getUniqueId(api: string): any;
    changePage(page: any): void;
    createFormResponseAttachment(data: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicTabPageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicTabPageService>;
}
