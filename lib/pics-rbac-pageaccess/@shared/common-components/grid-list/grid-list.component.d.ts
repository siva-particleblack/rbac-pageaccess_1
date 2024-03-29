import { AfterViewInit, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../@core/service/auth.service';
import { LocalService } from '../../../@core/service/local.service';
import { DxDataGridComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import * as i0 from "@angular/core";
export declare class GridListComponent implements OnInit, OnChanges, AfterViewInit {
    private router;
    auth: AuthService;
    private localstorage;
    dataGrid: DxDataGridComponent;
    dataList: any[];
    dataSource: DataSource;
    columns: any;
    updateGrid: any;
    totalCount: number;
    page: number;
    isShow: boolean;
    remoteOperations: boolean;
    enableExport: boolean;
    showHeaderFilter: boolean;
    exportPageName: string;
    narrativeData: any;
    set pageSize(value: number);
    currentPage: EventEmitter<number>;
    pageIndex: EventEmitter<number>;
    currentSize: EventEmitter<number>;
    editTableRow: EventEmitter<any>;
    viewTableRow: EventEmitter<any>;
    deleteTableRow: EventEmitter<any>;
    openExternalLink: EventEmitter<any>;
    openpopupLink: EventEmitter<any>;
    routeTo: EventEmitter<any>;
    openPopup: EventEmitter<any>;
    duplicateRow: EventEmitter<any>;
    sortOrder: EventEmitter<any>;
    filterSearchValue: EventEmitter<any>;
    filterBuilderPopup: EventEmitter<any>;
    filterPanel: EventEmitter<any>;
    multipleFilterValues: EventEmitter<any>;
    downloadTableRow: EventEmitter<any>;
    toggleRow: EventEmitter<any>;
    outComeTableRow: EventEmitter<any>;
    downloadFormResponseFiles: EventEmitter<any>;
    deleteFormResponseFiles: EventEmitter<any>;
    rowSelection: EventEmitter<any>;
    navigate: EventEmitter<any>;
    multipleFilterValueToAPI: EventEmitter<any>;
    selectedRowsData: EventEmitter<any>;
    dataField: string[];
    columnHeader: any[];
    popupPosition: any;
    filterValue: (string | string[])[];
    customOperations: Array<any>;
    fields: any;
    customStore: any;
    tempColumns: any[];
    Organization: any;
    dUrl: string;
    rdUrl: string;
    rUrl: any;
    user: any;
    displayMode: string;
    currentPageSize: any;
    currentFilter: any;
    headerFilterData: any;
    constructor(router: Router, auth: AuthService, localstorage: LocalService);
    ngOnInit(): void;
    /**
     * re-render the grid when input data is changed.
     */
    ngOnChanges(): void;
    /**
     * Rendering data grid condition wise that login user is admin or not
     */
    loadGWithParam(): void;
    ngAfterViewInit(): void;
    /**
     * Generating data grid and restructuring data for Developer grid
     * @param orgID origination details
     * @param load optional boolean is for checking data should load organization respective or all
     */
    loadGrid(orgID: any, load?: boolean): void;
    getRouter(data: any): void;
    navigateTo(data: any): void;
    popup(data: any): void;
    downloadData(evt: any): void;
    editData(evt: any): void;
    editDataMyApplciation(evt: any): void;
    editAppeal(evt: any): void;
    onSelectionChanged(evt: any): void;
    viewData(evt: any): void;
    deleteData(evt: any): void;
    duplicateDate(evt: any): void;
    openLink(evt: any): void;
    openPopupLink(evt: any): void;
    activeUser(evt: any): void;
    getVisabilityByChoosableProp(chooser: any, visible: any): any;
    getSortOrder(defaultSortColumn: any, defaultSortType: any, columnDef: any): any;
    outComeData(evt: any): void;
    downloadFormResponseAttachments(evt: any): void;
    deleteFormResponseAttachments(evt: any): void;
    onRowPrepared(e: any): void;
    onCellPrepared(e: any): void;
    checkCellprepare(e: any): void;
    checkOncellprepare(e: any, livetext: any): void;
    onExporting(e: any): void;
    contentReady: (e: any) => void;
    customizeHeaderFilterData(options: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridListComponent, "app-grid-list", never, { "dataList": "dataList"; "dataSource": "dataSource"; "columns": "columns"; "updateGrid": "updateGrid"; "totalCount": "totalCount"; "page": "page"; "isShow": "isShow"; "remoteOperations": "remoteOperations"; "enableExport": "enableExport"; "showHeaderFilter": "showHeaderFilter"; "exportPageName": "exportPageName"; "pageSize": "pageSize"; }, { "currentPage": "currentPage"; "pageIndex": "pageIndex"; "currentSize": "currentSize"; "editTableRow": "editTableRow"; "viewTableRow": "viewTableRow"; "deleteTableRow": "deleteTableRow"; "openExternalLink": "openExternalLink"; "openpopupLink": "openpopupLink"; "routeTo": "routeTo"; "openPopup": "openPopup"; "duplicateRow": "duplicateRow"; "sortOrder": "sortOrder"; "filterSearchValue": "filterSearchValue"; "filterBuilderPopup": "filterBuilderPopup"; "filterPanel": "filterPanel"; "multipleFilterValues": "multipleFilterValues"; "downloadTableRow": "downloadTableRow"; "toggleRow": "toggleRow"; "outComeTableRow": "outComeTableRow"; "downloadFormResponseFiles": "downloadFormResponseFiles"; "deleteFormResponseFiles": "deleteFormResponseFiles"; "rowSelection": "rowSelection"; "navigate": "navigate"; "multipleFilterValueToAPI": "multipleFilterValueToAPI"; "selectedRowsData": "selectedRowsData"; }, never, never>;
}
