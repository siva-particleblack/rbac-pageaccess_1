import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as i0 from "@angular/core";
export declare class AlertService {
    private router;
    private subject;
    private keepAfterRouteChange;
    constructor(router: Router);
    getAlert(): Observable<any>;
    success(message: string, keepAfterRouteChange?: boolean): void;
    error(message: string, keepAfterRouteChange?: boolean): void;
    info(message: string, keepAfterRouteChange?: boolean): void;
    warn(message: string, keepAfterRouteChange?: boolean): void;
    alert(type: AlertType, message: string, keepAfterRouteChange?: boolean): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertService>;
}
export interface DynamicObject {
    [key: string]: any;
}
export declare enum AlertType {
    Success = 0,
    Error = 1,
    Info = 2,
    Warning = 3
}
export declare class Alert {
    type: AlertType;
    message: string;
}
export interface Insights {
    name: string;
    series: Series[];
}
export interface Series {
    value: number;
    name: string;
    month: string;
}
export interface Status {
    name: string;
    value: number;
}
export declare class UserGroupDto {
    id?: number;
    name?: string;
    description?: string | null;
    constructor(data?: Partial<UserGroupDto>);
}
export declare class UserRolePageDto {
    id?: number;
    name?: string;
    route?: string;
    icon?: string | null;
    order?: number;
    ismenu?: boolean;
    constructor(data?: Partial<UserRolePageDto>);
}
export declare class UserRoleDto {
    id?: number;
    name?: string;
    description?: string | null;
    priority?: number;
    order?: number;
    defaultpage?: UserRolePageDto;
    defaultpageid?: number;
    parentid?: number | null;
    parent?: UserRoleDto | null;
    constructor(data?: Partial<UserRoleDto>);
}
export declare class UserDto {
    id?: number;
    name?: string;
    description?: string | null;
    priority?: number;
    order?: number;
    defaultpage?: UserRolePageDto;
    defaultpageid?: number;
    parentid?: number | null;
    parent?: UserRoleDto | null;
    constructor(data?: Partial<UserDto>);
}
export declare class AccessManagementConfig {
    static EndPoint: {
        Organization: {
            getOrganizationList: string;
            getOrganization: string;
        };
    };
}
