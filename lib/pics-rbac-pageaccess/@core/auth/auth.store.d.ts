import { UserDto } from '../common/common.entity';
import { Store } from '../service/store.service';
import { Observable } from 'rxjs';
import { AuthState } from './auth.state';
import { DataStoreService } from '../service/data-store.service';
import * as i0 from "@angular/core";
export declare class AuthStore extends Store<AuthState> {
    private _storeservice;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    addAuthInfo(user: UserDto): void;
    getAuthInfo(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthStore>;
}
