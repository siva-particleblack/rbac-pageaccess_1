import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../@core/urls/access-management-common.service";
import * as i2 from "../../../@core/service/auth.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
export class OrganizationDropdownComponent {
    constructor(accessManagementService, auth) {
        this.accessManagementService = accessManagementService;
        this.auth = auth;
        this.changeOrganization = new EventEmitter();
        // This is intentional
    }
    ngOnInit() {
        this.getOrgList();
    }
    /**
     * @description returning selected organization details on event emitter
     * @param orgID organization id
     */
    onSelectionChange(orgID) {
        this.changeOrganization.emit(orgID);
    }
    /**
     * @description fetch organization list from backend
     */
    getOrgList() {
        this.accessManagementService.getOrganizationList().subscribe(res => {
            if (res['data'] && res['data'].length) {
                this.orgList = res['data'].sort((a, b) => { var _a; return (_a = a.organizationname) === null || _a === void 0 ? void 0 : _a.localeCompare(b.organizationname); });
            }
        });
    }
    /**
     * @description check isAdmin or not
     */
    get displayCondn() {
        return this.auth.isAdmin() && this.isShow;
    }
}
OrganizationDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDropdownComponent, deps: [{ token: i1.AccessManagementCommonService }, { token: i2.AuthService }], target: i0.ɵɵFactoryTarget.Component });
OrganizationDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrganizationDropdownComponent, selector: "app-organization-dropdown", inputs: { isShow: "isShow", Organization: "Organization" }, outputs: { changeOrganization: "changeOrganization" }, ngImport: i0, template: "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ng-container *ngIf=\"displayCondn\">\r\n      <div class=\"d-block pull-left w-100 my-2\">\r\n        <p class=\"org-title\">Organization Name</p>\r\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n          <mat-select\r\n            placeholder=\"Organization\"\r\n            [(ngModel)]=\"Organization\"\r\n            (selectionChange)=\"onSelectionChange($event)\">\r\n            <mat-option value=\"Select-ALL\"> Select-ALL </mat-option>\r\n            <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\">\r\n              {{ org.organizationname }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n", styles: [".org-title{margin:0;font-size:12px!important;color:#0079fe}\n"], components: [{ type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OrganizationDropdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-organization-dropdown',
                    templateUrl: './organization-dropdown.component.html',
                    styleUrls: ['./organization-dropdown.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.AccessManagementCommonService }, { type: i2.AuthService }]; }, propDecorators: { isShow: [{
                type: Input
            }], Organization: [{
                type: Input
            }], changeOrganization: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9Ac2hhcmVkL2NvbW1vbi1jb21wb25lbnRzL29yZ2FuaXphdGlvbi1kcm9wZG93bi9vcmdhbml6YXRpb24tZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0BzaGFyZWQvY29tbW9uLWNvbXBvbmVudHMvb3JnYW5pemF0aW9uLWRyb3Bkb3duL29yZ2FuaXphdGlvbi1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFTL0UsTUFBTSxPQUFPLDZCQUE2QjtJQU14QyxZQUFtQix1QkFBc0QsRUFBUyxJQUFpQjtRQUFoRiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQStCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUh6Rix1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSS9DLHNCQUFzQjtJQUN6QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsS0FBSztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakUsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLFdBQUMsT0FBQSxNQUFBLENBQUMsQ0FBQyxnQkFBZ0IsMENBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLEVBQUEsQ0FBQyxDQUFDO2FBQ2xHO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDOzsySEF0Q1UsNkJBQTZCOytHQUE3Qiw2QkFBNkIsb0xDVDFDLDZ4QkFvQkE7NEZEWGEsNkJBQTZCO2tCQUx6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSx3Q0FBd0M7b0JBQ3JELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2lCQUN0RDs4SUFFVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDSSxrQkFBa0I7c0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vQGNvcmUvc2VydmljZS9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY2Nlc3NNYW5hZ2VtZW50Q29tbW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL0Bjb3JlL3VybHMvYWNjZXNzLW1hbmFnZW1lbnQtY29tbW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtb3JnYW5pemF0aW9uLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vb3JnYW5pemF0aW9uLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9vcmdhbml6YXRpb24tZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3JnYW5pemF0aW9uRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGlzU2hvdzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBPcmdhbml6YXRpb246IGFueTtcclxuICBAT3V0cHV0KCkgY2hhbmdlT3JnYW5pemF0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIG9yZ0xpc3Q6IGFueVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWNjZXNzTWFuYWdlbWVudFNlcnZpY2U6IEFjY2Vzc01hbmFnZW1lbnRDb21tb25TZXJ2aWNlLCBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UpIHtcclxuICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0T3JnTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIHJldHVybmluZyBzZWxlY3RlZCBvcmdhbml6YXRpb24gZGV0YWlscyBvbiBldmVudCBlbWl0dGVyXHJcbiAgICogQHBhcmFtIG9yZ0lEIG9yZ2FuaXphdGlvbiBpZFxyXG4gICAqL1xyXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKG9yZ0lEKSB7XHJcbiAgICB0aGlzLmNoYW5nZU9yZ2FuaXphdGlvbi5lbWl0KG9yZ0lEKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBmZXRjaCBvcmdhbml6YXRpb24gbGlzdCBmcm9tIGJhY2tlbmRcclxuICAgKi9cclxuICBnZXRPcmdMaXN0KCkge1xyXG4gICAgdGhpcy5hY2Nlc3NNYW5hZ2VtZW50U2VydmljZS5nZXRPcmdhbml6YXRpb25MaXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXNbJ2RhdGEnXSAmJiByZXNbJ2RhdGEnXS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm9yZ0xpc3QgPSByZXNbJ2RhdGEnXS5zb3J0KChhLCBiKSA9PiBhLm9yZ2FuaXphdGlvbm5hbWU/LmxvY2FsZUNvbXBhcmUoYi5vcmdhbml6YXRpb25uYW1lKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIGNoZWNrIGlzQWRtaW4gb3Igbm90XHJcbiAgICovXHJcbiAgZ2V0IGRpc3BsYXlDb25kbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmF1dGguaXNBZG1pbigpICYmIHRoaXMuaXNTaG93O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc3BsYXlDb25kblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1ibG9jayBwdWxsLWxlZnQgdy0xMDAgbXktMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwib3JnLXRpdGxlXCI+T3JnYW5pemF0aW9uIE5hbWU8L3A+XHJcbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwidy0xMDBcIiBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxyXG4gICAgICAgICAgPG1hdC1zZWxlY3RcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcmdhbml6YXRpb25cIlxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cIk9yZ2FuaXphdGlvblwiXHJcbiAgICAgICAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIlNlbGVjdC1BTExcIj4gU2VsZWN0LUFMTCA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcmcgb2Ygb3JnTGlzdFwiIHZhbHVlPVwie3sgb3JnLmlkIH19XCI+XHJcbiAgICAgICAgICAgICAge3sgb3JnLm9yZ2FuaXphdGlvbm5hbWUgfX1cclxuICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=