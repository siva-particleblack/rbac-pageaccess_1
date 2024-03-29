import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccessManagementConfig } from '../../@core/urls/access-management-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/data-store.service";
export class PageAccessService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this.isfull = false;
        this.ishide = false;
        this.isread = false;
        this.isreadwrite = false;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    /**
     * when user selected policy
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPolicy(access, id, policyGroupData, selectedFieldData, pageData) {
        const fullArray = [];
        for (const value of id) {
            const selectedData = policyGroupData.filter(key => key.id === value);
            const formObj = {
                id: '',
                description: '',
                policygroupname: '',
                pageConfigs: [],
                assetConfigs: []
            };
            this.setPolicyObj(formObj, selectedData, value);
            this.loadAccessForPage(access, selectedData, formObj, value, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, value, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected Persona
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByPersona(access, personaId, id, roleAddedData, selectedFieldData, pageData) {
        const fullArray = [];
        // const personaId = this.rbacForm.get('roleid').value;
        // const personaId = this.rbacForm.get('roleid').value;
        const formObj = {
            id: '',
            rolekey: '',
            rolename: '',
            description: '',
            effectivedate: '',
            pageConfigs: [],
            assetConfigs: [],
            rolePolicyGroupConfigs: []
        };
        for (const item of personaId) {
            const selectedData = roleAddedData.filter(key => key.id === item);
            this.setRoleObj(formObj, selectedData, item, id);
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * when user selected User
     * @param access Raw valur of RBac form
     * @returns form array of DA
     * @childFunction of saveRbac
     */
    accessByUser(access, userId, id, roleids, userList, selectedFieldData, pageData) {
        const fullArray = [];
        for (const item of userId) {
            const selectedData = userList.filter(key => key.id === item);
            const formObj = Object.assign({}, selectedData[0]);
            formObj.pageConfigs = [];
            formObj.assetConfigs = [];
            formObj.policyGroupConfigs = [];
            formObj.roleConfigs = [];
            console.log('======');
            this.setUserObj(formObj, selectedData, item, id, roleids);
            console.log('======1');
            this.loadAccessForPage(access, selectedData, formObj, item, pageData);
            console.log('======2');
            if (access.fieldLevelData.length) {
                this.loadAccessForFields(access, selectedData, formObj, item, selectedFieldData, pageData);
            }
            fullArray.push(formObj);
        }
        return fullArray;
    }
    /**
     * Fetch access list for dashboard access
     * @param access
     * @param assetDashBoardConfigs
     * @param formObj
     * @param id
     */
    loadAccessForPage(access, selectedData, formObj, id, pageData) {
        const existPageConfigs = selectedData[0]['pageConfigs'];
        for (const item of access.pageLevelData) {
            const selectedModule = pageData.filter(key => key.id === item['pageid']);
            const pageAccess = access.pageLevelData.filter(key => key.pageid === item['pageid']);
            this.pageAccessCheck(pageAccess);
            const pageKey = {
                id: null,
                isactive: true,
                isfull: this.isfull,
                ishide: this.ishide,
                isread: this.isread,
                isreadwrite: this.isreadwrite,
                pageid: item['pageid'],
                policygroupid: id,
                modulekey: selectedModule[0]['modulekey'],
                submodulekey: selectedModule[0]['submodulekey']
            };
            // check exist page length
            if (existPageConfigs.length) {
                const existIds = existPageConfigs.map(p => p.pageid);
                const chkPage = existIds.includes(item['pageid']);
                if (chkPage) {
                    const index = existIds.indexOf(item['pageid']);
                    if (index > -1) {
                        //if found
                        pageKey.id = existPageConfigs[index]['id'];
                        pageKey.isactive = false;
                        formObj.pageConfigs.push(pageKey);
                        existPageConfigs.splice(index, 1);
                    }
                }
                const d = Object.assign({}, pageKey);
                d.id = null;
                d.isactive = true;
                formObj.pageConfigs.push(d);
            }
            else {
                formObj.pageConfigs.push(pageKey);
            }
        }
        // still existconfig length
        if (existPageConfigs.length) {
            existPageConfigs.map(t => {
                t.isactive = false;
                formObj.pageConfigs.push(t);
                return t;
            });
        }
    }
    pageAccessCheck(pageAccess) {
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
    }
    setPolicyObj(formObj, selectedData, id) {
        formObj.id = id;
        formObj.description = selectedData[0]['description'];
        formObj.policygroupname = selectedData[0]['policygroupname'];
    }
    loadAccessForFields(access, selectedData, formObj, id, selectedFieldData, pageData) {
        // console.log(selectedData)
        const assetConfigs = selectedData[0]['assetConfigs'].filter(key => key.modulekey !== null);
        // console.log('------------')
        const selectedModule = pageData.filter(key => key.id === access.fpages[0]['id']);
        // console.log(access.fieldLevelData)
        selectedFieldData =
            access.fieldLevelData !== null ? this.setSelectedFieldPage(access.fieldLevelData, selectedFieldData) : [];
        // console.log(selectedData, assetConfigs)
        for (const selectedField of selectedFieldData) {
            if (selectedField.access === null) {
                // continue;
            }
            console.log(selectedField);
            let isfull = false;
            let ishide = false;
            let isread = false;
            let isreadwrite = false;
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
            const aConfigs = {
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
    checkExistAsset(assetConfigs, selectedField, aConfigs, formObj) {
        if (assetConfigs.length) {
            const existIds = assetConfigs.map(p => p.assetid);
            const chkPage = existIds.includes(selectedField['assetid']);
            if (chkPage) {
                const index = existIds.indexOf(selectedField['assetid']);
                if (index > -1) {
                    //if found
                    aConfigs.id = assetConfigs[index]['id'];
                    aConfigs.isactive = false;
                    formObj.assetConfigs.push(aConfigs);
                    assetConfigs.splice(index, 1);
                }
            }
            const d = Object.assign({}, aConfigs);
            d.isactive = true;
            d.id = null;
            formObj.assetConfigs.push(d);
        }
        else {
            formObj.assetConfigs.push(aConfigs);
        }
    }
    setRoleObj(formObj, selectedData, roleid, policyid) {
        formObj.id = roleid;
        formObj.rolekey = selectedData[0]['rolekey'];
        formObj.rolename = selectedData[0]['rolename'];
        formObj.effectivedate = selectedData[0]['effectivedate'];
        formObj.description = selectedData[0]['description'];
        // loop the policy group
        const id = policyid;
        const existRolePolicyConfig = selectedData[0]['rolePolicyGroupConfigs'];
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                roleid: roleid // role id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
                    if (index > -1) {
                        //if found
                        rpolicyConfig.id = existRolePolicyConfig[index]['id'];
                        existRolePolicyConfig.splice(index, 1);
                    }
                }
            }
            formObj.rolePolicyGroupConfigs.push(rpolicyConfig);
        }
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.rolePolicyGroupConfigs.push(t);
                return t;
            });
        }
    }
    setUserObj(formObj, selectedData, userId, id, roleids) {
        // loop the policy group
        const existRolePolicyConfig = selectedData[0]['policyGroupConfigs'];
        this.getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj);
        // still existconfig length
        if (existRolePolicyConfig.length) {
            existRolePolicyConfig.map(t => {
                t.isactive = false;
                formObj.policyGroupConfigs.push(t);
                return t;
            });
        }
        // loop the role group
        // const roleids = this.rbacForm.get('roleid').value;
        const existRoleId = selectedData[0]['roleConfigs'];
        for (const role of existRoleId) {
            const chkRoleData = roleids.includes(role['roleid']);
            const roleGrp = {
                id: role['id'],
                isactive: false,
                isdefaultrole: role['isdefaultrole'],
                userid: userId,
                roleid: role['roleid'],
                effectivedate: role['effectivedate']
            };
            if (chkRoleData) {
                const index1 = roleids.indexOf(role['roleid']);
                if (index1 > -1) {
                    //if found
                    roleids.splice(index1, 1);
                }
                roleGrp.isactive = true;
            }
            formObj.roleConfigs.push(roleGrp);
        }
        // check new roles group ids
        if (roleids.length) {
            for (const roleId of roleids) {
                const roleGrp = {
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
    }
    getCheckPolicyConfig(id, userId, existRolePolicyConfig, formObj) {
        for (const item of id) {
            const rpolicyConfig = {
                id: null,
                isactive: true,
                policygroupid: item,
                userid: userId // user id
            };
            // check exist page length
            if (existRolePolicyConfig.length) {
                const existIds = existRolePolicyConfig.map(p => p.policygroupid);
                const chkPage = existIds.includes(item);
                if (chkPage) {
                    const index = existIds.indexOf(item);
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
    setSelectedFieldPage(updateArray, selectedFieldData) {
        // console.log('=========>', updateArray, selectedFieldData)
        if (updateArray === null || updateArray === void 0 ? void 0 : updateArray.length) {
            if ((selectedFieldData === null || selectedFieldData === void 0 ? void 0 : selectedFieldData.length) >= updateArray.length) {
                selectedFieldData = this.updateDuplicatesinArray([...selectedFieldData], [...updateArray]);
                return selectedFieldData;
            }
            else {
                selectedFieldData = [...updateArray];
                return selectedFieldData;
            }
        }
    }
    updateDuplicatesinArray(origArr, updatingArr) {
        const updatingArrids = new Set(updatingArr.map(ele => ele.assetid));
        return [...updatingArr, ...origArr.filter(ele => !updatingArrids.has(ele.assetid))];
    }
    getMostFrequentEle(arr) {
        const hashMap = arr.reduce((acc, val) => {
            acc[String(val)] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(hashMap).reduce((a, b) => (hashMap[a] > hashMap[b] ? a : b));
    }
    getAccessArrayOnClick(pagesFromField, pageData, selectedFieldData, savedPageAccessPatching, existingValue) {
        var _a, _b, _c, _d;
        const accessArray = [];
        for (let i = 0; i < (pagesFromField === null || pagesFromField === void 0 ? void 0 : pagesFromField.length); i++) {
            const pageName = pageData.filter(key => key.id === pagesFromField[i]);
            const fieldLevelExist = selectedFieldData.filter(ele => ele.pageId == pagesFromField[i]);
            const pageAccessValue = this.checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i);
            accessArray.push(new FormGroup({
                pageName: new FormControl((_a = pageName[0]) === null || _a === void 0 ? void 0 : _a.pagename),
                pageid: new FormControl(pagesFromField[i]),
                pageAccess: new FormControl(pageAccessValue ? pageAccessValue : '2'),
                validity: new FormControl((((_b = existingValue[i]) === null || _b === void 0 ? void 0 : _b.validity) && String(existingValue[i].validity)) || '0'),
                condition: new FormControl((((_c = existingValue[i]) === null || _c === void 0 ? void 0 : _c.condition) && existingValue[i].condition) || 'always'),
                fallbackTo: new FormControl((((_d = existingValue[i]) === null || _d === void 0 ? void 0 : _d.condition) && existingValue[i].fallbackTo) || 'n')
            }));
        }
        return accessArray;
    }
    checkFieldLevelExist(fieldLevelExist, savedPageAccessPatching, pagesFromField, existingValue, i) {
        var _a, _b;
        let pageAccessValue;
        if ((fieldLevelExist === null || fieldLevelExist === void 0 ? void 0 : fieldLevelExist.length) && savedPageAccessPatching) {
            pageAccessValue = this.getMostFrequentEle((_a = fieldLevelExist === null || fieldLevelExist === void 0 ? void 0 : fieldLevelExist.filter(ele => (ele.pageId = pagesFromField[i]))) === null || _a === void 0 ? void 0 : _a.map(e => (e.access ? Number(e.access) : 0)));
        }
        else {
            pageAccessValue = (_b = existingValue === null || existingValue === void 0 ? void 0 : existingValue.find(ele => ele.pageid === pagesFromField[i])) === null || _b === void 0 ? void 0 : _b.pageAccess;
        }
        return pageAccessValue;
    }
    // This function for field level access
    getAccess(access, fieldPageLevel) {
        let accessField;
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
    }
    // This function for page level access
    getPageAccess(access) {
        let accessField;
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
    }
    getOrganizationPage(orgId) {
        return this.httpService.get(AccessManagementConfig.EndPoint.Organization.getOrganization.replace('{orgId}', orgId));
    }
    getAssetByPageId(pId) {
        return this.httpService.get(`${AccessManagementConfig.EndPoint.Asset.getPageAsset}/${pId}`);
    }
    createAsset(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.post(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAsset}`, asset);
    }
    updateAssetOnDeselect(selectedAccess, selectedId, asset) {
        let url;
        if (selectedAccess === 'user') {
            url = `org/user/${selectedId}`;
        }
        else if (selectedAccess === 'role') {
            url = `access-control/role/${selectedId}`;
        }
        else {
            url = `platform/page-designer/policygroup/${selectedId}`;
        }
        return this.httpService.patch(`/${url}/${AccessManagementConfig.EndPoint.Asset.getAssetDeselect}`, asset);
    }
    getAssetById(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = AccessManagementConfig.EndPoint.Asset.getUserAsset;
        }
        else if (selectedAccess === 'role') {
            url = AccessManagementConfig.EndPoint.Asset.getRoleAsset;
        }
        else {
            url = AccessManagementConfig.EndPoint.Asset.getPolicyGroupAsset;
        }
        return this.httpService.get(`${url}/${selectedId}`);
    }
    getPolicyGroupPage(policygroupid) {
        return this.httpService.get(`/policygroup/${policygroupid}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    getDynamicPage(selectedAccess, selectedId) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.get(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`);
    }
    updateDynamicPage(selectedAccess, selectedId, pageData) {
        let url;
        if (selectedAccess === 'user') {
            url = 'org/user';
        }
        else if (selectedAccess === 'role') {
            url = 'access-control/role';
        }
        else {
            url = 'platform/page-designer/policygroup';
        }
        return this.httpService.put(`/${url}/${selectedId}${AccessManagementConfig.EndPoint.Page.getPage}`, pageData);
    }
    createAccess(fieldLevelAccess, accessBy, payload, userId, roleId, policyId) {
        let url;
        const createUrl = fieldLevelAccess
            ? AccessManagementConfig.EndPoint.Asset.getAsset
            : AccessManagementConfig.EndPoint.Page.getPage;
        // check only policy group
        if (accessBy === '3') {
            url = `${AccessManagementConfig.EndPoint.PolicyGroup.getPolicyGroup}${policyId ? policyId : '0'}${createUrl}`;
        }
        // check persona with policy group
        if (accessBy === '2') {
            url = `${AccessManagementConfig.EndPoint.Role.getRole}${roleId ? roleId : '0'}${createUrl}`;
        }
        // check user, persona with policy group
        if (accessBy === '1') {
            url = `${AccessManagementConfig.EndPoint.User.getUser}${userId ? userId : '0'}${createUrl}`;
        }
        return this.httpService.post(url, payload);
    }
    getApplicationAccess() {
        return this.httpService.get('/applicationaccess/');
    }
}
PageAccessService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageAccessService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
PageAccessService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageAccessService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PageAccessService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1hY2Nlc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS91cmxzL3BhZ2UtYWNjZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7QUFNdkYsTUFBTSxPQUFPLGlCQUFpQjtJQVM1QixZQUFvQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFSbkQsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDckQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7YUFDdEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxRQUFRO1FBQ3JFLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLE1BQU0sS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN0QixNQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxF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QUFLLEdBQUcsRUFBRTtZQUNwQixHQUFHLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDO1NBQzdGO1FBQ0Qsd0NBQXdDO1FBQ3hDLElBQUksUUFBUSxLQUFLLEdBQUcsRUFBRTtZQUNwQixHQUFHLEdBQUcsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDO1NBQzdGO1FBQ0QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7K0dBN2lCVSxpQkFBaUI7bUhBQWpCLGlCQUFpQixjQUZoQixNQUFNOzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFjY2Vzc01hbmFnZW1lbnRDb25maWcgfSBmcm9tICcuLi8uLi9AY29yZS91cmxzL2FjY2Vzcy1tYW5hZ2VtZW50LXVybC5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUFjY2Vzc1NlcnZpY2Uge1xyXG4gIGlzZnVsbCA9IGZhbHNlO1xyXG4gIGlzaGlkZSA9IGZhbHNlO1xyXG4gIGlzcmVhZCA9IGZhbHNlO1xyXG4gIGlzcmVhZHdyaXRlID0gZmFsc2U7XHJcbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHtcclxuICAvLyAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsXHJcbiAgLy8gfVxyXG4gIGh0dHBTZXJ2aWNlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZpY2UgPSByZXNbJ0hUVFBTRVJWSUNFJ11cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgLyoqXHJcbiAgICogd2hlbiB1c2VyIHNlbGVjdGVkIHBvbGljeVxyXG4gICAqIEBwYXJhbSBhY2Nlc3MgUmF3IHZhbHVyIG9mIFJCYWMgZm9ybVxyXG4gICAqIEByZXR1cm5zIGZvcm0gYXJyYXkgb2YgREFcclxuICAgKiBAY2hpbGRGdW5jdGlvbiBvZiBzYXZlUmJhY1xyXG4gICAqL1xyXG4gIGFjY2Vzc0J5UG9saWN5KGFjY2VzcywgaWQsIHBvbGljeUdyb3VwRGF0YSwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKTogYW55W10ge1xyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGlkKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkRGF0YSA9IHBvbGljeUdyb3VwRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gdmFsdWUpO1xyXG4gICAgICBjb25zdCBmb3JtT2JqID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgcG9saWN5Z3JvdXBuYW1lOiAnJyxcclxuICAgICAgICBwYWdlQ29uZmlnczogW10sXHJcbiAgICAgICAgYXNzZXRDb25maWdzOiBbXVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNldFBvbGljeU9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIHZhbHVlKTtcclxuICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yUGFnZShhY2Nlc3MsIHNlbGVjdGVkRGF0YSwgZm9ybU9iaiwgdmFsdWUsIHBhZ2VEYXRhKTtcclxuICAgICAgaWYgKGFjY2Vzcy5maWVsZExldmVsRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JGaWVsZHMoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIHZhbHVlLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bGxBcnJheS5wdXNoKGZvcm1PYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdWxsQXJyYXk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB3aGVuIHVzZXIgc2VsZWN0ZWQgUGVyc29uYVxyXG4gICAqIEBwYXJhbSBhY2Nlc3MgUmF3IHZhbHVyIG9mIFJCYWMgZm9ybVxyXG4gICAqIEByZXR1cm5zIGZvcm0gYXJyYXkgb2YgREFcclxuICAgKiBAY2hpbGRGdW5jdGlvbiBvZiBzYXZlUmJhY1xyXG4gICAqL1xyXG4gIGFjY2Vzc0J5UGVyc29uYShhY2Nlc3MsIHBlcnNvbmFJZCwgaWQsIHJvbGVBZGRlZERhdGEsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSkge1xyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gW107XHJcbiAgICAvLyBjb25zdCBwZXJzb25hSWQgPSB0aGlzLnJiYWNGb3JtLmdldCgncm9sZWlkJykudmFsdWU7XHJcbiAgICAvLyBjb25zdCBwZXJzb25hSWQgPSB0aGlzLnJiYWNGb3JtLmdldCgncm9sZWlkJykudmFsdWU7XHJcbiAgICBjb25zdCBmb3JtT2JqID0ge1xyXG4gICAgICBpZDogJycsXHJcbiAgICAgIHJvbGVrZXk6ICcnLFxyXG4gICAgICByb2xlbmFtZTogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgZWZmZWN0aXZlZGF0ZTogJycsXHJcbiAgICAgIHBhZ2VDb25maWdzOiBbXSxcclxuICAgICAgYXNzZXRDb25maWdzOiBbXSxcclxuICAgICAgcm9sZVBvbGljeUdyb3VwQ29uZmlnczogW11cclxuICAgIH07XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBlcnNvbmFJZCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGEgPSByb2xlQWRkZWREYXRhLmZpbHRlcihrZXkgPT4ga2V5LmlkID09PSBpdGVtKTtcclxuICAgICAgdGhpcy5zZXRSb2xlT2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgaXRlbSwgaWQpO1xyXG4gICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JQYWdlKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBwYWdlRGF0YSk7XHJcbiAgICAgIGlmIChhY2Nlc3MuZmllbGRMZXZlbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpdGVtLCBzZWxlY3RlZEZpZWxkRGF0YSwgcGFnZURhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bGxBcnJheS5wdXNoKGZvcm1PYmopO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bGxBcnJheTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHdoZW4gdXNlciBzZWxlY3RlZCBVc2VyXHJcbiAgICogQHBhcmFtIGFjY2VzcyBSYXcgdmFsdXIgb2YgUkJhYyBmb3JtXHJcbiAgICogQHJldHVybnMgZm9ybSBhcnJheSBvZiBEQVxyXG4gICAqIEBjaGlsZEZ1bmN0aW9uIG9mIHNhdmVSYmFjXHJcbiAgICovXHJcbiAgYWNjZXNzQnlVc2VyKGFjY2VzcywgdXNlcklkLCBpZCwgcm9sZWlkcywgdXNlckxpc3QsIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSkge1xyXG4gICAgY29uc3QgZnVsbEFycmF5ID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHVzZXJJZCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZERhdGEgPSB1c2VyTGlzdC5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gaXRlbSk7XHJcbiAgICAgIGNvbnN0IGZvcm1PYmogPSB7IC4uLnNlbGVjdGVkRGF0YVswXSB9O1xyXG4gICAgICBmb3JtT2JqLnBhZ2VDb25maWdzID0gW107XHJcbiAgICAgIGZvcm1PYmouYXNzZXRDb25maWdzID0gW107XHJcbiAgICAgIGZvcm1PYmoucG9saWN5R3JvdXBDb25maWdzID0gW107XHJcbiAgICAgIGZvcm1PYmoucm9sZUNvbmZpZ3MgPSBbXTtcclxuICAgICAgY29uc29sZS5sb2coJz09PT09PScpO1xyXG4gICAgICB0aGlzLnNldFVzZXJPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCBpdGVtLCBpZCwgcm9sZWlkcyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT0xJyk7XHJcbiAgICAgIHRoaXMubG9hZEFjY2Vzc0ZvclBhZ2UoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGl0ZW0sIHBhZ2VEYXRhKTtcclxuICAgICAgY29uc29sZS5sb2coJz09PT09PTInKTtcclxuICAgICAgaWYgKGFjY2Vzcy5maWVsZExldmVsRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxvYWRBY2Nlc3NGb3JGaWVsZHMoYWNjZXNzLCBzZWxlY3RlZERhdGEsIGZvcm1PYmosIGl0ZW0sIHNlbGVjdGVkRmllbGREYXRhLCBwYWdlRGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgZnVsbEFycmF5LnB1c2goZm9ybU9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bGxBcnJheTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGFjY2VzcyBsaXN0IGZvciBkYXNoYm9hcmQgYWNjZXNzXHJcbiAgICogQHBhcmFtIGFjY2Vzc1xyXG4gICAqIEBwYXJhbSBhc3NldERhc2hCb2FyZENvbmZpZ3NcclxuICAgKiBAcGFyYW0gZm9ybU9ialxyXG4gICAqIEBwYXJhbSBpZFxyXG4gICAqL1xyXG4gIGxvYWRBY2Nlc3NGb3JQYWdlKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpZCwgcGFnZURhdGEpIHtcclxuICAgIGNvbnN0IGV4aXN0UGFnZUNvbmZpZ3MgPSBzZWxlY3RlZERhdGFbMF1bJ3BhZ2VDb25maWdzJ107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYWNjZXNzLnBhZ2VMZXZlbERhdGEpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRNb2R1bGUgPSBwYWdlRGF0YS5maWx0ZXIoa2V5ID0+IGtleS5pZCA9PT0gaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICBjb25zdCBwYWdlQWNjZXNzID0gYWNjZXNzLnBhZ2VMZXZlbERhdGEuZmlsdGVyKGtleSA9PiBrZXkucGFnZWlkID09PSBpdGVtWydwYWdlaWQnXSk7XHJcbiAgICAgIHRoaXMucGFnZUFjY2Vzc0NoZWNrKHBhZ2VBY2Nlc3MpO1xyXG4gICAgICBjb25zdCBwYWdlS2V5ID0ge1xyXG4gICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGlzZnVsbDogdGhpcy5pc2Z1bGwsXHJcbiAgICAgICAgaXNoaWRlOiB0aGlzLmlzaGlkZSxcclxuICAgICAgICBpc3JlYWQ6IHRoaXMuaXNyZWFkLFxyXG4gICAgICAgIGlzcmVhZHdyaXRlOiB0aGlzLmlzcmVhZHdyaXRlLFxyXG4gICAgICAgIHBhZ2VpZDogaXRlbVsncGFnZWlkJ10sXHJcbiAgICAgICAgcG9saWN5Z3JvdXBpZDogaWQsXHJcbiAgICAgICAgbW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnbW9kdWxla2V5J10sXHJcbiAgICAgICAgc3VibW9kdWxla2V5OiBzZWxlY3RlZE1vZHVsZVswXVsnc3VibW9kdWxla2V5J11cclxuICAgICAgfTtcclxuICAgICAgLy8gY2hlY2sgZXhpc3QgcGFnZSBsZW5ndGhcclxuICAgICAgaWYgKGV4aXN0UGFnZUNvbmZpZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RJZHMgPSBleGlzdFBhZ2VDb25maWdzLm1hcChwID0+IHAucGFnZWlkKTtcclxuICAgICAgICBjb25zdCBjaGtQYWdlID0gZXhpc3RJZHMuaW5jbHVkZXMoaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICAgIGlmIChjaGtQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGV4aXN0SWRzLmluZGV4T2YoaXRlbVsncGFnZWlkJ10pO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgLy9pZiBmb3VuZFxyXG4gICAgICAgICAgICBwYWdlS2V5LmlkID0gZXhpc3RQYWdlQ29uZmlnc1tpbmRleF1bJ2lkJ107XHJcbiAgICAgICAgICAgIHBhZ2VLZXkuaXNhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9ybU9iai5wYWdlQ29uZmlncy5wdXNoKHBhZ2VLZXkpO1xyXG4gICAgICAgICAgICBleGlzdFBhZ2VDb25maWdzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGQgPSB7IC4uLnBhZ2VLZXkgfTtcclxuICAgICAgICBkLmlkID0gbnVsbDtcclxuICAgICAgICBkLmlzYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBmb3JtT2JqLnBhZ2VDb25maWdzLnB1c2goZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9ybU9iai5wYWdlQ29uZmlncy5wdXNoKHBhZ2VLZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzdGlsbCBleGlzdGNvbmZpZyBsZW5ndGhcclxuICAgIGlmIChleGlzdFBhZ2VDb25maWdzLmxlbmd0aCkge1xyXG4gICAgICBleGlzdFBhZ2VDb25maWdzLm1hcCh0ID0+IHtcclxuICAgICAgICB0LmlzYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZm9ybU9iai5wYWdlQ29uZmlncy5wdXNoKHQpO1xyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcGFnZUFjY2Vzc0NoZWNrKHBhZ2VBY2Nlc3MpIHtcclxuICAgIGlmIChwYWdlQWNjZXNzWzBdLnBhZ2VBY2Nlc3MgPT09ICcxJykge1xyXG4gICAgICB0aGlzLmlzZnVsbCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2VBY2Nlc3NbMF0ucGFnZUFjY2VzcyA9PT0gJzQnKSB7XHJcbiAgICAgIHRoaXMuaXNoaWRlID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocGFnZUFjY2Vzc1swXS5wYWdlQWNjZXNzID09PSAnMycpIHtcclxuICAgICAgdGhpcy5pc3JlYWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlQWNjZXNzWzBdLnBhZ2VBY2Nlc3MgPT09ICcyJykge1xyXG4gICAgICB0aGlzLmlzcmVhZHdyaXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0UG9saWN5T2JqKGZvcm1PYmosIHNlbGVjdGVkRGF0YSwgaWQpIHtcclxuICAgIGZvcm1PYmouaWQgPSBpZDtcclxuICAgIGZvcm1PYmouZGVzY3JpcHRpb24gPSBzZWxlY3RlZERhdGFbMF1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICBmb3JtT2JqLnBvbGljeWdyb3VwbmFtZSA9IHNlbGVjdGVkRGF0YVswXVsncG9saWN5Z3JvdXBuYW1lJ107XHJcbiAgfVxyXG5cclxuICBsb2FkQWNjZXNzRm9yRmllbGRzKGFjY2Vzcywgc2VsZWN0ZWREYXRhLCBmb3JtT2JqLCBpZCwgc2VsZWN0ZWRGaWVsZERhdGEsIHBhZ2VEYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZERhdGEpXHJcbiAgICBjb25zdCBhc3NldENvbmZpZ3MgPSBzZWxlY3RlZERhdGFbMF1bJ2Fzc2V0Q29uZmlncyddLmZpbHRlcihrZXkgPT4ga2V5Lm1vZHVsZWtleSAhPT0gbnVsbCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tJylcclxuICAgIGNvbnN0IHNlbGVjdGVkTW9kdWxlID0gcGFnZURhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IGFjY2Vzcy5mcGFnZXNbMF1bJ2lkJ10pO1xyXG4gICAgLy8gY29uc29sZS5sb2coYWNjZXNzLmZpZWxkTGV2ZWxEYXRhKVxyXG4gICAgc2VsZWN0ZWRGaWVsZERhdGEgPVxyXG4gICAgICBhY2Nlc3MuZmllbGRMZXZlbERhdGEgIT09IG51bGwgPyB0aGlzLnNldFNlbGVjdGVkRmllbGRQYWdlKGFjY2Vzcy5maWVsZExldmVsRGF0YSwgc2VsZWN0ZWRGaWVsZERhdGEpIDogW107XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZERhdGEsIGFzc2V0Q29uZmlncylcclxuICAgIGZvciAoY29uc3Qgc2VsZWN0ZWRGaWVsZCBvZiBzZWxlY3RlZEZpZWxkRGF0YSkge1xyXG4gICAgICBpZiAoc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09IG51bGwpIHtcclxuICAgICAgICAvLyBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEZpZWxkKTtcclxuICAgICAgbGV0IGlzZnVsbCA9IGZhbHNlO1xyXG4gICAgICBsZXQgaXNoaWRlID0gZmFsc2U7XHJcbiAgICAgIGxldCBpc3JlYWQgPSBmYWxzZTtcclxuICAgICAgbGV0IGlzcmVhZHdyaXRlID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0ZWRGaWVsZC5hY2Nlc3MgPT09ICcyJyB8fCBzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzEnKSB7XHJcbiAgICAgICAgaXNmdWxsID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzQnKSB7XHJcbiAgICAgICAgaXNoaWRlID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzMnKSB7XHJcbiAgICAgICAgaXNyZWFkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZEZpZWxkLmFjY2VzcyA9PT0gJzInKSB7XHJcbiAgICAgICAgaXNyZWFkd3JpdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFDb25maWdzID0ge1xyXG4gICAgICAgIGlkOiBzZWxlY3RlZEZpZWxkWydpZCddID8gc2VsZWN0ZWRGaWVsZFsnaWQnXSA6IG51bGwsXHJcbiAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgaXNmdWxsOiBpc2Z1bGwsXHJcbiAgICAgICAgaXNoaWRlOiBpc2hpZGUsXHJcbiAgICAgICAgaXNyZWFkOiBpc3JlYWQsXHJcbiAgICAgICAgaXNyZWFkd3JpdGU6IGlzcmVhZHdyaXRlLFxyXG4gICAgICAgIGFzc2V0aWQ6IHNlbGVjdGVkRmllbGRbJ2Fzc2V0aWQnXSxcclxuICAgICAgICBwb2xpY3lncm91cGlkOiBpZCxcclxuICAgICAgICBwYWdlaWQ6IHNlbGVjdGVkRmllbGRbJ3BhZ2VJZCddID8gc2VsZWN0ZWRGaWVsZFsncGFnZUlkJ10gOiBhY2Nlc3MuZnBhZ2VzWzBdWydpZCddLFxyXG4gICAgICAgIG1vZHVsZWtleTogc2VsZWN0ZWRNb2R1bGVbMF1bJ21vZHVsZWtleSddLFxyXG4gICAgICAgIHN1Ym1vZHVsZWtleTogc2VsZWN0ZWRNb2R1bGVbMF1bJ3N1Ym1vZHVsZWtleSddXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIGNoZWNrIGV4aXN0IHBhZ2UgbGVuZ3RoXHJcbiAgICAgIHRoaXMuY2hlY2tFeGlzdEFzc2V0KGFzc2V0Q29uZmlncywgc2VsZWN0ZWRGaWVsZCwgYUNvbmZpZ3MsIGZvcm1PYmopO1xyXG4gICAgfVxyXG4gIH1cclxuICBjaGVja0V4aXN0QXNzZXQoYXNzZXRDb25maWdzLCBzZWxlY3RlZEZpZWxkLCBhQ29uZmlncywgZm9ybU9iaikge1xyXG4gICAgaWYgKGFzc2V0Q29uZmlncy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZXhpc3RJZHMgPSBhc3NldENvbmZpZ3MubWFwKHAgPT4gcC5hc3NldGlkKTtcclxuICAgICAgY29uc3QgY2hrUGFnZSA9IGV4aXN0SWRzLmluY2x1ZGVzKHNlbGVjdGVkRmllbGRbJ2Fzc2V0aWQnXSk7XHJcbiAgICAgIGlmIChjaGtQYWdlKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBleGlzdElkcy5pbmRleE9mKHNlbGVjdGVkRmllbGRbJ2Fzc2V0aWQnXSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIC8vaWYgZm91bmRcclxuICAgICAgICAgIGFDb25maWdzLmlkID0gYXNzZXRDb25maWdzW2luZGV4XVsnaWQnXTtcclxuICAgICAgICAgIGFDb25maWdzLmlzYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBmb3JtT2JqLmFzc2V0Q29uZmlncy5wdXNoKGFDb25maWdzKTtcclxuICAgICAgICAgIGFzc2V0Q29uZmlncy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkID0geyAuLi5hQ29uZmlncyB9O1xyXG4gICAgICBkLmlzYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgZC5pZCA9IG51bGw7XHJcbiAgICAgIGZvcm1PYmouYXNzZXRDb25maWdzLnB1c2goZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtT2JqLmFzc2V0Q29uZmlncy5wdXNoKGFDb25maWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFJvbGVPYmooZm9ybU9iaiwgc2VsZWN0ZWREYXRhLCByb2xlaWQsIHBvbGljeWlkKSB7XHJcbiAgICBmb3JtT2JqLmlkID0gcm9sZWlkO1xyXG4gICAgZm9ybU9iai5yb2xla2V5ID0gc2VsZWN0ZWREYXRhWzBdWydyb2xla2V5J107XHJcbiAgICBmb3JtT2JqLnJvbGVuYW1lID0gc2VsZWN0ZWREYXRhWzBdWydyb2xlbmFtZSddO1xyXG4gICAgZm9ybU9iai5lZmZlY3RpdmVkYXRlID0gc2VsZWN0ZWREYXRhWzBdWydlZmZlY3RpdmVkYXRlJ107XHJcbiAgICBmb3JtT2JqLmRlc2NyaXB0aW9uID0gc2VsZWN0ZWREYXRhWzBdWydkZXNjcmlwdGlvbiddO1xyXG4gICAgLy8gbG9vcCB0aGUgcG9saWN5IGdyb3VwXHJcbiAgICBjb25zdCBpZCA9IHBvbGljeWlkO1xyXG4gICAgY29uc3QgZXhpc3RSb2xlUG9saWN5Q29uZmlnID0gc2VsZWN0ZWREYXRhWzBdWydyb2xlUG9saWN5R3JvdXBDb25maWdzJ107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaWQpIHtcclxuICAgICAgY29uc3QgcnBvbGljeUNvbmZpZyA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICBpc2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBwb2xpY3lncm91cGlkOiBpdGVtLCAvLyBncm91cCBwb2xpY3kgaWRcclxuICAgICAgICByb2xlaWQ6IHJvbGVpZCAvLyByb2xlIGlkXHJcbiAgICAgIH07XHJcbiAgICAgIC8vIGNoZWNrIGV4aXN0IHBhZ2UgbGVuZ3RoXHJcbiAgICAgIGlmIChleGlzdFJvbGVQb2xpY3lDb25maWcubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RJZHMgPSBleGlzdFJvbGVQb2xpY3lDb25maWcubWFwKHAgPT4gcC5wb2xpY3lncm91cGlkKTtcclxuICAgICAgICBjb25zdCBjaGtQYWdlID0gZXhpc3RJZHMuaW5jbHVkZXMoaXRlbSk7XHJcbiAgICAgICAgaWYgKGNoa1BhZ2UpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXhpc3RJZHMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vaWYgZm91bmRcclxuICAgICAgICAgICAgcnBvbGljeUNvbmZpZy5pZCA9IGV4aXN0Um9sZVBvbGljeUNvbmZpZ1tpbmRleF1bJ2lkJ107XHJcbiAgICAgICAgICAgIGV4aXN0Um9sZVBvbGljeUNvbmZpZy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3JtT2JqLnJvbGVQb2xpY3lHcm91cENvbmZpZ3MucHVzaChycG9saWN5Q29uZmlnKTtcclxuICAgIH1cclxuICAgIC8vIHN0aWxsIGV4aXN0Y29uZmlnIGxlbmd0aFxyXG4gICAgaWYgKGV4aXN0Um9sZVBvbGljeUNvbmZpZy5sZW5ndGgpIHtcclxuICAgICAgZXhpc3RSb2xlUG9saWN5Q29uZmlnLm1hcCh0ID0+IHtcclxuICAgICAgICB0LmlzYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZm9ybU9iai5yb2xlUG9saWN5R3JvdXBDb25maWdzLnB1c2godCk7XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VXNlck9iaihmb3JtT2JqLCBzZWxlY3RlZERhdGEsIHVzZXJJZCwgaWQsIHJvbGVpZHMpIHtcclxuICAgIC8vIGxvb3AgdGhlIHBvbGljeSBncm91cFxyXG4gICAgY29uc3QgZXhpc3RSb2xlUG9saWN5Q29uZmlnID0gc2VsZWN0ZWREYXRhWzBdWydwb2xpY3lHcm91cENvbmZpZ3MnXTtcclxuICAgIHRoaXMuZ2V0Q2hlY2tQb2xpY3lDb25maWcoaWQsIHVzZXJJZCwgZXhpc3RSb2xlUG9saWN5Q29uZmlnLCBmb3JtT2JqKTtcclxuICAgIC8vIHN0aWxsIGV4aXN0Y29uZmlnIGxlbmd0aFxyXG4gICAgaWYgKGV4aXN0Um9sZVBvbGljeUNvbmZpZy5sZW5ndGgpIHtcclxuICAgICAgZXhpc3RSb2xlUG9saWN5Q29uZmlnLm1hcCh0ID0+IHtcclxuICAgICAgICB0LmlzYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZm9ybU9iai5wb2xpY3lHcm91cENvbmZpZ3MucHVzaCh0KTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBsb29wIHRoZSByb2xlIGdyb3VwXHJcbiAgICAvLyBjb25zdCByb2xlaWRzID0gdGhpcy5yYmFjRm9ybS5nZXQoJ3JvbGVpZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgZXhpc3RSb2xlSWQgPSBzZWxlY3RlZERhdGFbMF1bJ3JvbGVDb25maWdzJ107XHJcbiAgICBmb3IgKGNvbnN0IHJvbGUgb2YgZXhpc3RSb2xlSWQpIHtcclxuICAgICAgY29uc3QgY2hrUm9sZURhdGEgPSByb2xlaWRzLmluY2x1ZGVzKHJvbGVbJ3JvbGVpZCddKTtcclxuICAgICAgY29uc3Qgcm9sZUdycCA9IHtcclxuICAgICAgICBpZDogcm9sZVsnaWQnXSxcclxuICAgICAgICBpc2FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgaXNkZWZhdWx0cm9sZTogcm9sZVsnaXNkZWZhdWx0cm9sZSddLFxyXG4gICAgICAgIHVzZXJpZDogdXNlcklkLFxyXG4gICAgICAgIHJvbGVpZDogcm9sZVsncm9sZWlkJ10sXHJcbiAgICAgICAgZWZmZWN0aXZlZGF0ZTogcm9sZVsnZWZmZWN0aXZlZGF0ZSddXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChjaGtSb2xlRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4MSA9IHJvbGVpZHMuaW5kZXhPZihyb2xlWydyb2xlaWQnXSk7XHJcbiAgICAgICAgaWYgKGluZGV4MSA+IC0xKSB7XHJcbiAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICByb2xlaWRzLnNwbGljZShpbmRleDEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb2xlR3JwLmlzYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBmb3JtT2JqLnJvbGVDb25maWdzLnB1c2gocm9sZUdycCk7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayBuZXcgcm9sZXMgZ3JvdXAgaWRzXHJcbiAgICBpZiAocm9sZWlkcy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChjb25zdCByb2xlSWQgb2Ygcm9sZWlkcykge1xyXG4gICAgICAgIGNvbnN0IHJvbGVHcnAgPSB7XHJcbiAgICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICAgIGlzYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgaXNkZWZhdWx0cm9sZTogZmFsc2UsXHJcbiAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcclxuICAgICAgICAgIHJvbGVpZDogcm9sZUlkLFxyXG4gICAgICAgICAgZWZmZWN0aXZlZGF0ZTogbmV3IERhdGUoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9ybU9iai5yb2xlQ29uZmlncy5wdXNoKHJvbGVHcnApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldENoZWNrUG9saWN5Q29uZmlnKGlkLCB1c2VySWQsIGV4aXN0Um9sZVBvbGljeUNvbmZpZywgZm9ybU9iaikge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGlkKSB7XHJcbiAgICAgIGNvbnN0IHJwb2xpY3lDb25maWcgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgaXNhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgcG9saWN5Z3JvdXBpZDogaXRlbSwgLy8gZ3JvdXAgcG9saWN5IGlkXHJcbiAgICAgICAgdXNlcmlkOiB1c2VySWQgLy8gdXNlciBpZFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBjaGVjayBleGlzdCBwYWdlIGxlbmd0aFxyXG4gICAgICBpZiAoZXhpc3RSb2xlUG9saWN5Q29uZmlnLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0SWRzID0gZXhpc3RSb2xlUG9saWN5Q29uZmlnLm1hcChwID0+IHAucG9saWN5Z3JvdXBpZCk7XHJcbiAgICAgICAgY29uc3QgY2hrUGFnZSA9IGV4aXN0SWRzLmluY2x1ZGVzKGl0ZW0pO1xyXG4gICAgICAgIGlmIChjaGtQYWdlKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGV4aXN0SWRzLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAvL2lmIGZvdW5kXHJcbiAgICAgICAgICAgIHJwb2xpY3lDb25maWcuaWQgPSBleGlzdFJvbGVQb2xpY3lDb25maWdbaW5kZXhdWydpZCddO1xyXG4gICAgICAgICAgICBleGlzdFJvbGVQb2xpY3lDb25maWcuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9ybU9iai5wb2xpY3lHcm91cENvbmZpZ3MucHVzaChycG9saWN5Q29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcbiAgc2V0U2VsZWN0ZWRGaWVsZFBhZ2UodXBkYXRlQXJyYXksIHNlbGVjdGVkRmllbGREYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT09PicsIHVwZGF0ZUFycmF5LCBzZWxlY3RlZEZpZWxkRGF0YSlcclxuICAgIGlmICh1cGRhdGVBcnJheT8ubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChzZWxlY3RlZEZpZWxkRGF0YT8ubGVuZ3RoID49IHVwZGF0ZUFycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGVjdGVkRmllbGREYXRhID0gdGhpcy51cGRhdGVEdXBsaWNhdGVzaW5BcnJheShbLi4uc2VsZWN0ZWRGaWVsZERhdGFdLCBbLi4udXBkYXRlQXJyYXldKTtcclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRGaWVsZERhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VsZWN0ZWRGaWVsZERhdGEgPSBbLi4udXBkYXRlQXJyYXldO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZEZpZWxkRGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICB1cGRhdGVEdXBsaWNhdGVzaW5BcnJheShvcmlnQXJyOiBhbnlbXSwgdXBkYXRpbmdBcnI6IGFueVtdKTogYW55W10ge1xyXG4gICAgY29uc3QgdXBkYXRpbmdBcnJpZHMgPSBuZXcgU2V0KHVwZGF0aW5nQXJyLm1hcChlbGUgPT4gZWxlLmFzc2V0aWQpKTtcclxuICAgIHJldHVybiBbLi4udXBkYXRpbmdBcnIsIC4uLm9yaWdBcnIuZmlsdGVyKGVsZSA9PiAhdXBkYXRpbmdBcnJpZHMuaGFzKGVsZS5hc3NldGlkKSldO1xyXG4gIH1cclxuICBnZXRNb3N0RnJlcXVlbnRFbGUoYXJyKSB7XHJcbiAgICBjb25zdCBoYXNoTWFwID0gYXJyLnJlZHVjZSgoYWNjLCB2YWwpID0+IHtcclxuICAgICAgYWNjW1N0cmluZyh2YWwpXSA9IChhY2NbdmFsXSB8fCAwKSArIDE7XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzaE1hcCkucmVkdWNlKChhLCBiKSA9PiAoaGFzaE1hcFthXSA+IGhhc2hNYXBbYl0gPyBhIDogYikpO1xyXG4gIH1cclxuICBnZXRBY2Nlc3NBcnJheU9uQ2xpY2socGFnZXNGcm9tRmllbGQsIHBhZ2VEYXRhLCBzZWxlY3RlZEZpZWxkRGF0YSwgc2F2ZWRQYWdlQWNjZXNzUGF0Y2hpbmcsIGV4aXN0aW5nVmFsdWUpIHtcclxuICAgIGNvbnN0IGFjY2Vzc0FycmF5OiBhbnkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNGcm9tRmllbGQ/Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VOYW1lID0gcGFnZURhdGEuZmlsdGVyKGtleSA9PiBrZXkuaWQgPT09IHBhZ2VzRnJvbUZpZWxkW2ldKTtcclxuICAgICAgY29uc3QgZmllbGRMZXZlbEV4aXN0ID0gc2VsZWN0ZWRGaWVsZERhdGEuZmlsdGVyKGVsZSA9PiBlbGUucGFnZUlkID09IHBhZ2VzRnJvbUZpZWxkW2ldKTtcclxuICAgICAgY29uc3QgcGFnZUFjY2Vzc1ZhbHVlID0gdGhpcy5jaGVja0ZpZWxkTGV2ZWxFeGlzdChcclxuICAgICAgICBmaWVsZExldmVsRXhpc3QsXHJcbiAgICAgICAgc2F2ZWRQYWdlQWNjZXNzUGF0Y2hpbmcsXHJcbiAgICAgICAgcGFnZXNGcm9tRmllbGQsXHJcbiAgICAgICAgZXhpc3RpbmdWYWx1ZSxcclxuICAgICAgICBpXHJcbiAgICAgICk7XHJcbiAgICAgIGFjY2Vzc0FycmF5LnB1c2goXHJcbiAgICAgICAgbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgICBwYWdlTmFtZTogbmV3IEZvcm1Db250cm9sKHBhZ2VOYW1lWzBdPy5wYWdlbmFtZSksXHJcbiAgICAgICAgICBwYWdlaWQ6IG5ldyBGb3JtQ29udHJvbChwYWdlc0Zyb21GaWVsZFtpXSksXHJcbiAgICAgICAgICBwYWdlQWNjZXNzOiBuZXcgRm9ybUNvbnRyb2wocGFnZUFjY2Vzc1ZhbHVlID8gcGFnZUFjY2Vzc1ZhbHVlIDogJzInKSxcclxuICAgICAgICAgIHZhbGlkaXR5OiBuZXcgRm9ybUNvbnRyb2woKGV4aXN0aW5nVmFsdWVbaV0/LnZhbGlkaXR5ICYmIFN0cmluZyhleGlzdGluZ1ZhbHVlW2ldLnZhbGlkaXR5KSkgfHwgJzAnKSxcclxuICAgICAgICAgIGNvbmRpdGlvbjogbmV3IEZvcm1Db250cm9sKChleGlzdGluZ1ZhbHVlW2ldPy5jb25kaXRpb24gJiYgZXhpc3RpbmdWYWx1ZVtpXS5jb25kaXRpb24pIHx8ICdhbHdheXMnKSxcclxuICAgICAgICAgIGZhbGxiYWNrVG86IG5ldyBGb3JtQ29udHJvbCgoZXhpc3RpbmdWYWx1ZVtpXT8uY29uZGl0aW9uICYmIGV4aXN0aW5nVmFsdWVbaV0uZmFsbGJhY2tUbykgfHwgJ24nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjZXNzQXJyYXk7XHJcbiAgfVxyXG5cclxuICBjaGVja0ZpZWxkTGV2ZWxFeGlzdChmaWVsZExldmVsRXhpc3QsIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nLCBwYWdlc0Zyb21GaWVsZCwgZXhpc3RpbmdWYWx1ZSwgaSkge1xyXG4gICAgbGV0IHBhZ2VBY2Nlc3NWYWx1ZTogYW55O1xyXG4gICAgaWYgKGZpZWxkTGV2ZWxFeGlzdD8ubGVuZ3RoICYmIHNhdmVkUGFnZUFjY2Vzc1BhdGNoaW5nKSB7XHJcbiAgICAgIHBhZ2VBY2Nlc3NWYWx1ZSA9IHRoaXMuZ2V0TW9zdEZyZXF1ZW50RWxlKFxyXG4gICAgICAgIGZpZWxkTGV2ZWxFeGlzdD8uZmlsdGVyKGVsZSA9PiAoZWxlLnBhZ2VJZCA9IHBhZ2VzRnJvbUZpZWxkW2ldKSk/Lm1hcChlID0+IChlLmFjY2VzcyA/IE51bWJlcihlLmFjY2VzcykgOiAwKSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhZ2VBY2Nlc3NWYWx1ZSA9IGV4aXN0aW5nVmFsdWU/LmZpbmQoZWxlID0+IGVsZS5wYWdlaWQgPT09IHBhZ2VzRnJvbUZpZWxkW2ldKT8ucGFnZUFjY2VzcztcclxuICAgIH1cclxuICAgIHJldHVybiBwYWdlQWNjZXNzVmFsdWU7XHJcbiAgfVxyXG4gIC8vIFRoaXMgZnVuY3Rpb24gZm9yIGZpZWxkIGxldmVsIGFjY2Vzc1xyXG4gIGdldEFjY2VzcyhhY2Nlc3MsZmllbGRQYWdlTGV2ZWwpIHtcclxuICAgIGxldCBhY2Nlc3NGaWVsZDogYW55O1xyXG4gICAgaWYoZmllbGRQYWdlTGV2ZWwubGVuZ3RoID09PSAwKXtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnMyc7ICAgLy8gYWNjZXNzZmllbGQgaXMgMyBmb3IgcmVhZCBsZXZlbCBhY2Nlc3NcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzInOyAvLyBhY2Nlc3NmaWVsZCBpcyAyIGZvciByZWFkd3JpdGUgbGV2ZWwgYWNjZXNzXHJcbiAgICB9O1xyXG4gICAgaWYgKGZpZWxkUGFnZUxldmVsLmxlbmd0aCA+IDAgJiYgYWNjZXNzPy5pc3JlYWR3cml0ZSkge1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICcyJztcclxuICAgIH0gZWxzZSBpZiAoYWNjZXNzPy5pc2hpZGUpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnNCc7ICAvLyBhY2Nlc3NmaWVsZCBpcyA0IGZvciBoaWRlIGxldmVsIGFjY2Vzc1xyXG4gICAgfSBlbHNlIGlmIChhY2Nlc3M/LmlzcmVhZCkge1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICczJztcclxuICAgIH0gZWxzZSBpZiAoYWNjZXNzPy5pc2Z1bGwpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnNSc7ICAvLyBhY2Nlc3NmaWVsZCBpcyA1IGZvciBmdWxsIGxldmVsIGFjY2Vzc1xyXG4gICAgfVxyXG4gICAgICBlbHNlIGlmIChmaWVsZFBhZ2VMZXZlbC5sZW5ndGggPT09IDAgJiYgYWNjZXNzPy5pc3JlYWR3cml0ZSkge1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICczJztcclxuICAgIH1cclxuICAgIHJldHVybiBhY2Nlc3NGaWVsZDtcclxuICB9XHJcblxyXG4gIC8vIFRoaXMgZnVuY3Rpb24gZm9yIHBhZ2UgbGV2ZWwgYWNjZXNzXHJcbiAgZ2V0UGFnZUFjY2VzcyhhY2Nlc3MpIHtcclxuICAgIGxldCBhY2Nlc3NGaWVsZDogYW55O1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICcyJztcclxuICAgICAgICBpZiAoYWNjZXNzPy5pc3JlYWR3cml0ZSkge1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICcyJztcclxuICAgIH0gZWxzZSBpZiAoYWNjZXNzPy5pc2hpZGUpIHtcclxuICAgICAgYWNjZXNzRmllbGQgPSAnNCc7XHJcbiAgICB9IGVsc2UgaWYgKGFjY2Vzcz8uaXNyZWFkKSB7XHJcbiAgICAgIGFjY2Vzc0ZpZWxkID0gJzMnO1xyXG4gICAgfSBlbHNlIGlmIChhY2Nlc3M/LmlzZnVsbCkge1xyXG4gICAgICBhY2Nlc3NGaWVsZCA9ICc1JztcclxuICAgIH1cclxuICAgIHJldHVybiBhY2Nlc3NGaWVsZDtcclxuICB9XHJcblxyXG4gIGdldE9yZ2FuaXphdGlvblBhZ2Uob3JnSWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuT3JnYW5pemF0aW9uLmdldE9yZ2FuaXphdGlvbi5yZXBsYWNlKCd7b3JnSWR9Jywgb3JnSWQpKTtcclxuICB9XHJcblxyXG4gIGdldEFzc2V0QnlQYWdlSWQocElkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldFBhZ2VBc3NldH0vJHtwSWR9YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVBc3NldChzZWxlY3RlZEFjY2VzczogYW55LCBzZWxlY3RlZElkOiBhbnksIGFzc2V0OiBhbnkpIHtcclxuICAgIGxldCB1cmw6IGFueTtcclxuICAgIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3VzZXInKSB7XHJcbiAgICAgIHVybCA9IGBvcmcvdXNlci8ke3NlbGVjdGVkSWR9YDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICdyb2xlJykge1xyXG4gICAgICB1cmwgPSBgYWNjZXNzLWNvbnRyb2wvcm9sZS8ke3NlbGVjdGVkSWR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IGBwbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeWdyb3VwLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChgLyR7dXJsfS8ke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0QXNzZXR9YCwgYXNzZXQpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXNzZXRPbkRlc2VsZWN0KHNlbGVjdGVkQWNjZXNzOiBhbnksIHNlbGVjdGVkSWQ6IGFueSwgYXNzZXQ6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gYG9yZy91c2VyLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9IGBhY2Nlc3MtY29udHJvbC9yb2xlLyR7c2VsZWN0ZWRJZH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXJsID0gYHBsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5Z3JvdXAvJHtzZWxlY3RlZElkfWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wYXRjaChgLyR7dXJsfS8ke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0QXNzZXREZXNlbGVjdH1gLCBhc3NldCk7XHJcbiAgfVxyXG5cclxuICBnZXRBc3NldEJ5SWQoc2VsZWN0ZWRBY2Nlc3M6IHN0cmluZywgc2VsZWN0ZWRJZDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldFVzZXJBc3NldDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICdyb2xlJykge1xyXG4gICAgICB1cmwgPSBBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LkFzc2V0LmdldFJvbGVBc3NldDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuQXNzZXQuZ2V0UG9saWN5R3JvdXBBc3NldDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHt1cmx9LyR7c2VsZWN0ZWRJZH1gKTtcclxuICB9XHJcblxyXG4gIGdldFBvbGljeUdyb3VwUGFnZShwb2xpY3lncm91cGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgL3BvbGljeWdyb3VwLyR7cG9saWN5Z3JvdXBpZH0ke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHluYW1pY1BhZ2Uoc2VsZWN0ZWRBY2Nlc3M6IGFueSwgc2VsZWN0ZWRJZDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICd1c2VyJykge1xyXG4gICAgICB1cmwgPSAnb3JnL3VzZXInO1xyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEFjY2VzcyA9PT0gJ3JvbGUnKSB7XHJcbiAgICAgIHVybCA9ICdhY2Nlc3MtY29udHJvbC9yb2xlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9ICdwbGF0Zm9ybS9wYWdlLWRlc2lnbmVyL3BvbGljeWdyb3VwJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgLyR7dXJsfS8ke3NlbGVjdGVkSWR9JHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlBhZ2UuZ2V0UGFnZX1gKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUR5bmFtaWNQYWdlKHNlbGVjdGVkQWNjZXNzOiBhbnksIHNlbGVjdGVkSWQ6IGFueSwgcGFnZURhdGE6IGFueSkge1xyXG4gICAgbGV0IHVybDogYW55O1xyXG4gICAgaWYgKHNlbGVjdGVkQWNjZXNzID09PSAndXNlcicpIHtcclxuICAgICAgdXJsID0gJ29yZy91c2VyJztcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRBY2Nlc3MgPT09ICdyb2xlJykge1xyXG4gICAgICB1cmwgPSAnYWNjZXNzLWNvbnRyb2wvcm9sZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSAncGxhdGZvcm0vcGFnZS1kZXNpZ25lci9wb2xpY3lncm91cCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoYC8ke3VybH0vJHtzZWxlY3RlZElkfSR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5QYWdlLmdldFBhZ2V9YCwgcGFnZURhdGEpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQWNjZXNzKGZpZWxkTGV2ZWxBY2Nlc3M6IGJvb2xlYW4sIGFjY2Vzc0J5OiBzdHJpbmcsIHBheWxvYWQ6IGFueSwgdXNlcklkOiBhbnksIHJvbGVJZDogYW55LCBwb2xpY3lJZDogYW55KSB7XHJcbiAgICBsZXQgdXJsOiBhbnk7XHJcbiAgICBjb25zdCBjcmVhdGVVcmwgPSBmaWVsZExldmVsQWNjZXNzXHJcbiAgICAgID8gQWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Bc3NldC5nZXRBc3NldFxyXG4gICAgICA6IEFjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUGFnZS5nZXRQYWdlO1xyXG4gICAgLy8gY2hlY2sgb25seSBwb2xpY3kgZ3JvdXBcclxuICAgIGlmIChhY2Nlc3NCeSA9PT0gJzMnKSB7XHJcbiAgICAgIHVybCA9IGAke0FjY2Vzc01hbmFnZW1lbnRDb25maWcuRW5kUG9pbnQuUG9saWN5R3JvdXAuZ2V0UG9saWN5R3JvdXB9JHtwb2xpY3lJZCA/IHBvbGljeUlkIDogJzAnfSR7Y3JlYXRlVXJsfWA7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVjayBwZXJzb25hIHdpdGggcG9saWN5IGdyb3VwXHJcbiAgICBpZiAoYWNjZXNzQnkgPT09ICcyJykge1xyXG4gICAgICB1cmwgPSBgJHtBY2Nlc3NNYW5hZ2VtZW50Q29uZmlnLkVuZFBvaW50LlJvbGUuZ2V0Um9sZX0ke3JvbGVJZCA/IHJvbGVJZCA6ICcwJ30ke2NyZWF0ZVVybH1gO1xyXG4gICAgfVxyXG4gICAgLy8gY2hlY2sgdXNlciwgcGVyc29uYSB3aXRoIHBvbGljeSBncm91cFxyXG4gICAgaWYgKGFjY2Vzc0J5ID09PSAnMScpIHtcclxuICAgICAgdXJsID0gYCR7QWNjZXNzTWFuYWdlbWVudENvbmZpZy5FbmRQb2ludC5Vc2VyLmdldFVzZXJ9JHt1c2VySWQgPyB1c2VySWQgOiAnMCd9JHtjcmVhdGVVcmx9YDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QodXJsLCBwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIGdldEFwcGxpY2F0aW9uQWNjZXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KCcvYXBwbGljYXRpb25hY2Nlc3MvJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==