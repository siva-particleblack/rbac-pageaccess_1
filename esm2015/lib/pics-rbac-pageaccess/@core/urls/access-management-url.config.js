export class AccessManagementConfig {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLW1hbmFnZW1lbnQtdXJsLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL2FjY2Vzcy1tYW5hZ2VtZW50LXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLHNCQUFzQjs7QUFDbkIsK0JBQVEsR0FBRztJQUN2QixZQUFZLEVBQUU7UUFDWixtQkFBbUIsRUFBRSwrQ0FBK0M7UUFDcEUsZUFBZSxFQUNiLHlHQUF5RztLQUM1RztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO0tBQ2pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsUUFBUSxFQUFFLE9BQU87UUFDakIsZ0JBQWdCLEVBQUUsZUFBZTtRQUNqQyxZQUFZLEVBQUUsMkNBQTJDO1FBQ3pELFlBQVksRUFBRSw2Q0FBNkM7UUFDM0QsWUFBWSxFQUFFLDZDQUE2QztRQUMzRCxtQkFBbUIsRUFBRSxvREFBb0Q7S0FDMUU7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsWUFBWTtRQUNyQixXQUFXLEVBQUUsZUFBZTtRQUM1QixjQUFjLEVBQUUseUJBQXlCO0tBQzFDO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsY0FBYyxFQUFFLHNDQUFzQztRQUN0RCxrQkFBa0IsRUFBRSxtRUFBbUU7S0FDeEY7SUFDRCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFdBQVcsRUFBRSwyQ0FBMkM7S0FDekQ7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjY2Vzc01hbmFnZW1lbnRDb25maWcge1xyXG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XHJcbiAgICBPcmdhbml6YXRpb246IHtcclxuICAgICAgZ2V0T3JnYW5pemF0aW9uTGlzdDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BhZ2Uvb3JnYW5pemF0aW9uL2FsbCcsXHJcbiAgICAgIGdldE9yZ2FuaXphdGlvbjpcclxuICAgICAgICAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ0lkfT9yZXR1cm5Vc2VyUGFnZT1mYWxzZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZSdcclxuICAgIH0sXHJcbiAgICBQYWdlOiB7XHJcbiAgICAgIGdldFBhZ2U6ICcvcGFnZSdcclxuICAgIH0sXHJcbiAgICBBc3NldDoge1xyXG4gICAgICBnZXRBc3NldDogJ2Fzc2V0JyxcclxuICAgICAgZ2V0QXNzZXREZXNlbGVjdDogJ2Fzc2V0RGVzZWxlY3QnLFxyXG4gICAgICBnZXRQYWdlQXNzZXQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9hc3NldC9nZXRwYWdlYnlpZCcsXHJcbiAgICAgIGdldFVzZXJBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFVzZXJBc3NldHMnLFxyXG4gICAgICBnZXRSb2xlQXNzZXQ6ICcvcGxhdGZvcm0vcGFnZS1kZXNpZ25lci9hc3NldC9nZXRSb2xlQXNzZXRzJyxcclxuICAgICAgZ2V0UG9saWN5R3JvdXBBc3NldDogJy9wbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL2Fzc2V0L2dldFBvbGljeUdyb3VwQXNzZXRzJ1xyXG4gICAgfSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgZ2V0VXNlcjogJy9vcmcvdXNlci8nLFxyXG4gICAgICBnZXRVc2VyTGlzdDogJy9vcmcvdXNlci9hbGwnLFxyXG4gICAgICBnZXRVc2Vyb3JnTGlzdDogJy9vcmcvdXNlci9vcmdhbml6YXRpb24vJ1xyXG4gICAgfSxcclxuICAgIFBvbGljeUdyb3VwOiB7XHJcbiAgICAgIGdldFBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvJyxcclxuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXHJcbiAgICB9LFxyXG4gICAgUm9sZToge1xyXG4gICAgICBnZXRSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUvJyxcclxuICAgICAgZ2V0Um9sZUxpc3Q6ICcvYWNjZXNzLWNvbnRyb2wvcm9sZS9vcmdhbml6YXRpb24ve29yZ2lkfSdcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==