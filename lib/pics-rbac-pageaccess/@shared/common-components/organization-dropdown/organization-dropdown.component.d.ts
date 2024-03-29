import { EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../../../@core/service/auth.service';
import { AccessManagementCommonService } from '../../../@core/urls/access-management-common.service';
import * as i0 from "@angular/core";
export declare class OrganizationDropdownComponent implements OnInit {
    accessManagementService: AccessManagementCommonService;
    auth: AuthService;
    isShow: boolean;
    Organization: any;
    changeOrganization: EventEmitter<any>;
    orgList: any[];
    constructor(accessManagementService: AccessManagementCommonService, auth: AuthService);
    ngOnInit(): void;
    /**
     * @description returning selected organization details on event emitter
     * @param orgID organization id
     */
    onSelectionChange(orgID: any): void;
    /**
     * @description fetch organization list from backend
     */
    getOrgList(): void;
    /**
     * @description check isAdmin or not
     */
    get displayCondn(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrganizationDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OrganizationDropdownComponent, "app-organization-dropdown", never, { "isShow": "isShow"; "Organization": "Organization"; }, { "changeOrganization": "changeOrganization"; }, never, never>;
}
