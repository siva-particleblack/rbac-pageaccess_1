export declare class DynamicTabPageConfig {
    static EndPoint: {
        Page: {
            getActivePage: string;
            getPage: string;
            getPageById: string;
            getResponseByPageId: string;
            createFormResponse: string;
            patchFormResponse: string;
            updateFormResponse: string;
        };
        Narrative: {
            getIncidentListById: string;
        };
        Notification: {
            createSurveyConfig: string;
        };
        Finance: {
            exportDocument: string;
            uploadDocument: string;
            getUniqueId: string;
        };
        Attachments: {
            createAttachment: string;
        };
    };
}
