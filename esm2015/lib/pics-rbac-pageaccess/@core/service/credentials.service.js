import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
export class CredentialsService {
    constructor() {
        this.token = null;
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
}
CredentialsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CredentialsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBhZ2VhY2Nlc3Mvc3JjL2xpYi9waWNzLXJiYWMtcGFnZWFjY2Vzcy9AY29yZS9zZXJ2aWNlL2NyZWRlbnRpYWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRM0MsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBRW5DOzs7R0FHRztBQUlILE1BQU0sT0FBTyxrQkFBa0I7SUFHN0I7UUFGUSxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUdsQyxNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLFdBQVc7UUFDYixNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjLENBQUMsV0FBb0I7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDO1FBQ2pDLElBQUksV0FBVyxFQUFFO1lBQ2YsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dIQTVDVSxrQkFBa0I7b0hBQWxCLGtCQUFrQixjQUZqQixNQUFNOzRGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWRlbnRpYWxzIHtcclxuICAvLyBDdXN0b21pemUgcmVjZWl2ZWQgY3JlZGVudGlhbHMgaGVyZVxyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgdG9rZW46IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY3JlZGVudGlhbHNLZXkgPSAnand0LXRva2VuJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBzdG9yYWdlIGZvciBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscy5cclxuICogVGhlIENyZWRlbnRpYWxzIGludGVyZmFjZSBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCBwcm9wZXIgaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVkZW50aWFsc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgdG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IHNhdmVkQ3JlZGVudGlhbHMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNyZWRlbnRpYWxzS2V5KTtcclxuICAgIGlmIChzYXZlZENyZWRlbnRpYWxzKSB7XHJcbiAgICAgIHRoaXMudG9rZW4gPSBzYXZlZENyZWRlbnRpYWxzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlzIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQuXHJcbiAgICogQHJldHVybiBUcnVlIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQuXHJcbiAgICovXHJcbiAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5jcmVkZW50aWFscztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHVzZXIgY3JlZGVudGlhbHMuXHJcbiAgICogQHJldHVybiBUaGUgdXNlciBjcmVkZW50aWFscyBvciBudWxsIGlmIHRoZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkLlxyXG4gICAqL1xyXG4gIGdldCBjcmVkZW50aWFscygpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGNvbnN0IHNhdmVkQ3JlZGVudGlhbHMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNyZWRlbnRpYWxzS2V5KTtcclxuICAgIGlmIChzYXZlZENyZWRlbnRpYWxzKSB7XHJcbiAgICAgIHRoaXMudG9rZW4gPSBzYXZlZENyZWRlbnRpYWxzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudG9rZW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB1c2VyIGNyZWRlbnRpYWxzLlxyXG4gICAqIFRoZSBjcmVkZW50aWFscyBtYXkgYmUgcGVyc2lzdGVkIGFjcm9zcyBzZXNzaW9ucyBieSBzZXR0aW5nIHRoZSBgcmVtZW1iZXJgIHBhcmFtZXRlciB0byB0cnVlLlxyXG4gICAqIE90aGVyd2lzZSwgdGhlIGNyZWRlbnRpYWxzIGFyZSBvbmx5IHBlcnNpc3RlZCBmb3IgdGhlIGN1cnJlbnQgc2Vzc2lvbi5cclxuICAgKiBAcGFyYW0gY3JlZGVudGlhbHMgVGhlIHVzZXIgY3JlZGVudGlhbHMuXHJcbiAgICogQHBhcmFtIHJlbWVtYmVyIFRydWUgdG8gcmVtZW1iZXIgY3JlZGVudGlhbHMgYWNyb3NzIHNlc3Npb25zLlxyXG4gICAqL1xyXG4gIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRva2VuID0gY3JlZGVudGlhbHMgfHwgbnVsbDtcclxuICAgIGlmIChjcmVkZW50aWFscykge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWRlbnRpYWxzS2V5LCBjcmVkZW50aWFscyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=