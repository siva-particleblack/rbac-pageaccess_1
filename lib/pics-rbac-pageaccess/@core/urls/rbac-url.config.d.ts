export declare class RoleConfig {
    static EndPoint: {
        role: {
            getAllUserRole: string;
            createRole: string;
            getLandingPage: string;
            addPolicyGroup: string;
            getAllOrgRole: string;
            dossier: string;
        };
    };
}
export declare class UserConfig {
    static EndPoint: {
        User: {
            getAllUserList: string;
            getAllUserActiveInactive: string;
            activateUser: string;
            createUser: string;
            userRole: string;
            managementgroup: string;
            getAllUserOrgList: string;
        };
        Provider: {
            getProviderList: string;
            searchProviderList: string;
            addProviderUser: string;
        };
    };
}
export declare class AttachmentConfig {
    static EndPoint: {
        Attachments: {
            GetAttachmentReferral: string;
            GetCategoryLookup: string;
            UploadKey: string;
            DownloadKey: string;
            PostAttachment: string;
            PutAttachment: string;
        };
    };
}
export declare class PolicyGroupConfig {
    static EndPoint: {
        policyGroup: {
            getPolicyGroupList: string;
            getAllPolicyGroupList: string;
            createPolicyGroup: string;
            getOrgPolicyGroups: string;
        };
    };
}
export declare class PermissionsURL {
    static EndPoints: {
        permission: {
            permissionRoleById: string;
            pagePermission: string;
            getPermission: string;
            createPermission: string;
            updateDeletePermission: string;
            getPermissionTree: string;
            getPermissionTypes: string;
            applicationPermissionsTree: string;
        };
        page: {
            createPage: string;
            updateDeletePage: string;
            AllPageTree: string;
        };
    };
}
export declare class AccessManagementConfig {
    static EndPoint: {
        Organization: {
            getOrganizationList: string;
            getOrganization: string;
        };
        Page: {
            getPage: string;
        };
        Asset: {
            getAsset: string;
            getPageAsset: string;
            getUserAsset: string;
            getRoleAsset: string;
            getPolicyGroupAsset: string;
        };
        User: {
            getUser: string;
            getUserList: string;
            getUserorgList: string;
        };
        PolicyGroup: {
            getPolicyGroup: string;
            getPolicyGroupList: string;
        };
        Role: {
            getRole: string;
            getRoleList: string;
        };
    };
}
export declare class RBACINFO {
    apiHost: string;
    tokenKey: string;
    others?: any;
    orgID?: any;
    environment?: Environment;
}
export declare class Environment {
    mstrUsername?: string;
    mstrPassword?: string;
    mstrURL?: string;
    mstrProjectID?: string;
    applicationid?: string;
    priority?: string;
}
