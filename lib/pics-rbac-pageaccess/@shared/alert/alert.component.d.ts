import { OnInit } from '@angular/core';
import { Alert, AlertService } from '../../@core/service/alert.service';
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    private alertService;
    alerts: Alert[];
    constructor(alertService: AlertService);
    ngOnInit(): void;
    removeAlert(alert: Alert): void;
    cssClass(alert: Alert): "alert alert-success" | "alert alert-danger" | "alert alert-info" | "alert alert-warning";
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "app-alert", never, {}, {}, never, never>;
}
