import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DynamicTabPageConfig } from '../urls/dynamic-tab-page-url.config';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngxf-uploader";
import * as i2 from "./data-store.service";
export class DynamicTabPageService {
    constructor(uploadService, _storeservice) {
        this.uploadService = uploadService;
        this._storeservice = _storeservice;
        this.isPageDesign = new BehaviorSubject(false);
        this.observePage = this.isPageDesign.asObservable();
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getActivePage(tabPageId, permission) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getActivePage.replace('{id}', tabPageId)}${permission ? '?applyPermissions=true' : ''}`);
    }
    getDynamicPage(pageId) {
        return this.httpService.get(`${DynamicTabPageConfig.EndPoint.Page.getPage}/${pageId}`);
    }
    getPageById(pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getPageById.replace('{id}', pageId));
    }
    getListBySourceId(sourceId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Narrative.getIncidentListById.replace('{id}', sourceId));
    }
    getResponseByPageId(responseId, pageId) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Page.getResponseByPageId
            .replace('{responseId}', responseId)
            .replace('{pageId}', pageId));
    }
    createFormResponse(id, requestData) {
        return this.httpService.post(id
            ? DynamicTabPageConfig.EndPoint.Page.updateFormResponse
            : DynamicTabPageConfig.EndPoint.Page.createFormResponse, requestData);
    }
    createUserSurvey(history, Id) {
        var _a;
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Notification.createSurveyConfig
            .replace('{id}', (_a = history === null || history === void 0 ? void 0 : history.state) === null || _a === void 0 ? void 0 : _a.usersurveyid)
            .replace('{status}', 'Completed')
            .replace('{pagedataid}', Id), {});
    }
    updateFormResponse(id, requestData) {
        return this.httpService.patch(`${DynamicTabPageConfig.EndPoint.Page.patchFormResponse}/${id}`, requestData);
    }
    exportReport(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Finance.exportDocument, data);
    }
    uploadFile(file) {
        return this.uploadService.upload({
            url: this.httpService.baseUrl + '/' + DynamicTabPageConfig.EndPoint.Finance.uploadDocument,
            headers: new HttpHeaders()
                .set('ctype', 'file')
                .set('uniqueid', '6b61ac1e-221a-495c-957b-ad85f65be25a')
                .set('role', 'role=CP_PUBLIC'),
            files: file,
            process: true
        });
    }
    getUniqueId(api) {
        return this.httpService.get(DynamicTabPageConfig.EndPoint.Finance.getUniqueId + api);
    }
    changePage(page) {
        this.isPageDesign.next(page);
    }
    createFormResponseAttachment(data) {
        return this.httpService.post(DynamicTabPageConfig.EndPoint.Attachments.createAttachment, data);
    }
}
DynamicTabPageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, deps: [{ token: i1.NgxfUploaderService }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
DynamicTabPageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DynamicTabPageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxfUploaderService }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0Bjb3JlL3NlcnZpY2UvZHluYW1pYy10YWItcGFnZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFNdkMsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUFvQixhQUFrQyxFQUFVLGFBQStCO1FBQTNFLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUh2RixpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzNELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUc3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFjLEVBQUUsVUFBb0I7UUFDaEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDekIsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEs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Q0FBQztpQkFDcEIsR0FBRyxDQUFDLFVBQVUsRUFBRSxzQ0FBc0MsQ0FBQztpQkFDdkQsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQztZQUNoQyxLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELDRCQUE0QixDQUFDLElBQUk7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pHLENBQUM7O21IQXpGVSxxQkFBcUI7dUhBQXJCLHFCQUFxQixjQUZwQixNQUFNOzRGQUVQLHFCQUFxQjtrQkFIakMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEeW5hbWljVGFiUGFnZUNvbmZpZyB9IGZyb20gJy4uL3VybHMvZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgTmd4ZlVwbG9hZGVyU2VydmljZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNUYWJQYWdlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBpc1BhZ2VEZXNpZ24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBvYnNlcnZlUGFnZSA9IHRoaXMuaXNQYWdlRGVzaWduLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIGh0dHBTZXJ2aWNlOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwbG9hZFNlcnZpY2U6IE5neGZVcGxvYWRlclNlcnZpY2UsIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0QWN0aXZlUGFnZSh0YWJQYWdlSWQ6IGFueSwgcGVybWlzc2lvbj86IGJvb2xlYW4pIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgYCR7RHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRBY3RpdmVQYWdlLnJlcGxhY2UoJ3tpZH0nLCB0YWJQYWdlSWQpfSR7XHJcbiAgICAgICAgcGVybWlzc2lvbiA/ICc/YXBwbHlQZXJtaXNzaW9ucz10cnVlJyA6ICcnXHJcbiAgICAgIH1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHluYW1pY1BhZ2UocGFnZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2V9LyR7cGFnZUlkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZUJ5SWQocGFnZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2VCeUlkLnJlcGxhY2UoJ3tpZH0nLCBwYWdlSWQpKTtcclxuICB9XHJcblxyXG4gIGdldExpc3RCeVNvdXJjZUlkKHNvdXJjZUlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5OYXJyYXRpdmUuZ2V0SW5jaWRlbnRMaXN0QnlJZC5yZXBsYWNlKCd7aWR9Jywgc291cmNlSWQpKTtcclxuICB9XHJcblxyXG4gIGdldFJlc3BvbnNlQnlQYWdlSWQocmVzcG9uc2VJZDogYW55LCBwYWdlSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFxyXG4gICAgICBEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLmdldFJlc3BvbnNlQnlQYWdlSWRcclxuICAgICAgICAucmVwbGFjZSgne3Jlc3BvbnNlSWR9JywgcmVzcG9uc2VJZClcclxuICAgICAgICAucmVwbGFjZSgne3BhZ2VJZH0nLCBwYWdlSWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRm9ybVJlc3BvbnNlKGlkOiBhbnksIHJlcXVlc3REYXRhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFxyXG4gICAgICBpZFxyXG4gICAgICAgID8gRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuUGFnZS51cGRhdGVGb3JtUmVzcG9uc2VcclxuICAgICAgICA6IER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LlBhZ2UuY3JlYXRlRm9ybVJlc3BvbnNlLFxyXG4gICAgICByZXF1ZXN0RGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXJTdXJ2ZXkoaGlzdG9yeSwgSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChcclxuICAgICAgRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuTm90aWZpY2F0aW9uLmNyZWF0ZVN1cnZleUNvbmZpZ1xyXG4gICAgICAgIC5yZXBsYWNlKCd7aWR9JywgaGlzdG9yeT8uc3RhdGU/LnVzZXJzdXJ2ZXlpZClcclxuICAgICAgICAucmVwbGFjZSgne3N0YXR1c30nLCAnQ29tcGxldGVkJylcclxuICAgICAgICAucmVwbGFjZSgne3BhZ2VkYXRhaWR9JywgSWQpLFxyXG4gICAgICB7fVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZvcm1SZXNwb25zZShpZDogYW55LCByZXF1ZXN0RGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChgJHtEeW5hbWljVGFiUGFnZUNvbmZpZy5FbmRQb2ludC5QYWdlLnBhdGNoRm9ybVJlc3BvbnNlfS8ke2lkfWAsIHJlcXVlc3REYXRhKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydFJlcG9ydChkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuRmluYW5jZS5leHBvcnREb2N1bWVudCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKGZpbGU6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMudXBsb2FkU2VydmljZS51cGxvYWQoe1xyXG4gICAgICB1cmw6IHRoaXMuaHR0cFNlcnZpY2UuYmFzZVVybCArICcvJyArIER5bmFtaWNUYWJQYWdlQ29uZmlnLkVuZFBvaW50LkZpbmFuY2UudXBsb2FkRG9jdW1lbnQsXHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycygpXHJcbiAgICAgICAgLnNldCgnY3R5cGUnLCAnZmlsZScpXHJcbiAgICAgICAgLnNldCgndW5pcXVlaWQnLCAnNmI2MWFjMWUtMjIxYS00OTVjLTk1N2ItYWQ4NWY2NWJlMjVhJylcclxuICAgICAgICAuc2V0KCdyb2xlJywgJ3JvbGU9Q1BfUFVCTElDJyksXHJcbiAgICAgIGZpbGVzOiBmaWxlLFxyXG4gICAgICBwcm9jZXNzOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVuaXF1ZUlkKGFwaTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuRmluYW5jZS5nZXRVbmlxdWVJZCArIGFwaSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYWdlKHBhZ2UpIHtcclxuICAgIHRoaXMuaXNQYWdlRGVzaWduLm5leHQocGFnZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGb3JtUmVzcG9uc2VBdHRhY2htZW50KGRhdGEpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoRHluYW1pY1RhYlBhZ2VDb25maWcuRW5kUG9pbnQuQXR0YWNobWVudHMuY3JlYXRlQXR0YWNobWVudCwgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==