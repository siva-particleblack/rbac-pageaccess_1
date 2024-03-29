export class DynamicTabPageConfig {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0Bjb3JlL3VybHMvZHluYW1pYy10YWItcGFnZS11cmwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxvQkFBb0I7O0FBQ2pCLDZCQUFRLEdBQUc7SUFDdkIsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLDBDQUEwQztRQUN6RCxPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLFdBQVcsRUFBRSxtQ0FBbUM7UUFDaEQsbUJBQW1CLEVBQUUsMERBQTBEO1FBQy9FLGtCQUFrQixFQUFFLCtCQUErQjtRQUNuRCxpQkFBaUIsRUFBRSx3QkFBd0I7UUFDM0Msa0JBQWtCLEVBQUUsWUFBWTtLQUNqQztJQUNELFNBQVMsRUFBRTtRQUNULG1CQUFtQixFQUFFLCtCQUErQjtLQUNyRDtJQUNELFlBQVksRUFBRTtRQUNaLGtCQUFrQixFQUFFLHFEQUFxRDtLQUMxRTtJQUNELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSw4QkFBOEI7UUFDOUMsY0FBYyxFQUFFLGlCQUFpQjtRQUNqQyxXQUFXLEVBQUUsaUJBQWlCO0tBQy9CO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsZ0JBQWdCLEVBQUUsMENBQTBDO0tBQzdEO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEeW5hbWljVGFiUGFnZUNvbmZpZyB7XHJcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgIFBhZ2U6IHtcclxuICAgICAgZ2V0QWN0aXZlUGFnZTogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2V2ZXJzaW9uL3tpZH0nLFxyXG4gICAgICBnZXRQYWdlOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZScsXHJcbiAgICAgIGdldFBhZ2VCeUlkOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS97aWR9JyxcclxuICAgICAgZ2V0UmVzcG9uc2VCeVBhZ2VJZDogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2Uve3Jlc3BvbnNlSWR9L2dldEJ5UGFnZUlkL3twYWdlSWR9JyxcclxuICAgICAgY3JlYXRlRm9ybVJlc3BvbnNlOiAnL3NvbHV0aW9uL2Zvcm1yZXNwb25zZS9jcmVhdGUnLFxyXG4gICAgICBwYXRjaEZvcm1SZXNwb25zZTogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2UnLFxyXG4gICAgICB1cGRhdGVGb3JtUmVzcG9uc2U6ICcvcGFnZWRhdGEvJ1xyXG4gICAgfSxcclxuICAgIE5hcnJhdGl2ZToge1xyXG4gICAgICBnZXRJbmNpZGVudExpc3RCeUlkOiAnL2luY2lkZW50L2xpc3RCeVNvdXJjZUlkL3tpZH0nXHJcbiAgICB9LFxyXG4gICAgTm90aWZpY2F0aW9uOiB7XHJcbiAgICAgIGNyZWF0ZVN1cnZleUNvbmZpZzogJy9zdXJ2ZXljb25maWcvdXNlcnN1cnZleS97aWR9L3tzdGF0dXN9L3twYWdlZGF0YWlkfSdcclxuICAgIH0sXHJcbiAgICBGaW5hbmNlOiB7XHJcbiAgICAgIGV4cG9ydERvY3VtZW50OiAnL2ludGVncmF0ZWQvZXhwb3J0RG9jdW1lbnRzLycsXHJcbiAgICAgIHVwbG9hZERvY3VtZW50OiAnZG9jdW1lbnQvdXBsb2FkJyxcclxuICAgICAgZ2V0VW5pcXVlSWQ6ICcvdW5pcXVlSWRMb2dpYy8nXHJcbiAgICB9LFxyXG4gICAgQXR0YWNobWVudHM6IHtcclxuICAgICAgY3JlYXRlQXR0YWNobWVudDogJy9zb2x1dGlvbi9mb3JtcmVzcG9uc2UtYXR0YWNobWVudC9jcmVhdGUnXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=