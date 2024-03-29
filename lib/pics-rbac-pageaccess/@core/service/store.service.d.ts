import { Observable } from 'rxjs';
export declare class Store<T> {
    state$: Observable<T>;
    private _state$;
    protected constructor(initialState: T);
    get state(): T;
    setState(nextState: T): void;
}
