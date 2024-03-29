export declare class StorageService {
    protected Storage: any;
    constructor(Storage: any);
    getItem(key: string): any;
    setItem(key: string, item: any): void;
    getObj(key: string, safe?: boolean): any;
    setObj(key: string, item: any): void;
    removeItem(key: string): void;
    clear(): void;
}
