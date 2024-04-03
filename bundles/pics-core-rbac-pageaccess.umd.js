(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('rxjs/operators'), require('@angular/common/http'), require('ngxf-uploader'), require('@angular/router'), require('rxjs/add/operator/map'), require('@angular/material/radio'), require('primeng/dropdown'), require('@angular/common'), require('primeng/api'), require('primeng/tooltip'), require('@angular/material/card'), require('angular2-multiselect-dropdown'), require('primeng/inputnumber'), require('primeng/accordion'), require('primeng/inputtext'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/card'), require('primeng/checkbox'), require('primeng/confirmdialog'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/multiselect'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect'), require('ngx-mat-select-search'), require('devextreme-angular'), require('ngx-mask'), require('ngx-pagination'), require('devextreme/data/custom_store'), require('devextreme/excel_exporter'), require('devextreme/pdf_exporter'), require('exceljs/dist/exceljs.min.js'), require('file-saver-es'), require('jspdf'), require('moment'), require('devextreme-angular/ui/nested'), require('devextreme-angular/core'), require('@angular/material/tooltip'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/form-field'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/menu'), require('@angular/material/select'), require('@angular/material/slide-toggle'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs')) :
    typeof define === 'function' && define.amd ? define('@pics-core/rbac-pageaccess', ['exports', '@angular/core', 'rxjs', '@angular/forms', 'rxjs/operators', '@angular/common/http', 'ngxf-uploader', '@angular/router', 'rxjs/add/operator/map', '@angular/material/radio', 'primeng/dropdown', '@angular/common', 'primeng/api', 'primeng/tooltip', '@angular/material/card', 'angular2-multiselect-dropdown', 'primeng/inputnumber', 'primeng/accordion', 'primeng/inputtext', '@ng-bootstrap/ng-bootstrap', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/card', 'primeng/checkbox', 'primeng/confirmdialog', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/multiselect', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect', 'ngx-mat-select-search', 'devextreme-angular', 'ngx-mask', 'ngx-pagination', 'devextreme/data/custom_store', 'devextreme/excel_exporter', 'devextreme/pdf_exporter', 'exceljs/dist/exceljs.min.js', 'file-saver-es', 'jspdf', 'moment', 'devextreme-angular/ui/nested', 'devextreme-angular/core', '@angular/material/tooltip', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/checkbox', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/form-field', '@angular/material/icon', '@angular/material/input', '@angular/material/menu', '@angular/material/select', '@angular/material/slide-toggle', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"]["rbac-pageaccess"] = {}), global.ng.core, global.rxjs, global.ng.forms, global.rxjs.operators, global.ng.common.http, global.i1$1, global.ng.router, global.rxjs["add/operator/map"], global.ng.material.radio, global.i5, global.ng.common, global.i8, global.i9, global.ng.material.card, global.i8$1, global.i11, global.i12, global.i17, global.ngBootstrap, global.avatar, global.badge, global.button, global.calendar, global.card, global.checkbox, global.confirmdialog, global.confirmpopup, global.contextmenu, global.dialog, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.multiselect, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect, global.ngxMatSelectSearch, global.i4$1, global.i1$3, global.ngxPagination, global.CustomStore, global.excel_exporter, global.pdf_exporter, global.ExcelJS, global.fileSaverEs, global.jsPDF, global.moment, global.i5$1, global.i7, global.ng.material.tooltip, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.checkbox, global.ng.material.core, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.formField, global.ng.material.icon, global.ng.material.input, global.ng.material.menu, global.ng.material.select, global.ng.material.slideToggle, global.ng.material.sort, global.ng.material.stepper, global.ng.material.table, global.ng.material.tabs));
})(this, (function (exports, i0, rxjs, i1$2, operators, i1, i1$1, i3, map, i4, i5, i6, i8, i9, i6$1, i8$1, i11, i12, i17, ngBootstrap, avatar, badge, button, calendar, card, checkbox, confirmdialog, confirmpopup, contextmenu, dialog, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, multiselect, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect, ngxMatSelectSearch, i4$1, i1$3, ngxPagination, CustomStore, excel_exporter, pdf_exporter, ExcelJS, fileSaverEs, jsPDF, moment, i5$1, i7, i8$2, bottomSheet, button$1, checkbox$1, i5$2, datepicker, dialog$1, i3$1, icon, input, menu, i4$2, slideToggle, sort, stepper, table$1, tabs) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$2);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i9__namespace = /*#__PURE__*/_interopNamespace(i9);
    var i6__namespace$1 = /*#__PURE__*/_interopNamespace(i6$1);
    var i8__namespace$1 = /*#__PURE__*/_interopNamespace(i8$1);
    var i11__namespace = /*#__PURE__*/_interopNamespace(i11);
    var i12__namespace = /*#__PURE__*/_interopNamespace(i12);
    var i17__namespace = /*#__PURE__*/_interopNamespace(i17);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var CustomStore__default = /*#__PURE__*/_interopDefaultLegacy(CustomStore);
    var ExcelJS__namespace = /*#__PURE__*/_interopNamespace(ExcelJS);
    var jsPDF__namespace = /*#__PURE__*/_interopNamespace(jsPDF);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i8__namespace$2 = /*#__PURE__*/_interopNamespace(i8$2);
    var i5__namespace$2 = /*#__PURE__*/_interopNamespace(i5$2);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i4__namespace$2 = /*#__PURE__*/_interopNamespace(i4$2);

    var RbacPageaccessService = /** @class */ (function () {
        function RbacPageaccessService() {
        }
        return RbacPageaccessService;
    }());
    RbacPageaccessService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPageaccessService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacPageaccessService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPageaccessService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPageaccessService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RoleConfig = /** @class */ (function () {
        function RoleConfig() {
        }
        return RoleConfig;
    }());
    RoleConfig.EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
    var UserConfig = /** @class */ (function () {
        function UserConfig() {
        }
        return UserConfig;
    }());
    UserConfig.EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
    var AttachmentConfig = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
    AttachmentConfig.EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
    var PolicyGroupConfig = /** @class */ (function () {
        function PolicyGroupConfig() {
        }
        return PolicyGroupConfig;
    }());
    PolicyGroupConfig.EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
    var PermissionsURL = /** @class */ (function () {
        function PermissionsURL() {
        }
        return PermissionsURL;
    }());
    PermissionsURL.EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
    // export class AccessManagementConfig {
    //   public static EndPoint = {
    //     Organization: {
    //       getOrganizationList: '/org/organization/all',
    //       getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    //     }
    //   };
    // }
    var AccessManagementConfig$2 = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig$2.EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets/',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
        }
    };
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data) {
            if (data) {
                this.setState(Object.assign(Object.assign({}, this.state), data));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state);
            else
                return rxjs.of(this.state);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            if (array) {
                array.forEach(function (item) {
                    result.push(item);
                    if (item && Array.isArray(item)) {
                        result = result.concat(_this.flat(item));
                    }
                });
            }
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var AppConstants = /** @class */ (function () {
        function AppConstants() {
        }
        return AppConstants;
    }());
    AppConstants.errorMessage = 'Something went wrong!';
    AppConstants.regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';

    var DynamicTabPageConfig = /** @class */ (function () {
        function DynamicTabPageConfig() {
        }
        return DynamicTabPageConfig;
    }());
    DynamicTabPageConfig.EndPoint = {
        Page: {
            getActivePage: '/platform/page-designer/pageversion/{id}',
            getPage: '/platform/page-designer/page',
            getPageById: '/platform/page-designer/page/{id}',
            getResponseByPageId: '/solution/formresponse/{responseId}/getByPageId/{pageId}',
            createFormResponse: '/solution/formresponse/create',
            patchFormResponse: '/solution/formresponse',
            updateFormResponse: '/pagedata/'
        },
        Narrative: {
            getIncidentListById: '/incident/listBySourceId/{id}'
        },
        Notification: {
            createSurveyConfig: '/surveyconfig/usersurvey/{id}/{status}/{pagedataid}'
        },
        Finance: {
            exportDocument: '/integrated/exportDocuments/',
            uploadDocument: 'document/upload',
            getUniqueId: '/uniqueIdLogic/'
        },
        Attachments: {
            createAttachment: '/solution/formresponse-attachment/create'
        }
    };

    var DynamicTabPageService = /** @class */ (function () {
        function DynamicTabPageService(uploadService, _storeservice) {
            var _this = this;
            this.uploadService = uploadService;
            this._storeservice = _storeservice;
            this.isPageDesign = new rxjs.BehaviorSubject(false);
            this.observePage = this.isPageDesign.asObservable();
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        DynamicTabPageService.prototype.getActivePage = function (tabPageId, permission) {
            return this.httpService.get("" + DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId) + (permission ? '?applyPermissions=true' : ''));
        };
        DynamicTabPageService.prototype.getDynamicPage = function (pageId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPage + "/" + pageId);
        };
        DynamicTabPageService.prototype.getPageById = function (pageId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
        };
        DynamicTabPageService.prototype.getListBySourceId = function (sourceId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
        };
        DynamicTabPageService.prototype.getResponseByPageId = function (responseId, pageId) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
                .replace('{responseId}', responseId)
                .replace('{pageId}', pageId));
        };
        DynamicTabPageService.prototype.createFormResponse = function (id, requestData) {
            return this.httpService.post(id
                ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
                : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
        };
        DynamicTabPageService.prototype.createUserSurvey = function (history, Id) {
            var _a;
            return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
                .replace('{id}', (_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.usersurveyid)
                .replace('{status}', 'Completed')
                .replace('{pagedataid}', Id), {});
        };
        DynamicTabPageService.prototype.updateFormResponse = function (id, requestData) {
            return this.httpService.patch(DynamicTabPageConfig.EndPoint.Page.patchFormResponse + "/" + id, requestData);
        };
        DynamicTabPageService.prototype.exportReport = function (data) {
            return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
        };
        DynamicTabPageService.prototype.uploadFile = function (file) {
            return this.uploadService.upload({
                url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
                headers: new i1.HttpHeaders()
                    .set('ctype', 'file')
                    .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                    .set('role', 'role=CP_PUBLIC'),
                files: file,
                process: true
            });
        };
        DynamicTabPageService.prototype.getUniqueId = function (api) {
            return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
        };
        DynamicTabPageService.prototype.changePage = function (page) {
            this.isPageDesign.next(page);
        };
        DynamicTabPageService.prototype.createFormResponseAttachment = function (data) {
            return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
        };
        return DynamicTabPageService;
    }());
    DynamicTabPageService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, deps: [{ token: i1__namespace.NgxfUploaderService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DynamicTabPageService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DynamicTabPageService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.NgxfUploaderService }, { type: DataStoreService }]; } });

    var PageHeaderURL = /** @class */ (function () {
        function PageHeaderURL() {
        }
        return PageHeaderURL;
    }());
    PageHeaderURL.EndPoints = {
        page: {
            getAuthorizedPages: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true'
        }
    };

    var PageHeaderService = /** @class */ (function () {
        function PageHeaderService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        PageHeaderService.prototype.getAuthorizedPages = function (orgid) {
            return this.httpService.get(PageHeaderURL.EndPoints.page.getAuthorizedPages.replace('{orgid}', orgid));
        };
        return PageHeaderService;
    }());
    PageHeaderService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageHeaderService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PageHeaderService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageHeaderService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageHeaderService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var AuthURL = /** @class */ (function () {
        function AuthURL() {
        }
        return AuthURL;
    }());
    AuthURL.EndPoints = {
        auth: {
            user: {
                conformMail: '/org/auth/forgot-password',
                changePassword: '/org/auth/forgot-password-verification',
                login: '/org/auth/login',
                refreshToken: '/org/auth/refresh-token',
                logout: '/org/auth/logout',
                userInfo: '/org/user/page/list',
                userRole: '/org/user/{id}',
                routeToDynamicPage: '/platform/page-designer/page/organization/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
                authMe: '/org/auth/me',
                resetPassword: '/org/user/reset-password',
                orgList: '/org/management-group/organization/tree',
                notification: '/worker/notification',
                workerAvailability: '/worker/updateAvailablity',
                getWorkerAvailability: '/worker/getByCurrentUser'
            },
            permission: {
                permissionRoleById: '/access-control/permission/role/{id}',
                pagePermission: '/access-control/permission/page',
                pageLookupPermission: '/access-control/permission/page/lookup'
            },
            microstrategy: {
                login: '/platform/microstrategy/login',
                getLibrary: '/platform/microstrategy/library'
            }
        }
    };

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i3.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next({});
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i3__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i3__namespace.Router }]; } });
    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());
    var AccessManagementConfig$1 = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig$1.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };

    var AuthState = /** @class */ (function () {
        function AuthState() {
        }
        return AuthState;
    }());

    var AuthStore = /** @class */ (function (_super) {
        __extends(AuthStore, _super);
        function AuthStore(_storeservice) {
            var _this = _super.call(this, new AuthState()) || this;
            _this._storeservice = _storeservice;
            _this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
            return _this;
        }
        // constructor(private httpService: HttpService) {
        // }
        AuthStore.prototype.addAuthInfo = function (user) {
            this.setState(Object.assign(Object.assign({}, this.state), { user: user }));
        };
        AuthStore.prototype.getAuthInfo = function () {
            console.log(this.state);
            if (this.state.user) {
                return rxjs.of(this.state.user);
            }
            else {
                return rxjs.forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(operators.tap(function (_a) {
                    var _b = __read(_a, 1), user = _b[0];
                    return user;
                }));
            }
        };
        return AuthStore;
    }(Store));
    AuthStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var credentialsKey = 'jwt-token';
    /**
     * Provides storage for authentication credentials.
     * The Credentials interface should be replaced with proper implementation.
     */
    var CredentialsService = /** @class */ (function () {
        function CredentialsService() {
            this.token = null;
            var savedCredentials = sessionStorage.getItem(credentialsKey);
            if (savedCredentials) {
                this.token = savedCredentials;
            }
        }
        /**
         * Checks is the user is authenticated.
         * @return True if the user is authenticated.
         */
        CredentialsService.prototype.isAuthenticated = function () {
            return !!this.credentials;
        };
        Object.defineProperty(CredentialsService.prototype, "credentials", {
            /**
             * Gets the user credentials.
             * @return The user credentials or null if the user is not authenticated.
             */
            get: function () {
                var savedCredentials = sessionStorage.getItem(credentialsKey);
                if (savedCredentials) {
                    this.token = savedCredentials;
                }
                return this.token;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Sets the user credentials.
         * The credentials may be persisted across sessions by setting the `remember` parameter to true.
         * Otherwise, the credentials are only persisted for the current session.
         * @param credentials The user credentials.
         * @param remember True to remember credentials across sessions.
         */
        CredentialsService.prototype.setCredentials = function (credentials) {
            this.token = credentials || null;
            if (credentials) {
                sessionStorage.setItem(credentialsKey, credentials);
            }
            else {
                sessionStorage.clear();
            }
        };
        return CredentialsService;
    }());
    CredentialsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CredentialsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CredentialsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var StorageService = /** @class */ (function () {
        function StorageService(Storage) {
            this.Storage = Storage;
        }
        StorageService.prototype.getItem = function (key) {
            return this.Storage.getItem(key);
        };
        StorageService.prototype.setItem = function (key, item) {
            return this.Storage.setItem(key, item);
        };
        StorageService.prototype.getObj = function (key, safe) {
            if (safe === void 0) { safe = true; }
            try {
                var item = this.getItem(key);
                return JSON.parse(item);
            }
            catch (e) {
                if (!safe) {
                    throw e;
                }
            }
        };
        StorageService.prototype.setObj = function (key, item) {
            return this.setItem(key, JSON.stringify(item));
        };
        StorageService.prototype.removeItem = function (key) {
            this.Storage.removeItem(key);
        };
        StorageService.prototype.clear = function () {
            this.Storage.clear();
        };
        return StorageService;
    }());

    var LocalService = /** @class */ (function (_super) {
        __extends(LocalService, _super);
        function LocalService() {
            return _super.call(this, window.sessionStorage) || this;
        }
        return LocalService;
    }(StorageService));
    LocalService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LocalService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: LocalService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var AuthService = /** @class */ (function () {
        function AuthService(_storeservice, injector, store, _router, credentialsService, localstore) {
            var _this = this;
            this._storeservice = _storeservice;
            this.store = store;
            this._router = _router;
            this.credentialsService = credentialsService;
            this.localstore = localstore;
            this.orgInfo = new rxjs.BehaviorSubject('');
            this.currentOrgInfo = this.orgInfo.asObservable();
            this.currentMenu = new rxjs.BehaviorSubject('');
            this.currentMenuInfo = this.currentMenu.asObservable();
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
            this.alertService = injector.get(AlertService);
            this.dynamicTabPageService = injector.get(DynamicTabPageService);
            this.pageHeaderService = injector.get(PageHeaderService);
        }
        AuthService.prototype.feedOrgInfo = function (data) {
            this.orgInfo.next(data);
        };
        AuthService.prototype.getCurrentMenu = function (data) {
            this.currentMenu.next(data);
        };
        AuthService.prototype.getUserOrgList = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
        };
        AuthService.prototype.getUnNotified = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
        };
        AuthService.prototype.updateUnNotified = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
        };
        AuthService.prototype.updateWorkerAvailability = function (data) {
            return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
        };
        AuthService.prototype.getWorkerAvailability = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
        };
        AuthService.prototype.getMstrToken = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.login = function (email, password, otp) {
            var _this = this;
            var body = {
                email: email,
                password: password,
                secret: otp ? otp : ''
            };
            return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(operators.mergeMap(function (res) {
                if (res['data'] === 'MFA_CODE_SEND') {
                    return rxjs.of(res['data']);
                }
                _this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                return _this.getUserInfo();
            }));
        };
        AuthService.prototype.refreshToken = function (platform) {
            var _this = this;
            if (platform === void 0) { platform = 'aws'; }
            var email = sessionStorage.getItem('email');
            var refreshToken = sessionStorage.getItem('refreshToken');
            var body = {
                email: email,
                refreshToken: refreshToken
            };
            if (platform === 'aws') {
                return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(operators.mergeMap(function (res) {
                    _this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
                    sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
                    sessionStorage.setItem('email', res['data'].idToken.payload['email']);
                    sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
                    sessionStorage.setItem('username', res['data'].idToken.payload['name']);
                    console.log('new token generated...', res['data'].idToken.jwtToken);
                    return [res['data'].idToken.jwtToken];
                }));
            }
            else {
                return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(operators.mergeMap(function (res) {
                    _this.credentialsService.setCredentials(res['data'].token);
                    sessionStorage.setItem('refreshToken', res['data'].refreshToken);
                    return [res['data'].token];
                }));
            }
        };
        AuthService.prototype.resetLoggedIn = function () {
            this.httpService
                .post(AuthURL.EndPoints.auth.user.logout, {
                email: sessionStorage.getItem('email')
            })
                .subscribe(function () {
                console.log('Logged in flag reset successful.');
            });
        };
        AuthService.prototype.logout = function () {
            this._router.navigate(['/login']);
            sessionStorage.clear();
            localStorage.clear();
        };
        AuthService.prototype.getUserInfo = function () {
            var _this = this;
            return rxjs.forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(operators.tap(function (_a) {
                var _b = __read(_a, 1), user = _b[0];
                _this.store.addAuthInfo(user['data']);
                return user;
            }));
        };
        AuthService.prototype.getUserRole = function (id) {
            return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.routeToDynamicPage = function (orgid) {
            return this.httpService
                .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
                .pipe(function (res) {
                return res;
            });
        };
        AuthService.prototype.getAuthMe = function () {
            return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
        };
        AuthService.prototype.ResetPassword = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
        };
        AuthService.prototype.getRoleKey = function () {
            var user = this.localstore.getObj('user');
            if (user && user.role) {
                return user.role.rolekey;
            }
        };
        AuthService.prototype.isAdmin = function () {
            return 'ADM' === this.getRoleKey();
        };
        AuthService.prototype.getOrgID = function () {
            var user = this.localstore.getObj('user');
            if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
                return user.userWorkInfo.organization.id;
            }
            else {
                return '';
            }
        };
        AuthService.prototype.conformMail = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
        };
        AuthService.prototype.changePassword = function (data) {
            return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
        };
        AuthService.prototype.setSharedMessage = function (data) {
            this.sharedInfo = data;
        };
        AuthService.prototype.getSharedMessage = function () {
            return this.sharedInfo;
        };
        AuthService.prototype.checkDynamicPagePermission = function (pageId) {
            return __awaiter(this, void 0, void 0, function () {
                var dynamicPages;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAuthorizedPages()];
                        case 1:
                            dynamicPages = _a.sent();
                            if (pageId) {
                                this.dynamicTabPageService.getPageById(pageId).subscribe(function (res) {
                                    if (dynamicPages.some(function (page) { return page.id === res['data'][0].activeVersion.id; })) {
                                        _this._router.navigate(["pages/dynamic-search/search/" + res['data'][0].activeVersion.id]);
                                    }
                                    else {
                                        _this.alertService.error("You don't have permissions for " + res['data'][0].activeVersion.pagename + " . Please Contact Administrator");
                                    }
                                });
                            }
                            else {
                                this.alertService.error('You don\'t have permissions to perform the following operations .Please Contact Administrator');
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        AuthService.prototype.getCurrentOrg = function () {
            return this.getUserOrgList()
                .toPromise()
                .then(function (response) {
                return response['data'][0].id;
            });
        };
        AuthService.prototype.getAuthorizedPages = function () {
            return __awaiter(this, void 0, void 0, function () {
                var orgId;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getCurrentOrg()];
                        case 1:
                            orgId = _a.sent();
                            return [2 /*return*/, this.pageHeaderService
                                    .getAuthorizedPages(orgId)
                                    .toPromise()
                                    .then(function (response) {
                                    var dynamicPage = response['data'].filter(function (page) {
                                        return (page.activeVersion &&
                                            (page.activeVersion.gridconfig || page.activeVersion.templatejson || _this.getCustomPage(page)));
                                    });
                                    return dynamicPage.map(function (page) { return ({
                                        id: page.activeVersion.id,
                                        name: page.activeVersion.pagename,
                                        activeVersion: page.activeVersion
                                    }); });
                                }, function (_error) { return _this.alertService.error(AppConstants.errorMessage); })];
                    }
                });
            });
        };
        AuthService.prototype.getCustomPage = function (page) {
            if (page.activeVersion.tabconfig) {
                var routingTab = JSON.parse(page.activeVersion.tabconfig).filter(function (x) { return x.type === 'ROUTING'; });
                return routingTab.length && page;
            }
        };
        return AuthService;
    }());
    AuthService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, deps: [{ token: DataStoreService }, { token: i0__namespace.Injector }, { token: AuthStore }, { token: i3__namespace.Router }, { token: CredentialsService }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AuthService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AuthService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: DataStoreService }, { type: i0__namespace.Injector }, { type: AuthStore }, { type: i3__namespace.Router }, { type: CredentialsService }, { type: LocalService }]; } });

    var AccessManagementConfig = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig.EndPoint = {
        Organization: {
            getOrganizationList: '/platform/page-designer/page/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        },
        Page: {
            getPage: '/page'
        },
        Asset: {
            getAsset: 'asset',
            getAssetDeselect: 'assetDeselect',
            getPageAsset: '/platform/page-designer/asset/getpagebyid',
            getUserAsset: '/platform/page-designer/asset/getUserAssets',
            getRoleAsset: '/platform/page-designer/asset/getRoleAssets',
            getPolicyGroupAsset: '/platform/page-designer/asset/getPolicyGroupAssets'
        },
        User: {
            getUser: '/org/user/',
            getUserList: '/org/user/all',
            getUserorgList: '/org/user/organization/'
        },
        PolicyGroup: {
            getPolicyGroup: '/platform/page-designer/policyGroup/',
            getPolicyGroupList: '/platform/page-designer/policyGroup/organization/{organizationid}'
        },
        Role: {
            getRole: '/access-control/role/',
            getRoleList: '/access-control/role/organization/{orgid}'
        }
    };

    var PageAccessService = /** @class */ (function () {
        function PageAccessService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this.isfull = false;
            this.ishide = false;
            this.isread = false;
            this.isreadwrite = false;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        /**
         * when user selected policy
         * @param access Raw valur of RBac form
         * @returns form array of DA
         * @childFunction of saveRbac
         */
        PageAccessService.prototype.accessByPolicy = function (access, id, policyGroupData, selectedFieldData, pageData) {
            var e_1, _e;
            var fullArray = [];
            var _loop_1 = function (value) {
                var selectedData = policyGroupData.filter(function (key) { return key.id === value; });
                var formObj = {
                    id: '',
                    description: '',
                    policygroupname: '',
                    pageConfigs: [],
                    assetConfigs: []
                };
                this_1.setPolicyObj(formObj, selectedData, value);
                this_1.loadAccessForPage(access, selectedData, formObj, value, pageData);
                if (access.fieldLevelData.length) {
                    this_1.loadAccessForFields(access, selectedData, formObj, value, selectedFieldData, pageData);
                }
                fullArray.push(formObj);
            };
            var this_1 = this;
            try {
                for (var id_1 = __values(id), id_1_1 = id_1.next(); !id_1_1.done; id_1_1 = id_1.next()) {
                    var value = id_1_1.value;
                    _loop_1(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (id_1_1 && !id_1_1.done && (_e = id_1.return)) _e.call(id_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return fullArray;
        };
        /**
         * when user selected Persona
         * @param access Raw valur of RBac form
         * @returns form array of DA
         * @childFunction of saveRbac
         */
        PageAccessService.prototype.accessByPersona = function (access, personaId, id, roleAddedData, selectedFieldData, pageData) {
            var e_2, _e;
            var fullArray = [];
            // const personaId = this.rbacForm.get('roleid').value;
            // const personaId = this.rbacForm.get('roleid').value;
            var formObj = {
                id: '',
                rolekey: '',
                rolename: '',
                description: '',
                effectivedate: '',
                pageConfigs: [],
                assetConfigs: [],
                rolePolicyGroupConfigs: []
            };
            var _loop_2 = function (item) {
                var selectedData = roleAddedData.filter(function (key) { return key.id === item; });
                this_2.setRoleObj(formObj, selectedData, item, id);
                this_2.loadAccessForPage(access, selectedData, formObj, item, pageData);
                if (access.fieldLevelData.length) {
                    this_2.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
                }
                fullArray.push(formObj);
            };
            var this_2 = this;
            try {
                for (var personaId_1 = __values(personaId), personaId_1_1 = personaId_1.next(); !personaId_1_1.done; personaId_1_1 = personaId_1.next()) {
                    var item = personaId_1_1.value;
                    _loop_2(item);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (personaId_1_1 && !personaId_1_1.done && (_e = personaId_1.return)) _e.call(personaId_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return fullArray;
        };
        /**
         * when user selected User
         * @param access Raw valur of RBac form
         * @returns form array of DA
         * @childFunction of saveRbac
         */
        PageAccessService.prototype.accessByUser = function (access, userId, id, roleids, userList, selectedFieldData, pageData) {
            var e_3, _e;
            var fullArray = [];
            var _loop_3 = function (item) {
                var selectedData = userList.filter(function (key) { return key.id === item; });
                var formObj = Object.assign({}, selectedData[0]);
                formObj.pageConfigs = [];
                formObj.assetConfigs = [];
                formObj.policyGroupConfigs = [];
                formObj.roleConfigs = [];
                console.log('======');
                this_3.setUserObj(formObj, selectedData, item, id, roleids);
                console.log('======1');
                this_3.loadAccessForPage(access, selectedData, formObj, item, pageData);
                console.log('======2');
                if (access.fieldLevelData.length) {
                    this_3.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
                }
                fullArray.push(formObj);
            };
            var this_3 = this;
            try {
                for (var userId_1 = __values(userId), userId_1_1 = userId_1.next(); !userId_1_1.done; userId_1_1 = userId_1.next()) {
                    var item = userId_1_1.value;
                    _loop_3(item);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (userId_1_1 && !userId_1_1.done && (_e = userId_1.return)) _e.call(userId_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return fullArray;
        };
        /**
         * Fetch access list for dashboard access
         * @param access
         * @param assetDashBoardConfigs
         * @param formObj
         * @param id
         */
        PageAccessService.prototype.loadAccessForPage = function (access, selectedData, formObj, id, pageData) {
            var e_4, _e;
            var existPageConfigs = selectedData[0]['pageConfigs'];
            var _loop_4 = function (item) {
                var selectedModule = pageData.filter(function (key) { return key.id === item['pageid']; });
                var pageAccess = access.pageLevelData.filter(function (key) { return key.pageid === item['pageid']; });
                this_4.pageAccessCheck(pageAccess);
                var pageKey = {
                    id: null,
                    isactive: true,
                    isfull: this_4.isfull,
                    ishide: this_4.ishide,
                    isread: this_4.isread,
                    isreadwrite: this_4.isreadwrite,
                    pageid: item['pageid'],
                    policygroupid: id,
                    modulekey: selectedModule[0]['modulekey'],
                    submodulekey: selectedModule[0]['submodulekey']
                };
                // check exist page length
                if (existPageConfigs.length) {
                    var existIds = existPageConfigs.map(function (p) { return p.pageid; });
                    var chkPage = existIds.includes(item['pageid']);
                    if (chkPage) {
                        var index = existIds.indexOf(item['pageid']);
                        if (index > -1) {
                            //if found
                            pageKey.id = existPageConfigs[index]['id'];
                            pageKey.isactive = false;
                            formObj.pageConfigs.push(pageKey);
                            existPageConfigs.splice(index, 1);
                        }
                    }
                    var d = Object.assign({}, pageKey);
                    d.id = null;
                    d.isactive = true;
                    formObj.pageConfigs.push(d);
                }
                else {
                    formObj.pageConfigs.push(pageKey);
                }
            };
            var this_4 = this;
            try {
                for (var _f = __values(access.pageLevelData), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var item = _g.value;
                    _loop_4(item);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                }
                finally { if (e_4) throw e_4.error; }
            }
            // still existconfig length
            if (existPageConfigs.length) {
                existPageConfigs.map(function (t) {
                    t.isactive = false;
                    formObj.pageConfigs.push(t);
                    return t;
                });
            }
        };
        PageAccessService.prototype.pageAccessCheck = function (pageAccess) {
            if (pageAccess[0].pageAccess === '1') {
                this.isfull = true;
            }
            else if (pageAccess[0].pageAccess === '4') {
                this.ishide = true;
            }
            else if (pageAccess[0].pageAccess === '3') {
                this.isread = true;
            }
            else if (pageAccess[0].pageAccess === '2') {
                this.isreadwrite = true;
            }
        };
        PageAccessService.prototype.setPolicyObj = function (formObj, selectedData, id) {
            formObj.id = id;
            formObj.description = selectedData[0]['description'];
            formObj.policygroupname = selectedData[0]['policygroupname'];
        };
        PageAccessService.prototype.loadAccessForFields = function (access, selectedData, formObj, id, selectedFieldData, pageData) {
            var e_5, _e;
            // console.log(selectedData)
            var assetConfigs = selectedData[0]['assetConfigs'].filter(function (key) { return key.modulekey !== null; });
            // console.log('------------')
            var selectedModule = pageData.filter(function (key) { return key.id === access.fpages[0]['id']; });
            // console.log(access.fieldLevelData)
            selectedFieldData =
                access.fieldLevelData !== null ? this.setSelectedFieldPage(access.fieldLevelData, selectedFieldData) : [];
            try {
                // console.log(selectedData, assetConfigs)
                for (var selectedFieldData_1 = __values(selectedFieldData), selectedFieldData_1_1 = selectedFieldData_1.next(); !selectedFieldData_1_1.done; selectedFieldData_1_1 = selectedFieldData_1.next()) {
                    var selectedField = selectedFieldData_1_1.value;
                    if (selectedField.access === null) {
                        // continue;
                    }
                    console.log(selectedField);
                    var isfull = false;
                    var ishide = false;
                    var isread = false;
                    var isreadwrite = false;
                    if (selectedField.access === '2' || selectedField.access === '1') {
                        isfull = true;
                    }
                    else if (selectedField.access === '4') {
                        ishide = true;
                    }
                    else if (selectedField.access === '3') {
                        isread = true;
                    }
                    else if (selectedField.access === '2') {
                        isreadwrite = true;
                    }
                    var aConfigs = {
                        id: selectedField['id'] ? selectedField['id'] : null,
                        isactive: true,
                        isfull: isfull,
                        ishide: ishide,
                        isread: isread,
                        isreadwrite: isreadwrite,
                        assetid: selectedField['assetid'],
                        policygroupid: id,
                        pageid: selectedField['pageId'] ? selectedField['pageId'] : access.fpages[0]['id'],
                        modulekey: selectedModule[0]['modulekey'],
                        submodulekey: selectedModule[0]['submodulekey']
                    };
                    // check exist page length
                    this.checkExistAsset(assetConfigs, selectedField, aConfigs, formObj);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (selectedFieldData_1_1 && !selectedFieldData_1_1.done && (_e = selectedFieldData_1.return)) _e.call(selectedFieldData_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        };
        PageAccessService.prototype.checkExistAsset = function (assetConfigs, selectedField, aConfigs, formObj) {
            if (assetConfigs.length) {
                var existIds = assetConfigs.map(function (p) { return p.assetid; });
                var chkPage = existIds.includes(selectedField['assetid']);
                if (chkPage) {
                    var index = existIds.indexOf(selectedField['assetid']);
                    if (index > -1) {
                        //if found
                        aConfigs.id = assetConfigs[index]['id'];
                        aConfigs.isactive = false;
                        formObj.assetConfigs.push(aConfigs);
                        assetConfigs.splice(index, 1);
                    }
                }
                var d = Object.assign({}, aConfigs);
                d.isactive = true;
                d.id = null;
                formObj.assetConfigs.push(d);
            }
            else {
                formObj.assetConfigs.push(aConfigs);
            }
        };
        PageAccessService.prototype.setRoleObj = function (formObj, selectedData, roleid, policyid) {
            var e_6, _e;
            formObj.id = roleid;
            formObj.rolekey = selectedData[0]['rolekey'];
            formObj.rolename = selectedData[0]['rolename'];
            formObj.effectivedate = selectedData[0]['effectivedate'];
            formObj.description = selectedData[0]['description'];
            // loop the policy group
            var id = policyid;
            var existRolePolicyConfig = selectedData[0]['rolePolicyGroupConfigs'];
            try {
                for (var id_2 = __values(id), id_2_1 = id_2.next(); !id_2_1.done; id_2_1 = id_2.next()) {
                    var item = id_2_1.value;
                    var rpolicyConfig = {
                        id: null,
                        isactive: true,
                        policygroupid: item,
                        roleid: roleid // role id
                    };
                    // check exist page length
                    if (existRolePolicyConfig.length) {
                        var existIds = existRolePolicyConfig.map(function (p) { return p.policygroupid; });
                        var chkPage = existIds.includes(item);
                        if (chkPage) {
                            var index = existIds.indexOf(item);
                            if (index > -1) {
                                //if found
                                rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                                existRolePolicyConfig.splice(index, 1);
                            }
                        }
                    }
                    formObj.rolePolicyGroupConfigs.push(rpolicyConfig);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (id_2_1 && !id_2_1.done && (_e = id_2.return)) _e.call(id_2);
                }
                finally { if (e_6) throw e_6.error; }
            }
            // still existconfig length
            if (existRolePolicyConfig.length) {
                existRolePolicyConfig.map(function (t) {
                    t.isactive = false;
                    formObj.rolePolicyGroupConfigs.push(t);
                    return t;
                });
            }
        };
        PageAccessService.prototype.setUserObj = function (formObj, selectedData, userId, id, roleids) {
            var e_7, _e, e_8, _f;
            // loop the policy group
            var existRolePolicyConfig = selectedData[0]['policyGroupConfigs'];
            this.getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj);
            // still existconfig length
            if (existRolePolicyConfig.length) {
                existRolePolicyConfig.map(function (t) {
                    t.isactive = false;
                    formObj.policyGroupConfigs.push(t);
                    return t;
                });
            }
            // loop the role group
            // const roleids = this.rbacForm.get('roleid').value;
            var existRoleId = selectedData[0]['roleConfigs'];
            try {
                for (var existRoleId_1 = __values(existRoleId), existRoleId_1_1 = existRoleId_1.next(); !existRoleId_1_1.done; existRoleId_1_1 = existRoleId_1.next()) {
                    var role = existRoleId_1_1.value;
                    var chkRoleData = roleids.includes(role['roleid']);
                    var roleGrp = {
                        id: role['id'],
                        isactive: false,
                        isdefaultrole: role['isdefaultrole'],
                        userid: userId,
                        roleid: role['roleid'],
                        effectivedate: role['effectivedate']
                    };
                    if (chkRoleData) {
                        var index1 = roleids.indexOf(role['roleid']);
                        if (index1 > -1) {
                            //if found
                            roleids.splice(index1, 1);
                        }
                        roleGrp.isactive = true;
                    }
                    formObj.roleConfigs.push(roleGrp);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (existRoleId_1_1 && !existRoleId_1_1.done && (_e = existRoleId_1.return)) _e.call(existRoleId_1);
                }
                finally { if (e_7) throw e_7.error; }
            }
            // check new roles group ids
            if (roleids.length) {
                try {
                    for (var roleids_1 = __values(roleids), roleids_1_1 = roleids_1.next(); !roleids_1_1.done; roleids_1_1 = roleids_1.next()) {
                        var roleId = roleids_1_1.value;
                        var roleGrp = {
                            id: null,
                            isactive: true,
                            isdefaultrole: false,
                            userid: userId,
                            roleid: roleId,
                            effectivedate: new Date()
                        };
                        formObj.roleConfigs.push(roleGrp);
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (roleids_1_1 && !roleids_1_1.done && (_f = roleids_1.return)) _f.call(roleids_1);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
        };
        PageAccessService.prototype.getCheckPolicyConfig = function (id, userId, existRolePolicyConfig, formObj) {
            var e_9, _e;
            try {
                for (var id_3 = __values(id), id_3_1 = id_3.next(); !id_3_1.done; id_3_1 = id_3.next()) {
                    var item = id_3_1.value;
                    var rpolicyConfig = {
                        id: null,
                        isactive: true,
                        policygroupid: item,
                        userid: userId // user id
                    };
                    // check exist page length
                    if (existRolePolicyConfig.length) {
                        var existIds = existRolePolicyConfig.map(function (p) { return p.policygroupid; });
                        var chkPage = existIds.includes(item);
                        if (chkPage) {
                            var index = existIds.indexOf(item);
                            if (index > -1) {
                                //if found
                                rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                                existRolePolicyConfig.splice(index, 1);
                            }
                        }
                    }
                    formObj.policyGroupConfigs.push(rpolicyConfig);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (id_3_1 && !id_3_1.done && (_e = id_3.return)) _e.call(id_3);
                }
                finally { if (e_9) throw e_9.error; }
            }
        };
        PageAccessService.prototype.setSelectedFieldPage = function (updateArray, selectedFieldData) {
            // console.log('=========>', updateArray, selectedFieldData)
            if (updateArray === null || updateArray === void 0 ? void 0 : updateArray.length) {
                if ((selectedFieldData === null || selectedFieldData === void 0 ? void 0 : selectedFieldData.length) >= updateArray.length) {
                    selectedFieldData = this.updateDuplicatesinArray(__spreadArray([], __read(selectedFieldData)), __spreadArray([], __read(updateArray)));
                    return selectedFieldData;
                }
                else {
                    selectedFieldData = __spreadArray([], __read(updateArray));
                    return selectedFieldData;
                }
            }
        };
        PageAccessService.prototype.updateDuplicatesinArray = function (origArr, updatingArr) {
            var updatingArrids = new Set(updatingArr.map(function (ele) { return ele.assetid; }));
            return __spreadArray(__spreadArray([], __read(updatingArr)), __read(origArr.filter(function (ele) { return !updatingArrids.has(ele.assetid); })));
        };
        PageAccessService.prototype.getMostFrequentEle = function (arr) {
            var hashMap = arr.reduce(function (acc, val) {
                acc[String(val)] = (acc[val] || 0) + 1;
                return acc;
            }, {});
            return Object.keys(hashMap).reduce(function (a, b) { return (hashMap[a] > hashMap[b] ? a : b); });
        };
        PageAccessService.prototype.getAccessArrayOnClick = function (pagesFromField, pageData, selectedFieldData, savedPageAccessPatching, existingValue) {
            var _a, _b, _c, _d;
            var accessArray = [];
            var _loop_5 = function (i) {
                var pageName = pageData.filter(function (key) { return key.id === pagesFromField[i]; });
                var fieldLevelExist = selectedFieldData.filter(function (ele) { return ele.pageId == pagesFromField[i]; });
                var pageAccessValue = this_5.checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i);
                accessArray.push(new i1$2.FormGroup({
                    pageName: new i1$2.FormControl((_a = pageName[0]) === null || _a === void 0 ? void 0 : _a.pagename),
                    pageid: new i1$2.FormControl(pagesFromField[i]),
                    pageAccess: new i1$2.FormControl(pageAccessValue ? pageAccessValue : '2'),
                    validity: new i1$2.FormControl((((_b = existingValue[i]) === null || _b === void 0 ? void 0 : _b.validity) && String(existingValue[i].validity)) || '0'),
                    condition: new i1$2.FormControl((((_c = existingValue[i]) === null || _c === void 0 ? void 0 : _c.condition) && existingValue[i].condition) || 'always'),
                    fallbackTo: new i1$2.FormControl((((_d = existingValue[i]) === null || _d === void 0 ? void 0 : _d.condition) && existingValue[i].fallbackTo) || 'n')
                }));
            };
            var this_5 = this;
            for (var i = 0; i < (pagesFromField === null || pagesFromField === void 0 ? void 0 : pagesFromField.length); i++) {
                _loop_5(i);
            }
            return accessArray;
        };
        PageAccessService.prototype.checkFieldLevelExist = function (fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i) {
            var _a, _b;
            var pageAccessValue;
            if ((fieldLevelExist === null || fieldLevelExist === void 0 ? void 0 : fieldLevelExist.length) && savedPageAccessPatching) {
                pageAccessValue = this.getMostFrequentEle((_a = fieldLevelExist === null || fieldLevelExist === void 0 ? void 0 : fieldLevelExist.filter(function (ele) { return (ele.pageId = pagesFromField[i]); })) === null || _a === void 0 ? void 0 : _a.map(function (e) { return (e.access ? Number(e.access) : 0); }));
            }
            else {
                pageAccessValue = (_b = existingValue === null || existingValue === void 0 ? void 0 : existingValue.find(function (ele) { return ele.pageid === pagesFromField[i]; })) === null || _b === void 0 ? void 0 : _b.pageAccess;
            }
            return pageAccessValue;
        };
        // This function for field level access
        PageAccessService.prototype.getAccess = function (access, fieldPageLevel) {
            var accessField;
            if (fieldPageLevel.length === 0) {
                accessField = '3'; // accessfield is 3 for read level access
            }
            else {
                accessField = '2'; // accessfield is 2 for readwrite level access
            }
            ;
            if (fieldPageLevel.length > 0 && (access === null || access === void 0 ? void 0 : access.isreadwrite)) {
                accessField = '2';
            }
            else if (access === null || access === void 0 ? void 0 : access.ishide) {
                accessField = '4'; // accessfield is 4 for hide level access
            }
            else if (access === null || access === void 0 ? void 0 : access.isread) {
                accessField = '3';
            }
            else if (access === null || access === void 0 ? void 0 : access.isfull) {
                accessField = '5'; // accessfield is 5 for full level access
            }
            else if (fieldPageLevel.length === 0 && (access === null || access === void 0 ? void 0 : access.isreadwrite)) {
                accessField = '3';
            }
            return accessField;
        };
        // This function for page level access
        PageAccessService.prototype.getPageAccess = function (access) {
            var accessField;
            accessField = '2';
            if (access === null || access === void 0 ? void 0 : access.isreadwrite) {
                accessField = '2';
            }
            else if (access === null || access === void 0 ? void 0 : access.ishide) {
                accessField = '4';
            }
            else if (access === null || access === void 0 ? void 0 : access.isread) {
                accessField = '3';
            }
            else if (access === null || access === void 0 ? void 0 : access.isfull) {
                accessField = '5';
            }
            return accessField;
        };
        PageAccessService.prototype.getOrganizationPage = function (orgId) {
            return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
        };
        PageAccessService.prototype.getAssetByPageId = function (pId) {
            return this.httpService.get(AccessManagementConfig.EndPoint.Asset.getPageAsset + "/" + pId);
        };
        PageAccessService.prototype.createAsset = function (selectedAccess, selectedId, asset) {
            var url;
            if (selectedAccess === 'user') {
                url = "org/user/" + selectedId;
            }
            else if (selectedAccess === 'role') {
                url = "access-control/role/" + selectedId;
            }
            else {
                url = "platform/page-designer/policygroup/" + selectedId;
            }
            return this.httpService.post("/" + url + "/" + AccessManagementConfig.EndPoint.Asset.getAsset, asset);
        };
        PageAccessService.prototype.updateAssetOnDeselect = function (selectedAccess, selectedId, asset) {
            var url;
            if (selectedAccess === 'user') {
                url = "org/user/" + selectedId;
            }
            else if (selectedAccess === 'role') {
                url = "access-control/role/" + selectedId;
            }
            else {
                url = "platform/page-designer/policygroup/" + selectedId;
            }
            return this.httpService.patch("/" + url + "/" + AccessManagementConfig.EndPoint.Asset.getAssetDeselect, asset);
        };
        PageAccessService.prototype.getAssetById = function (selectedAccess, selectedId) {
            var url;
            if (selectedAccess === 'user') {
                url = AccessManagementConfig.EndPoint.Asset.getUserAsset;
            }
            else if (selectedAccess === 'role') {
                url = AccessManagementConfig.EndPoint.Asset.getRoleAsset;
            }
            else {
                url = AccessManagementConfig.EndPoint.Asset.getPolicyGroupAsset;
            }
            return this.httpService.get(url + "/" + selectedId);
        };
        PageAccessService.prototype.getPolicyGroupPage = function (policygroupid) {
            return this.httpService.get("/policygroup/" + policygroupid + AccessManagementConfig.EndPoint.Page.getPage);
        };
        PageAccessService.prototype.getDynamicPage = function (selectedAccess, selectedId) {
            var url;
            if (selectedAccess === 'user') {
                url = 'org/user';
            }
            else if (selectedAccess === 'role') {
                url = 'access-control/role';
            }
            else {
                url = 'platform/page-designer/policygroup';
            }
            return this.httpService.get("/" + url + "/" + selectedId + AccessManagementConfig.EndPoint.Page.getPage);
        };
        PageAccessService.prototype.updateDynamicPage = function (selectedAccess, selectedId, pageData) {
            var url;
            if (selectedAccess === 'user') {
                url = 'org/user';
            }
            else if (selectedAccess === 'role') {
                url = 'access-control/role';
            }
            else {
                url = 'platform/page-designer/policygroup';
            }
            return this.httpService.put("/" + url + "/" + selectedId + AccessManagementConfig.EndPoint.Page.getPage, pageData);
        };
        PageAccessService.prototype.createAccess = function (fieldLevelAccess, accessBy, payload, userId, roleId, policyId) {
            var url;
            var createUrl = fieldLevelAccess
                ? AccessManagementConfig.EndPoint.Asset.getAsset
                : AccessManagementConfig.EndPoint.Page.getPage;
            // check only policy group
            if (accessBy === '3') {
                url = "" + AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroup + (policyId ? policyId : '0') + createUrl;
            }
            // check persona with policy group
            if (accessBy === '2') {
                url = "" + AccessManagementConfig.EndPoint.Role.getRole + (roleId ? roleId : '0') + createUrl;
            }
            // check user, persona with policy group
            if (accessBy === '1') {
                url = "" + AccessManagementConfig.EndPoint.User.getUser + (userId ? userId : '0') + createUrl;
            }
            return this.httpService.post(url, payload);
        };
        PageAccessService.prototype.getApplicationAccess = function () {
            return this.httpService.get('/applicationaccess/');
        };
        return PageAccessService;
    }());
    PageAccessService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageAccessService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PageAccessService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageAccessService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageAccessService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var AccessManagementCommonService = /** @class */ (function () {
        function AccessManagementCommonService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        Object.defineProperty(AccessManagementCommonService.prototype, "clickableData", {
            get: function () {
                return this.urlData;
            },
            set: function (data) {
                this.urlData = data;
            },
            enumerable: false,
            configurable: true
        });
        AccessManagementCommonService.prototype.getUserList = function (orgid) {
            return this.httpService.get(AccessManagementConfig.EndPoint.User.getUserorgList + orgid);
        };
        AccessManagementCommonService.prototype.getPolicyGroupList = function (orgid) {
            return this.httpService.get(AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroupList.replace('{organizationid}', String(orgid)));
        };
        AccessManagementCommonService.prototype.getRoleList = function (orgid) {
            return this.httpService.get(AccessManagementConfig.EndPoint.Role.getRoleList.replace('{orgid}', String(orgid)));
        };
        AccessManagementCommonService.prototype.getOrganizationList = function () {
            return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganizationList);
        };
        return AccessManagementCommonService;
    }());
    AccessManagementCommonService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AccessManagementCommonService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AccessManagementCommonService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AccessManagementCommonService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AccessManagementCommonService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(renderer, elementRef, dataStore) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dataStore = dataStore;
        }
        PermissionDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (permissions) {
                if (!permissions[this.fieldKey]) {
                    var template = this.elementRef.nativeElement;
                    if (template.tagName === 'A') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.href = 'javascript:void(0);';
                            r['disabled'] = true;
                            r.className = template.className;
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else if (template.tagName === 'P-MULTISELECT' ||
                        template.tagName === 'P-DROPDOWN' ||
                        template.tagName === 'P-CHECKBOX' ||
                        template.tagName === 'P-TREESELECT' ||
                        template.tagName === 'P-RADIOBUTTON' ||
                        template.tagName === 'P-CALENDAR') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.className = template.className;
                            r.className += ' p-disabled';
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else {
                        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                        var childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                        childInputNodes.forEach(function (elem) {
                            _this.renderer.setAttribute(elem, 'disabled', 'true');
                        });
                    }
                }
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    PermissionDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fieldKey]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                    type: i0.Input
                }] } });

    var ManageAccessRadioComponent = /** @class */ (function () {
        function ManageAccessRadioComponent(formBuilder, cdRef, accessManagementService, _storeservice) {
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
            this.accessBy = new i0.EventEmitter();
            this.policyDropdown = new i0.EventEmitter();
            this.roleDropdown = new i0.EventEmitter();
            this.userDropdown = new i0.EventEmitter();
            this.dropDownSelectedValues = new i0.EventEmitter();
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
        ManageAccessRadioComponent.prototype.ngOnInit = function () {
            var _this = this;
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
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    console.log(_this.RBACORG, 'RBACORG Event Scheduler');
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    if (_this.environment) {
                        _this.loadDropdowns();
                    }
                }
            });
        };
        ManageAccessRadioComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
        ManageAccessRadioComponent.prototype.ngAfterViewChecked = function () {
            this.cdRef.detectChanges();
        };
        ManageAccessRadioComponent.prototype.loadDropdowns = function () {
            this.loadUsername();
            this.getPersona();
            this.getPolicyGroup();
        };
        ManageAccessRadioComponent.prototype.loadForm = function () {
            this.rbacForm = this.formBuilder.group({
                id: new i1$2.FormControl(null),
                accessBy: new i1$2.FormControl(null),
                userId: new i1$2.FormControl('', i1$2.Validators.required),
                policyId: new i1$2.FormControl(null, i1$2.Validators.required),
                roleId: new i1$2.FormControl(null, i1$2.Validators.required)
            });
        };
        ManageAccessRadioComponent.prototype.loadUsername = function () {
            var _this = this;
            this.accessManagementService.getUserList(this.orgId).subscribe(function (res) {
                _this.userList = res['data'] && res['data'].length ? res['data'] : [];
                _this.userList.forEach(function (a) { return (a.displayname = a.firstname + " " + a.lastname); });
                _this.userDropdown.emit(_this.userList);
            });
        };
        ManageAccessRadioComponent.prototype.getPolicyGroup = function () {
            var _this = this;
            this.accessManagementService.getPolicyGroupList(this.orgId).subscribe(function (res) {
                _this.policyGroupData = res['data'] && res['data'].length ? res['data'] : [];
                _this.policyDropdown.emit(_this.policyGroupData);
            });
        };
        ManageAccessRadioComponent.prototype.getPersona = function () {
            var _this = this;
            this.accessManagementService.getRoleList(this.orgId).subscribe(function (res) {
                console.log(_this.orgId);
                _this.roleAddedData = res['data'] && res['data'].length ? res['data'] : [];
                _this.roleDropdown.emit(_this.roleAddedData);
            });
        };
        ManageAccessRadioComponent.prototype.showDorpdowns = function (id) {
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
        };
        // edit functionalites based on policy group
        ManageAccessRadioComponent.prototype.getDataBasedOnPolicy = function () {
            var policyids = this.rbacForm.get('policyId').value;
            var roleIds = this.rbacForm.get('roleId').value;
            var userIds = this.rbacForm.get('userId').value;
            var selectedValue = {
                userid: userIds ? userIds.map(function (key) { return key.id; }) : null,
                roleid: roleIds ? roleIds.map(function (key) { return key.id; }) : null,
                policyid: policyids ? policyids.map(function (key) { return key.id; }) : null,
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
        };
        ManageAccessRadioComponent.prototype.getDataBasedOnRole = function () {
            var e_1, _a;
            var roleIds = this.rbacForm.get('roleId').value;
            var userIds = this.rbacForm.get('userId').value;
            var policyIds = this.rbacForm.get('policyId').value;
            var selectedValue = {
                userid: userIds ? userIds.map(function (key) { return key.id; }) : null,
                roleid: roleIds ? roleIds.map(function (key) { return key.id; }) : null,
                policyid: policyIds ? policyIds.map(function (key) { return key.id; }) : null,
                from: 'role'
            };
            if (this.rbacForm.get('userId').value !== null) {
                this.dropDownSelectedValues.emit(selectedValue);
                return;
            }
            if (roleIds.length) {
                var existPolicyIds_1 = [];
                var _loop_1 = function (roleId) {
                    var roleData = this_1.roleAddedData.filter(function (key) { return key.id === roleId.id; });
                    var getPolicyIds = roleData[0]['rolePolicyGroupConfigs'].map(function (pId) { return pId.policygroupid; });
                    existPolicyIds_1.push(getPolicyIds);
                };
                var this_1 = this;
                try {
                    // loop the role ids
                    for (var roleIds_1 = __values(roleIds), roleIds_1_1 = roleIds_1.next(); !roleIds_1_1.done; roleIds_1_1 = roleIds_1.next()) {
                        var roleId = roleIds_1_1.value;
                        _loop_1(roleId);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (roleIds_1_1 && !roleIds_1_1.done && (_a = roleIds_1.return)) _a.call(roleIds_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var myNewArray = [].concat.apply([], __spreadArray([], __read(existPolicyIds_1)));
                var uniquePolicy = __spreadArray([], __read(new Set(myNewArray)));
                existPolicyIds_1 = uniquePolicy;
                // set policy group values
                var pList = this.policyGroupData.filter(function (key) { return existPolicyIds_1.includes(key.id); });
                this.rbacForm.get('policyId').setValue(pList);
                var policyIdValues = this.rbacForm.get('policyId').value;
                selectedValue.roleid = roleIds ? roleIds.map(function (key) { return key.id; }) : null;
                selectedValue.policyid = policyIdValues ? policyIdValues.map(function (key) { return key.id; }) : null;
                this.dropDownSelectedValues.emit(selectedValue);
            }
            else {
                this.resetForm('2');
                this.rbacForm.get('accessBy').setValue('2');
            }
        };
        ManageAccessRadioComponent.prototype.getRoleAndPolicyData = function () {
            var e_2, _a;
            var userIds = this.rbacForm.get('userId').value;
            if (userIds.length) {
                var existPolicyIds_2 = [];
                var existRoleIds_1 = [];
                var _loop_2 = function (userId) {
                    var userData = this_2.userList.filter(function (key) { return key.id === userId.id; });
                    var getPolicyIds = userData[0]['policyGroupConfigs'].map(function (pId) { return pId.policygroupid; });
                    existPolicyIds_2.push(getPolicyIds);
                    var getRoleIds = userData[0]['roleConfigs'].map(function (pId) { return pId.roleid; });
                    existRoleIds_1.push(getRoleIds);
                };
                var this_2 = this;
                try {
                    // loop the role ids
                    for (var userIds_1 = __values(userIds), userIds_1_1 = userIds_1.next(); !userIds_1_1.done; userIds_1_1 = userIds_1.next()) {
                        var userId = userIds_1_1.value;
                        _loop_2(userId);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (userIds_1_1 && !userIds_1_1.done && (_a = userIds_1.return)) _a.call(userIds_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                var myNewPolicyAry = [].concat.apply([], __spreadArray([], __read(existPolicyIds_2)));
                var uniquePolicy = __spreadArray([], __read(new Set(myNewPolicyAry)));
                existPolicyIds_2 = uniquePolicy;
                // set policy group values
                var pList = this.policyGroupData.filter(function (key) { return existPolicyIds_2.includes(key.id); });
                this.rbacForm.get('policyId').setValue(pList);
                var myNewRoleAry = [].concat.apply([], __spreadArray([], __read(existRoleIds_1)));
                var uniqueRole = __spreadArray([], __read(new Set(myNewRoleAry)));
                existRoleIds_1 = uniqueRole;
                // set role values
                var rList = this.roleAddedData.filter(function (key) { return existRoleIds_1.includes(key.id); });
                this.rbacForm.get('roleId').setValue(rList);
                var roleIds = this.rbacForm.get('roleId').value;
                var policyIds = this.rbacForm.get('policyId').value;
                var selectedValue = {
                    userid: userIds ? userIds.map(function (key) { return key.id; }) : null,
                    roleid: roleIds ? roleIds.map(function (key) { return key.id; }) : null,
                    policyid: policyIds ? policyIds.map(function (key) { return key.id; }) : null,
                    from: 'user'
                };
                this.dropDownSelectedValues.emit(selectedValue);
            }
            else {
                this.resetForm('1');
                this.rbacForm.get('accessBy').setValue('1');
            }
        };
        ManageAccessRadioComponent.prototype.resetForm = function (id) {
            if (id === void 0) { id = null; }
            this.rbacForm.reset();
            if (id !== null) {
                this.rbacForm.get('accessBy').setValue(id);
                this.accessBy.emit(id);
            }
        };
        ManageAccessRadioComponent.prototype.getOrgPages = function (type) {
            var roleIds = this.rbacForm.get('roleId').value;
            var userIds = this.rbacForm.get('userId').value;
            var policyIds = this.rbacForm.get('policyId').value;
            var name;
            if (roleIds) {
                name = this.roleAddedData.filter(function (role) { return role.id === roleIds; })[0].name;
            }
            else if (userIds) {
                name = this.userList.filter(function (user) { return user.id === userIds; })[0].name;
            }
            else {
                name = this.policyGroupData.filter(function (policygroup) { return policygroup.id === policyIds; })[0].policygroupname;
            }
            var selectedValue = {
                userid: userIds,
                roleid: roleIds,
                policyid: policyIds,
                from: type,
                name: name,
            };
            this.dropDownSelectedValues.emit(selectedValue);
        };
        return ManageAccessRadioComponent;
    }());
    ManageAccessRadioComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ManageAccessRadioComponent, deps: [{ token: i1__namespace$1.FormBuilder }, { token: i0__namespace.ChangeDetectorRef }, { token: AccessManagementCommonService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    ManageAccessRadioComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ManageAccessRadioComponent, selector: "app-manage-access-radio", inputs: { reloadForm: "reloadForm" }, outputs: { accessBy: "accessBy", policyDropdown: "policyDropdown", roleDropdown: "roleDropdown", userDropdown: "userDropdown", dropDownSelectedValues: "dropDownSelectedValues" }, ngImport: i0__namespace, template: "<form [formGroup]=\"rbacForm\" class=\"manage-access-radio\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"strip_head toggleleft\">\r\n        <span class=\"report_head font-weight-bold\">Manage Access By</span>\r\n      </div>\r\n      <mat-radio-group formControlName=\"accessBy\">\r\n        <mat-radio-button value=\"3\" (click)=\"showDorpdowns('3')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP\">Policy\r\n          Group</mat-radio-button>\r\n        <mat-radio-button value=\"2\" (click)=\"showDorpdowns('2')\"\r\n          fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE\">Role</mat-radio-button>\r\n        <mat-radio-button value=\"1\" (click)=\"showDorpdowns('1')\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME\">User\r\n          Name</mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"userDropDown\">\r\n      <p class=\"radio-title\">Select User\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"userList\" placeholder=\"Select User\" formControlName=\"userId\"\r\n        styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_USERNAME_USER\" optionLabel=\"displayname\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('user')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.displayname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.displayname }}\r\n          </div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.displayname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('userId').errors\">\r\n        <div *ngIf=\"rbacForm.get('userId').invalid && rbacForm.get('userId').touched\" class=\"p-error block mt-1\">User selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"roleDropDown\">\r\n      <p class=\"radio-title\">Select Role\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"roleAddedData\" placeholder=\"Select Role\" formControlName=\"roleId\"\r\n        fieldKey=\"SETTINGS_PAG_ACC_ACCESS_ROLE_ROLE\" styleClass=\"w-100\" optionLabel=\"name\" optionValue=\"id\"\r\n        [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\" (onChange)=\"getOrgPages('role')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.name }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('roleId').errors\">\r\n        <div *ngIf=\"rbacForm.get('roleId').invalid && rbacForm.get('roleId').touched\" class=\"p-error block mt-1\">Role selection is required </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12 mt-3\" *ngIf=\"policyDropDown\">\r\n      <p class=\"radio-title\">Select Policy Group\r\n        <span class=\"requiredfield text-danger\">*</span>\r\n      </p>\r\n      <p-dropdown inputId=\"role\" [options]=\"policyGroupData\" placeholder=\"Select Policy Group\"\r\n        formControlName=\"policyId\" styleClass=\"w-100\" fieldKey=\"SETTINGS_PAG_ACC_ACCESS_POLICY_GROUP_POLICY\"\r\n        optionLabel=\"policygroupname\" optionValue=\"id\" [resetFilterOnHide]=\"true\" [filter]=\"true\" ariaFilterLabel=\"null\"\r\n        (onChange)=\"getOrgPages('policy')\">\r\n        <ng-template let-item pTemplate=\"selectedItem\">\r\n          <div pTooltip=\"{{item?.policygroupname}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{\r\n            item?.policygroupname }}</div>\r\n        </ng-template>\r\n        <ng-template let-object pTemplate=\"item\">\r\n          {{ object.policygroupname }}\r\n        </ng-template>\r\n      </p-dropdown>\r\n      <div *ngIf=\"rbacForm.get('policyId').errors\">\r\n        <div *ngIf=\"rbacForm.get('policyId').invalid && rbacForm.get('policyId').touched\" class=\"p-error block mt-1\">Policy Group selection is required </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n<br />\r\n", styles: [".mat-radio-group .mat-radio-button{padding-right:10px;font-family:\"Roboto\",sans-serif!important}.radio-title{color:var(--label-text);font-size:var(--font-14);font-weight:600;margin-bottom:10px}:host ::ng-deep .selected-list .c-btn{font-size:var(--base-font-size)}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}\n"], components: [{ type: i4__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i5__namespace.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }], directives: [{ type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i9__namespace.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ManageAccessRadioComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-manage-access-radio',
                        templateUrl: './manage-access-radio.component.html',
                        styleUrls: ['./manage-access-radio.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.FormBuilder }, { type: i0__namespace.ChangeDetectorRef }, { type: AccessManagementCommonService }, { type: DataStoreService }]; }, propDecorators: { accessBy: [{
                    type: i0.Output
                }], policyDropdown: [{
                    type: i0.Output
                }], roleDropdown: [{
                    type: i0.Output
                }], userDropdown: [{
                    type: i0.Output
                }], dropDownSelectedValues: [{
                    type: i0.Output
                }], reloadForm: [{
                    type: i0.Input
                }] } });

    var DISPLAY_IN_SECONDS = 8;
    var AlertComponent = /** @class */ (function () {
        function AlertComponent(alertService) {
            this.alertService = alertService;
            this.alerts = [];
        }
        AlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.alertService.getAlert().subscribe(function (alert) {
                if (!alert) {
                    // clear alerts when an empty alert is received
                    _this.alerts = [];
                    return;
                }
                // add alert to array
                _this.alerts.push(alert);
                // remove alert after 5 seconds
                setTimeout(function () { return _this.removeAlert(alert); }, DISPLAY_IN_SECONDS * 1000);
            });
        };
        AlertComponent.prototype.removeAlert = function (alert) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        };
        AlertComponent.prototype.cssClass = function (alert) {
            if (!alert) {
                return;
            }
            // return css class based on alert type
            switch (alert.type) {
                case AlertType.Success:
                    return 'alert alert-success';
                case AlertType.Error:
                    return 'alert alert-danger';
                case AlertType.Info:
                    return 'alert alert-info';
                case AlertType.Warning:
                    return 'alert alert-warning';
            }
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, deps: [{ token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var PageaccessComponent = /** @class */ (function () {
        function PageaccessComponent(injector, formBuilder, cdRef, _storeservice, router, alert) {
            this.formBuilder = formBuilder;
            this.cdRef = cdRef;
            this._storeservice = _storeservice;
            this.router = router;
            this.alert = alert;
            this.userList = [];
            this.policyGroupData = [];
            this.roleAddedData = [];
            this.pageLevelAccess = false;
            this.multiPageAccess = false;
            this.fieldLevelAccess = false;
            this.moduleList = [];
            this.subModuleList = [];
            this.pageData = [];
            this.pagesList = [];
            this.loadedPagesList = [];
            this.selectedPageData = [];
            this.fData = [];
            this.moduleDropdownSettings = {};
            this.submoduleDropdownSettings = {};
            this.pageDropdownSettings = {};
            this.pageAccessDropdownSettings = {};
            this.fieldAccessDropdownSettings = {};
            this.fieldLevelClick = false;
            this.editPage = false;
            this.selectedFieldData = [];
            this.selectedPageAccessChanges = [];
            this.isRunCond = true;
            this.policyGroupPages = [];
            this.policyGroupRolePages = [];
            this.selectedRole = '';
            this.conditions = [];
            this.permissions = [];
            this.RBACORG = new RBACINFO();
            this.permissionUpdatedPages = [];
            this.pagelevelaccesssavedisable = true;
            this.selectedPages = [];
            this.previousSelection = [];
            this.isPageDeselectSave = false;
            this.deselectedItemIds = [];
            this.isRemoveAllFields = false;
            this.deselectAssetIds = [];
            this.enablesave = true;
            this.pagelevelaccesscountdisable = true;
            this.showFieldGrid = true;
            this.pageAccessService = injector.get(PageAccessService);
            this.authService = injector.get(AuthService);
            this.updatePage = false;
            this.showFieldValidity = false;
            this.conditions = [
                {
                    name: 'Days',
                    key: 'days'
                },
                {
                    name: 'Always',
                    key: 'always'
                }
            ];
            this.permissions = [
                {
                    name: 'R',
                    key: 'r'
                },
                {
                    name: 'RW',
                    key: 'rw'
                },
                {
                    name: 'None',
                    key: 'n'
                }
            ];
            this.pageDropdownSettings = {
                singleSelection: false,
                text: 'Select Pages',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                enableSearchFilter: true,
                classes: 'myclass custom-class',
                labelKey: 'pagename',
                searchBy: ['pagename']
            };
            this.pageAccessDropdownSettings = {
                singleSelection: false,
                text: 'Select Pages',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                enableSearchFilter: true,
                labelKey: 'pagename',
                searchBy: ['pagename']
            };
            this.fieldAccessDropdownSettings = {
                singleSelection: true,
                text: 'Select Page',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                enableSearchFilter: true,
                labelKey: 'pagename',
                searchBy: ['pagename']
            };
            this.fieldLevelCheckCount = [];
            this.pagelevelaccesscount = [];
            // this.orgSubs = this.authService.orgInfo.subscribe(org => {
            //   this.orgId = org;
            //   if (this.orgId) {
            //     this.getOrganizationPage();
            //   }
            // });
        }
        PageaccessComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    console.log(_this.RBACORG, 'RBACORG Event Scheduler');
                    _this.environment = _this.RBACORG['environment'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    _this.httpService = res['HTTPSERVICE'];
                    if (_this.environment) {
                        _this.getOrganizationPage();
                        _this.loadRbacForm();
                    }
                }
            });
        };
        PageaccessComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
        PageaccessComponent.prototype.loadRbacForm = function () {
            this.rbacForm = this.formBuilder.group({
                id: new i1$2.FormControl(null),
                accessBy: new i1$2.FormControl(null),
                userid: new i1$2.FormControl(''),
                policyid: new i1$2.FormControl(null),
                roleid: new i1$2.FormControl(null),
                provideAccess: new i1$2.FormControl(null),
                pageAccess: new i1$2.FormControl('2'),
                validity: new i1$2.FormControl(null),
                module: new i1$2.FormControl(null),
                submodule: new i1$2.FormControl(null),
                pageList: new i1$2.FormControl(null),
                ppages: new i1$2.FormControl(null),
                fpages: new i1$2.FormControl(null),
                fieldLevelData: new i1$2.FormArray([]),
                pageLevelData: new i1$2.FormArray([])
            });
        };
        PageaccessComponent.prototype.accessBy = function (evt) {
            this.pagesList = [];
            this.rbacForm.patchValue({ accessBy: evt });
            this.resetForm(evt);
        };
        PageaccessComponent.prototype.userDropdown = function (evt) {
            this.userList = evt;
        };
        PageaccessComponent.prototype.roleDropdown = function (evt) {
            this.roleAddedData = evt;
        };
        PageaccessComponent.prototype.policyDropdown = function (evt) {
            this.policyGroupData = evt;
        };
        PageaccessComponent.prototype.dropDownSelectedValues = function (evt) {
            this.enablesave = false;
            this.selectedRole = '';
            this.updatePage = false;
            this.selectedAccess = evt.from;
            this.selectedName = evt.name;
            this.rbacForm.patchValue({ userid: evt.userid });
            this.rbacForm.patchValue({ roleid: evt.roleid });
            this.rbacForm.patchValue({ policyid: evt.policyid });
            if (this.pagesList.length === 0) {
                this.getOrganizationPage();
            }
            this.getSelectedPages();
            if (evt.from === 'role') {
                this.selectedRole = evt.roleid;
            }
        };
        PageaccessComponent.prototype.getOrganizationPage = function () {
            var _this = this;
            if (this.orgId) {
                this.pageAccessService.getOrganizationPage(this.orgId).subscribe(function (res) {
                    var data = res['data'];
                    if (data && (data === null || data === void 0 ? void 0 : data.length)) {
                        _this.pageData = data === null || data === void 0 ? void 0 : data.filter(function (a) { return a.activeVersion; });
                        _this.loadedPagesList = _this.pageData.map(function (x) {
                            return {
                                id: x.activeVersion.pageid,
                                pagename: x.activeVersion.pagename,
                                activeVersion: x.activeVersion
                            };
                        });
                    }
                });
            }
        };
        PageaccessComponent.prototype.getFallbackPermission = function (fAccess) {
            var _a, _b;
            if (((_a = fAccess === null || fAccess === void 0 ? void 0 : fAccess.value) === null || _a === void 0 ? void 0 : _a.pageAccess) === '2' || ((_b = fAccess === null || fAccess === void 0 ? void 0 : fAccess.value) === null || _b === void 0 ? void 0 : _b.access) === '2') {
                return this.permissions.filter(function (a) { return a.key !== 'rw'; });
            }
            else {
                return this.permissions;
            }
        };
        PageaccessComponent.prototype.getSelectedPages = function (_selectedPages, _pageConfig, _assetconfig) {
            this.policyGroupPages = [];
            this.updatePage = false;
            if (this.selectedAccess === 'user') {
                this.selectedId = this.rbacForm.getRawValue().userid;
            }
            else if (this.selectedAccess === 'role') {
                this.selectedId = this.rbacForm.getRawValue().roleid;
            }
            else {
                this.selectedId = this.rbacForm.getRawValue().policyid;
                this.selectedAccess = 'policygroup';
            }
            this.getGrantedPages();
        };
        PageaccessComponent.prototype.getGrantedPages = function () {
            var _this = this;
            this.pageAccessService.getDynamicPage(this.selectedAccess, this.selectedId).subscribe(function (res) {
                var grantedPages;
                if (_this.selectedAccess === 'role') {
                    grantedPages = res['data'].rolePages;
                    _this.policyGroupPages = res['data'].policyGroupPages;
                    _this.pagesList = _this.loadedPagesList.map(function (pages) { return (Object.assign(Object.assign({}, pages), { disabled: _this.checkExistingGrantedPolicyPages(pages, _this.policyGroupPages) })); });
                }
                else if (_this.selectedAccess === 'policygroup') {
                    grantedPages = res['data'].policyGroupPages;
                    _this.policyGroupRolePages = res['data'].policyGroupRolePages.map(function (policyGroup) { return (Object.assign(Object.assign({}, policyGroup), { rolepage: __spreadArray([], __read(new Map(policyGroup.rolepage.map(function (item) { var _a, _b; return [(_b = (_a = item.page[0]) === null || _a === void 0 ? void 0 : _a.activeVersion) === null || _b === void 0 ? void 0 : _b.id, item]; })).values())) })); });
                    _this.pagesList = _this.loadedPagesList.map(function (pages) { return (Object.assign(Object.assign({}, pages), { disabled: _this.checkExistingGrantedRolePages(pages, _this.policyGroupRolePages) })); });
                }
                else {
                    grantedPages = res['data'];
                    _this.pagesList = _this.loadedPagesList;
                }
                _this.loadPages([], null, [], [], _this.assetList);
                if (grantedPages.length) {
                    _this.updatePage = true;
                    var pageData = grantedPages.filter(function (page) { return page.page; }).map(function (a) { return a.page; });
                    pageData.forEach(function (x) { var _a; return (x.pagename = ((_a = x === null || x === void 0 ? void 0 : x.activeVersion) === null || _a === void 0 ? void 0 : _a.pagename) || ''); });
                    var uniquePageData = __spreadArray([], __read(new Map(pageData.map(function (item) { return [item['id'], item]; })).values()));
                    var pageIDs = uniquePageData.map(function (a) { return a['id']; });
                    var pageConfigData = grantedPages.map(function (a) {
                        return {
                            id: a.id,
                            isfull: a.full,
                            ishide: a.hide,
                            isread: a.read,
                            isreadwrite: a.readwrite,
                            conditions: a.conditions,
                            page: a.page
                        };
                    });
                    _this.loadPages(uniquePageData, null, pageIDs, pageConfigData, _this.assetList);
                    _this.onControlChanges();
                }
            });
        };
        PageaccessComponent.prototype.onControlChanges = function () {
            var _this = this;
            var pageLevelAccessFormControl = this.rbacForm.get('pageLevelData');
            pageLevelAccessFormControl.controls.forEach(function (control) {
                control.valueChanges.pipe(operators.map(function (value) {
                    console.log('Value Changed');
                    if (_this.permissionUpdatedPages.some(function (pageId) { return pageId === value.pageid; })) {
                        _this.permissionUpdatedPages = _this.permissionUpdatedPages.filter(function (pageId) { return pageId !== value.pageid; });
                        _this.permissionUpdatedPages.push(value.pageid);
                    }
                    else {
                        _this.permissionUpdatedPages.push(value.pageid);
                    }
                })).subscribe();
            });
        };
        PageaccessComponent.prototype.checkExistingGrantedPolicyPages = function (page, policyGroupPages) {
            var e_1, _j, e_2, _k;
            try {
                for (var policyGroupPages_1 = __values(policyGroupPages), policyGroupPages_1_1 = policyGroupPages_1.next(); !policyGroupPages_1_1.done; policyGroupPages_1_1 = policyGroupPages_1.next()) {
                    var policyGroups = policyGroupPages_1_1.value;
                    try {
                        for (var _l = (e_2 = void 0, __values(policyGroups.policygrouppage)), _m = _l.next(); !_m.done; _m = _l.next()) {
                            var pages = _m.value;
                            if (pages.page[0].activeVersion.id === page.activeVersion.id) {
                                return true;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_m && !_m.done && (_k = _l.return)) _k.call(_l);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (policyGroupPages_1_1 && !policyGroupPages_1_1.done && (_j = policyGroupPages_1.return)) _j.call(policyGroupPages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        PageaccessComponent.prototype.checkExistingGrantedRolePages = function (page, RolePages) {
            var e_3, _j, e_4, _k;
            try {
                for (var RolePages_1 = __values(RolePages), RolePages_1_1 = RolePages_1.next(); !RolePages_1_1.done; RolePages_1_1 = RolePages_1.next()) {
                    var roles = RolePages_1_1.value;
                    try {
                        for (var _l = (e_4 = void 0, __values(roles.rolepage)), _m = _l.next(); !_m.done; _m = _l.next()) {
                            var pages = _m.value;
                            if (pages.page[0].activeVersion.id === page.activeVersion.id) {
                                return true;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_m && !_m.done && (_k = _l.return)) _k.call(_l);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (RolePages_1_1 && !RolePages_1_1.done && (_j = RolePages_1.return)) _j.call(RolePages_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        PageaccessComponent.prototype.policyGroupCondition = function (data, policyGroup) {
            var _a, _b;
            var policyGroupPages = (data === null || data === void 0 ? void 0 : data.data) && (data === null || data === void 0 ? void 0 : data.data.length) ? data === null || data === void 0 ? void 0 : data.data : [];
            var uniquePolicyGroupPages = __spreadArray([], __read(new Map(policyGroupPages.map(function (item) { return [item['page']['id'], item]; })).values()));
            this.policyGroupData = (this.policyGroupData.length && this.policyGroupData) || uniquePolicyGroupPages;
            this.policyGroupPages.push({
                name: (_b = (_a = this.policyGroupData.find(function (pgd) { return pgd.policygroup.id === policyGroup.policygroupid; })) === null || _a === void 0 ? void 0 : _a.policygroup) === null || _b === void 0 ? void 0 : _b.policygroupname,
                data: uniquePolicyGroupPages
            });
        };
        PageaccessComponent.prototype.getConfiguredAssetData = function (selectedAccess, selectedId) {
            var _this = this;
            this.pageAccessService.getAssetById(selectedAccess, selectedId).subscribe(function (res) {
                _this.assetList = res['data'].map(function (a) {
                    return {
                        _id: a === null || a === void 0 ? void 0 : a.id,
                        id: a === null || a === void 0 ? void 0 : a.assetid,
                        isfull: a.full,
                        ishide: a.hide,
                        isread: a.read,
                        isreadwrite: a.readwrite,
                        conditions: a.conditions
                    };
                });
            });
        };
        PageaccessComponent.prototype.loadPages = function (tempPageData, action, pageids, pageConfig, fieldConfig) {
            this.pageData = tempPageData || [];
            this.pageData.forEach(function (a) { var _a, _b; return (a.pagename = tempPageData.length && ((_b = (_a = tempPageData.filter(function (b) { return b.id === a.id; })[0]) === null || _a === void 0 ? void 0 : _a.activeVersion) === null || _b === void 0 ? void 0 : _b.pagename)); });
            var pl = this.rbacForm.get('pageList').value;
            if (pageids !== null) {
                var newPages = pl && (pl === null || pl === void 0 ? void 0 : pl.length) ? pl.map(function (key) { return key.id; }) : [];
                var pId_1 = (newPages === null || newPages === void 0 ? void 0 : newPages.length) ? __spreadArray([], __read(new Set(newPages.concat(pageids)))) : pageids;
                var pList = this.pageData.filter(function (key) { return pId_1.includes(key.id); });
                var pagesList = pList.map(function (x) {
                    return {
                        id: x.id,
                        pagename: x.pagename,
                        activeVersion: x.activeVersion
                    };
                });
                this.rbacForm.patchValue({ pageList: pagesList });
            }
            this.populatePage(action, true, null, pageConfig, fieldConfig, pageids);
        };
        PageaccessComponent.prototype.populatePage = function (action, selected, event, pageConfig, fieldConfig, pageids) {
            var _this = this;
            // if (event) {
            //   if (Array.isArray(event) && selected) {
            //     this.permissionUpdatedPages = event.map(page => page.id)
            //   }
            //   else if (!Array.isArray(event) && selected) {
            //     this.permissionUpdatedPages.push(event.id);
            //   }
            //   else {
            //     this.permissionUpdatedPages = this.permissionUpdatedPages.filter(id => id !== event.id);
            //   }
            // }
            var pageIds = this.rbacForm.get('pageList').value;
            var id = pageIds.map(function (key) { return key.id; });
            var provideAccess = this.rbacForm.get('provideAccess').value;
            // Logic to handle the deselected item of Pages field
            if (!selected) {
                this.isPageDeselectSave = true;
                var newlyDeselected = this.previousSelection.filter(function (item) { return !id.includes(item); });
                this.deselectedItemIds = __spreadArray([], __read(new Set(__spreadArray(__spreadArray([], __read(this.deselectedItemIds)), __read(newlyDeselected)))));
                var fpagesValue = this.rbacForm.get('fpages').value;
                if (fpagesValue && newlyDeselected.includes(fpagesValue)) {
                    this.rbacForm.controls['fpages'].setValue(null);
                    this.showFieldGrid = false;
                }
            }
            else {
                this.isPageDeselectSave = false;
            }
            this.previousSelection = __spreadArray([], __read(id));
            if (id === null || id === void 0 ? void 0 : id.length) {
                this.isRemoveAllFields = false;
                if (!provideAccess) {
                    this.rbacForm.patchValue({ provideAccess: '1' });
                    this.pageLevelAccess = this.multiPageAccess = true;
                    this.fieldLevelAccess = false;
                    provideAccess = '1';
                }
                // Pageids from api
                this.selectedPageData = pageIds;
                this.pagelevelaccesscount = pageIds;
                if ((this.pagelevelaccesscount || this.pagelevelaccesscount.length > 0) && !this.enablesave) {
                    this.pagelevelaccesscountdisable = false;
                }
                console.log(this.selectedPageData);
                if (provideAccess === '1') {
                    this.rbacForm.patchValue({ ppages: pageIds });
                    if (fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.length) {
                        this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.map(function (ele) {
                            return {
                                fieldName: ele === null || ele === void 0 ? void 0 : ele.description,
                                access: _this.checkAccessType(ele),
                                assetid: ele === null || ele === void 0 ? void 0 : ele.assetid,
                                pageId: ele === null || ele === void 0 ? void 0 : ele.id
                            };
                        }), this.selectedFieldData);
                    }
                    this.getPageLevelList(action, pageConfig);
                }
                else if (provideAccess === '2') {
                    if (fieldConfig !== null) {
                        var pList = this.pageData.filter(function (key) { return key.id === pageids[0]; });
                        this.rbacForm.patchValue({ fpages: pList });
                        this.getFieldLevelList(action, fieldConfig);
                    }
                    else {
                        var pId = this.selectedPageData.filter(function (ele) { var _a; return ele.id === ((_a = pageIds[0]) === null || _a === void 0 ? void 0 : _a.id); });
                        this.rbacForm.patchValue({ fpages: pId });
                        this.getFieldLevelList(action, fieldConfig);
                    }
                }
            }
            else {
                this.removeAllPopulatePage();
                this.isRemoveAllFields = true;
            }
        };
        PageaccessComponent.prototype.removeAllPopulatePage = function () {
            this.selectedPageData = [];
            this.pageLevelAccess = false;
            this.fieldLevelAccess = false;
            this.pagelevelaccesscount = [];
            this.pagelevelaccesssavedisable = true;
            var f = this.rbacForm.controls['fieldLevelData'];
            f.controls = [];
            var p = this.rbacForm.controls['pageLevelData'];
            p.controls = [];
            this.rbacForm.get('ppages').setValue(null);
            this.rbacForm.get('fpages').setValue(null);
            this.rbacForm.get('provideAccess').setValue(null);
            this.rbacForm.get('pageLevelData').setValue([]);
            this.rbacForm.get('fieldLevelData').setValue([]);
        };
        PageaccessComponent.prototype.showLevelAccess = function (id) {
            var _a, _b;
            var f = this.rbacForm.controls['fieldLevelData'];
            if ((_a = f.getRawValue()) === null || _a === void 0 ? void 0 : _a.length) {
                this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(f.getRawValue(), this.selectedFieldData);
            }
            f.controls = [];
            var pageIds = this.rbacForm.get('pageList').value;
            if (pageIds != null) {
                if (id === '1') {
                    this.pageLevelAccess = true;
                    this.multiPageAccess = true;
                    this.fieldLevelAccess = false;
                    this.pagelevelaccesscount = pageIds;
                    if (pageIds === null || pageIds === void 0 ? void 0 : pageIds.length) {
                        this.pagelevelaccesssavedisable = false;
                        if (!this.rbacForm.get('ppages').value) {
                            this.rbacForm.get('ppages').patchValue(pageIds);
                        }
                    }
                    this.getSelectedPages();
                }
                else {
                    this.getConfiguredAssetData(this.selectedAccess, this.selectedId);
                    this.pageLevelAccess = false;
                    this.multiPageAccess = false;
                    this.fieldLevelAccess = true;
                    this.fieldLevelCheckCount = [];
                    var fpages = this.rbacForm.get('fpages').value;
                    this.fPagesCheckLength(fpages, pageIds);
                    this.selectedPageLevelData = this.rbacForm.get('pageLevelData').value;
                    if (this.fieldLevelCheckCount && ((_b = this.fieldLevelCheckCount) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                        this.getFieldLevelList('click');
                    }
                }
            }
        };
        PageaccessComponent.prototype.fPagesCheckLength = function (fpages, pageIds) {
            if (!fpages || !(fpages === null || fpages === void 0 ? void 0 : fpages.length)) {
                if (pageIds === null || pageIds === void 0 ? void 0 : pageIds.length) {
                    var p = [pageIds];
                    this.rbacForm.get('fpages').setValue(p);
                }
            }
        };
        PageaccessComponent.prototype.getPageLevelList = function (action, pageConfig) {
            if (action === void 0) { action = null; }
            if (pageConfig === void 0) { pageConfig = null; }
            var accessArray = this.rbacForm.get('pageLevelData');
            var formValue = this.rbacForm.getRawValue();
            var pAccessId = this.rbacForm.get('ppages').value;
            var pId = pAccessId.map(function (key) { return key.pageid || key.id; });
            // first check exist page config
            if (pageConfig !== null) {
                // check selected value length
                var existSelectedPageId = [];
                if (formValue.pageLevelData.length) {
                    existSelectedPageId = formValue.pageLevelData.map(function (id) { return id.id; });
                }
                var filterdPageConfigArray = pId
                    .map(function (id) { return pageConfig.find(function (key) { var _a; return ((_a = key === null || key === void 0 ? void 0 : key.page) === null || _a === void 0 ? void 0 : _a.id) === id; }); })
                    .filter(function (config) { return config !== undefined; });
                var _loop_1 = function (i) {
                    var setAccess = '';
                    setAccess = this_1.pageAccessService.getPageAccess(filterdPageConfigArray[i]);
                    var pageName = this_1.pageData.filter(function (key) { return key.id === pId[i]; });
                    if (existSelectedPageId.length) {
                        this_1.getVersionAccessArray(existSelectedPageId, pId, i, accessArray, pageName, setAccess, pageConfig);
                    }
                    else {
                        this_1.getPageAccessArray(pId, i, accessArray, pageName, setAccess, pageConfig);
                    }
                };
                var this_1 = this;
                for (var i = 0; i < pId.length; i++) {
                    _loop_1(i);
                }
            }
            this.forActionClick(action, pId, accessArray);
        };
        PageaccessComponent.prototype.getVersionAccessArray = function (existSelectedPageId, pId, i, accessArray, pageName, setAccess, pageConfig) {
            var checkPid = existSelectedPageId.includes(pId[i]);
            if (!checkPid) {
                accessArray.push(new i1$2.FormGroup({
                    pageName: new i1$2.FormControl(pageName[0]['activeVersion']['pagename']),
                    pageid: new i1$2.FormControl(pId[i]),
                    pageAccess: new i1$2.FormControl(setAccess),
                    validity: new i1$2.FormControl((pageConfig[i].conditions && pageConfig[i].conditions.value) || '1'),
                    condition: new i1$2.FormControl(pageConfig[i].conditions ? 'days' : 'always'),
                    fallbackTo: new i1$2.FormControl((pageConfig[i].conditions && pageConfig[i].conditions.fallbackTo) || 'n')
                }));
            }
        };
        PageaccessComponent.prototype.getPageAccessArray = function (pId, i, accessArray, pageName, setAccess, pageConfig) {
            accessArray.push(new i1$2.FormGroup({
                pageName: new i1$2.FormControl(pageName[0]['pagename']),
                pageid: new i1$2.FormControl(pId[i]),
                pageAccess: new i1$2.FormControl(setAccess),
                validity: new i1$2.FormControl((pageConfig[i].conditions && pageConfig[i].conditions.value) || '1'),
                condition: new i1$2.FormControl(pageConfig[i].conditions ? 'days' : 'always'),
                fallbackTo: new i1$2.FormControl((pageConfig[i].conditions && pageConfig[i].conditions.fallbackTo) || 'n')
            }));
        };
        PageaccessComponent.prototype.forActionClick = function (action, pId, accessArray) {
            var _a;
            if (action === 'click') {
                var existingValue = ((_a = this.selectedPageLevelData) === null || _a === void 0 ? void 0 : _a.length) ? this.selectedPageLevelData : accessArray.getRawValue();
                var pagesFromField = Array.from(new Set(__spreadArray([], __read(this.selectedFieldData)).map(function (ele) { return ele.pageId; }))).filter(function (ele) { return ele; });
                if (pId === null || pId === void 0 ? void 0 : pId.length) {
                    pagesFromField = pId;
                }
                if (pagesFromField === null || pagesFromField === void 0 ? void 0 : pagesFromField.length) {
                    accessArray.controls = [];
                    accessArray.controls = this.pageAccessService.getAccessArrayOnClick(pagesFromField, this.pagesList, this.selectedFieldData, this.savedPageAccessPatching, existingValue);
                    this.savedPageAccessPatching = false;
                }
            }
        };
        PageaccessComponent.prototype.checkAccessType = function (data) {
            if (data === null || data === void 0 ? void 0 : data.isfull) {
                return '2';
            }
            else if (data === null || data === void 0 ? void 0 : data.ishide) {
                return '4';
            }
            else if (data === null || data === void 0 ? void 0 : data.isread) {
                return '3';
            }
            else if (data === null || data === void 0 ? void 0 : data.isreadwrite) {
                return '2';
            }
        };
        PageaccessComponent.prototype.getFieldLevelList = function (action, fieldConfig) {
            var _this = this;
            if (action === void 0) { action = null; }
            if (fieldConfig === void 0) { fieldConfig = null; }
            var accessArray = this.rbacForm.get('fieldLevelData');
            var formValue = this.rbacForm.getRawValue();
            var pAccessId = this.rbacForm.get('fpages').value;
            var pageIds = this.rbacForm.get('pageList').value;
            // Fieldpagelevel is a variable is the length of the form page and all page other than grid page
            this.fieldLevelCheckCount = pageIds.filter(function (x) { var _a; return (x.id === (pAccessId && ((_a = pAccessId[0]) === null || _a === void 0 ? void 0 : _a.id))) || x.id === pAccessId; });
            var fieldLevel = pageIds.filter(function (x) { var _a; return (x.id === (pAccessId && ((_a = pAccessId[0]) === null || _a === void 0 ? void 0 : _a.id))) || x.id === pAccessId; });
            this.fieldPageLevel = fieldLevel.filter(function (a) { return a.activeVersion !== null && a.activeVersion.gridconfig == null; })
                .map(function (a) {
                return {
                    id: a.activeVersion.pageid,
                    pagename: a.activeVersion.pagename,
                    activeVersion: a.activeVersion
                };
            });
            console.log(this.fieldPageLevel);
            this.checkFieldLevelCondition(fieldLevel, pAccessId);
            this.fieldConfigCheck(fieldConfig, accessArray);
            if (action === 'click') {
                accessArray.controls = [];
                this.pageAccessService.getAssetByPageId(this.pId).subscribe(function (res) {
                    var data = res['data'];
                    _this.getAccessArrayCheck(data, formValue, accessArray);
                });
            }
            this.showFieldGrid = true;
        };
        PageaccessComponent.prototype.checkFieldLevelCondition = function (fieldLevel, pAccessId) {
            if (fieldLevel.length > 0) {
                this.showFieldValidity = fieldLevel[0].templatejson ? true : false;
                this.fieldVersionCheck(fieldLevel, pAccessId);
            }
            else {
                this.showFieldValidity = pAccessId[0].templatejson ? true : false;
                if (pAccessId[0]['version']) {
                    this.pId = pAccessId[0].pageid;
                }
                else {
                    this.pId = pAccessId && (pAccessId === null || pAccessId === void 0 ? void 0 : pAccessId.length) ? pAccessId[0]['id'] : null;
                }
            }
        };
        PageaccessComponent.prototype.fieldVersionCheck = function (fieldLevel, pAccessId) {
            if (fieldLevel[0]['version']) {
                this.pId = fieldLevel[0].pageid;
            }
            else {
                if (Array.isArray(pAccessId)) {
                    this.pId = pAccessId && (pAccessId === null || pAccessId === void 0 ? void 0 : pAccessId.length) ? pAccessId[0]['id'] : null;
                }
                else {
                    this.pId = pAccessId;
                }
            }
        };
        PageaccessComponent.prototype.fieldConfigCheck = function (fieldConfig, accessArray) {
            var _this = this;
            if (fieldConfig !== null) {
                accessArray.controls = [];
                this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(fieldConfig === null || fieldConfig === void 0 ? void 0 : fieldConfig.map(function (ele) {
                    return {
                        fieldName: ele === null || ele === void 0 ? void 0 : ele.description,
                        access: _this.checkAccessType(ele),
                        assetid: ele.assetid,
                        pageId: ele.id
                    };
                }), this.selectedFieldData);
                this.existingSelectedFieldData = __spreadArray([], __read(this.selectedFieldData));
                this.pageAccessService.getAssetByPageId(this.pId).subscribe(function (res) {
                    var data = res['data'];
                    _this.mergedAsset = _this.mergeAsset(data, _this.assetList);
                    if (_this.mergedAsset.includes(undefined)) {
                        _this.mergedAsset = data;
                        if (_this.mergedAsset.length !== (data === null || data === void 0 ? void 0 : data.length)) {
                            _this.mergedAsset = data;
                        }
                    }
                    _this.fData = data;
                    _this.getMergedAsset(accessArray);
                });
            }
        };
        PageaccessComponent.prototype.getMergedAsset = function (accessArray) {
            for (var i = 0; i < this.mergedAsset.length; i++) {
                var access = this.pageAccessService.getAccess(this.mergedAsset[i], this.fieldPageLevel);
                accessArray.push(new i1$2.FormGroup({
                    fieldName: new i1$2.FormControl(access[i]['displayname']),
                    access: new i1$2.FormControl('2'),
                    assetid: new i1$2.FormControl(access[i]['id']),
                    pageId: new i1$2.FormControl(this.pId),
                    validity: new i1$2.FormControl(this.mergedAsset[i].conditions ? this.mergedAsset[i].conditions.value : '1'),
                    condition: new i1$2.FormControl(this.mergedAsset[i].conditions ? 'days' : 'always'),
                    fallbackTo: new i1$2.FormControl(this.mergedAsset[i].conditions ? this.mergedAsset[i].conditions.fallbackTo : '')
                }));
            }
        };
        PageaccessComponent.prototype.getAccessArrayCheck = function (data, formValue, accessArray) {
            var _this = this;
            var _a, _b, _c, _d, _e;
            if (data === null || data === void 0 ? void 0 : data.length) {
                this.mergedAsset = this.assetList ? this.mergeAsset(data, this.assetList) : data;
                this.checkMergedAsset(data);
                if (formValue.fieldLevelData.length) {
                    this.selectedFieldData = this.pageAccessService.setSelectedFieldPage(formValue.fieldLevelData, this.selectedFieldData);
                }
                var access = null;
                if ((_a = this.savedFieldPagesPatching) === null || _a === void 0 ? void 0 : _a.length) {
                    access = (_b = this.savedFieldPagesPatching.find(function (ele) { return ele.pageid === _this.pId; })) === null || _b === void 0 ? void 0 : _b.access;
                    this.savedFieldPagesPatching = this.savedFieldPagesPatching.filter(function (ele) { return ele.pageid !== _this.pId; });
                }
                this.fData = data;
                var existingFieldDataMap_1 = {};
                if (!access && ((_c = this.selectedFieldData) === null || _c === void 0 ? void 0 : _c.length)) {
                    (_e = (_d = this.assetList) === null || _d === void 0 ? void 0 : _d.filter(function (ele) { return ele.pageId === _this.pId; })) === null || _e === void 0 ? void 0 : _e.forEach(function (ele) {
                        existingFieldDataMap_1[ele.assetid] = ele.access;
                    });
                }
                this.getAccessByAsset(accessArray);
            }
            else {
                accessArray.controls = [];
            }
        };
        PageaccessComponent.prototype.checkMergedAsset = function (data) {
            if (this.mergedAsset.includes(undefined)) {
                this.mergedAsset = data;
                if (this.mergedAsset.length !== data.length) {
                    this.mergedAsset = data;
                }
            }
        };
        PageaccessComponent.prototype.getAccessByAsset = function (accessArray) {
            var e_5, _j;
            try {
                for (var _k = __values(this.mergedAsset), _l = _k.next(); !_l.done; _l = _k.next()) {
                    var asset = _l.value;
                    var assetAccess = this.pageAccessService.getAccess(asset, this.fieldPageLevel);
                    accessArray.push(new i1$2.FormGroup({
                        fieldName: new i1$2.FormControl(asset['displayname']),
                        access: new i1$2.FormControl(assetAccess ? assetAccess : '2'),
                        assetid: new i1$2.FormControl(asset['id']),
                        pageId: new i1$2.FormControl(this.pId),
                        validity: new i1$2.FormControl(asset.conditions ? asset.conditions.value : '1'),
                        condition: new i1$2.FormControl(asset.conditions ? 'days' : 'always'),
                        fallbackTo: new i1$2.FormControl(asset.conditions ? asset.conditions.fallbackTo : '')
                    }));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_l && !_l.done && (_j = _k.return)) _j.call(_k);
                }
                finally { if (e_5) throw e_5.error; }
            }
        };
        PageaccessComponent.prototype.mergeAsset = function (arr1, arr2) {
            return arr1.map(function (item, _i) {
                var e_6, _j;
                try {
                    for (var arr2_1 = __values(arr2), arr2_1_1 = arr2_1.next(); !arr2_1_1.done; arr2_1_1 = arr2_1.next()) {
                        var value = arr2_1_1.value;
                        if (item.id === value.id) {
                            return Object.assign({}, item, value);
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (arr2_1_1 && !arr2_1_1.done && (_j = arr2_1.return)) _j.call(arr2_1);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            });
        };
        PageaccessComponent.prototype.submitAlert = function () {
            if (!this.fieldLevelAccess && this.permissionUpdatedPages.length) {
                $('#submitAlert').modal('show');
            }
            else {
                this.saveRbac();
            }
        };
        PageaccessComponent.prototype.saveRbac = function () {
            var _this = this;
            var access = this.rbacForm.getRawValue();
            var pageAccessFormControl = this.rbacForm.get('pageLevelData');
            var userid = this.rbacForm.get('userid').value;
            var roleId = this.rbacForm.get('roleid').value;
            var policyId = this.rbacForm.get('policyid').value;
            if ((this.isPageDeselectSave && this.deselectedItemIds.length > 0) || this.isRemoveAllFields) {
                var selectedId_1;
                if (this.selectedAccess === 'user') {
                    selectedId_1 = this.rbacForm.getRawValue().userid;
                }
                else if (this.selectedAccess === 'role') {
                    selectedId_1 = this.rbacForm.getRawValue().roleid;
                }
                else {
                    selectedId_1 = this.rbacForm.getRawValue().policyid;
                    this.selectedAccess = 'policygroup';
                }
                // Collect asset id's for all deselected page id's
                var deselectedAssets = rxjs.forkJoin(this.deselectedItemIds.map(function (id) { return _this.pageAccessService.getAssetByPageId(id).pipe(operators.map(function (res) { return res['data'].map(function (item) { return ({ assetid: item.id }); }); })); }));
                // Make a single API call with all deselected asset IDs
                deselectedAssets.pipe(operators.map(function (assetIdResponses) { return [].concat.apply([], __spreadArray([], __read(assetIdResponses))); })).subscribe(function (allDeselectedAssetIds) {
                    _this.pageAccessService.updateAssetOnDeselect(_this.selectedAccess, selectedId_1, allDeselectedAssetIds).subscribe(function () {
                        _this.getConfiguredAssetData(_this.selectedAccess, selectedId_1);
                        _this.deselectedItemIds = [];
                    });
                });
            }
            var fieldLevelData = access.fieldLevelData;
            if (this.fieldLevelAccess === false) {
                this.getPageLevelByArray(pageAccessFormControl);
            }
            else {
                this.getFieldLevelByAsset(fieldLevelData);
            }
            if (this.fieldLevelAccess) {
                var selectedId_2;
                if (this.selectedAccess === 'user') {
                    selectedId_2 = this.rbacForm.getRawValue().userid;
                }
                else if (this.selectedAccess === 'role') {
                    selectedId_2 = this.rbacForm.getRawValue().roleid;
                }
                else {
                    selectedId_2 = this.rbacForm.getRawValue().policyid;
                    this.selectedAccess = 'policygroup';
                }
                this.pageAccessService.createAsset(this.selectedAccess, selectedId_2, this.fullArray).subscribe(function (_res) {
                    _this.getConfiguredAssetData(_this.selectedAccess, selectedId_2);
                    _this.alert.success('Field Access Updated Successfully');
                });
            }
            else {
                if (this.updatePage) {
                    if (this.selectedAccess === 'policy') {
                        this.selectedAccess = 'policygroup';
                    }
                    this.pageAccessService.updateDynamicPage(this.selectedAccess, this.selectedId, this.fullArray).subscribe(function (_res) {
                        _this.permissionUpdatedPages = [];
                        _this.getSelectedPages();
                        _this.alert.success('Access Updated Successfully');
                    }, function (_err) { return _this.alert.error(AppConstants.errorMessage); });
                }
                else {
                    this.pageAccessService
                        .createAccess(this.fieldLevelAccess, access.accessBy, this.fullArray, userid, roleId, policyId)
                        .subscribe(function (_result) {
                        _this.permissionUpdatedPages = [];
                        _this.getSelectedPages();
                        _this.alert.success('Access Saved Successfully');
                    }, function (_error) { return _this.alert.error(AppConstants.errorMessage); });
                }
            }
        };
        PageaccessComponent.prototype.getPageLevelByArray = function (pageLevelData) {
            var _this = this;
            var _a;
            this.fullArray = (_a = pageLevelData === null || pageLevelData === void 0 ? void 0 : pageLevelData.controls) === null || _a === void 0 ? void 0 : _a.map(function (x) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return {
                    page: (_a = x === null || x === void 0 ? void 0 : x.value) === null || _a === void 0 ? void 0 : _a.pageid,
                    overrideAssetPermissions: _this.permissionUpdatedPages.some(function (pageId) { var _a; return pageId === ((_a = x === null || x === void 0 ? void 0 : x.value) === null || _a === void 0 ? void 0 : _a.pageid); }) || false,
                    readwrite: ((_b = x === null || x === void 0 ? void 0 : x.value) === null || _b === void 0 ? void 0 : _b.pageAccess) === '2' ? true : false,
                    read: ((_c = x === null || x === void 0 ? void 0 : x.value) === null || _c === void 0 ? void 0 : _c.pageAccess) === '3' ? true : false,
                    none: ((_d = x === null || x === void 0 ? void 0 : x.value) === null || _d === void 0 ? void 0 : _d.pageAccess) === '4' ? true : false,
                    full: ((_e = x === null || x === void 0 ? void 0 : x.value) === null || _e === void 0 ? void 0 : _e.pageAccess) === '5' ? true : false,
                    touched: x === null || x === void 0 ? void 0 : x.touched,
                    conditions: ((_f = x === null || x === void 0 ? void 0 : x.value) === null || _f === void 0 ? void 0 : _f.condition) !== 'always'
                        ? {
                            attribute: 'created',
                            condition: 'lte',
                            value: (_g = x === null || x === void 0 ? void 0 : x.value) === null || _g === void 0 ? void 0 : _g.validity,
                            value_type: 'variable',
                            fallbackTo: (_h = x === null || x === void 0 ? void 0 : x.value) === null || _h === void 0 ? void 0 : _h.fallbackTo,
                            type: 'timestamp'
                        }
                        : null
                };
            });
        };
        PageaccessComponent.prototype.getFieldLevelByAsset = function (fieldLevelData) {
            var _this = this;
            this.fullArray = fieldLevelData.map(function (x) {
                var _a, _b;
                var assetData = (_a = _this.assetList) === null || _a === void 0 ? void 0 : _a.filter(function (a) { return a.id === x.assetid && a; });
                return {
                    id: assetData ? (_b = assetData[0]) === null || _b === void 0 ? void 0 : _b._id : null,
                    asset: x.assetid,
                    readwrite: (x === null || x === void 0 ? void 0 : x.access) === '2' ? true : false,
                    read: (x === null || x === void 0 ? void 0 : x.access) === '3' ? true : false,
                    none: (x === null || x === void 0 ? void 0 : x.access) === '4' ? true : false,
                    full: (x === null || x === void 0 ? void 0 : x.access) === '5' ? true : false,
                    conditions: x.condition !== 'always'
                        ? {
                            attribute: 'created',
                            condition: 'lte',
                            value: x.validity,
                            value_type: 'variable',
                            fallbackTo: x.fallbackTo,
                            type: 'timestamp'
                        }
                        : null
                };
            });
        };
        // edit functionalites based on policy group
        PageaccessComponent.prototype.setPolicyLevelPagePatching = function (pageConfig, assetconfig) {
            var pageIds = pageConfig.map(function (key) { return key.pageid; });
            var selectedModules = [];
            var uniquePage = __spreadArray([], __read(new Set(pageIds)));
            var selectedPages = uniquePage;
            this.rbacForm.patchValue({ provideAccess: '1' });
            this.pageLevelAccess = this.multiPageAccess = true;
            this.fieldLevelAccess = false;
            var m = this.rbacForm.get('module').value;
            if (m !== '' && m !== null) {
                var newModule = m.concat(selectedModules);
                var uniqueNewModule = __spreadArray([], __read(new Set(newModule)));
                this.rbacForm.get('module').setValue(uniqueNewModule);
            }
            else {
                this.rbacForm.patchValue({ module: selectedModules });
            }
            this.getSelectedPages(selectedPages, pageConfig, assetconfig);
        };
        PageaccessComponent.prototype.setPolicyLevelFieldPatching = function (pageConfig, assetconfig, from) {
            if (from === void 0) { from = null; }
            var mKey = assetconfig.filter(function (key) { return key.modulekey !== null && key.modulekey !== '' && key.isactive !== '' && key.isactive !== null; });
            var mmkey = mKey.map(function (key) { return key.modulekey; });
            var modules = this.moduleList.filter(function (key) { return mmkey.includes(key.refKey); });
            var pageId = assetconfig.filter(function (key) { return key.pageid !== null; });
            var pageIds = pageId.map(function (key) { return key.pageid; });
            var selectedModules;
            selectedModules = __spreadArray([], __read(new Set(modules)));
            var uniquePage = __spreadArray([], __read(new Set(pageIds)));
            var selectedPages = uniquePage;
            this.rbacForm.patchValue({ provideAccess: '2' });
            this.pageLevelAccess = this.multiPageAccess = false;
            this.fieldLevelAccess = true;
            if (from === 'field') {
                var m = this.rbacForm.get('module').value;
                if (m !== '') {
                    var mk = selectedModules.concat(m);
                    selectedModules = mk;
                    this.rbacForm.patchValue({ module: selectedModules });
                }
                var sm = this.rbacForm.get('submodule').value;
                if (sm !== '') {
                    this.rbacForm.patchValue({ module: selectedModules });
                }
            }
            else {
                this.rbacForm.patchValue({ module: selectedModules });
            }
            this.getSelectedPages(selectedPages, pageConfig, assetconfig);
        };
        PageaccessComponent.prototype.getDataBasedOnPolicy = function (from) {
            if (from === void 0) { from = null; }
            var policyids = this.rbacForm.get('policyid').value.map(function (a) { return a.id; });
            if (policyids.length) {
                this.editPage = true;
                this.pageLevelAccess = false;
                this.fieldLevelAccess = false;
                var f = this.rbacForm.controls['fieldLevelData'];
                f.controls = [];
                var p = this.rbacForm.controls['pageLevelData'];
                p.controls = [];
                var _loop_2 = function (j) {
                    var pageConfig = this_2.policyGroupData.filter(function (key) { return key.id === policyids[j]; });
                    if (from === 'field') {
                        this_2.editPage = false;
                        if (pageConfig[0].assetConfigs.length) {
                            this_2.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs, from);
                        }
                        else if (policyids.length === j + 1) {
                            this_2.showLevelAccess('2');
                        }
                    }
                    else {
                        this_2.getCheckPageConfig(pageConfig);
                    }
                };
                var this_2 = this;
                for (var j = 0; j < policyids.length; j++) {
                    _loop_2(j);
                }
            }
            else {
                this.resetForm('3');
                this.rbacForm.patchValue({ accessBy: '3' });
            }
        };
        PageaccessComponent.prototype.getCheckPageConfig = function (pageConfig) {
            if (pageConfig[0].pageConfigs.length) {
                this.fieldLevelClick = true;
                this.setPolicyLevelPagePatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
            }
            else if (pageConfig[0].assetConfigs.length) {
                var pAccess = this.rbacForm.get('provideAccess').value;
                if (pAccess !== '1') {
                    this.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
                }
            }
        };
        PageaccessComponent.prototype.getDataBasedOnRole = function (from) {
            if (from === void 0) { from = null; }
            var roleIds = this.rbacForm.get('roleid').value.map(function (a) { return a.id; });
            if (roleIds.length) {
                this.editPage = true;
                this.pageLevelAccess = false;
                this.fieldLevelAccess = false;
                var f = this.rbacForm.controls['fieldLevelData'];
                f.controls = [];
                var p = this.rbacForm.controls['pageLevelData'];
                p.controls = [];
                var _loop_3 = function (j) {
                    var pageConfig = this_3.roleAddedData.filter(function (key) { return key.id === roleIds[j]; });
                    this_3.getOrgId(pageConfig);
                    if (from === 'field') {
                        this_3.editPage = false;
                        if (pageConfig[0].assetConfigs.length) {
                            this_3.setPolicyLevelFieldPatching(pageConfig[0].rolePolicyGroupConfigs, pageConfig[0].assetConfigs, from);
                        }
                        else if (roleIds.length === j + 1) {
                            this_3.showLevelAccess('2');
                        }
                    }
                    else {
                        this_3.getCheckRolePolicyGroup(pageConfig);
                    }
                };
                var this_3 = this;
                // loop the role ids
                for (var j = 0; j < roleIds.length; j++) {
                    _loop_3(j);
                }
            }
            else {
                this.resetForm('2');
                this.rbacForm.patchValue({ accessBy: '2' });
            }
        };
        PageaccessComponent.prototype.getOrgId = function (pageConfig) {
            var _a;
            if (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig.length) {
                this.organisationid = (_a = pageConfig[0]) === null || _a === void 0 ? void 0 : _a.organizationid;
            }
        };
        PageaccessComponent.prototype.getCheckRolePolicyGroup = function (pageConfig) {
            if (pageConfig[0].rolePolicyGroupConfigs.length) {
                this.setPolicyLevelPagePatching(pageConfig[0].rolePolicyGroupConfigs, pageConfig[0].assetConfigs);
            }
            else if (pageConfig[0].assetConfigs.length) {
                var pAccess = this.rbacForm.get('provideAccess').value;
                if (pAccess !== '1') {
                    this.setPolicyLevelFieldPatching(pageConfig[0].rolePolicyGroupConfigs, pageConfig[0].assetConfigs);
                }
            }
        };
        PageaccessComponent.prototype.getRoleAndPolicyData = function (from) {
            if (from === void 0) { from = null; }
            var userIds = this.rbacForm.get('userid').value.map(function (a) { return a.id; });
            if (userIds.length) {
                this.editPage = true;
                this.pageLevelAccess = false;
                this.fieldLevelAccess = false;
                var f = this.rbacForm.controls['fieldLevelData'];
                f.controls = [];
                var p = this.rbacForm.controls['pageLevelData'];
                p.controls = [];
                var _loop_4 = function (j) {
                    var pageConfig = this_4.userList.filter(function (key) { return key.id === userIds[j]; });
                    if (from === 'field') {
                        this_4.editPage = false;
                        if (pageConfig[0].assetConfigs.length) {
                            this_4.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs, from);
                        }
                        else if (userIds.length === j + 1) {
                            this_4.showLevelAccess('2');
                        }
                    }
                    else {
                        this_4.getCheckPolicyLevelField(pageConfig);
                    }
                };
                var this_4 = this;
                // loop the role ids
                for (var j = 0; j < userIds.length; j++) {
                    _loop_4(j);
                }
            }
            else {
                this.resetForm('1');
                this.rbacForm.patchValue({ accessBy: '1' });
            }
        };
        PageaccessComponent.prototype.getCheckPolicyLevelField = function (pageConfig) {
            if (pageConfig[0].pageConfigs.length) {
                this.setPolicyLevelPagePatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
            }
            else if (pageConfig[0].assetConfigs.length) {
                var pAccess = this.rbacForm.get('provideAccess').value;
                if (pAccess !== '1') {
                    this.setPolicyLevelFieldPatching(pageConfig[0].pageConfigs, pageConfig[0].assetConfigs);
                }
            }
        };
        PageaccessComponent.prototype.resetForm = function (id, clear) {
            if (id === void 0) { id = null; }
            if (clear === void 0) { clear = null; }
            this.subModuleList = this.pageData = this.selectedPageData = [];
            this.fieldLevelCheckCount = [];
            this.pagelevelaccesscount = [];
            this.pagelevelaccesssavedisable = true;
            this.pageLevelAccess = this.fieldLevelAccess = false;
            this.enablesave = true;
            this.pagelevelaccesscountdisable = true;
            var f = this.rbacForm.controls['fieldLevelData'];
            f.controls = [];
            var p = this.rbacForm.controls['pageLevelData'];
            p.controls = [];
            this.policyGroupPages = [];
            this.selectedAccess = '';
            this.selectedName = '';
            this.permissionUpdatedPages = [];
            this.rbacForm.reset();
            if (id !== null) {
                this.rbacForm.patchValue({ accessBy: id });
            }
            else if (clear !== null) {
                this.AddComponent.resetForm();
            }
        };
        PageaccessComponent.prototype.redirectList = function () {
            this.router.navigateByUrl('/pages/rbac/page-access/page-access-list');
        };
        PageaccessComponent.prototype.saveAccessPatching = function () {
            var _this = this;
            var _a;
            this.savedFieldPagesPatching = [];
            this.savedPageAccessPatching = false;
            if (((_a = this.rbacForm.get('provideAccess')) === null || _a === void 0 ? void 0 : _a.value) === '2') {
                this.savedPageAccessPatching = true;
            }
            else {
                var ppId = this.rbacForm.get('pageLevelData').value;
                this.savedFieldPagesPatching = [];
                if (ppId === null || ppId === void 0 ? void 0 : ppId.length) {
                    ppId.forEach(function (element) {
                        var selectedObj = { pageid: element === null || element === void 0 ? void 0 : element.pageid, access: element === null || element === void 0 ? void 0 : element.pageAccess };
                        _this.savedFieldPagesPatching.push(selectedObj);
                    });
                }
            }
            this.alert.success('Temporarily saved Data for changes');
        };
        PageaccessComponent.prototype.changeFieldAccess = function (_index) {
            var _this = this;
            var accessArray = this.rbacForm.get('pageLevelData');
            var fieldValue = this.rbacForm.get('fieldLevelData').value.map(function (el) { return el.access; });
            var maxOcc = { element: null, occured: 0 };
            fieldValue.reduce(function (acc, el) {
                acc[el] = acc[el] ? acc[el] + 1 : 1;
                if (acc[el] > maxOcc.occured) {
                    maxOcc = { element: el, occured: acc[el] };
                }
                return acc;
            }, {});
            var pageIndex = this.rbacForm
                .get('pageLevelData')
                .value.findIndex(function (el) { return el.pageid === _this.rbacForm.get('fieldLevelData').value[0].pageId; });
            if (pageIndex > -1) {
                accessArray.push(new i1$2.FormGroup({
                    pageName: new i1$2.FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageName),
                    pageid: new i1$2.FormControl(this.rbacForm.get('pageLevelData').value[pageIndex].pageid),
                    pageAccess: new i1$2.FormControl(maxOcc.element ? maxOcc.element : '2')
                }));
                accessArray.removeAt(pageIndex);
                var isExist = this.selectedPageAccessChanges.findIndex(function (el) { return el.pageid === _this.rbacForm.get('pageLevelData').value[pageIndex].pageid; });
                if (isExist > -1) {
                    this.selectedPageAccessChanges.splice(isExist, 1);
                }
            }
        };
        PageaccessComponent.prototype.changePageAccess = function (index) {
            var _a;
            var selectedValue = this.rbacForm.get('pageLevelData').value[index];
            var pageLevelData = this.rbacForm.get('pageLevelData');
            var isExist = (_a = this.selectedPageAccessChanges) === null || _a === void 0 ? void 0 : _a.findIndex(function (el) { return (el === null || el === void 0 ? void 0 : el.pageid) === selectedValue.pageid; });
            if (isExist > -1) {
                this.selectedPageAccessChanges[isExist].pageAccess = selectedValue.pageAccess;
            }
            else {
                this.selectedPageAccessChanges.push(selectedValue);
            }
            if (selectedValue.pageAccess === '4') {
                var conditionControl = pageLevelData.at(index).get('condition');
                conditionControl.setValue('always');
            }
        };
        return PageaccessComponent;
    }());
    PageaccessComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageaccessComponent, deps: [{ token: i0__namespace.Injector }, { token: i1__namespace$1.FormBuilder }, { token: i0__namespace.ChangeDetectorRef }, { token: DataStoreService }, { token: i3__namespace.Router }, { token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PageaccessComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PageaccessComponent, selector: "lib-pageaccess", viewQueries: [{ propertyName: "AddComponent", first: true, predicate: ManageAccessRadioComponent, descendants: true }], ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"row rbac-card\">\r\n  <div class=\"col-12\">\r\n    <mat-card class=\"mat-card\">\r\n      <mat-card-content class=\"p-2\">\r\n        <form [formGroup]=\"rbacForm\">\r\n          <app-manage-access-radio (accessBy)=\"accessBy($event)\" (userDropdown)=\"userDropdown($event)\"\r\n            (roleDropdown)=\"roleDropdown($event)\" (policyDropdown)=\"policyDropdown($event)\"\r\n            (dropDownSelectedValues)=\"dropDownSelectedValues($event)\"></app-manage-access-radio>\r\n\r\n          <h3 class=\"radio-title mb-2\">Page Access Management</h3>\r\n          <mat-card class=\"mat-card\">\r\n            <mat-card-content class=\"p-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6 col-12 mb-3\" *ngIf=\"false\">\r\n                  <label class=\"radio-title\">Modules</label>\r\n                  <angular2-multiselect [data]=\"moduleList\" [settings]=\"moduleDropdownSettings\"\r\n                    onSelect=\"loadSubModule('click')\" onDeSelect=\"removeSubModule($event)\"\r\n                    onSelectAll=\"loadSubModule('click')\" onDeSelectAll=\"removeAllSubModule()\"\r\n                    formControlName=\"module\"></angular2-multiselect>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6 col-12 mb-3\" *ngIf=\"false\">\r\n                  <label class=\"radio-title\">Sub Modules</label>\r\n                  <angular2-multiselect [data]=\"subModuleList\" [settings]=\"submoduleDropdownSettings\"\r\n                    onSelect=\"loadSubModulePage('click')\" onDeSelect=\"removeSubModulePage($event, 'submodule')\"\r\n                    onSelectAll=\"loadSubModulePage('click')\" onDeSelectAll=\"removeAllSubModulePage()\"\r\n                    formControlName=\"submodule\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n                  <label class=\"radio-title\">Pages</label>\r\n                  <angular2-multiselect [data]=\"pagesList\" [settings]=\"pageDropdownSettings\"\r\n                    (onSelect)=\"populatePage('click',true,$event)\" fieldKey=\"SETTINGS_PAG_ACC_PAGE\"\r\n                    (onDeSelect)=\"populatePage('click',false,$event)\" (onSelectAll)=\"populatePage('click',true,$event)\"\r\n                    (onDeSelectAll)=\"removeAllPopulatePage()\" formControlName=\"pageList\"></angular2-multiselect>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-12 col-12 mb-3\">\r\n                  <label class=\"radio-title d-block required\">Provide Access by </label>\r\n                  <mat-radio-group formControlName=\"provideAccess\" (change)=\"showLevelAccess($event.value)\">\r\n                    <mat-radio-button value=\"1\" fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL\">Page Level&nbsp;&nbsp;</mat-radio-button>\r\n                    <mat-radio-button value=\"2\" fieldKey=\"SETTINGS_PAG_ACC_PAG_FIELD_LEVEL\">Field Level</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div> \r\n                <div class=\"col-lg-3 col-md-6 col-12 mb-3\" *ngIf=\"fieldLevelAccess\">\r\n                  <label class=\"radio-title\">Select Page</label>\r\n                  <br />\r\n                  <p-dropdown id=\"selectpage\" ariaLabelledBy=\"selectpage\" [options]=\"selectedPageData\" fieldKey=\"SETTINGS_PAG_ACC_PAGE\"\r\n                    [filter]=\"true\" [showClear]=\"fieldLevelCheckCount && fieldLevelCheckCount?.length\"\r\n                    [resetFilterOnHide]=\"true\" (onChange)=\"getFieldLevelList('click')\" formControlName=\"fpages\" optionLabel=\"pagename\" optionValue=\"id\"\r\n                    placeholder=\"Select a page\" class=\"dd-stand-size\">\r\n                    <ng-template let-item pTemplate=\"selectedItem\">\r\n                      <div pTooltip=\"{{item?.pagename}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.pagename }}</div>\r\n                    </ng-template>\r\n                    <ng-template let-object pTemplate=\"item\">\r\n                      {{ object.pagename }}\r\n                    </ng-template>\r\n                  </p-dropdown>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"pageLevelAccess\" class=\"row\">\r\n                <div class=\"col-12 mt-3 pageLevelAccessTable\">\r\n                  <table aria-describedby=\"pageLevelAccessTable\" class=\"table table-bordered\">\r\n                    <col />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <col style=\"width: 120px\" />\r\n                    <thead>\r\n                      <th class=\"text-left\">Page Name</th>\r\n                      <th class=\"text-center\">R</th>\r\n                      <th class=\"text-center\">RW</th>\r\n                      <th class=\"text-center\">RWD</th>\r\n                      <th class=\"text-center\">None</th>\r\n                      <th class=\"text-center\">Validity</th>\r\n                    </thead>\r\n                    <tbody>\r\n                      <ng-container formArrayName=\"pageLevelData\"\r\n                        *ngFor=\"let fAccess of rbacForm.get('pageLevelData')['controls']; let i = index\">\r\n                        <tr [formGroup]=\"rbacForm.get('pageLevelData')['controls'][i]\">\r\n                          <td class=\"text-left\">\r\n                            <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                              formControlName=\"pageName\" placeholder=\"pageleveldata\" />\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <input (change)=\"changePageAccess(i)\" formControlName=\"pageAccess\" type=\"radio\" value=\"3\"\r\n                              fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ\" />\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <input (change)=\"changePageAccess(i)\" formControlName=\"pageAccess\"\r\n                              fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE\" type=\"radio\" value=\"2\" />\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <input (change)=\"changePageAccess(i)\" formControlName=\"pageAccess\"\r\n                              fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_READ_WRITE_DELETE\" type=\"radio\" value=\"5\" />\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <input (change)=\"changePageAccess(i)\" formControlName=\"pageAccess\"\r\n                              fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_NONE\" type=\"radio\" value=\"4\" />\r\n                          </td>\r\n                          <td class=\"text-center\">\r\n                            <ng-container *ngIf=\"\r\n                                  rbacForm.get('pageList')?.value[i]?.activeVersion?.gridconfig ||\r\n                                  rbacForm.get('pageList')?.value[i]?.gridconfig\r\n                                \">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" [disabled]=\"fAccess?.value?.pageAccess === '4'\"\r\n                                optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <p-inputNumber type=\"number\" class=\"validity\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [readonly]=\"fAccess?.value?.pageAccess === '4'\" [min]=\"1\"\r\n                                fieldKey=\"SETTINGS_PAG_ACC_PAGE_PAGE_LEVEL_VALIDITY\" formControlName=\"validity\"\r\n                                style=\"width: 50px; margin-left: 15px\"></p-inputNumber>\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.pageAccess === '3' || fAccess?.value?.pageAccess === '4'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </ng-container>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"showFieldGrid && fieldLevelCheckCount?.length > 0 && fieldLevelAccess && fieldPageLevel?.length > 0\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"table-responsive\">\r\n                    <table aria-describedby=\"fieldLevelAccessTable\" class=\"table table-bordered\">\r\n                      <col />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <thead>\r\n                        <th class=\"text-left\">Field Name</th>\r\n                        <th class=\"text-center\">Read</th>\r\n                        <th class=\"text-center\">Write</th>\r\n                        <th class=\"text-center\">None</th>\r\n                        <th class=\"text-center\" *ngIf=\"showFieldValidity\">Validity</th>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container formArrayName=\"fieldLevelData\"\r\n                          *ngFor=\"let fAccess of rbacForm.get('fieldLevelData')['controls']; let i = index\">\r\n                          <tr [formGroupName]=\"i\">\r\n                            <td class=\"text-left\">\r\n                              {{ fData[i]['displayname'] }}\r\n\r\n                              <input type=\"hidden\" formControlName=\"assetid\" value=\"{{ fData[i]['id'] }}\" />\r\n                              <input type=\"hidden\" formControlName=\"pageId\" />\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\"\r\n                                value=\"3\" />\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\"\r\n                                value=\"2\" />\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\"\r\n                                value=\"4\" />\r\n                            </td>\r\n                            <td class=\"text-center\" *ngIf=\"showFieldValidity\">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\"\r\n                                [disabled]=\"fAccess?.value?.access === '4'\" formControlName=\"condition\"\r\n                                placeholder=\"Select a condition\" optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <input type=\"number\" class=\"validity\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                [min]=\"1\" formControlName=\"validity\" [readonly]=\"fAccess?.value?.access === '4'\"\r\n                                style=\"width: 50px; margin-left: 15px\" pInputText />\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\"\r\n                                formControlName=\"fallbackTo\" *ngIf=\"fAccess?.value?.condition !== 'always'\"\r\n                                placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.access === '4' || fAccess?.value?.access === '3'\"\r\n                                optionLabel=\"name\" optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- This code for field access for grid page -->\r\n              <div class=\"row\" *ngIf=\"showFieldGrid && fieldLevelCheckCount?.length > 0 && fieldLevelAccess && fieldPageLevel?.length === 0\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"table-responsive\">\r\n                    <table aria-describedby=\"fieldLevelAccessTable\" class=\"table table-bordered\">\r\n                      <col />\r\n                      <col style=\"width: 120px\" />\r\n                      <col style=\"width: 120px\" />\r\n                      <!-- <col style=\"width: 120px\" /> -->\r\n                      <thead>\r\n                        <tr>\r\n                          <th class=\"text-left\">Field Name</th>\r\n                          <th class=\"text-center\">Read</th>\r\n                          <!-- <th class=\"text-center\">Write</th> -->\r\n                          <th class=\"text-center\">None</th>\r\n                          <th class=\"text-center\" *ngIf=\"showFieldValidity\">Validity</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <ng-container formArrayName=\"fieldLevelData\"\r\n                          *ngFor=\"let fAccess of rbacForm.get('fieldLevelData')['controls']; let i = index\">\r\n                          <tr [formGroupName]=\"i\">\r\n                            <td class=\"text-left\">\r\n                              {{ fData[i]['displayname'] }}\r\n                              <input type=\"hidden\" formControlName=\"assetid\" value=\"{{ fData[i]['id'] }}\"/>\r\n                              <input type=\"hidden\" formControlName=\"pageId\" name=\"permissiongroup_{{i}}\"/>\r\n                            </td>\r\n                            <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\" value=\"3\"/>\r\n                            </td>                                           \r\n                            <!-- <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\" value=\"2\" />\r\n                            </td> -->\r\n                            <td class=\"text-center\">\r\n                              <input formControlName=\"access\" (change)=\"changeFieldAccess($event)\" type=\"radio\" value = \"4\"/>\r\n                            </td>\r\n                            <td class=\"text-center\" *ngIf=\"showFieldValidity\">\r\n                              <p-dropdown [options]=\"conditions\" styleClass=\"condition\"\r\n                                [disabled]=\"fAccess?.value?.access === '4'\" formControlName=\"condition\" placeholder=\"Select a condition\"\r\n                                optionLabel=\"name\" optionValue=\"key\">\r\n                              </p-dropdown>\r\n                              <input type=\"number\" class=\"validity\" *ngIf=\"fAccess?.value?.condition !== 'always'\" [min]=\"1\"\r\n                                formControlName=\"validity\" [readonly]=\"fAccess?.value?.access === '4'\" style=\"width: 50px; margin-left: 15px\"\r\n                                pInputText />\r\n                              <p-dropdown [options]=\"getFallbackPermission(fAccess)\" styleClass=\"condition\" formControlName=\"fallbackTo\"\r\n                                *ngIf=\"fAccess?.value?.condition !== 'always'\" placeholder=\"Select a permission\"\r\n                                [disabled]=\"fAccess?.value?.access === '4' || fAccess?.value?.access === '3'\" optionLabel=\"name\"\r\n                                optionValue=\"key\" [style]=\"{ 'margin-left': '15px' }\">\r\n                              </p-dropdown>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </form>\r\n        <div class=\"mt-3\" *ngIf=\"policyGroupPages.length && !fieldLevelAccess && selectedAccess === 'role'\">\r\n          <p-accordion class=\"w-full dynamic-search\" iconPos=\"endVal\">\r\n            <p-accordionTab>\r\n              <ng-template pTemplate=\"header\">\r\n                <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                  <span class=\"font-bold\">Policy Groups associated with {{ selectedName }} Role</span>\r\n                </span>\r\n              </ng-template>\r\n              <mat-card class=\"mt-2\">\r\n                <mat-card-content>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 mt-1\" *ngFor=\"let policyGroup of policyGroupPages\">\r\n                      <div class=\"radio-title mb-2\">Policy Group: {{ policyGroup?.policygroup?.policygroupname }}</div>\r\n                      <!-- It shows associated Roles -->\r\n                      <div class=\"table-responsive\">\r\n                        <table id=\"policyGroupTable\" aria-describedby=\"policyGroupTable\" class=\"table table-bordered\">\r\n                          <col />\r\n                          <col style=\"width: 120px\" />\r\n                          <col style=\"width: 120px\" />\r\n                          <col style=\"width: 120px\" />\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\" class=\"text-left\">Page Name</th>\r\n                              <th scope=\"col\" class=\"text-center\">R</th>\r\n                              <th scope=\"col\" class=\"text-center\">RW</th>\r\n                              <th scope=\"col\" class=\"text-center\">RWD</th>\r\n                              <th scope=\"col\" class=\"text-center\">None</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let page of policyGroup?.policygrouppage                        \">\r\n                              <tr>\r\n                                <td class=\"text-left\">\r\n                                  <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                                    title=\"page?.page?.activeVersion?.pagename\"\r\n                                    [value]=\"page?.page[0]?.activeVersion?.pagename\" />\r\n                                </td>\r\n    \r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.read\" type=\"radio\" />\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.readwrite\" type=\"radio\" />\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.full\" type=\"radio\" />\r\n                                </td>\r\n    \r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.hide\" type=\"radio\" />\r\n                                </td>\r\n                              </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"policyGroupPages?.length === 0\">\r\n                              <tr>\r\n                                <td class=\"text-center\" colspan=\"4\">No pages associated with Policy Group.</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </p-accordionTab>\r\n          </p-accordion>\r\n          \r\n        </div>\r\n        <div class=\"mt-3\" *ngIf=\"policyGroupRolePages.length && !fieldLevelAccess && selectedAccess === 'policygroup'\">\r\n          <p-accordion class=\"w-full dynamic-search\" iconPos=\"endVal\">\r\n            <p-accordionTab>\r\n              <ng-template pTemplate=\"header\">\r\n                <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                  <span class=\"font-bold\">Roles associated with {{ selectedName }} Policy Group</span>\r\n                </span>\r\n              </ng-template>\r\n              <mat-card class=\"mt-2\">\r\n                <mat-card-content>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-12 mt-1\" *ngFor=\"let role of policyGroupRolePages\">\r\n                      <div class=\"radio-title mb-2\">Role: {{ role?.role?.name }}</div>\r\n                      <!-- It shows associated policygroups -->\r\n                      <div class=\"table-responsive\">\r\n                        <table id=\"policyGroupTable\" aria-describedby=\"policyGroupTable\" class=\"table table-bordered\">\r\n                          <col />\r\n                          <col style=\"width: 120px\" />\r\n                          <col style=\"width: 120px\" />\r\n                          <col style=\"width: 120px\" />\r\n                          <thead>\r\n                            <tr>\r\n                              <th scope=\"col\" class=\"text-left\">Page Name</th>\r\n                              <th scope=\"col\" class=\"text-center\">R</th>\r\n                              <th scope=\"col\" class=\"text-center\">RW</th>\r\n                              <th scope=\"col\" class=\"text-center\">RWD</th>\r\n                              <th scope=\"col\" class=\"text-center\">None</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let page of role?.rolepage\">\r\n                              <tr>\r\n                                <td class=\"text-left\">\r\n                                  <input style=\"border: none; pointer-events: none; width: 360px\" type=\"text\"\r\n                                    title=\"page?.page?.activeVersion?.pagename\"\r\n                                    [value]=\"page?.page[0]?.activeVersion?.pagename\" />\r\n                                </td>\r\n    \r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.read\" type=\"radio\" />\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.readwrite\" type=\"radio\" />\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.full\" type=\"radio\" />\r\n                                </td>\r\n    \r\n                                <td class=\"text-center\">\r\n                                  <input disabled [checked]=\"page?.hide\" type=\"radio\" />\r\n                                </td>\r\n                              </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"policyGroupRolePages?.length === 0\">\r\n                              <tr>\r\n                                <td class=\"text-center\" colspan=\"4\">No pages associated with Role.</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </p-accordionTab>\r\n          </p-accordion>\r\n          \r\n        </div>\r\n        <div class=\"text-right mt-3\" *ngIf = \"multiPageAccess\">\r\n          <!-- <button class=\"btn btn-primary mr-2\" fieldKey=\"SETTINGS_PAG_ACC_BACK\" (click)=\"redirectList()\">Back</button> -->\r\n          <!-- <button class=\"btn btn-cancel mr-2\" fieldKey=\"SETTINGS_PAG_ACC_CLEAR\" (click)=\"resetForm()\">Clear</button> -->\r\n          <button class=\"btn btn-primary\" fieldKey=\"SETTINGS_PAG_ACC_SAVE\" (click)=\"submitAlert()\" [disabled]=\"(pagelevelaccesssavedisable && pagelevelaccesscountdisable) || (!this.pagelevelaccesscount || this.pagelevelaccesscount?.length === 0) || (enablesave && pagelevelaccesscount && pagelevelaccesscount?.length > 0)\">Save</button>\r\n        </div>\r\n        <div class=\"text-right mt-3\" *ngIf = \"!multiPageAccess\">\r\n          <!-- <button class=\"btn btn-primary mr-2\" fieldKey=\"SETTINGS_PAG_ACC_BACK\" (click)=\"redirectList()\">Back</button> -->\r\n          <!-- <button class=\"btn btn-cancel mr-2\" fieldKey=\"SETTINGS_PAG_ACC_CLEAR\" (click)=\"resetForm()\">Clear</button> -->\r\n          <button class=\"btn btn-primary\" fieldKey=\"SETTINGS_PAG_ACC_SAVE\" (click)=\"submitAlert()\" [disabled]=\"((multiPageAccess) || (fieldLevelCheckCount && fieldLevelCheckCount?.length === 0) || (enablesave && fieldLevelCheckCount && fieldLevelCheckCount?.length > 0) || (!pagelevelaccesscount || pagelevelaccesscount?.length === 0))\">Save</button>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"submitAlert\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Page Access - Warning</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Field Level Access is already present for this Page. Modifying the Page Level Access will remove all Field Level\r\n        Access. Do you want to proceed?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"saveRbac()\">\r\n            Yes\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            (click)=\"getSelectedPages()\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".mat-card-content .mat-radio-group .mat-radio-button{padding-right:10px;font-family:\"Roboto\",sans-serif!important}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;padding-bottom:13px}:host ::ng-deep .p-dropdown.nobg{background-color:transparent;border:none}:host ::ng-deep .p-dropdown.nobg:hover,:host ::ng-deep .p-dropdown.nobg:focus{background-color:transparent!important;border:none!important}.pageLevelAccessTable table thead tr th,.pageLevelAccessTable table tbody tr td{vertical-align:middle;color:var(--text-dark)}.pageLevelAccessTable table thead tr th input,.pageLevelAccessTable table tbody tr td input{background:var(--bg-light);color:var(--text-dark)}.pageLevelAccessTable table thead tr th a:hover,.pageLevelAccessTable table tbody tr td a:hover{text-decoration:none}:host ::ng-deep .p-inputtext.validity{height:30px;line-height:13px}:host ::ng-deep .p-dropdown.condition{height:30px;line-height:13px}@media screen and (max-width: 990px){:host ::ng-deep .selected-list .c-list{width:calc(100% - 35px)!important}.pageLevelAccessTable{width:100%;overflow:auto}.pageLevelAccessTable .table{margin-bottom:60px}}:host ::ng-deep .dynamic-search .p-component{font-size:var(--font-13)}:host ::ng-deep .dynamic-search .p-component .p-accordion-toggle-icon{margin-top:-8px;position:absolute;right:.5em;top:50%;font-size:var(--font-13);color:var(--primary)}:host ::ng-deep .dynamic-search .p-component .head-text span{color:var(--primary)}:host ::ng-deep .dynamic-search .error-text{font-size:var(--font-12)}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6__namespace$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: ManageAccessRadioComponent, selector: "app-manage-access-radio", inputs: ["reloadForm"], outputs: ["accessBy", "policyDropdown", "roleDropdown", "userDropdown", "dropDownSelectedValues"] }, { type: i8__namespace$1.AngularMultiSelect, selector: "angular2-multiselect", inputs: ["settings", "data", "loading"], outputs: ["onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onOpen", "onClose", "onScrollToEnd", "onFilterSelectAll", "onFilterDeSelectAll", "onAddFilterNewItem", "onGroupSelect", "onGroupDeSelect"] }, { type: i4__namespace.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i5__namespace.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i11__namespace.InputNumber, selector: "p-inputNumber", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "disabled"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { type: i12__namespace.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { type: i12__namespace.AccordionTab, selector: "p-accordionTab", inputs: ["header", "disabled", "cache", "transitionOptions", "selected"], outputs: ["selectedChange"] }], directives: [{ type: i6__namespace$1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i4__namespace.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i8__namespace.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i9__namespace.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }, { type: i1__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$1.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { type: i1__namespace$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i1__namespace$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i1__namespace$1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { type: i17__namespace.InputText, selector: "[pInputText]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PageaccessComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-pageaccess',
                        templateUrl: './pageaccess.component.html',
                        styleUrls: ['./pageaccess.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }, { type: i1__namespace$1.FormBuilder }, { type: i0__namespace.ChangeDetectorRef }, { type: DataStoreService }, { type: i3__namespace.Router }, { type: AlertService }]; }, propDecorators: { AddComponent: [{
                    type: i0.ViewChild,
                    args: [ManageAccessRadioComponent]
                }] } });

    var RbacPageaccessComponent = /** @class */ (function () {
        function RbacPageaccessComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        RbacPageaccessComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.accessEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
                _this._storeservice.setData('HTTPSERVICE', val.httpService);
            });
        };
        return RbacPageaccessComponent;
    }());
    RbacPageaccessComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPageaccessComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RbacPageaccessComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacPageaccessComponent, selector: "rbac-pageaccess", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", accessEvent: "accessEvent" }, ngImport: i0__namespace, template: "\n   <lib-pageaccess></lib-pageaccess>\n  ", isInline: true, components: [{ type: PageaccessComponent, selector: "lib-pageaccess" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPageaccessComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rbac-pageaccess',
                        template: "\n   <lib-pageaccess></lib-pageaccess>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], accessEvent: [{
                    type: i0.Input
                }] } });

    var ShowFieldDirective = /** @class */ (function () {
        function ShowFieldDirective(templateRef, viewContainer, dataStore) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.dataStore = dataStore;
        }
        ShowFieldDirective.prototype.ngOnInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (!permissions || !permissions[this.showField]) {
                this.viewContainer.clear();
            }
            else {
                this.viewContainer.createEmbeddedView(this.templateRef);
                var lookupIds = sessionStorage.getItem('LOOKUP_IDS');
                if (lookupIds) {
                    var lookupIdArray_1 = lookupIds.split(',');
                    Object.entries(permissions)
                        .filter(function (item) { return item[0].startsWith('GALKP_'); })
                        .forEach(function (_a) {
                        var e_1, _b;
                        var _c = __read(_a, 2), key = _c[0], value = _c[1];
                        try {
                            for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                                var _value = value_1_1.value;
                                var _key = key.replace('GALKP_', '');
                                if (_key === _this.showField &&
                                    lookupIdArray_1.includes(String(_value['lookupid'])) &&
                                    _value['action'] === 'H') {
                                    _this.viewContainer.clear();
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (value_1_1 && !value_1_1.done && (_b = value_1.return)) _b.call(value_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                }
            }
        };
        return ShowFieldDirective;
    }());
    ShowFieldDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ShowFieldDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[showField]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                    type: i0.Input
                }] } });

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i6.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i6.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i6.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var MicrostrategyService = /** @class */ (function () {
        function MicrostrategyService(http, alertService, permissionStore, _storeservice) {
            var _this = this;
            this.http = http;
            this.alertService = alertService;
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.environment = _this.RBACORG['environment'] ? _this.RBACORG['environment'] : '';
                }
            });
        }
        MicrostrategyService.prototype.getAuthToken = function () {
            var body = {
                username: this.environment.mstrUsername,
                password: this.environment.mstrPassword,
                loginMode: 1
            };
            return this.http.post(this.environment.mstrURL + "/api/auth/login", body, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
                observe: 'response'
            });
        };
        MicrostrategyService.prototype.getDossier = function (projectId, dossierId, pageNo) {
            var _this = this;
            var permissions = this.permissionStore.state;
            var projectUrl = this.environment.mstrURL + "/app/" + projectId;
            var dossierUrl = projectUrl + "/" + dossierId + "/" + pageNo;
            microstrategy.dossier
                .create({
                placeholder: document.getElementById('dossierContainer'),
                url: dossierUrl,
                navigationBar: {
                    enabled: true,
                    gotoLibrary: permissions === null || permissions === void 0 ? void 0 : permissions.ANA_LIBRARY,
                    title: true,
                    toc: true,
                    reset: true,
                    reprompt: true,
                    share: true,
                    comment: true,
                    notification: true,
                    filter: true,
                    options: true,
                    search: true,
                    bookmark: true
                },
                enableCustomAuthentication: true,
                enableResponsive: false,
                containerWidth: 400,
                containerHeight: 400,
                customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
                getLoginToken: function () { return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.headers.get('x-mstr-authtoken')];
                        }
                    });
                }); }
            })
                .catch(function (_err) { return _this.alertService.error("Failed to connect " + _this.environment.mstrURL); });
        };
        MicrostrategyService.prototype.getLibraryDetails = function () {
            return __awaiter(this, void 0, void 0, function () {
                var token, authtoken, headerInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                        case 1:
                            token = _a.sent();
                            authtoken = token.headers.get('x-mstr-authtoken');
                            headerInfo = {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                                'X-MSTR-ProjectID': this.environment.mstrProjectID
                            };
                            return [2 /*return*/, this.http
                                    .get(this.environment.mstrURL + "/api/library", {
                                    withCredentials: true,
                                    headers: headerInfo
                                })
                                    .toPromise()
                                    .then(function (response) {
                                    return response.map(function (mstr) { return ({
                                        id: mstr.target.id,
                                        projectId: mstr.projectId,
                                        name: mstr.target.name
                                    }); });
                                })];
                    }
                });
            });
        };
        return MicrostrategyService;
    }());
    MicrostrategyService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, deps: [{ token: i1__namespace$2.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MicrostrategyService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

    var RbacService = /** @class */ (function () {
        function RbacService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        RbacService.prototype.getAllUserList = function (key) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserList + "/" + key);
        };
        RbacService.prototype.getAllUserOrgList = function (orgid) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
        };
        RbacService.prototype.saveUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
        };
        RbacService.prototype.updateUser = function (data, userid) {
            return this.httpService.put(UserConfig.EndPoint.User.getAllUserList + "/" + userid, data);
        };
        RbacService.prototype.deleteUser = function (id) {
            return this.httpService.delete(UserConfig.EndPoint.User.getAllUserList + "/" + id);
        };
        RbacService.prototype.activateUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
        };
        RbacService.prototype.addProviderUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
        };
        RbacService.prototype.addUserRole = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
        };
        RbacService.prototype.uploadKey = function (objparams) {
            return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
        };
        RbacService.prototype.getOrgPolicyGroupList = function (orgid) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
        };
        RbacService.prototype.getAllPolicyGroupList = function (policyGroupId) {
            var endPoint = policyGroupId
                ? PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + policyGroupId
                : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
            return this.httpService.get(endPoint);
        };
        RbacService.prototype.getPolicyGroupById = function (id) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
        };
        RbacService.prototype.getPolicyGroupsByManagementGroup = function (policyGroupId) {
            return this.httpService.get("/org/policyGroup/managementgroup/" + policyGroupId);
        };
        RbacService.prototype.createPolicyGroup = function (data) {
            return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
        };
        RbacService.prototype.updatePolicyGroup = function (id, item) {
            return this.httpService.put(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id, item);
        };
        RbacService.prototype.deletePolicyGroup = function (id) {
            return this.httpService.delete(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id);
        };
        RbacService.prototype.getAllUserRole = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
        };
        RbacService.prototype.deleteRole = function (id) {
            return this.httpService.delete(RoleConfig.EndPoint.role.getAllUserRole + "/" + id);
        };
        RbacService.prototype.getRoleById = function (roleid) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleid);
        };
        RbacService.prototype.createRole = function (data) {
            return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
        };
        RbacService.prototype.updateRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleId, data);
        };
        RbacService.prototype.getLandingPage = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getLandingPage + "/" + id);
        };
        RbacService.prototype.createPolicyGroupForRole = function (roleId, data) {
            return this.httpService.post(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.updatePolicyGroupForRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.getReportDashbaord = function () {
            return this.httpService.get("" + RoleConfig.EndPoint.role.dossier);
        };
        RbacService.prototype.getPermissionRoleById = function (id) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
        };
        RbacService.prototype.getManagementGroupTree = function (_organizationid) {
            return this.httpService.get('/org/management-group/organization/tree');
        };
        RbacService.prototype.getPermissionsTree = function (applicationid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
        };
        return RbacService;
    }());
    RbacService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i6.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i6.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i6.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PrimengModule = /** @class */ (function () {
        function PrimengModule() {
        }
        return PrimengModule;
    }());
    PrimengModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PrimengModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PrimengModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PrimengModule, imports: [i6.CommonModule,
            i12.AccordionModule,
            tabmenu.TabMenuModule,
            message.MessageModule,
            table.TableModule,
            i17.InputTextModule,
            calendar.CalendarModule,
            checkbox.CheckboxModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            i5.DropdownModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            card.CardModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            AlertModule,
            confirmdialog.ConfirmDialogModule,
            treeselect.TreeSelectModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            tabview.TabViewModule,
            sidebar.SidebarModule], exports: [i6.CommonModule,
            i12.AccordionModule,
            tabmenu.TabMenuModule,
            message.MessageModule,
            table.TableModule,
            i17.InputTextModule,
            calendar.CalendarModule,
            checkbox.CheckboxModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            i5.DropdownModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            card.CardModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            AlertModule,
            confirmdialog.ConfirmDialogModule,
            treeselect.TreeSelectModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            tabview.TabViewModule,
            sidebar.SidebarModule] });
    PrimengModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PrimengModule, imports: [[
                i6.CommonModule,
                i12.AccordionModule,
                tabmenu.TabMenuModule,
                message.MessageModule,
                table.TableModule,
                i17.InputTextModule,
                calendar.CalendarModule,
                checkbox.CheckboxModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button.ButtonModule,
                radiobutton.RadioButtonModule,
                i5.DropdownModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                card.CardModule,
                toast.ToastModule,
                ripple.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                multiselect.MultiSelectModule,
                inputswitch.InputSwitchModule,
                AlertModule,
                confirmdialog.ConfirmDialogModule,
                treeselect.TreeSelectModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                tabview.TabViewModule,
                sidebar.SidebarModule
            ], i6.CommonModule,
            i12.AccordionModule,
            tabmenu.TabMenuModule,
            message.MessageModule,
            table.TableModule,
            i17.InputTextModule,
            calendar.CalendarModule,
            checkbox.CheckboxModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            i5.DropdownModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            card.CardModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            AlertModule,
            confirmdialog.ConfirmDialogModule,
            treeselect.TreeSelectModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            tabview.TabViewModule,
            sidebar.SidebarModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PrimengModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i6.CommonModule,
                            i12.AccordionModule,
                            tabmenu.TabMenuModule,
                            message.MessageModule,
                            table.TableModule,
                            i17.InputTextModule,
                            calendar.CalendarModule,
                            checkbox.CheckboxModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
                            radiobutton.RadioButtonModule,
                            i5.DropdownModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            card.CardModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            AlertModule,
                            confirmdialog.ConfirmDialogModule,
                            treeselect.TreeSelectModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            tabview.TabViewModule,
                            sidebar.SidebarModule
                        ],
                        exports: [
                            i6.CommonModule,
                            i12.AccordionModule,
                            tabmenu.TabMenuModule,
                            message.MessageModule,
                            table.TableModule,
                            i17.InputTextModule,
                            calendar.CalendarModule,
                            checkbox.CheckboxModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
                            radiobutton.RadioButtonModule,
                            i5.DropdownModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            card.CardModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            AlertModule,
                            confirmdialog.ConfirmDialogModule,
                            treeselect.TreeSelectModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            tabview.TabViewModule,
                            sidebar.SidebarModule
                        ]
                    }]
            }] });

    var FilterPipe = /** @class */ (function () {
        function FilterPipe() {
        }
        FilterPipe.prototype.transform = function (value, input) {
            if (input) {
                return value.filter(function (val) { return val.toLowerCase().indexOf(input.toLowerCase()) >= 0; });
            }
            else {
                return value;
            }
        };
        return FilterPipe;
    }());
    FilterPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FilterPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    FilterPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FilterPipe, name: "FilterPipe" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: FilterPipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'FilterPipe'
                    }]
            }] });

    var MaskPipe = /** @class */ (function () {
        function MaskPipe() {
        }
        MaskPipe.prototype.transform = function (value, showSsnMask) {
            if (showSsnMask === true) {
                if (String(value).startsWith('*')) {
                    return '';
                }
                else if (String(value).match('^d{9}$')) {
                    return '***-**-' + String(value).substring(String(value).length - 4);
                }
                else {
                    return '';
                }
            }
            else {
                var cleaned = ('' + value).replace(/\D/g, '');
                var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
                if (match) {
                    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
                }
                else if (String(value).startsWith('*')) {
                    return '';
                }
                else if (String(value).match('^d{9}$')) {
                    return (String(value).substring(0, 3) + '-' + String(value).substring(3, 5) + '-' + String(value).substring(5, 9));
                }
                else {
                    return '';
                }
            }
        };
        return MaskPipe;
    }());
    MaskPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaskPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    MaskPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaskPipe, name: "ssnMask" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaskPipe, decorators: [{
                type: i0.Pipe,
                args: [{ name: 'ssnMask' }]
            }] });

    var SharedPipesModule = /** @class */ (function () {
        function SharedPipesModule() {
        }
        return SharedPipesModule;
    }());
    SharedPipesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SharedPipesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, declarations: [MaskPipe, FilterPipe], imports: [i6.CommonModule], exports: [MaskPipe, FilterPipe] });
    SharedPipesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, providers: [MaskPipe, FilterPipe], imports: [[i6.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: SharedPipesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i6.CommonModule],
                        declarations: [MaskPipe, FilterPipe],
                        exports: [MaskPipe, FilterPipe],
                        providers: [MaskPipe, FilterPipe]
                    }]
            }] });

    var GridListService = /** @class */ (function () {
        function GridListService() {
        }
        return GridListService;
    }());
    GridListService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    GridListService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }] });

    var GridListComponent = /** @class */ (function () {
        function GridListComponent(router, auth, localstorage) {
            this.router = router;
            this.auth = auth;
            this.localstorage = localstorage;
            this.dataList = [];
            this.currentPage = new i0.EventEmitter();
            this.pageIndex = new i0.EventEmitter();
            this.currentSize = new i0.EventEmitter();
            this.editTableRow = new i0.EventEmitter();
            this.viewTableRow = new i0.EventEmitter();
            this.deleteTableRow = new i0.EventEmitter();
            this.openExternalLink = new i0.EventEmitter();
            this.openpopupLink = new i0.EventEmitter();
            this.routeTo = new i0.EventEmitter();
            this.openPopup = new i0.EventEmitter();
            this.duplicateRow = new i0.EventEmitter();
            this.sortOrder = new i0.EventEmitter();
            this.filterSearchValue = new i0.EventEmitter();
            this.filterBuilderPopup = new i0.EventEmitter();
            this.filterPanel = new i0.EventEmitter();
            this.multipleFilterValues = new i0.EventEmitter();
            this.downloadTableRow = new i0.EventEmitter();
            this.toggleRow = new i0.EventEmitter();
            this.outComeTableRow = new i0.EventEmitter();
            this.downloadFormResponseFiles = new i0.EventEmitter();
            this.deleteFormResponseFiles = new i0.EventEmitter();
            this.rowSelection = new i0.EventEmitter();
            this.navigate = new i0.EventEmitter();
            this.multipleFilterValueToAPI = new i0.EventEmitter();
            this.selectedRowsData = new i0.EventEmitter();
            this.contentReady = function (e) {
                var reorderColumns = e.component.instance().getVisibleColumns();
                console.log(reorderColumns, 'reorderColumns');
            };
            /**
             * initiating the grid list
             */
            this.loadGWithParam();
            /**
             * fetching login details from local storage
             */
            this.user = this.localstorage.getObj('user');
            this.displayMode = 'compact';
            this.currentFilter = 'auto';
        }
        Object.defineProperty(GridListComponent.prototype, "pageSize", {
            set: function (value) {
                if (value) {
                    this.currentPageSize = value;
                }
                else {
                    this.currentPageSize = 20;
                }
            },
            enumerable: false,
            configurable: true
        });
        GridListComponent.prototype.ngOnInit = function () {
            this.rUrl = this.router.url.split('/');
            this.tempColumns = this.columns;
            if (this.columns && this.columns.gridConfigFormArray) {
                this.columnHeader = this.columns.gridConfigFormArray.map(function (column) { return column.header; });
                this.columns = this.columns.gridConfigFormArray;
            }
            else {
                this.columnHeader = this.columns.map(function (column) { return column.header; });
            }
            this.popupPosition = { of: window, at: 'top', my: 'top', offset: { y: 10 } };
            this.filterValue = [];
            this.customOperations = [];
        };
        /**
         * re-render the grid when input data is changed.
         */
        GridListComponent.prototype.ngOnChanges = function () {
            this.loadGWithParam();
        };
        /**
         * Rendering data grid condition wise that login user is admin or not
         */
        GridListComponent.prototype.loadGWithParam = function () {
            if (!this.auth.isAdmin()) {
                this.loadGrid({ value: !this.Organization ? this.auth.getOrgID() : this.Organization }, false);
            }
            else {
                this.loadGrid({ value: this.Organization ? this.Organization : 'Select-ALL' }, false);
            }
        };
        GridListComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            /**
             * Datagrid even listener we can customize column event
             */
            this.dataGrid.onRowClick.subscribe(function (row) {
                _this.selectedRowsData.emit(row);
            });
            this.dataGrid.onOptionChanged.subscribe(function (e) {
                if (e.name === 'columns' && e.fullName.endsWith('filterValues')) {
                    var colIndex = Number(e.fullName
                        .match(/\[\d+\]/)[0]
                        .replace('[', '')
                        .replace(']', ''));
                    e.component.columnOption(colIndex, 'filterValues');
                    _this.multipleFilterValues.emit(e);
                }
                // Search
                if (e.name === 'columns' && e.fullName.endsWith('filterValue')) {
                    console.log(e);
                    _this.filterSearchValue.emit(e);
                }
                // filter Builder Popup
                if (e.name === 'filterBuilderPopup') {
                    console.log('filterBuilderPopup');
                    console.log(e);
                    _this.filterBuilderPopup.emit(e);
                }
                // filter Panel - enable or disable
                if (e.name === 'filterPanel') {
                    console.log(e.value);
                    _this.filterPanel.emit(e);
                }
                // Sorting
                if (e.name === 'columns' && e.fullName.endsWith('sortOrder')) {
                    _this.sortOrder.emit(e);
                }
                // Paging
                if (e.name === 'paging') {
                    _this.currentPage.emit(e.value);
                }
                // pageIndex
                if (e.fullName === 'paging.pageIndex') {
                    _this.pageIndex.emit(e.value);
                }
                // pageSize
                if (e.fullName === 'paging.pageSize') {
                    _this.currentSize.emit(e.value);
                }
            });
        };
        /**
         * Generating data grid and restructuring data for Developer grid
         * @param orgID origination details
         * @param load optional boolean is for checking data should load organization respective or all
         */
        GridListComponent.prototype.loadGrid = function (orgID, load) {
            var _this = this;
            if (load === void 0) { load = true; }
            var _a;
            this.Organization = orgID.value;
            if (load) {
                this.currentPage.emit(orgID.value === 'Select-ALL' ? 'all' : orgID.value);
            }
            if (((_a = this.dataList) === null || _a === void 0 ? void 0 : _a.length) && this.rUrl && this.rUrl[2] === 'view-dashboard') {
                this.dUrl = 'view-dashboard/dashboard';
                this.router.navigateByUrl("pages/" + this.dUrl + "/" + this.dataList[0]['id']);
            }
            this.customStore = new CustomStore__default["default"]({
                load: function (_opts) {
                    _this.multipleFilterValueToAPI.emit(_opts.filter);
                    return Promise.resolve(_this.dataList);
                },
                totalCount: function (_opts) {
                    return Promise.resolve(_this.totalCount);
                }
            });
        };
        GridListComponent.prototype.getRouter = function (data) {
            this.routeTo.emit(data);
        };
        GridListComponent.prototype.navigateTo = function (data) {
            this.navigate.emit(data);
        };
        GridListComponent.prototype.popup = function (data) {
            this.openPopup.emit(data);
        };
        GridListComponent.prototype.downloadData = function (evt) {
            this.downloadTableRow.emit(evt);
        };
        GridListComponent.prototype.editData = function (evt) {
            this.editTableRow.emit(evt);
        };
        GridListComponent.prototype.editDataMyApplciation = function (evt) {
            this.editTableRow.emit(evt);
        };
        GridListComponent.prototype.editAppeal = function (evt) {
            this.editTableRow.emit(evt);
        };
        GridListComponent.prototype.onSelectionChanged = function (evt) {
            this.rowSelection.emit(evt);
        };
        GridListComponent.prototype.viewData = function (evt) {
            this.viewTableRow.emit(evt);
        };
        GridListComponent.prototype.deleteData = function (evt) {
            this.deleteTableRow.emit(evt);
        };
        GridListComponent.prototype.duplicateDate = function (evt) {
            this.duplicateRow.emit(evt);
        };
        GridListComponent.prototype.openLink = function (evt) {
            this.openExternalLink.emit(evt);
        };
        GridListComponent.prototype.openPopupLink = function (evt) {
            this.openpopupLink.emit(evt);
        };
        GridListComponent.prototype.activeUser = function (evt) {
            this.toggleRow.emit(evt);
        };
        GridListComponent.prototype.getVisabilityByChoosableProp = function (chooser, visible) {
            if (chooser) {
                return visible;
            }
            else {
                return true;
            }
        };
        GridListComponent.prototype.getSortOrder = function (defaultSortColumn, defaultSortType, columnDef) {
            if (defaultSortColumn && defaultSortType) {
                return defaultSortColumn === columnDef ? defaultSortType : '';
            }
            return '';
        };
        GridListComponent.prototype.outComeData = function (evt) {
            this.outComeTableRow.emit(evt);
        };
        GridListComponent.prototype.downloadFormResponseAttachments = function (evt) {
            this.downloadFormResponseFiles.emit(evt);
        };
        GridListComponent.prototype.deleteFormResponseAttachments = function (evt) {
            this.deleteFormResponseFiles.emit(evt);
        };
        GridListComponent.prototype.onRowPrepared = function (e) {
            if (e.rowType == 'data' && e.data.isnew) {
                var element = e.rowElement;
                element.classList.add('isnew');
            }
        };
        GridListComponent.prototype.onCellPrepared = function (e) {
            var _a, _b;
            if (e.rowType == 'data') {
                if (e.column.dataField === 'notice') {
                    var element = e.cellElement;
                    e.cellElement.innerHTML = '';
                    var livetext = document.createElement('div');
                    this.checkOncellprepare(e, livetext);
                    element.appendChild(livetext);
                }
                else if (e.column.dataField === 'notificationEventChannels') {
                    var element = e.cellElement;
                    e.cellElement.innerHTML = '';
                    var livetext = document.createElement('div');
                    var ele_1 = '';
                    e.data.notificationEventChannels.map(function (t) {
                        if (t.templatename) {
                            ele_1 += "<label>" + t.templatename + "&nbsp;(<b>" + t.templatechannel + "</b>)</label>,";
                        }
                    });
                    livetext.innerHTML = ele_1;
                    element.appendChild(livetext);
                }
                else if (e.column.dataField === 'link') {
                    var element = e.cellElement;
                    e.cellElement.innerHTML = '';
                    var livetext = document.createElement('div');
                    livetext.innerHTML = "<img  src=\"" + (e.data.link ? (_b = (_a = e.data) === null || _a === void 0 ? void 0 : _a.link) === null || _b === void 0 ? void 0 : _b.split('?')[0] : '') + "\"style=\"max-width: 45px; cursor: pointer\"/>";
                    element.appendChild(livetext);
                }
                this.checkCellprepare(e);
            }
        };
        GridListComponent.prototype.checkCellprepare = function (e) {
            var _a, _b, _c, _d;
            if (e.column.dataField === 'status' && e.data['tabname'] === 'RECORDS' && e.data['status'] === 'NO MATCH') {
                var element = e.cellElement;
                var livetext = document.createElement('span');
                livetext.classList.add('ml-2');
                livetext.innerHTML = "<em class=\"fa fa-info-circle\" aria-hidden=\"true\" title=\"" + ((_b = (_a = e.data) === null || _a === void 0 ? void 0 : _a.execution_error) === null || _b === void 0 ? void 0 : _b.error) + "\" ></em>";
                if ((_d = (_c = e.data) === null || _c === void 0 ? void 0 : _c.execution_error) === null || _d === void 0 ? void 0 : _d.error) {
                    element.appendChild(livetext);
                }
            }
        };
        GridListComponent.prototype.checkOncellprepare = function (e, livetext) {
            if (e.value !== 'No Data Found') {
                livetext.innerHTML = "<a class=\"btn-link loginLabel\" href=\"" + e.value + "\" target=\"_blank\">Click Here<a>";
            }
            else {
                livetext.innerHTML = 'No Data Found';
            }
        };
        GridListComponent.prototype.onExporting = function (e) {
            var pageName = this.localstorage.getObj('FILE EXPORT NAME');
            var currentDate = moment__namespace().format('YYYY-MM-DD');
            var fileName;
            if (pageName) {
                fileName = pageName + " Versions " + currentDate;
            }
            else if (this.exportPageName) {
                fileName = this.exportPageName + "-" + currentDate;
            }
            else {
                fileName = "Dynamic-Pages " + currentDate;
            }
            if (e.format === 'pdf') {
                var doc_1 = new jsPDF__namespace.jsPDF();
                pdf_exporter.exportDataGrid({
                    jsPDFDocument: doc_1,
                    component: e.component
                }).then(function () {
                    doc_1.save(fileName + ".pdf");
                });
            }
            else if (e.format === 'xlsx') {
                e.fileName = fileName;
            }
            else if (e.format === 'csv') {
                var workbook_1 = new ExcelJS__namespace.Workbook();
                var worksheet = workbook_1.addWorksheet('Main sheet');
                excel_exporter.exportDataGrid({
                    component: e.component,
                    worksheet: worksheet
                }).then(function () {
                    workbook_1.csv.writeBuffer().then(function (buffer) {
                        fileSaverEs.saveAs(new Blob([buffer], { type: 'application/octet-stream' }), fileName + ".csv");
                    });
                });
                e.cancel = true;
            }
        };
        GridListComponent.prototype.customizeHeaderFilterData = function (options) {
            options.dataSource.postProcess = function (results) {
                results.map(function (x) {
                    x.text = x[options.dataSource.group[0].selector];
                    x.value = [options.dataSource.group[0].selector, '=', x[options.dataSource.group[0].selector]];
                    return x;
                });
                console.log(results, 'update customizeHeaderFilterData');
                return results;
            };
        };
        return GridListComponent;
    }());
    GridListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListComponent, deps: [{ token: i3__namespace.Router }, { token: AuthService }, { token: LocalService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    GridListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: GridListComponent, selector: "app-grid-list", inputs: { dataList: "dataList", dataSource: "dataSource", columns: "columns", updateGrid: "updateGrid", totalCount: "totalCount", page: "page", isShow: "isShow", remoteOperations: "remoteOperations", enableExport: "enableExport", showHeaderFilter: "showHeaderFilter", exportPageName: "exportPageName", pageSize: "pageSize" }, outputs: { currentPage: "currentPage", pageIndex: "pageIndex", currentSize: "currentSize", editTableRow: "editTableRow", viewTableRow: "viewTableRow", deleteTableRow: "deleteTableRow", openExternalLink: "openExternalLink", openpopupLink: "openpopupLink", routeTo: "routeTo", openPopup: "openPopup", duplicateRow: "duplicateRow", sortOrder: "sortOrder", filterSearchValue: "filterSearchValue", filterBuilderPopup: "filterBuilderPopup", filterPanel: "filterPanel", multipleFilterValues: "multipleFilterValues", downloadTableRow: "downloadTableRow", toggleRow: "toggleRow", outComeTableRow: "outComeTableRow", downloadFormResponseFiles: "downloadFormResponseFiles", deleteFormResponseFiles: "deleteFormResponseFiles", rowSelection: "rowSelection", navigate: "navigate", multipleFilterValueToAPI: "multipleFilterValueToAPI", selectedRowsData: "selectedRowsData" }, providers: [GridListService], viewQueries: [{ propertyName: "dataGrid", first: true, predicate: i4$1.DxDataGridComponent, descendants: true }], usesOnChanges: true, ngImport: i0__namespace, template: "<dx-data-grid\r\n  id=\"gridContainer\"\r\n  [dataSource]=\"customStore\"\r\n  [allowColumnReordering]=\"true\"\r\n  [allowColumnResizing]=\"true\"\r\n  [columnAutoWidth]=\"true\"\r\n  [showBorders]=\"true\"\r\n  [rowAlternationEnabled]=\"updateGrid?.rowSelection ? false : true\"\r\n  [showColumnLines]=\"true\"\r\n  [showRowLines]=\"true\"\r\n  [filterValue]=\"filterValue\"\r\n  [remoteOperations]=\"remoteOperations ? remoteOperations : false\"\r\n  [hoverStateEnabled]=\"updateGrid?.rowSelection\"\r\n  (onSelectionChanged)=\"onSelectionChanged($event)\"\r\n  (onRowPrepared)=\"onRowPrepared($event)\"\r\n  (onCellPrepared)=\"onCellPrepared($event)\"\r\n  (onContentReady)=\"contentReady($event)\"\r\n  (onExporting)=\"onExporting($event)\">\r\n  <dxo-load-panel [enabled]=\"false\"></dxo-load-panel>\r\n  <dxo-filter-panel [visible]=\"false\"></dxo-filter-panel>\r\n  <dxo-paging [pageSize]=\"currentPageSize\"></dxo-paging>\r\n  <dxo-pager\r\n    [visible]=\"true\"\r\n    [allowedPageSizes]=\"[10, 25, 50, 100]\"\r\n    [displayMode]=\"displayMode\"\r\n    [showPageSizeSelector]=\"true\"\r\n    [showInfo]=\"true\"\r\n    [showNavigationButtons]=\"true\"></dxo-pager>\r\n  <!--end pagination-->\r\n\r\n  <dxo-export [enabled]=\"enableExport\" [formats]=\"['xlsx', 'csv']\"></dxo-export>\r\n\r\n  <dxo-filter-builder [customOperations]=\"customOperations\"> </dxo-filter-builder>\r\n  <dxo-filter-builder-popup [position]=\"popupPosition\"> </dxo-filter-builder-popup>\r\n\r\n  <dxo-filter-row [visible]=\"showHeaderFilter\" [applyFilter]=\"currentFilter\"></dxo-filter-row>\r\n  <dxo-header-filter [visible]=\"true\" [allowSearch]=\"false\"></dxo-header-filter>\r\n  <dxo-selection mode=\"single\" *ngIf=\"updateGrid?.rowSelection\"></dxo-selection>\r\n  <ng-container *ngFor=\"let column of columns; let i = index\">\r\n    <ng-container *ngIf=\"column?.hide !== true\">\r\n      <ng-container *ngIf=\"column?.link; else noLink\">\r\n        <dxi-column\r\n          [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n          [allowHiding]=\"!column?.Choosable\"\r\n          [fixed]=\"column?.fixed\"\r\n          [dataField]=\"column?.columnDef\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [caption]=\"column?.header\"\r\n          [allowFiltering]=\"column?.filter\"\r\n          cellTemplate=\"cellTemplate\"\r\n          [allowSorting]=\"column?.sort\"\r\n          [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n      </ng-container>\r\n      <ng-template #noLink>\r\n        <ng-container *ngIf=\"column?.icon; else noIcon\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            cellTemplate=\"iconTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noIcon>\r\n        <ng-container *ngIf=\"column?.dateFormat; else noDate\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy, HH:mm\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext === 'MDY'\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            format=\"MM/dd/yyyy\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            *ngIf=\"column?.datetext !== 'MDY' && column?.datetext !== 'MMDD24'\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            dataType=\"date\"\r\n            [format]=\"column?.removeTime ? 'MM/dd/yyyy' : 'MM/dd/yyyy, hh:mm a'\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n      <ng-template #noDate>\r\n        <dxi-column\r\n          [dataField]=\"column.columnDef\"\r\n          [caption]=\"column.header\"\r\n          [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n          [allowFiltering]=\"column.filter\">\r\n          <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n        </dxi-column>\r\n        <ng-container *ngIf=\"column?.header.toLowerCase().trim() === 'status';\">\r\n          <dxi-column\r\n            [visible]=\"getVisabilityByChoosableProp(updateGrid?.chooser, column?.visible)\"\r\n            [allowHiding]=\"!column?.Choosable\"\r\n            [fixed]=\"column?.fixed\"\r\n            [dataField]=\"column?.columnDef\"\r\n            [filterOperations]=\"column?.filterOperations ? column?.filterOperations : ''\"\r\n            [caption]=\"column?.header\"\r\n            [allowFiltering]=\"column?.filter\"\r\n            cellTemplate=\"statusTemplate\"\r\n            [allowSorting]=\"column?.sort\"\r\n            [sortOrder]=\"getSortOrder(updateGrid?.defaultSortColumn, updateGrid?.defaultSortType, column?.columnDef)\">\r\n            <dxo-header-filter [dataSource]=\"customizeHeaderFilterData\"></dxo-header-filter>\r\n          </dxi-column>\r\n        </ng-container>\r\n      </ng-template>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container\r\n    *ngIf=\"\r\n      updateGrid &&\r\n      (updateGrid?.externalLink ||\r\n        updateGrid?.openPopup ||\r\n        updateGrid?.edit ||\r\n        updateGrid?.editMyApplication ||\r\n        updateGrid?.editAppeal ||\r\n        updateGrid?.editBilling ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.delete ||\r\n        updateGrid?.download ||\r\n        updateGrid?.showDownload ||\r\n        updateGrid?.showDelete ||\r\n        updateGrid?.pdf)\r\n    \">\r\n    <dxi-column\r\n      [width]=\"100\"\r\n      [allowFiltering]=\"false\"\r\n      [allowSorting]=\"false\"\r\n      caption=\"Action\"\r\n      cellTemplate=\"editCellTemplate\"></dxi-column>\r\n    <!-- Action label added for admin grid -->\r\n\r\n    <div *dxTemplate=\"let d of 'editCellTemplate'\">\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.externalLink\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openLink(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Appeal\"\r\n        *ngIf=\"updateGrid?.appeal\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Appeal\"\r\n        (click)=\"navigateTo(d)\">\r\n        <em class=\"fa fa-external-link\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDownload && !updateGrid?.isNewlyUploaded\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download File\"\r\n        (click)=\"downloadFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em> </a\r\n      >&nbsp;&nbsp;\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.showDelete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete File\"\r\n        (click)=\"deleteFormResponseAttachments(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.openPopup\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Open\"\r\n        (click)=\"openPopupLink(d)\">\r\n        <em class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.duplicate\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Copy\"\r\n        (click)=\"duplicateDate(d)\">\r\n        <em class=\"fa fa-copy\" aria-hidden=\"true\" fieldKey=\"PAG_DES_GRID_LIST_COPY\"\r\n          ><span class=\"sr-only\">Copy</span></em\r\n        >\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.download\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"Download\"\r\n        (click)=\"downloadData(d)\">\r\n        <em class=\"fa fa-download\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.edit && !d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editData(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editMyApplication && d?.data?.application_status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editDataMyApplciation(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editAppeal && d?.data?.status === 'In Progress'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"Edit\"\r\n        *ngIf=\"updateGrid?.editBilling && d?.data?.status === 'Waiting for approval'\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"Edit\"\r\n        (click)=\"editAppeal(d)\">\r\n        <em class=\"fa fa-pencil\" title=\"Edit\" aria-hidden=\"true\" style=\"font-size: 13px\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"View\"\r\n        *ngIf=\"updateGrid?.view\"\r\n        class=\"no-bg mr-2\"\r\n        matTooltip=\"View\"\r\n        (click)=\"viewData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        title=\"delete\"\r\n        *ngIf=\"updateGrid?.delete\"\r\n        class=\"no-bg text-danger\"\r\n        matTooltip=\"Delete\"\r\n        (click)=\"deleteData(d)\">\r\n        <em class=\"fa fa-trash\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a\r\n        href=\"javascript:void(0)\"\r\n        *ngIf=\"updateGrid?.outcome && d.data?.extendedProps?.outcome\"\r\n        class=\"no-bg\"\r\n        matTooltip=\"View\"\r\n        (click)=\"outComeData(d)\">\r\n        <em class=\"fa fa-eye\" title=\"View\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <a href=\"javascript:void(0)\" title=\"pdf\" *ngIf=\"updateGrid?.pdf\" class=\"no-bg\" matTooltip=\"PDF\">\r\n        <em class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></em>\r\n      </a>\r\n      <button\r\n        *ngIf=\"updateGrid?.toggle\"\r\n        class=\"no-bg\"\r\n        [matTooltip]=\"d.data.isactive === true ? 'Deactivate' : 'Activate'\"\r\n        (click)=\"activeUser(d)\">\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === true\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.toggle && d.data.isactive === false\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n      <button *ngIf=\"updateGrid?.activeordeactive\" class=\"no-bg\" (click)=\"deleteData(d)\">\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 1\" class=\"fa fa-toggle-on\"></em>\r\n        <em *ngIf=\"updateGrid?.activeordeactive && d.data.activeflag === 0\" class=\"fa fa-toggle-off\"></em>\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <div *dxTemplate=\"let d of 'cellTemplate'\">\r\n    <a href=\"javascript:void(0)\" *ngIf=\"d.value && d.value !== 'null'\" (click)=\"getRouter(d)\">{{\r\n      d.value !== 'null' ? d.value : ''\r\n    }}</a>\r\n  </div>\r\n  <div *dxTemplate=\"let d of 'iconTemplate'\">\r\n    <em class=\"fa fa-book\" (click)=\"popup(d.value)\" aria-hidden=\"true\"></em>\r\n  </div>\r\n</dx-data-grid>\r\n<!-- <ng-template #callNarrativePopup>\r\n  <h2 matDialogTitle>Narrative</h2>\r\n  <div [innerHTML]=\"narrativeData\"></div>\r\n  <div class=\"text-right\">\r\n    <button mat-button (click)=\"closeNarrativePopup()\" class=\"btn btn-cancel mr-2\">Close</button>\r\n  </div>\r\n</ng-template> -->\r\n", styles: [".split-page{outline:3px;margin:5px}.searchlist{min-width:620px!important;height:280px!important}.searchlist table,.searchlist table tr th,.searchlist table tr td{padding:0}.dx-datagrid .dx-data-row>td.bullet{padding-top:0;padding-bottom:0}.dx-datagrid .dx-row>tr>td{padding:0!important}.dx-datagrid .dx-row>td{padding:1px 5px!important;vertical-align:middle!important;text-align:center!important}.org-title{margin:0;font-size:12px!important;color:#0079fe}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew{background-color:#f2f2f2}:host ::ng-deep .dx-row.dx-data-row.dx-row-lines.dx-column-lines.isnew td{font-weight:bold}\n"], components: [{ type: i4__namespace$1.DxDataGridComponent, selector: "dx-data-grid", inputs: ["accessKey", "activeStateEnabled", "allowColumnReordering", "allowColumnResizing", "autoNavigateToFocusedRow", "cacheEnabled", "cellHintEnabled", "columnAutoWidth", "columnChooser", "columnFixing", "columnHidingEnabled", "columnMinWidth", "columnResizingMode", "columns", "columnWidth", "customizeColumns", "customizeExportData", "dataRowTemplate", "dataSource", "dateSerializationFormat", "disabled", "editing", "elementAttr", "errorRowEnabled", "export", "filterBuilder", "filterBuilderPopup", "filterPanel", "filterRow", "filterSyncEnabled", "filterValue", "focusedColumnIndex", "focusedRowEnabled", "focusedRowIndex", "focusedRowKey", "focusStateEnabled", "grouping", "groupPanel", "headerFilter", "height", "highlightChanges", "hint", "hoverStateEnabled", "keyboardNavigation", "keyExpr", "loadPanel", "masterDetail", "noDataText", "pager", "paging", "remoteOperations", "renderAsync", "repaintChangesOnly", "rowAlternationEnabled", "rowDragging", "rowTemplate", "rtlEnabled", "scrolling", "searchPanel", "selectedRowKeys", "selection", "selectionFilter", "showBorders", "showColumnHeaders", "showColumnLines", "showRowLines", "sortByGroupSummaryInfo", "sorting", "stateStoring", "summary", "tabIndex", "toolbar", "twoWayBindingEnabled", "visible", "width", "wordWrapEnabled"], outputs: ["onAdaptiveDetailRowPreparing", "onCellClick", "onCellDblClick", "onCellHoverChanged", "onCellPrepared", "onContentReady", "onContextMenuPreparing", "onDataErrorOccurred", "onDisposing", "onEditCanceled", "onEditCanceling", "onEditingStart", "onEditorPrepared", "onEditorPreparing", "onExported", "onExporting", "onFileSaving", "onFocusedCellChanged", "onFocusedCellChanging", "onFocusedRowChanged", "onFocusedRowChanging", "onInitialized", "onInitNewRow", "onKeyDown", "onOptionChanged", "onRowClick", "onRowCollapsed", "onRowCollapsing", "onRowDblClick", "onRowExpanded", "onRowExpanding", "onRowInserted", "onRowInserting", "onRowPrepared", "onRowRemoved", "onRowRemoving", "onRowUpdated", "onRowUpdating", "onRowValidating", "onSaved", "onSaving", "onSelectionChanged", "onToolbarPreparing", "accessKeyChange", "activeStateEnabledChange", "allowColumnReorderingChange", "allowColumnResizingChange", "autoNavigateToFocusedRowChange", "cacheEnabledChange", "cellHintEnabledChange", "columnAutoWidthChange", "columnChooserChange", "columnFixingChange", "columnHidingEnabledChange", "columnMinWidthChange", "columnResizingModeChange", "columnsChange", "columnWidthChange", "customizeColumnsChange", "customizeExportDataChange", "dataRowTemplateChange", "dataSourceChange", "dateSerializationFormatChange", "disabledChange", "editingChange", "elementAttrChange", "errorRowEnabledChange", "exportChange", "filterBuilderChange", "filterBuilderPopupChange", "filterPanelChange", "filterRowChange", "filterSyncEnabledChange", "filterValueChange", "focusedColumnIndexChange", "focusedRowEnabledChange", "focusedRowIndexChange", "focusedRowKeyChange", "focusStateEnabledChange", "groupingChange", "groupPanelChange", "headerFilterChange", "heightChange", "highlightChangesChange", "hintChange", "hoverStateEnabledChange", "keyboardNavigationChange", "keyExprChange", "loadPanelChange", "masterDetailChange", "noDataTextChange", "pagerChange", "pagingChange", "remoteOperationsChange", "renderAsyncChange", "repaintChangesOnlyChange", "rowAlternationEnabledChange", "rowDraggingChange", "rowTemplateChange", "rtlEnabledChange", "scrollingChange", "searchPanelChange", "selectedRowKeysChange", "selectionChange", "selectionFilterChange", "showBordersChange", "showColumnHeadersChange", "showColumnLinesChange", "showRowLinesChange", "sortByGroupSummaryInfoChange", "sortingChange", "stateStoringChange", "summaryChange", "tabIndexChange", "toolbarChange", "twoWayBindingEnabledChange", "visibleChange", "widthChange", "wordWrapEnabledChange"] }, { type: i5__namespace$1.DxoLoadPanelComponent, selector: "dxo-load-panel", inputs: ["enabled", "height", "indicatorSrc", "shading", "shadingColor", "showIndicator", "showPane", "text", "width"] }, { type: i5__namespace$1.DxoFilterPanelComponent, selector: "dxo-filter-panel", inputs: ["customizeText", "filterEnabled", "texts", "visible"], outputs: ["filterEnabledChange"] }, { type: i5__namespace$1.DxoPagingComponent, selector: "dxo-paging", inputs: ["enabled", "pageIndex", "pageSize"], outputs: ["pageIndexChange", "pageSizeChange"] }, { type: i5__namespace$1.DxoPagerComponent, selector: "dxo-pager", inputs: ["allowedPageSizes", "displayMode", "infoText", "showInfo", "showNavigationButtons", "showPageSizeSelector", "visible"] }, { type: i5__namespace$1.DxoExportComponent, selector: "dxo-export", inputs: ["backgroundColor", "enabled", "fileName", "formats", "margin", "printingEnabled", "proxyUrl", "svgToCanvas", "allowExportSelectedData", "customizeExcelCell", "excelFilterEnabled", "excelWrapTextEnabled", "ignoreExcelErrors", "texts"] }, { type: i5__namespace$1.DxoFilterBuilderComponent, selector: "dxo-filter-builder", inputs: ["accessKey", "activeStateEnabled", "allowHierarchicalFields", "customOperations", "disabled", "elementAttr", "fields", "filterOperationDescriptions", "focusStateEnabled", "groupOperationDescriptions", "groupOperations", "height", "hint", "hoverStateEnabled", "maxGroupLevel", "onContentReady", "onDisposing", "onEditorPrepared", "onEditorPreparing", "onInitialized", "onOptionChanged", "onValueChanged", "rtlEnabled", "tabIndex", "value", "visible", "width"], outputs: ["valueChange"] }, { type: i5__namespace$1.DxoFilterBuilderPopupComponent, selector: "dxo-filter-builder-popup", inputs: ["accessKey", "animation", "closeOnOutsideClick", "container", "contentTemplate", "copyRootClassesToWrapper", "deferRendering", "disabled", "dragAndResizeArea", "dragEnabled", "dragOutsideBoundary", "elementAttr", "focusStateEnabled", "fullScreen", "height", "hideOnOutsideClick", "hideOnParentScroll", "hint", "hoverStateEnabled", "maxHeight", "maxWidth", "minHeight", "minWidth", "onContentReady", "onDisposing", "onHidden", "onHiding", "onInitialized", "onOptionChanged", "onResize", "onResizeEnd", "onResizeStart", "onShowing", "onShown", "onTitleRendered", "position", "resizeEnabled", "restorePosition", "rtlEnabled", "shading", "shadingColor", "showCloseButton", "showTitle", "tabIndex", "title", "titleTemplate", "toolbarItems", "visible", "width", "wrapperAttr"], outputs: ["heightChange", "positionChange", "visibleChange", "widthChange"] }, { type: i5__namespace$1.DxoFilterRowComponent, selector: "dxo-filter-row", inputs: ["applyFilter", "applyFilterText", "betweenEndText", "betweenStartText", "operationDescriptions", "resetOperationText", "showAllText", "showOperationChooser", "visible"] }, { type: i5__namespace$1.DxoHeaderFilterComponent, selector: "dxo-header-filter", inputs: ["allowSearch", "dataSource", "groupInterval", "height", "searchMode", "width", "searchTimeout", "texts", "visible", "showRelevantValues"] }, { type: i5__namespace$1.DxoSelectionComponent, selector: "dxo-selection", inputs: ["allowSelectAll", "deferred", "mode", "selectAllMode", "showCheckBoxesMode", "recursive"] }, { type: i5__namespace$1.DxiColumnComponent, selector: "dxi-column", inputs: ["alignment", "allowEditing", "allowExporting", "allowFiltering", "allowFixing", "allowGrouping", "allowHeaderFiltering", "allowHiding", "allowReordering", "allowResizing", "allowSearch", "allowSorting", "autoExpandGroup", "buttons", "calculateCellValue", "calculateDisplayValue", "calculateFilterExpression", "calculateGroupValue", "calculateSortValue", "caption", "cellTemplate", "columns", "cssClass", "customizeText", "dataField", "dataType", "editCellTemplate", "editorOptions", "encodeHtml", "falseText", "filterOperations", "filterType", "filterValue", "filterValues", "fixed", "fixedPosition", "format", "formItem", "groupCellTemplate", "groupIndex", "headerCellTemplate", "headerFilter", "hidingPriority", "isBand", "lookup", "minWidth", "name", "ownerBand", "renderAsync", "selectedFilterOperation", "setCellValue", "showEditorAlways", "showInColumnChooser", "showWhenGrouped", "sortIndex", "sortingMethod", "sortOrder", "trueText", "type", "validationRules", "visible", "visibleIndex", "width"], outputs: ["filterValueChange", "filterValuesChange", "groupIndexChange", "selectedFilterOperationChange", "sortIndexChange", "sortOrderChange", "visibleChange", "visibleIndexChange"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7__namespace.DxTemplateDirective, selector: "[dxTemplate]", inputs: ["dxTemplateOf"] }, { type: i8__namespace$2.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltipPosition", "matTooltipDisabled", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-grid-list',
                        providers: [GridListService],
                        templateUrl: './grid-list.component.html',
                        styleUrls: ['./grid-list.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i3__namespace.Router }, { type: AuthService }, { type: LocalService }]; }, propDecorators: { dataGrid: [{
                    type: i0.ViewChild,
                    args: [i4$1.DxDataGridComponent, { static: false }]
                }], dataList: [{
                    type: i0.Input
                }], dataSource: [{
                    type: i0.Input
                }], columns: [{
                    type: i0.Input
                }], updateGrid: [{
                    type: i0.Input
                }], totalCount: [{
                    type: i0.Input
                }], page: [{
                    type: i0.Input
                }], isShow: [{
                    type: i0.Input
                }], remoteOperations: [{
                    type: i0.Input
                }], enableExport: [{
                    type: i0.Input
                }], showHeaderFilter: [{
                    type: i0.Input
                }], exportPageName: [{
                    type: i0.Input
                }], pageSize: [{
                    type: i0.Input
                }], currentPage: [{
                    type: i0.Output
                }], pageIndex: [{
                    type: i0.Output
                }], currentSize: [{
                    type: i0.Output
                }], editTableRow: [{
                    type: i0.Output
                }], viewTableRow: [{
                    type: i0.Output
                }], deleteTableRow: [{
                    type: i0.Output
                }], openExternalLink: [{
                    type: i0.Output
                }], openpopupLink: [{
                    type: i0.Output
                }], routeTo: [{
                    type: i0.Output
                }], openPopup: [{
                    type: i0.Output
                }], duplicateRow: [{
                    type: i0.Output
                }], sortOrder: [{
                    type: i0.Output
                }], filterSearchValue: [{
                    type: i0.Output
                }], filterBuilderPopup: [{
                    type: i0.Output
                }], filterPanel: [{
                    type: i0.Output
                }], multipleFilterValues: [{
                    type: i0.Output
                }], downloadTableRow: [{
                    type: i0.Output
                }], toggleRow: [{
                    type: i0.Output
                }], outComeTableRow: [{
                    type: i0.Output
                }], downloadFormResponseFiles: [{
                    type: i0.Output
                }], deleteFormResponseFiles: [{
                    type: i0.Output
                }], rowSelection: [{
                    type: i0.Output
                }], navigate: [{
                    type: i0.Output
                }], multipleFilterValueToAPI: [{
                    type: i0.Output
                }], selectedRowsData: [{
                    type: i0.Output
                }] } });

    var MaterialUIModule = /** @class */ (function () {
        function MaterialUIModule() {
        }
        return MaterialUIModule;
    }());
    MaterialUIModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MaterialUIModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, imports: [i6.CommonModule,
            bottomSheet.MatBottomSheetModule,
            button$1.MatButtonModule,
            i6$1.MatCardModule,
            datepicker.MatDatepickerModule,
            icon.MatIconModule,
            input.MatInputModule,
            i5$2.MatNativeDateModule,
            menu.MatMenuModule,
            i4.MatRadioModule,
            i4$2.MatSelectModule,
            stepper.MatStepperModule,
            i8$2.MatTooltipModule,
            dialog$1.MatDialogModule,
            tabs.MatTabsModule,
            checkbox$1.MatCheckboxModule,
            slideToggle.MatSlideToggleModule,
            sort.MatSortModule,
            table$1.MatTableModule,
            i3$1.MatFormFieldModule], exports: [i6.CommonModule,
            bottomSheet.MatBottomSheetModule,
            button$1.MatButtonModule,
            i6$1.MatCardModule,
            datepicker.MatDatepickerModule,
            icon.MatIconModule,
            input.MatInputModule,
            i5$2.MatNativeDateModule,
            menu.MatMenuModule,
            i4.MatRadioModule,
            i4$2.MatSelectModule,
            stepper.MatStepperModule,
            i8$2.MatTooltipModule,
            dialog$1.MatDialogModule,
            tabs.MatTabsModule,
            checkbox$1.MatCheckboxModule,
            slideToggle.MatSlideToggleModule,
            sort.MatSortModule,
            table$1.MatTableModule,
            i3$1.MatFormFieldModule] });
    MaterialUIModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, imports: [[
                i6.CommonModule,
                bottomSheet.MatBottomSheetModule,
                button$1.MatButtonModule,
                i6$1.MatCardModule,
                datepicker.MatDatepickerModule,
                icon.MatIconModule,
                input.MatInputModule,
                i5$2.MatNativeDateModule,
                menu.MatMenuModule,
                i4.MatRadioModule,
                i4$2.MatSelectModule,
                stepper.MatStepperModule,
                i8$2.MatTooltipModule,
                dialog$1.MatDialogModule,
                tabs.MatTabsModule,
                checkbox$1.MatCheckboxModule,
                slideToggle.MatSlideToggleModule,
                sort.MatSortModule,
                table$1.MatTableModule,
                i3$1.MatFormFieldModule
            ], i6.CommonModule,
            bottomSheet.MatBottomSheetModule,
            button$1.MatButtonModule,
            i6$1.MatCardModule,
            datepicker.MatDatepickerModule,
            icon.MatIconModule,
            input.MatInputModule,
            i5$2.MatNativeDateModule,
            menu.MatMenuModule,
            i4.MatRadioModule,
            i4$2.MatSelectModule,
            stepper.MatStepperModule,
            i8$2.MatTooltipModule,
            dialog$1.MatDialogModule,
            tabs.MatTabsModule,
            checkbox$1.MatCheckboxModule,
            slideToggle.MatSlideToggleModule,
            sort.MatSortModule,
            table$1.MatTableModule,
            i3$1.MatFormFieldModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MaterialUIModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [
                            i6.CommonModule,
                            bottomSheet.MatBottomSheetModule,
                            button$1.MatButtonModule,
                            i6$1.MatCardModule,
                            datepicker.MatDatepickerModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            i5$2.MatNativeDateModule,
                            menu.MatMenuModule,
                            i4.MatRadioModule,
                            i4$2.MatSelectModule,
                            stepper.MatStepperModule,
                            i8$2.MatTooltipModule,
                            dialog$1.MatDialogModule,
                            tabs.MatTabsModule,
                            checkbox$1.MatCheckboxModule,
                            slideToggle.MatSlideToggleModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            i3$1.MatFormFieldModule
                        ],
                        exports: [
                            i6.CommonModule,
                            bottomSheet.MatBottomSheetModule,
                            button$1.MatButtonModule,
                            i6$1.MatCardModule,
                            datepicker.MatDatepickerModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            i5$2.MatNativeDateModule,
                            menu.MatMenuModule,
                            i4.MatRadioModule,
                            i4$2.MatSelectModule,
                            stepper.MatStepperModule,
                            i8$2.MatTooltipModule,
                            dialog$1.MatDialogModule,
                            tabs.MatTabsModule,
                            checkbox$1.MatCheckboxModule,
                            slideToggle.MatSlideToggleModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            i3$1.MatFormFieldModule
                        ]
                    }]
            }] });

    var GridListModule = /** @class */ (function () {
        function GridListModule() {
        }
        return GridListModule;
    }());
    GridListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    GridListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, declarations: [GridListComponent], imports: [i6.CommonModule,
            ngxPagination.NgxPaginationModule,
            i4$1.DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            i1$2.FormsModule,
            i1$2.ReactiveFormsModule,
            i1$1.NgxfUploaderModule, i1__namespace$3.NgxMaskModule], exports: [GridListComponent] });
    GridListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, imports: [[
                i6.CommonModule,
                ngxPagination.NgxPaginationModule,
                i4$1.DxDataGridModule,
                MaterialUIModule,
                SharedPipesModule,
                i1$2.FormsModule,
                i1$2.ReactiveFormsModule,
                i1$1.NgxfUploaderModule,
                i1$3.NgxMaskModule.forRoot()
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: GridListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [GridListComponent],
                        imports: [
                            i6.CommonModule,
                            ngxPagination.NgxPaginationModule,
                            i4$1.DxDataGridModule,
                            MaterialUIModule,
                            SharedPipesModule,
                            i1$2.FormsModule,
                            i1$2.ReactiveFormsModule,
                            i1$1.NgxfUploaderModule,
                            i1$3.NgxMaskModule.forRoot()
                        ],
                        exports: [GridListComponent]
                    }]
            }] });

    var OrganizationDropdownComponent = /** @class */ (function () {
        function OrganizationDropdownComponent(accessManagementService, auth) {
            this.accessManagementService = accessManagementService;
            this.auth = auth;
            this.changeOrganization = new i0.EventEmitter();
            // This is intentional
        }
        OrganizationDropdownComponent.prototype.ngOnInit = function () {
            this.getOrgList();
        };
        /**
         * @description returning selected organization details on event emitter
         * @param orgID organization id
         */
        OrganizationDropdownComponent.prototype.onSelectionChange = function (orgID) {
            this.changeOrganization.emit(orgID);
        };
        /**
         * @description fetch organization list from backend
         */
        OrganizationDropdownComponent.prototype.getOrgList = function () {
            var _this = this;
            this.accessManagementService.getOrganizationList().subscribe(function (res) {
                if (res['data'] && res['data'].length) {
                    _this.orgList = res['data'].sort(function (a, b) { var _a; return (_a = a.organizationname) === null || _a === void 0 ? void 0 : _a.localeCompare(b.organizationname); });
                }
            });
        };
        Object.defineProperty(OrganizationDropdownComponent.prototype, "displayCondn", {
            /**
             * @description check isAdmin or not
             */
            get: function () {
                return this.auth.isAdmin() && this.isShow;
            },
            enumerable: false,
            configurable: true
        });
        return OrganizationDropdownComponent;
    }());
    OrganizationDropdownComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDropdownComponent, deps: [{ token: AccessManagementCommonService }, { token: AuthService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    OrganizationDropdownComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OrganizationDropdownComponent, selector: "app-organization-dropdown", inputs: { isShow: "isShow", Organization: "Organization" }, outputs: { changeOrganization: "changeOrganization" }, ngImport: i0__namespace, template: "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <ng-container *ngIf=\"displayCondn\">\r\n      <div class=\"d-block pull-left w-100 my-2\">\r\n        <p class=\"org-title\">Organization Name</p>\r\n        <mat-form-field class=\"w-100\" appearance=\"outline\">\r\n          <mat-select\r\n            placeholder=\"Organization\"\r\n            [(ngModel)]=\"Organization\"\r\n            (selectionChange)=\"onSelectionChange($event)\">\r\n            <mat-option value=\"Select-ALL\"> Select-ALL </mat-option>\r\n            <mat-option *ngFor=\"let org of orgList\" value=\"{{ org.id }}\">\r\n              {{ org.organizationname }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n", styles: [".org-title{margin:0;font-size:12px!important;color:#0079fe}\n"], components: [{ type: i3__namespace$1.MatFormField, selector: "mat-form-field", inputs: ["color", "floatLabel", "appearance", "hideRequiredMarker", "hintLabel"], exportAs: ["matFormField"] }, { type: i4__namespace$2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i5__namespace$2.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i6__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i6__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDropdownComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'app-organization-dropdown',
                        templateUrl: './organization-dropdown.component.html',
                        styleUrls: ['./organization-dropdown.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AccessManagementCommonService }, { type: AuthService }]; }, propDecorators: { isShow: [{
                    type: i0.Input
                }], Organization: [{
                    type: i0.Input
                }], changeOrganization: [{
                    type: i0.Output
                }] } });

    var OrganizationDropdownModule = /** @class */ (function () {
        function OrganizationDropdownModule() {
        }
        return OrganizationDropdownModule;
    }());
    OrganizationDropdownModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDropdownModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    OrganizationDropdownModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDropdownModule, declarations: [OrganizationDropdownComponent], imports: [i6.CommonModule,
            MaterialUIModule,
            ngxPagination.NgxPaginationModule,
            i4$1.DxDataGridModule,
            SharedPipesModule,
            i1$2.FormsModule,
            i1$2.ReactiveFormsModule,
            i1$1.NgxfUploaderModule, i1__namespace$3.NgxMaskModule], exports: [OrganizationDropdownComponent] });
    OrganizationDropdownModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDropdownModule, imports: [[
                i6.CommonModule,
                MaterialUIModule,
                ngxPagination.NgxPaginationModule,
                i4$1.DxDataGridModule,
                SharedPipesModule,
                i1$2.FormsModule,
                i1$2.ReactiveFormsModule,
                i1$1.NgxfUploaderModule,
                i1$3.NgxMaskModule.forRoot()
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: OrganizationDropdownModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [OrganizationDropdownComponent],
                        imports: [
                            i6.CommonModule,
                            MaterialUIModule,
                            ngxPagination.NgxPaginationModule,
                            i4$1.DxDataGridModule,
                            SharedPipesModule,
                            i1$2.FormsModule,
                            i1$2.ReactiveFormsModule,
                            i1$1.NgxfUploaderModule,
                            i1$3.NgxMaskModule.forRoot()
                        ],
                        exports: [OrganizationDropdownComponent]
                    }]
            }] });

    var ManageAccessRadioModule = /** @class */ (function () {
        function ManageAccessRadioModule() {
        }
        return ManageAccessRadioModule;
    }());
    ManageAccessRadioModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ManageAccessRadioModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ManageAccessRadioModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ManageAccessRadioModule, declarations: [ManageAccessRadioComponent], imports: [i6.CommonModule,
            ngxPagination.NgxPaginationModule,
            i4$1.DxDataGridModule,
            MaterialUIModule,
            SharedPipesModule,
            i1$2.FormsModule,
            i1$2.ReactiveFormsModule,
            i1$1.NgxfUploaderModule,
            ngxMatSelectSearch.NgxMatSelectSearchModule,
            i8$1.AngularMultiSelectModule,
            DirectivesModule, i1__namespace$3.NgxMaskModule, i5.DropdownModule,
            i9.TooltipModule], exports: [ManageAccessRadioComponent] });
    ManageAccessRadioModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ManageAccessRadioModule, imports: [[
                i6.CommonModule,
                ngxPagination.NgxPaginationModule,
                i4$1.DxDataGridModule,
                MaterialUIModule,
                SharedPipesModule,
                i1$2.FormsModule,
                i1$2.ReactiveFormsModule,
                i1$1.NgxfUploaderModule,
                ngxMatSelectSearch.NgxMatSelectSearchModule,
                i8$1.AngularMultiSelectModule,
                DirectivesModule,
                i1$3.NgxMaskModule.forRoot(),
                i5.DropdownModule,
                i9.TooltipModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ManageAccessRadioModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [ManageAccessRadioComponent],
                        imports: [
                            i6.CommonModule,
                            ngxPagination.NgxPaginationModule,
                            i4$1.DxDataGridModule,
                            MaterialUIModule,
                            SharedPipesModule,
                            i1$2.FormsModule,
                            i1$2.ReactiveFormsModule,
                            i1$1.NgxfUploaderModule,
                            ngxMatSelectSearch.NgxMatSelectSearchModule,
                            i8$1.AngularMultiSelectModule,
                            DirectivesModule,
                            i1$3.NgxMaskModule.forRoot(),
                            i5.DropdownModule,
                            i9.TooltipModule
                        ],
                        exports: [ManageAccessRadioComponent],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA, i0.NO_ERRORS_SCHEMA]
                    }]
            }] });

    var ShareDataService = /** @class */ (function () {
        function ShareDataService() {
            this.data = new rxjs.BehaviorSubject('');
        }
        return ShareDataService;
    }());
    ShareDataService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ShareDataService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShareDataService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return []; } });

    var PicsRbacPageaccessModule = /** @class */ (function () {
        function PicsRbacPageaccessModule() {
        }
        return PicsRbacPageaccessModule;
    }());
    PicsRbacPageaccessModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPageaccessModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsRbacPageaccessModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPageaccessModule, declarations: [PageaccessComponent], imports: [i6.CommonModule,
            i1$2.FormsModule,
            i1$2.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            // HttpClientModule,
            checkbox.CheckboxModule,
            i5.DropdownModule,
            card.CardModule,
            confirmdialog.ConfirmDialogModule,
            i12.AccordionModule,
            message.MessageModule,
            GridListModule,
            table.TableModule,
            i17.InputTextModule,
            i11.InputNumberModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            MaterialUIModule,
            i8$1.AngularMultiSelectModule,
            ngxMatSelectSearch.NgxMatSelectSearchModule,
            PrimengModule,
            OrganizationDropdownModule,
            ManageAccessRadioModule], exports: [PageaccessComponent] });
    PicsRbacPageaccessModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPageaccessModule, providers: [RbacService, MicrostrategyService, i1.HttpClient, AuthService, AuthStore, AlertService,
            i8.ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
            PageAccessService, DynamicTabPageService, ShareDataService, AccessManagementCommonService], imports: [[
                i6.CommonModule,
                i1$2.FormsModule,
                i1$2.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                // HttpClientModule,
                checkbox.CheckboxModule,
                i5.DropdownModule,
                card.CardModule,
                confirmdialog.ConfirmDialogModule,
                i12.AccordionModule,
                message.MessageModule,
                GridListModule,
                table.TableModule,
                i17.InputTextModule,
                i11.InputNumberModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                ripple.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                multiselect.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule,
                MaterialUIModule,
                i8$1.AngularMultiSelectModule,
                ngxMatSelectSearch.NgxMatSelectSearchModule,
                PrimengModule,
                OrganizationDropdownModule,
                ManageAccessRadioModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPageaccessModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PageaccessComponent
                        ],
                        imports: [
                            i6.CommonModule,
                            i1$2.FormsModule,
                            i1$2.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            // HttpClientModule,
                            checkbox.CheckboxModule,
                            i5.DropdownModule,
                            card.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            i12.AccordionModule,
                            message.MessageModule,
                            GridListModule,
                            table.TableModule,
                            i17.InputTextModule,
                            i11.InputNumberModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule,
                            MaterialUIModule,
                            i8$1.AngularMultiSelectModule,
                            ngxMatSelectSearch.NgxMatSelectSearchModule,
                            PrimengModule,
                            OrganizationDropdownModule,
                            ManageAccessRadioModule,
                        ],
                        exports: [PageaccessComponent],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA],
                        providers: [RbacService, MicrostrategyService, i1.HttpClient, AuthService, AuthStore, AlertService,
                            i8.ConfirmationService, PermissionStore, DataStoreService, PageHeaderService,
                            PageAccessService, DynamicTabPageService, ShareDataService, AccessManagementCommonService]
                    }]
            }] });

    var CardiRbacPageaccessModule = /** @class */ (function () {
        function CardiRbacPageaccessModule() {
        }
        return CardiRbacPageaccessModule;
    }());
    CardiRbacPageaccessModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiRbacPageaccessModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CardiRbacPageaccessModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiRbacPageaccessModule, declarations: [RbacPageaccessComponent], imports: [PicsRbacPageaccessModule], exports: [RbacPageaccessComponent] });
    CardiRbacPageaccessModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiRbacPageaccessModule, imports: [[
                PicsRbacPageaccessModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardiRbacPageaccessModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RbacPageaccessComponent,
                        ],
                        imports: [
                            PicsRbacPageaccessModule,
                        ],
                        exports: [
                            RbacPageaccessComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of rbac-pageaccess
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CardiRbacPageaccessModule = CardiRbacPageaccessModule;
    exports.RbacPageaccessComponent = RbacPageaccessComponent;
    exports.RbacPageaccessService = RbacPageaccessService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-rbac-pageaccess.umd.js.map
