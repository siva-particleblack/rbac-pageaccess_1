import * as i0 from "@angular/core";
export interface Credentials {
    username: string;
    token: string;
}
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
export declare class CredentialsService {
    private token;
    constructor();
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated(): boolean;
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials(): string | null;
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CredentialsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CredentialsService>;
}
