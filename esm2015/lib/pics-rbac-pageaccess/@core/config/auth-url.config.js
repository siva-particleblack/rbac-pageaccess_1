export class AuthURL {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcGFnZWFjY2Vzcy9zcmMvbGliL3BpY3MtcmJhYy1wYWdlYWNjZXNzL0Bjb3JlL2NvbmZpZy9hdXRoLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLE9BQU87O0FBQ0osaUJBQVMsR0FBRztJQUN4QixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLGNBQWMsRUFBRSx3Q0FBd0M7WUFDeEQsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixZQUFZLEVBQUUseUJBQXlCO1lBQ3ZDLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLGtCQUFrQixFQUNoQix3R0FBd0c7WUFDMUcsTUFBTSxFQUFFLGNBQWM7WUFDdEIsYUFBYSxFQUFFLDBCQUEwQjtZQUN6QyxPQUFPLEVBQUUseUNBQXlDO1lBQ2xELFlBQVksRUFBRSxzQkFBc0I7WUFDcEMsa0JBQWtCLEVBQUUsMkJBQTJCO1lBQy9DLHFCQUFxQixFQUFFLDBCQUEwQjtTQUNsRDtRQUNELFVBQVUsRUFBRTtZQUNWLGtCQUFrQixFQUFFLHNDQUFzQztZQUMxRCxjQUFjLEVBQUUsaUNBQWlDO1lBQ2pELG9CQUFvQixFQUFFLHdDQUF3QztTQUMvRDtRQUNELGFBQWEsRUFBRTtZQUNiLEtBQUssRUFBRSwrQkFBK0I7WUFDdEMsVUFBVSxFQUFFLGlDQUFpQztTQUM5QztLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoVVJMIHtcclxuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50cyA9IHtcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIGNvbmZvcm1NYWlsOiAnL29yZy9hdXRoL2ZvcmdvdC1wYXNzd29yZCcsXHJcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQ6ICcvb3JnL2F1dGgvZm9yZ290LXBhc3N3b3JkLXZlcmlmaWNhdGlvbicsXHJcbiAgICAgICAgbG9naW46ICcvb3JnL2F1dGgvbG9naW4nLFxyXG4gICAgICAgIHJlZnJlc2hUb2tlbjogJy9vcmcvYXV0aC9yZWZyZXNoLXRva2VuJyxcclxuICAgICAgICBsb2dvdXQ6ICcvb3JnL2F1dGgvbG9nb3V0JyxcclxuICAgICAgICB1c2VySW5mbzogJy9vcmcvdXNlci9wYWdlL2xpc3QnLFxyXG4gICAgICAgIHVzZXJSb2xlOiAnL29yZy91c2VyL3tpZH0nLFxyXG4gICAgICAgIHJvdXRlVG9EeW5hbWljUGFnZTpcclxuICAgICAgICAgICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wYWdlL29yZ2FuaXphdGlvbi97b3JnaWR9P3JldHVyblVzZXJQYWdlPXRydWUmZXhjbHVkZU5vQWN0aXZlVmVyc2lvblBhZ2VzPXRydWUnLFxyXG4gICAgICAgIGF1dGhNZTogJy9vcmcvYXV0aC9tZScsXHJcbiAgICAgICAgcmVzZXRQYXNzd29yZDogJy9vcmcvdXNlci9yZXNldC1wYXNzd29yZCcsXHJcbiAgICAgICAgb3JnTGlzdDogJy9vcmcvbWFuYWdlbWVudC1ncm91cC9vcmdhbml6YXRpb24vdHJlZScsXHJcbiAgICAgICAgbm90aWZpY2F0aW9uOiAnL3dvcmtlci9ub3RpZmljYXRpb24nLFxyXG4gICAgICAgIHdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvdXBkYXRlQXZhaWxhYmxpdHknLFxyXG4gICAgICAgIGdldFdvcmtlckF2YWlsYWJpbGl0eTogJy93b3JrZXIvZ2V0QnlDdXJyZW50VXNlcidcclxuICAgICAgfSxcclxuICAgICAgcGVybWlzc2lvbjoge1xyXG4gICAgICAgIHBlcm1pc3Npb25Sb2xlQnlJZDogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3JvbGUve2lkfScsXHJcbiAgICAgICAgcGFnZVBlcm1pc3Npb246ICcvYWNjZXNzLWNvbnRyb2wvcGVybWlzc2lvbi9wYWdlJyxcclxuICAgICAgICBwYWdlTG9va3VwUGVybWlzc2lvbjogJy9hY2Nlc3MtY29udHJvbC9wZXJtaXNzaW9uL3BhZ2UvbG9va3VwJ1xyXG4gICAgICB9LFxyXG4gICAgICBtaWNyb3N0cmF0ZWd5OiB7XHJcbiAgICAgICAgbG9naW46ICcvcGxhdGZvcm0vbWljcm9zdHJhdGVneS9sb2dpbicsXHJcbiAgICAgICAgZ2V0TGlicmFyeTogJy9wbGF0Zm9ybS9taWNyb3N0cmF0ZWd5L2xpYnJhcnknXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==