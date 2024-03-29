import { Observable } from 'rxjs';
import { Store } from '../service/store.service';
import * as i0 from "@angular/core";
export declare class PermissionStore extends Store<any> {
    constructor();
    setStore(data: any): void;
    getStore(type?: string): Observable<any>;
    private flat;
    static ɵfac: i0.ɵɵFactoryDeclaration<PermissionStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PermissionStore>;
}
