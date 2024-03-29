import * as i0 from "@angular/core";
export declare class DataStoreService {
    private currentStoreSubject;
    currentStore: import("rxjs").Observable<any>;
    constructor();
    setData(key: string, value: any): void;
    setObject(value: any): void;
    getData(key: string): any;
    clearStore(): void;
    getCurrentStore(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataStoreService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DataStoreService>;
}
