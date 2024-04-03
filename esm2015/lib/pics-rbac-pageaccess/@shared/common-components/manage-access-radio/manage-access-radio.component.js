import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RBACINFO } from '../../../@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../@core/urls/access-management-common.service";
import * as i3 from "../../../@core/service/data-store.service";
import * as i4 from "@angular/material/radio";
import * as i5 from "primeng/dropdown";
import * as i6 from "../../../@core/directives/permission.directive";
import * as i7 from "@angular/common";
import * as i8 from "primeng/api";
import * as i9 from "primeng/tooltip";
export class ManageAccessRadioComponent {
    constructor(formBuilder, cdRef, accessManagementService, _storeservice) {
        this.formBuilder = formBuilder;
        this.cdRef = cdRef;
        this.accessManagementService = accessManagementService;
        this._storeservice = _storeservice;
        this.userList = [];
        this.policyGroupData = [];
        this.roleAddedData = [];
        this.userDropDown = false;
        this.roleDropDown = false;
        this.policyDropDown = false;
        this.accessBy = new EventEmitter();
        this.policyDropdown = new EventEmitter();
        this.roleDropdown = new EventEmitter();
        this.userDropdown = new EventEmitter();
        this.dropDownSelectedValues = new EventEmitter();
        this.userDropdownSettings = {};
        this.roleDropdownSettings = {};
        this.policyDropdownSettings = {};
        this.RBACORG = new RBACINFO();
        // this.orgSubs = this.authService.orgInfo.subscribe(o => {
        //   this.orgId = o;
        //   console.log(this.orgId, 'manageaccessradio comp');
        //   if (this.orgId) {
        //     this.loadDropdowns();
        //   }
        // });
        // this.orgSubs =  this._storeservice.currentStore.subscribe((res: any) => {
        //   if (res['RBACORG'] && res['RBACORG'] !== '') {
        //     this.RBACORG = res['RBACORG'];
        //     console.log(this.RBACORG, 'RBACORG Event Scheduler');
        //     this.environment = this.RBACORG['environment'];
        //     this.orgId = parseInt(this.RBACORG['orgID']);
        //     if(this.environment){
        //       this.loadDropdowns();
        //     }
        //   }
        // });
    }
    ngOnInit() {
        this.loadForm();
        this.userDropdownSettings = {
            singleSelection: false,
            text: 'Select User',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            labelKey: 'displayname',
            searchBy: ['displayname']
        };
        this.roleDropdownSettings = {
            singleSelection: false,
            text: 'Select Persona',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            labelKey: 'name',
            searchBy: ['name']
        };
        this.policyDropdownSettings = {
            singleSelection: false,
            text: 'Select Policy',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            labelKey: 'policygroupname',
            searchBy: ['policygroupname']
        };
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Event Scheduler');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    this.loadDropdowns();
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    loadDropdowns() {
        this.loadUsername();
        this.getPersona();
        this.getPolicyGroup();
    }
    loadForm() {
        this.rbacForm = this.formBuilder.group({
            id: new FormControl(null),
            accessBy: new FormControl(null),
            userId: new FormControl('', Validators.required),
            policyId: new FormControl(null, Validators.required),
            roleId: new FormControl(null, Validators.required)
        });
    }
    loadUsername() {
        this.accessManagementService.getUserList(this.orgId).subscribe(res => {
            this.userList = res['data'] && res['data'].length ? res['data'] : [];
            this.userList.forEach(a => (a.displayname = `${a.firstname} ${a.lastname}`));
            this.userDropdown.emit(this.userList);
        });
    }
    getPolicyGroup() {
        this.accessManagementService.getPolicyGroupList(this.orgId).subscribe(res => {
            this.policyGroupData = res['data'] && res['data'].length ? res['data'] : [];
            this.policyDropdown.emit(this.policyGroupData);
        });
    }
    getPersona() {
        this.accessManagementService.getRoleList(this.orgId).subscribe(res => {
            console.log(this.orgId);
            this.roleAddedData = res['data'] && res['data'].length ? res['data'] : [];
            this.roleDropdown.emit(this.roleAddedData);
        });
    }
    showDorpdowns(id) {
        if (id === '1') {
            this.userDropDown = true;
            this.roleDropDown = this.policyDropDown = false;
        }
        else if (id === '2') {
            this.userDropDown = false;
            this.roleDropDown = true;
            this.policyDropDown = false;
        }
        else if (id === '3') {
            this.userDropDown = this.roleDropDown = false;
            this.policyDropDown = true;
        }
        this.accessBy.emit(id);
        this.resetForm(id);
    }
    // edit functionalites based on policy group
    getDataBasedOnPolicy() {
        const policyids = this.rbacForm.get('policyId').value;
        const roleIds = this.rbacForm.get('roleId').value;
        const userIds = this.rbacForm.get('userId').value;
        const selectedValue = {
            userid: userIds ? userIds.map(key => key.id) : null,
            roleid: roleIds ? roleIds.map(key => key.id) : null,
            policyid: policyids ? policyids.map(key => key.id) : null,
            from: 'policy'
        };
        if (this.rbacForm.get('roleId').value !== null || this.rbacForm.get('userId').value !== null) {
            this.dropDownSelectedValues.emit(selectedValue);
            return;
        }
        if (policyids.length) {
            this.dropDownSelectedValues.emit(selectedValue);
        }
        else {
            this.resetForm('3');
            this.rbacForm.get('accessBy').setValue('3');
        }
    }
    getDataBasedOnRole() {
        const roleIds = this.rbacForm.get('roleId').value;
        const userIds = this.rbacForm.get('userId').value;
        const policyIds = this.rbacForm.get('policyId').value;
        const selectedValue = {
            userid: userIds ? userIds.map(key => key.id) : null,
            roleid: roleIds ? roleIds.map(key => key.id) : null,
            policyid: policyIds ? policyIds.map(key => key.id) : null,
            from: 'role'
        };
        if (this.rbacForm.get('userId').value !== null) {
            this.dropDownSelectedValues.emit(selectedValue);
            return;
        }
        if (roleIds.length) {
            let existPolicyIds = [];
            // loop the role ids
            for (const roleId of roleIds) {
                const roleData = this.roleAddedData.filter(key => key.id === roleId.id);
                const getPolicyIds = roleData[0]['rolePolicyGroupConfigs'].map(pId => pId.policygroupid);
                existPolicyIds.push(getPolicyIds);
            }
            const myNewArray = [].concat(...existPolicyIds);
            const uniquePolicy = [...new Set(myNewArray)];
            existPolicyIds = uniquePolicy;
            // set policy group values
            const pList = this.policyGroupData.filter(key => existPolicyIds.includes(key.id));
            this.rbacForm.get('policyId').setValue(pList);
            const policyIdValues = this.rbacForm.get('policyId').value;
            selectedValue.roleid = roleIds ? roleIds.map(key => key.id) : null;
            selectedValue.policyid = policyIdValues ? policyIdValues.map(key => key.id) : null;
            this.dropDownSelectedValues.emit(selectedValue);
        }
        else {
            this.resetForm('2');
            this.rbacForm.get('accessBy').setValue('2');
        }
    }
    getRoleAndPolicyData() {
        const userIds = this.rbacForm.get('userId').value;
        if (userIds.length) {
            let existPolicyIds = [];
            let existRoleIds = [];
            // loop the role ids
            for (const userId of userIds) {
                const userData = this.userList.filter(key => key.id === userId.id);
                const getPolicyIds = userData[0]['policyGroupConfigs'].map(pId => pId.policygroupid);
                existPolicyIds.push(getPolicyIds);
                const getRoleIds = userData[0]['roleConfigs'].map(pId => pId.roleid);
                existRoleIds.push(getRoleIds);
            }
            const myNewPolicyAry = [].concat(...existPolicyIds);
            const uniquePolicy = [...new Set(myNewPolicyAry)];
            existPolicyIds = uniquePolicy;
            // set policy group values
            const pList = this.policyGroupData.filter(key => existPolicyIds.includes(key.id));
            this.rbacForm.get('policyId').setValue(pList);
            const myNewRoleAry = [].concat(...existRoleIds);
            const uniqueRole = [...new Set(myNewRoleAry)];
            existRoleIds = uniqueRole;
            // set role values
            const rList = this.roleAddedData.filter(key => existRoleIds.includes(key.id));
            this.rbacForm.get('roleId').setValue(rList);
            const roleIds = this.rbacForm.get('roleId').value;
            const policyIds = this.rbacForm.get('policyId').value;
            const selectedValue = {
                userid: userIds ? userIds.map(key => key.id) : null,
                roleid: roleIds ? roleIds.map(key => key.id) : null,
                policyid: policyIds ? policyIds.map(key => key.id) : null,
                from: 'user'
            };
            this.dropDownSelectedValues.emit(selectedValue);
        }
        else {
            this.resetForm('1');
            this.rbacForm.get('accessBy').setValue('1');
        }
    }
    resetForm(id = null) {
        this.rbacForm.reset();
        if (id !== null) {
            this.rbacForm.get('accessBy').setValue(id);
            this.accessBy.emit(id);
        }
    }
    getOrgPages(type) {
        const roleIds = this.rbacForm.get('roleId').value;
        const userIds = this.rbacForm.get('userId').value;
        const policyIds = this.rbacForm.get('policyId').value;
        let name;
        if (roleIds) {
            name = this.roleAddedData.filter(role => role.id === roleIds)[0].name;
        }
        else if (userIds) {
            name = this.userList.filter(user => user.id === userIds)[0].name;
        }
        else {
            name = this.policyGroupData.filter(policygroup => policygroup.id === policyIds)[0].policygroupname;
        }
        const selectedValue = {
            userid: userIds,
            roleid: roleIds,
            policyid: policyIds,
            from: type,
            name: name,
        };
        this.dropDownSelectedValues.emit(selectedValue);
    }
}
ManageAccessRadioComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ManageAccessRadioComponent, deps: [{ token: i1.FormBuilder }, { token: i0.ChangeDetectorRef }, { token: i2.AccessManagementCommonService }, { token: i3.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
ManageAccessRadioComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ManageAccessRadioComponent, selector: "app-manage-access-radio", inputs: { reloadForm: "reloadForm" }, outputs: { accessBy: "accessBy", policyDropdown: "policyDropdown", roleDropdown: "roleDropdown", userDropdown: "userDropdown", dropDownSelectedValues: "dropDownSelectedValues" }, ngImport: i0, template: "<form [formGroup]=\"rbacForm\" class=\"manage-access-radio\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"strip_head toggleleft\">\r\n        <span class=\"report_head font-weight-bold\">Manage Access By</span>\r\n      </div>\r\n      <mat-radio-group formControlName=\"accessBy\">\r\n        <mat-radio-button value=\"3\" (click)=\"showDorpdowns('3')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP\">Policy\r\n          Group</mat-radio-button>\r\n        <mat-radio-button value=\"2\" (click)=\"showDorpdowns('2')\"\r\n          fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE\">Role</mat-radio-button>\r\n        <mat-radio-button value=\"1\" (click)=\"showDorpdowns('1')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME\">User\r\n          Name</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"userDropDown\">\r\n      <p class=\"radio-title\">Select User\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"userList\" placeholder=\"Select User\" formControlName=\"userId\"\r\n        styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME_USER\" optionLabel=\"displayname\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('user')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.displayname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.displayname }}\r\n          </div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.displayname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('userId').errors\">\r\n        <div *ngIf=\"rbacForm.get('userId').invalid && rbacForm.get('userId').touched\" class=\"p-error block mt-1\">User selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"roleDropDown\">\r\n      <p class=\"radio-title\">Select Role\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"roleAddedData\" placeholder=\"Select Role\" formControlName=\"roleId\"\r\n        fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE_ROLE\" styleClass=\"w-100\" optionLabel=\"name\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('role')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.name }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('roleId').errors\">\r\n        <div *ngIf=\"rbacForm.get('roleId').invalid && rbacForm.get('roleId').touched\" class=\"p-error block mt-1\">Role selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"policyDropDown\">\r\n      <p class=\"radio-title\">Select Policy Group\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"policyGroupData\" placeholder=\"Select Policy Group\"\r\n        formControlName=\"policyId\" styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP_POLICY\"\r\n        optionLabel=\"policygroupname\" optionValue=\"id\" [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\"\r\n        (onChange)=\"getOrgPages('policy')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.policygroupname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{\r\n            item?.policygroupname }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.policygroupname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('policyId').errors\">\r\n        <div *ngIf=\"rbacForm.get('policyId').invalid && rbacForm.get('policyId').touched\" class=\"p-error block mt-1\">Policy Group selection is required </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<br />\r\n", styles: [".mat-radio-group .mat-radio-button{padding-right:10px;font-family:\"Roboto\",sans-serif!important}.radio-title{color:var(--label-text);font-size:var(--font-14);font-weight:600;margin-bottom:10px}:host ::ng-deep .selected-list .c-btn{font-size:var(--base-font-size)}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}\n"], components: [{ type: i4.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i5.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i6.PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i9.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ManageAccessRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-manage-access-radio',
                    templateUrl: './manage-access-radio.component.html',
                    styleUrls: ['./manage-access-radio.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }, { type: i2.AccessManagementCommonService }, { type: i3.DataStoreService }]; }, propDecorators: { accessBy: [{
                type: Output
            }], policyDropdown: [{
                type: Output
            }], roleDropdown: [{
                type: Output
            }], userDropdown: [{
                type: Output
            }], dropDownSelectedValues: [{
                type: Output
            }], reloadForm: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlLWFjY2Vzcy1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvcmJhYy1wYWdlYWNjZXNzL3NyYy9saWIvcGljcy1yYmFjLXBhZ2VhY2Nlc3MvQHNoYXJlZC9jb21tb24tY29tcG9uZW50cy9tYW5hZ2UtYWNjZXNzLXJhZGlvL21hbmFnZS1hY2Nlc3MtcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0BzaGFyZWQvY29tbW9uLWNvbXBvbmVudHMvbWFuYWdlLWFjY2Vzcy1yYWRpby9tYW5hZ2UtYWNjZXNzLXJhZGlvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFlLFdBQVcsRUFBYSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUtqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7Ozs7O0FBTS9ELE1BQU0sT0FBTywwQkFBMEI7SUFzQnJDLFlBQ1UsV0FBd0IsRUFDekIsS0FBd0IsRUFDeEIsdUJBQXNELEVBQ3JELGFBQStCO1FBSC9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ3hCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBK0I7UUFDckQsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBeEJ6QyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBQ3JCLG9CQUFlLEdBQVUsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVUsRUFBRSxDQUFD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QUEvQixNQUFNO2dCQUNFLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS9zZXJ2aWNlL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFjY2Vzc01hbmFnZW1lbnRDb21tb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvdXJscy9hY2Nlc3MtbWFuYWdlbWVudC1jb21tb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3VybHMvcmJhYy11cmwuY29uZmlnJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbWFuYWdlLWFjY2Vzcy1yYWRpbycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hbmFnZS1hY2Nlc3MtcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hbmFnZS1hY2Nlc3MtcmFkaW8uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFuYWdlQWNjZXNzUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcbiAgcmJhY0Zvcm06IEZvcm1Hcm91cDtcclxuICB1c2VyTGlzdDogYW55W10gPSBbXTtcclxuICBwb2xpY3lHcm91cERhdGE6IGFueVtdID0gW107XHJcbiAgcm9sZUFkZGVkRGF0YTogYW55W10gPSBbXTtcclxuICB1c2VyRHJvcERvd24gPSBmYWxzZTtcclxuICByb2xlRHJvcERvd24gPSBmYWxzZTtcclxuICBwb2xpY3lEcm9wRG93biA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBhY2Nlc3NCeSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBwb2xpY3lEcm9wZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSByb2xlRHJvcGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgdXNlckRyb3Bkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGRyb3BEb3duU2VsZWN0ZWRWYWx1ZXMgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSByZWxvYWRGb3JtOiBib29sZWFuO1xyXG4gIHVzZXJEcm9wZG93blNldHRpbmdzID0ge307XHJcbiAgcm9sZURyb3Bkb3duU2V0dGluZ3MgPSB7fTtcclxuICBwb2xpY3lEcm9wZG93blNldHRpbmdzID0ge307XHJcbiAgb3JnU3ViczogU3Vic2NyaXB0aW9uO1xyXG4gIG9yZ0lkOiBhbnk7XHJcbiAgZW52aXJvbm1lbnQ6IGFueTtcclxuICBSQkFDT1JHOiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHVibGljIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyBhY2Nlc3NNYW5hZ2VtZW50U2VydmljZTogQWNjZXNzTWFuYWdlbWVudENvbW1vblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UsXHJcbiAgICAvLyBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxyXG4gICkge1xyXG4gICAgLy8gdGhpcy5vcmdTdWJzID0gdGhpcy5hdXRoU2VydmljZS5vcmdJbmZvLnN1YnNjcmliZShvID0+IHtcclxuICAgIC8vICAgdGhpcy5vcmdJZCA9IG87XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMub3JnSWQsICdtYW5hZ2VhY2Nlc3NyYWRpbyBjb21wJyk7XHJcbiAgICAvLyAgIGlmICh0aGlzLm9yZ0lkKSB7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkRHJvcGRvd25zKCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gdGhpcy5vcmdTdWJzID0gIHRoaXMuX3N0b3Jlc2VydmljZS5jdXJyZW50U3RvcmUuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgLy8gICBpZiAocmVzWydSQkFDT1JHJ10gJiYgcmVzWydSQkFDT1JHJ10gIT09ICcnKSB7XHJcbiAgICAvLyAgICAgdGhpcy5SQkFDT1JHID0gcmVzWydSQkFDT1JHJ107XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5SQkFDT1JHLCAnUkJBQ09SRyBFdmVudCBTY2hlZHVsZXInKTtcclxuICAgIC8vICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddO1xyXG4gICAgLy8gICAgIHRoaXMub3JnSWQgPSBwYXJzZUludCh0aGlzLlJCQUNPUkdbJ29yZ0lEJ10pO1xyXG4gICAgLy8gICAgIGlmKHRoaXMuZW52aXJvbm1lbnQpe1xyXG4gICAgLy8gICAgICAgdGhpcy5sb2FkRHJvcGRvd25zKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkRm9ybSgpO1xyXG4gICAgdGhpcy51c2VyRHJvcGRvd25TZXR0aW5ncyA9IHtcclxuICAgICAgc2luZ2xlU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgdGV4dDogJ1NlbGVjdCBVc2VyJyxcclxuICAgICAgc2VsZWN0QWxsVGV4dDogJ1NlbGVjdCBBbGwnLFxyXG4gICAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxyXG4gICAgICBlbmFibGVTZWFyY2hGaWx0ZXI6IHRydWUsXHJcbiAgICAgIGxhYmVsS2V5OiAnZGlzcGxheW5hbWUnLFxyXG4gICAgICBzZWFyY2hCeTogWydkaXNwbGF5bmFtZSddXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb2xlRHJvcGRvd25TZXR0aW5ncyA9IHtcclxuICAgICAgc2luZ2xlU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgdGV4dDogJ1NlbGVjdCBQZXJzb25hJyxcclxuICAgICAgc2VsZWN0QWxsVGV4dDogJ1NlbGVjdCBBbGwnLFxyXG4gICAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxyXG4gICAgICBlbmFibGVTZWFyY2hGaWx0ZXI6IHRydWUsXHJcbiAgICAgIGxhYmVsS2V5OiAnbmFtZScsXHJcbiAgICAgIHNlYXJjaEJ5OiBbJ25hbWUnXVxyXG4gICAgfTtcclxuICAgIHRoaXMucG9saWN5RHJvcGRvd25TZXR0aW5ncyA9IHtcclxuICAgICAgc2luZ2xlU2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgdGV4dDogJ1NlbGVjdCBQb2xpY3knLFxyXG4gICAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXHJcbiAgICAgIHVuU2VsZWN0QWxsVGV4dDogJ1VuU2VsZWN0IEFsbCcsXHJcbiAgICAgIGVuYWJsZVNlYXJjaEZpbHRlcjogdHJ1ZSxcclxuICAgICAgbGFiZWxLZXk6ICdwb2xpY3lncm91cG5hbWUnLFxyXG4gICAgICBzZWFyY2hCeTogWydwb2xpY3lncm91cG5hbWUnXVxyXG4gICAgfTtcclxuICAgIHRoaXMub3JnU3VicyA9ICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc1snUkJBQ09SRyddICYmIHJlc1snUkJBQ09SRyddICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuUkJBQ09SRyA9IHJlc1snUkJBQ09SRyddO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUkJBQ09SRywgJ1JCQUNPUkcgRXZlbnQgU2NoZWR1bGVyJyk7XHJcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMuUkJBQ09SR1snZW52aXJvbm1lbnQnXTtcclxuICAgICAgICB0aGlzLm9yZ0lkID0gcGFyc2VJbnQodGhpcy5SQkFDT1JHWydvcmdJRCddKTtcclxuICAgICAgICBpZih0aGlzLmVudmlyb25tZW50KXtcclxuICAgICAgICAgIHRoaXMubG9hZERyb3Bkb3ducygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vcmdTdWJzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuICBsb2FkRHJvcGRvd25zKCkge1xyXG4gICAgdGhpcy5sb2FkVXNlcm5hbWUoKTtcclxuICAgIHRoaXMuZ2V0UGVyc29uYSgpO1xyXG4gICAgdGhpcy5nZXRQb2xpY3lHcm91cCgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZvcm0oKSB7XHJcbiAgICB0aGlzLnJiYWNGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIGlkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCksXHJcbiAgICAgIGFjY2Vzc0J5OiBuZXcgRm9ybUNvbnRyb2wobnVsbCksXHJcbiAgICAgIHVzZXJJZDogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgcG9saWN5SWQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgcm9sZUlkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZFVzZXJuYW1lKCkge1xyXG4gICAgdGhpcy5hY2Nlc3NNYW5hZ2VtZW50U2VydmljZS5nZXRVc2VyTGlzdCh0aGlzLm9yZ0lkKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgdGhpcy51c2VyTGlzdCA9IHJlc1snZGF0YSddICYmIHJlc1snZGF0YSddLmxlbmd0aCA/IHJlc1snZGF0YSddIDogW107XHJcbiAgICAgIHRoaXMudXNlckxpc3QuZm9yRWFjaChhID0+IChhLmRpc3BsYXluYW1lID0gYCR7YS5maXJzdG5hbWV9ICR7YS5sYXN0bmFtZX1gKSk7XHJcbiAgICAgIHRoaXMudXNlckRyb3Bkb3duLmVtaXQodGhpcy51c2VyTGlzdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFBvbGljeUdyb3VwKCkge1xyXG4gICAgdGhpcy5hY2Nlc3NNYW5hZ2VtZW50U2VydmljZS5nZXRQb2xpY3lHcm91cExpc3QodGhpcy5vcmdJZCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIHRoaXMucG9saWN5R3JvdXBEYXRhID0gcmVzWydkYXRhJ10gJiYgcmVzWydkYXRhJ10ubGVuZ3RoID8gcmVzWydkYXRhJ10gOiBbXTtcclxuICAgICAgdGhpcy5wb2xpY3lEcm9wZG93bi5lbWl0KHRoaXMucG9saWN5R3JvdXBEYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGVyc29uYSgpIHtcclxuICAgIHRoaXMuYWNjZXNzTWFuYWdlbWVudFNlcnZpY2UuZ2V0Um9sZUxpc3QodGhpcy5vcmdJZCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMub3JnSWQpO1xyXG4gICAgICB0aGlzLnJvbGVBZGRlZERhdGEgPSByZXNbJ2RhdGEnXSAmJiByZXNbJ2RhdGEnXS5sZW5ndGggPyByZXNbJ2RhdGEnXSA6IFtdO1xyXG4gICAgICB0aGlzLnJvbGVEcm9wZG93bi5lbWl0KHRoaXMucm9sZUFkZGVkRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNob3dEb3JwZG93bnMoaWQpIHtcclxuICAgIGlmIChpZCA9PT0gJzEnKSB7XHJcbiAgICAgIHRoaXMudXNlckRyb3BEb3duID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yb2xlRHJvcERvd24gPSB0aGlzLnBvbGljeURyb3BEb3duID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnMicpIHtcclxuICAgICAgdGhpcy51c2VyRHJvcERvd24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5yb2xlRHJvcERvd24gPSB0cnVlO1xyXG4gICAgICB0aGlzLnBvbGljeURyb3BEb3duID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnMycpIHtcclxuICAgICAgdGhpcy51c2VyRHJvcERvd24gPSB0aGlzLnJvbGVEcm9wRG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnBvbGljeURyb3BEb3duID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuYWNjZXNzQnkuZW1pdChpZCk7XHJcbiAgICB0aGlzLnJlc2V0Rm9ybShpZCk7XHJcbiAgfVxyXG5cclxuICAvLyBlZGl0IGZ1bmN0aW9uYWxpdGVzIGJhc2VkIG9uIHBvbGljeSBncm91cFxyXG4gIGdldERhdGFCYXNlZE9uUG9saWN5KCkge1xyXG4gICAgY29uc3QgcG9saWN5aWRzID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3BvbGljeUlkJykudmFsdWU7XHJcbiAgICBjb25zdCByb2xlSWRzID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVJZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgdXNlcklkcyA9IHRoaXMucmJhY0Zvcm0uZ2V0KCd1c2VySWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB7XHJcbiAgICAgIHVzZXJpZDogdXNlcklkcyA/IHVzZXJJZHMubWFwKGtleSA9PiBrZXkuaWQpIDogbnVsbCxcclxuICAgICAgcm9sZWlkOiByb2xlSWRzID8gcm9sZUlkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsLFxyXG4gICAgICBwb2xpY3lpZDogcG9saWN5aWRzID8gcG9saWN5aWRzLm1hcChrZXkgPT4ga2V5LmlkKSA6IG51bGwsXHJcbiAgICAgIGZyb206ICdwb2xpY3knXHJcbiAgICAgIH07XHJcbiAgICBpZiAodGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVJZCcpLnZhbHVlICE9PSBudWxsIHx8IHRoaXMucmJhY0Zvcm0uZ2V0KCd1c2VySWQnKS52YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRyb3BEb3duU2VsZWN0ZWRWYWx1ZXMuZW1pdChzZWxlY3RlZFZhbHVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHBvbGljeWlkcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5kcm9wRG93blNlbGVjdGVkVmFsdWVzLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlc2V0Rm9ybSgnMycpO1xyXG4gICAgICB0aGlzLnJiYWNGb3JtLmdldCgnYWNjZXNzQnknKS5zZXRWYWx1ZSgnMycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YUJhc2VkT25Sb2xlKCkge1xyXG4gICAgY29uc3Qgcm9sZUlkcyA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlSWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHVzZXJJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWU7XHJcbiAgICBjb25zdCBwb2xpY3lJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB7XHJcbiAgICAgIHVzZXJpZDogdXNlcklkcyA/IHVzZXJJZHMubWFwKGtleSA9PiBrZXkuaWQpIDogbnVsbCxcclxuICAgICAgcm9sZWlkOiByb2xlSWRzID8gcm9sZUlkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsLFxyXG4gICAgICBwb2xpY3lpZDogcG9saWN5SWRzID8gcG9saWN5SWRzLm1hcChrZXkgPT4ga2V5LmlkKSA6IG51bGwsXHJcbiAgICAgIGZyb206ICdyb2xlJ1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5kcm9wRG93blNlbGVjdGVkVmFsdWVzLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChyb2xlSWRzLmxlbmd0aCkge1xyXG4gICAgICBsZXQgZXhpc3RQb2xpY3lJZHMgPSBbXTtcclxuICAgICAgLy8gbG9vcCB0aGUgcm9sZSBpZHNcclxuICAgICAgZm9yIChjb25zdCByb2xlSWQgb2Ygcm9sZUlkcykge1xyXG4gICAgICAgIGNvbnN0IHJvbGVEYXRhID0gdGhpcy5yb2xlQWRkZWREYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSByb2xlSWQuaWQpO1xyXG4gICAgICAgIGNvbnN0IGdldFBvbGljeUlkcyA9IHJvbGVEYXRhWzBdWydyb2xlUG9saWN5R3JvdXBDb25maWdzJ10ubWFwKHBJZCA9PiBwSWQucG9saWN5Z3JvdXBpZCk7XHJcbiAgICAgICAgZXhpc3RQb2xpY3lJZHMucHVzaChnZXRQb2xpY3lJZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG15TmV3QXJyYXkgPSBbXS5jb25jYXQoLi4uZXhpc3RQb2xpY3lJZHMpO1xyXG4gICAgICBjb25zdCB1bmlxdWVQb2xpY3kgPSBbLi4ubmV3IFNldChteU5ld0FycmF5KV07XHJcbiAgICAgIGV4aXN0UG9saWN5SWRzID0gdW5pcXVlUG9saWN5O1xyXG4gICAgICAvLyBzZXQgcG9saWN5IGdyb3VwIHZhbHVlc1xyXG4gICAgICBjb25zdCBwTGlzdCA9IHRoaXMucG9saWN5R3JvdXBEYXRhLmZpbHRlcihrZXkgPT4gZXhpc3RQb2xpY3lJZHMuaW5jbHVkZXMoa2V5LmlkKSk7XHJcbiAgICAgIHRoaXMucmJhY0Zvcm0uZ2V0KCdwb2xpY3lJZCcpLnNldFZhbHVlKHBMaXN0KTtcclxuICAgICAgY29uc3QgcG9saWN5SWRWYWx1ZXMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgICAgc2VsZWN0ZWRWYWx1ZS5yb2xlaWQgPSByb2xlSWRzID8gcm9sZUlkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsO1xyXG4gICAgICBzZWxlY3RlZFZhbHVlLnBvbGljeWlkID0gcG9saWN5SWRWYWx1ZXMgPyBwb2xpY3lJZFZhbHVlcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsO1xyXG4gICAgICB0aGlzLmRyb3BEb3duU2VsZWN0ZWRWYWx1ZXMuZW1pdChzZWxlY3RlZFZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVzZXRGb3JtKCcyJyk7XHJcbiAgICAgIHRoaXMucmJhY0Zvcm0uZ2V0KCdhY2Nlc3NCeScpLnNldFZhbHVlKCcyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSb2xlQW5kUG9saWN5RGF0YSgpIHtcclxuICAgIGNvbnN0IHVzZXJJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWU7XHJcbiAgICBpZiAodXNlcklkcy5sZW5ndGgpIHtcclxuICAgICAgbGV0IGV4aXN0UG9saWN5SWRzID0gW107XHJcbiAgICAgIGxldCBleGlzdFJvbGVJZHMgPSBbXTtcclxuICAgICAgLy8gbG9vcCB0aGUgcm9sZSBpZHNcclxuICAgICAgZm9yIChjb25zdCB1c2VySWQgb2YgdXNlcklkcykge1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gdGhpcy51c2VyTGlzdC5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gdXNlcklkLmlkKTtcclxuICAgICAgICBjb25zdCBnZXRQb2xpY3lJZHMgPSB1c2VyRGF0YVswXVsncG9saWN5R3JvdXBDb25maWdzJ10ubWFwKHBJZCA9PiBwSWQucG9saWN5Z3JvdXBpZCk7XHJcbiAgICAgICAgZXhpc3RQb2xpY3lJZHMucHVzaChnZXRQb2xpY3lJZHMpO1xyXG4gICAgICAgIGNvbnN0IGdldFJvbGVJZHMgPSB1c2VyRGF0YVswXVsncm9sZUNvbmZpZ3MnXS5tYXAocElkID0+IHBJZC5yb2xlaWQpO1xyXG4gICAgICAgIGV4aXN0Um9sZUlkcy5wdXNoKGdldFJvbGVJZHMpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG15TmV3UG9saWN5QXJ5ID0gW10uY29uY2F0KC4uLmV4aXN0UG9saWN5SWRzKTtcclxuICAgICAgY29uc3QgdW5pcXVlUG9saWN5ID0gWy4uLm5ldyBTZXQobXlOZXdQb2xpY3lBcnkpXTtcclxuICAgICAgZXhpc3RQb2xpY3lJZHMgPSB1bmlxdWVQb2xpY3k7XHJcbiAgICAgIC8vIHNldCBwb2xpY3kgZ3JvdXAgdmFsdWVzXHJcbiAgICAgIGNvbnN0IHBMaXN0ID0gdGhpcy5wb2xpY3lHcm91cERhdGEuZmlsdGVyKGtleSA9PiBleGlzdFBvbGljeUlkcy5pbmNsdWRlcyhrZXkuaWQpKTtcclxuICAgICAgdGhpcy5yYmFjRm9ybS5nZXQoJ3BvbGljeUlkJykuc2V0VmFsdWUocExpc3QpO1xyXG5cclxuICAgICAgY29uc3QgbXlOZXdSb2xlQXJ5ID0gW10uY29uY2F0KC4uLmV4aXN0Um9sZUlkcyk7XHJcbiAgICAgIGNvbnN0IHVuaXF1ZVJvbGUgPSBbLi4ubmV3IFNldChteU5ld1JvbGVBcnkpXTtcclxuICAgICAgZXhpc3RSb2xlSWRzID0gdW5pcXVlUm9sZTtcclxuICAgICAgLy8gc2V0IHJvbGUgdmFsdWVzXHJcbiAgICAgIGNvbnN0IHJMaXN0ID0gdGhpcy5yb2xlQWRkZWREYXRhLmZpbHRlcihrZXkgPT4gZXhpc3RSb2xlSWRzLmluY2x1ZGVzKGtleS5pZCkpO1xyXG4gICAgICB0aGlzLnJiYWNGb3JtLmdldCgncm9sZUlkJykuc2V0VmFsdWUockxpc3QpO1xyXG4gICAgICBjb25zdCByb2xlSWRzID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVJZCcpLnZhbHVlO1xyXG4gICAgICBjb25zdCBwb2xpY3lJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHtcclxuICAgICAgICB1c2VyaWQ6IHVzZXJJZHMgPyB1c2VySWRzLm1hcChrZXkgPT4ga2V5LmlkKSA6IG51bGwsXHJcbiAgICAgICAgcm9sZWlkOiByb2xlSWRzID8gcm9sZUlkcy5tYXAoa2V5ID0+IGtleS5pZCkgOiBudWxsLFxyXG4gICAgICAgIHBvbGljeWlkOiBwb2xpY3lJZHMgPyBwb2xpY3lJZHMubWFwKGtleSA9PiBrZXkuaWQpIDogbnVsbCxcclxuICAgICAgICBmcm9tOiAndXNlcidcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5kcm9wRG93blNlbGVjdGVkVmFsdWVzLmVtaXQoc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlc2V0Rm9ybSgnMScpO1xyXG4gICAgICB0aGlzLnJiYWNGb3JtLmdldCgnYWNjZXNzQnknKS5zZXRWYWx1ZSgnMScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRGb3JtKGlkID0gbnVsbCkge1xyXG4gICAgdGhpcy5yYmFjRm9ybS5yZXNldCgpO1xyXG4gICAgaWYgKGlkICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmJhY0Zvcm0uZ2V0KCdhY2Nlc3NCeScpLnNldFZhbHVlKGlkKTtcclxuICAgICAgdGhpcy5hY2Nlc3NCeS5lbWl0KGlkKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0T3JnUGFnZXModHlwZSkge1xyXG4gICAgY29uc3Qgcm9sZUlkcyA9IHRoaXMucmJhY0Zvcm0uZ2V0KCdyb2xlSWQnKS52YWx1ZTtcclxuICAgIGNvbnN0IHVzZXJJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgndXNlcklkJykudmFsdWU7XHJcbiAgICBjb25zdCBwb2xpY3lJZHMgPSB0aGlzLnJiYWNGb3JtLmdldCgncG9saWN5SWQnKS52YWx1ZTtcclxuICAgIGxldCBuYW1lOiBzdHJpbmc7XHJcbiAgICBpZiAocm9sZUlkcykge1xyXG4gICAgICBuYW1lID0gdGhpcy5yb2xlQWRkZWREYXRhLmZpbHRlcihyb2xlID0+IHJvbGUuaWQgPT09IHJvbGVJZHMpWzBdLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh1c2VySWRzKSB7XHJcbiAgICAgIG5hbWUgPSB0aGlzLnVzZXJMaXN0LmZpbHRlcih1c2VyID0+IHVzZXIuaWQgPT09IHVzZXJJZHMpWzBdLm5hbWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgbmFtZSA9IHRoaXMucG9saWN5R3JvdXBEYXRhLmZpbHRlcihwb2xpY3lncm91cCA9PiBwb2xpY3lncm91cC5pZCA9PT0gcG9saWN5SWRzKVswXS5wb2xpY3lncm91cG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHtcclxuICAgICAgdXNlcmlkOiB1c2VySWRzLFxyXG4gICAgICByb2xlaWQ6IHJvbGVJZHMsXHJcbiAgICAgIHBvbGljeWlkOiBwb2xpY3lJZHMsXHJcbiAgICAgIGZyb206IHR5cGUsXHJcbiAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZHJvcERvd25TZWxlY3RlZFZhbHVlcy5lbWl0KHNlbGVjdGVkVmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cInJiYWNGb3JtXCIgY2xhc3M9XCJtYW5hZ2UtYWNjZXNzLXJhZGlvXCI+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3RyaXBfaGVhZCB0b2dnbGVsZWZ0XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXBvcnRfaGVhZCBmb250LXdlaWdodC1ib2xkXCI+TWFuYWdlIEFjY2VzcyBCeTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwiYWNjZXNzQnlcIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIjNcIiAoY2xpY2spPVwic2hvd0RvcnBkb3ducygnMycpXCIgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19QT0xJQ1lfR1JPVVBcIj5Qb2xpY3lcclxuICAgICAgICAgIEdyb3VwPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiMlwiIChjbGljayk9XCJzaG93RG9ycGRvd25zKCcyJylcIlxyXG4gICAgICAgICAgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19ST0xFXCI+Um9sZTwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIjFcIiAoY2xpY2spPVwic2hvd0RvcnBkb3ducygnMScpXCIgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19VU0VSTkFNRVwiPlVzZXJcclxuICAgICAgICAgIE5hbWU8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC0xMiBtdC0zXCIgKm5nSWY9XCJ1c2VyRHJvcERvd25cIj5cclxuICAgICAgPHAgY2xhc3M9XCJyYWRpby10aXRsZVwiPlNlbGVjdCBVc2VyXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZGZpZWxkIHRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cC1kcm9wZG93biBpbnB1dElkPVwicm9sZVwiIFtvcHRpb25zXT1cInVzZXJMaXN0XCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgVXNlclwiIGZvcm1Db250cm9sTmFtZT1cInVzZXJJZFwiXHJcbiAgICAgICAgc3R5bGVDbGFzcz1cInctMTAwXCIgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19VU0VSTkFNRV9VU0VSXCIgb3B0aW9uTGFiZWw9XCJkaXNwbGF5bmFtZVwiIG9wdGlvblZhbHVlPVwiaWRcIlxyXG4gICAgICAgIFtyZXNldEZpbHRlck9uSGlkZV09XCJ0cnVlXCIgW2ZpbHRlcl09XCJ0cnVlXCIgYXJpYUZpbHRlckxhYmVsPVwibnVsbFwiIChvbkNoYW5nZSk9XCJnZXRPcmdQYWdlcygndXNlcicpXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtIHBUZW1wbGF0ZT1cInNlbGVjdGVkSXRlbVwiPlxyXG4gICAgICAgICAgPGRpdiBwVG9vbHRpcD1cInt7aXRlbT8uZGlzcGxheW5hbWV9fVwiIHRvb2x0aXBQb3NpdGlvbj1cInRvcFwiIGNsYXNzPVwidGV4dC10cnVuY2F0ZVwiPiB7eyBpdGVtPy5kaXNwbGF5bmFtZSB9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LW9iamVjdCBwVGVtcGxhdGU9XCJpdGVtXCI+XHJcbiAgICAgICAgICB7eyBvYmplY3QuZGlzcGxheW5hbWUgfX1cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L3AtZHJvcGRvd24+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJyYmFjRm9ybS5nZXQoJ3VzZXJJZCcpLmVycm9yc1wiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJyYmFjRm9ybS5nZXQoJ3VzZXJJZCcpLmludmFsaWQgJiYgcmJhY0Zvcm0uZ2V0KCd1c2VySWQnKS50b3VjaGVkXCIgY2xhc3M9XCJwLWVycm9yIGJsb2NrIG10LTFcIj5Vc2VyIHNlbGVjdGlvbiBpcyByZXF1aXJlZCA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtMTIgbXQtM1wiICpuZ0lmPVwicm9sZURyb3BEb3duXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwicmFkaW8tdGl0bGVcIj5TZWxlY3QgUm9sZVxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRmaWVsZCB0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAtZHJvcGRvd24gaW5wdXRJZD1cInJvbGVcIiBbb3B0aW9uc109XCJyb2xlQWRkZWREYXRhXCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgUm9sZVwiIGZvcm1Db250cm9sTmFtZT1cInJvbGVJZFwiXHJcbiAgICAgICAgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19ST0xFX1JPTEVcIiBzdHlsZUNsYXNzPVwidy0xMDBcIiBvcHRpb25MYWJlbD1cIm5hbWVcIiBvcHRpb25WYWx1ZT1cImlkXCJcclxuICAgICAgICBbcmVzZXRGaWx0ZXJPbkhpZGVdPVwidHJ1ZVwiIFtmaWx0ZXJdPVwidHJ1ZVwiIGFyaWFGaWx0ZXJMYWJlbD1cIm51bGxcIiAob25DaGFuZ2UpPVwiZ2V0T3JnUGFnZXMoJ3JvbGUnKVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbSBwVGVtcGxhdGU9XCJzZWxlY3RlZEl0ZW1cIj5cclxuICAgICAgICAgIDxkaXYgcFRvb2x0aXA9XCJ7e2l0ZW0/Lm5hbWV9fVwiIHRvb2x0aXBQb3NpdGlvbj1cInRvcFwiIGNsYXNzPVwidGV4dC10cnVuY2F0ZVwiPiB7eyBpdGVtPy5uYW1lIH19PC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LW9iamVjdCBwVGVtcGxhdGU9XCJpdGVtXCI+XHJcbiAgICAgICAgICB7eyBvYmplY3QubmFtZSB9fVxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvcC1kcm9wZG93bj5cclxuICAgICAgPGRpdiAqbmdJZj1cInJiYWNGb3JtLmdldCgncm9sZUlkJykuZXJyb3JzXCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInJiYWNGb3JtLmdldCgncm9sZUlkJykuaW52YWxpZCAmJiByYmFjRm9ybS5nZXQoJ3JvbGVJZCcpLnRvdWNoZWRcIiBjbGFzcz1cInAtZXJyb3IgYmxvY2sgbXQtMVwiPlJvbGUgc2VsZWN0aW9uIGlzIHJlcXVpcmVkIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIGNvbC0xMiBtdC0zXCIgKm5nSWY9XCJwb2xpY3lEcm9wRG93blwiPlxyXG4gICAgICA8cCBjbGFzcz1cInJhZGlvLXRpdGxlXCI+U2VsZWN0IFBvbGljeSBHcm91cFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRmaWVsZCB0ZXh0LWRhbmdlclwiPio8L3NwYW4+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHAtZHJvcGRvd24gaW5wdXRJZD1cInJvbGVcIiBbb3B0aW9uc109XCJwb2xpY3lHcm91cERhdGFcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBQb2xpY3kgR3JvdXBcIlxyXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBvbGljeUlkXCIgc3R5bGVDbGFzcz1cInctMTAwXCIgZmllbGRLZXk9XCJTRVRUSU5HU19QQUdfQUNDX0FDQ0VTU19QT0xJQ1lfR1JPVVBfUE9MSUNZXCJcclxuICAgICAgICBvcHRpb25MYWJlbD1cInBvbGljeWdyb3VwbmFtZVwiIG9wdGlvblZhbHVlPVwiaWRcIiBbcmVzZXRGaWx0ZXJPbkhpZGVdPVwidHJ1ZVwiIFtmaWx0ZXJdPVwidHJ1ZVwiIGFyaWFGaWx0ZXJMYWJlbD1cIm51bGxcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJnZXRPcmdQYWdlcygncG9saWN5JylcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWl0ZW0gcFRlbXBsYXRlPVwic2VsZWN0ZWRJdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2IHBUb29sdGlwPVwie3tpdGVtPy5wb2xpY3lncm91cG5hbWV9fVwiIHRvb2x0aXBQb3NpdGlvbj1cInRvcFwiIGNsYXNzPVwidGV4dC10cnVuY2F0ZVwiPiB7e1xyXG4gICAgICAgICAgICBpdGVtPy5wb2xpY3lncm91cG5hbWUgfX08L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtb2JqZWN0IHBUZW1wbGF0ZT1cIml0ZW1cIj5cclxuICAgICAgICAgIHt7IG9iamVjdC5wb2xpY3lncm91cG5hbWUgfX1cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L3AtZHJvcGRvd24+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJyYmFjRm9ybS5nZXQoJ3BvbGljeUlkJykuZXJyb3JzXCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInJiYWNGb3JtLmdldCgncG9saWN5SWQnKS5pbnZhbGlkICYmIHJiYWNGb3JtLmdldCgncG9saWN5SWQnKS50b3VjaGVkXCIgY2xhc3M9XCJwLWVycm9yIGJsb2NrIG10LTFcIj5Qb2xpY3kgR3JvdXAgc2VsZWN0aW9uIGlzIHJlcXVpcmVkIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+XHJcbjxiciAvPlxyXG4iXX0=